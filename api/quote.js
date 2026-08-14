// Vercel serverless function. Receives the homepage quote form and emails it
// to the office. Requires RESEND_API_KEY to be set in the Vercel project
// environment. Without it the endpoint reports that it is not configured
// rather than silently dropping an enquiry.

const TO = 'info@buildthedreamconstructions.com.au';
const FROM = 'Build The Dream website <onboarding@resend.dev>';

const REQUIRED = ['name', 'phone', 'email', 'suburb', 'service'];
const MAX = 4000;

const clean = (v) =>
  String(v ?? '')
    .slice(0, MAX)
    .replace(/[<>]/g, '')
    .trim();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {};

  // Honeypot. Real people never fill this in.
  if (clean(body.company)) return res.status(200).json({ ok: true });

  const data = {};
  for (const key of [...REQUIRED, 'detail']) data[key] = clean(body[key]);

  const missing = REQUIRED.filter((k) => !data[k]);
  if (missing.length) {
    return res.status(400).json({ error: 'Missing fields', fields: missing });
  }

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error('Quote received but RESEND_API_KEY is not set', data);
    return res.status(503).json({ error: 'Email is not configured yet' });
  }

  const lines = [
    `Name:    ${data.name}`,
    `Phone:   ${data.phone}`,
    `Email:   ${data.email}`,
    `Suburb:  ${data.suburb}`,
    `Service: ${data.service}`,
    '',
    data.detail || 'No extra detail provided.',
  ].join('\n');

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: data.email,
        subject: `Quote request: ${data.service}, ${data.suburb}`,
        text: lines,
      }),
    });

    if (!r.ok) {
      console.error('Resend rejected the message', r.status, await r.text());
      return res.status(502).json({ error: 'Could not send' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Quote send failed', err);
    return res.status(502).json({ error: 'Could not send' });
  }
}

function safeParse(s) {
  try {
    return JSON.parse(s);
  } catch {
    return {};
  }
}
