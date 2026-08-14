// Content for the six dedicated service pages at /services/[slug].
//
// Structure follows the client's website structure document. Each page carries
// a full screen hero, an intro, four illustrated inclusion blocks, a materials
// strip, the trade specific sequence of work, a before and after comparison,
// FAQs and a closing call to action.
//
// `keywords` are the target search terms from the structure document. They are
// used for the meta description and the related searches strip only. Anything
// we do not actually offer is not written as a claim anywhere in the copy.
//
// Durations and price ranges on these pages are illustrative and are listed in
// the register on /illustrative-content.

export const servicePages = [
  {
    slug: 'kitchen-renovations',
    key: 'kitchen',
    name: 'Kitchen Renovations',
    short: 'Kitchens',
    title: 'Kitchen Renovations Sydney | Custom Kitchens and Remodels',
    description:
      'Kitchen renovation and remodel across Sydney. Custom cabinetry, stone benchtops, splashbacks, appliances and lighting under one fixed price contract.',
    keywords: ['Kitchen renovation', 'Kitchen remodel', 'Custom kitchen', 'Kitchen designer Sydney', 'Kitchen cabinet makers'],
    hero: {
      eyebrow: '<span class="annot-signal">Kitchens</span> · Sydney wide',
      lines: ['A kitchen', 'that still works', 'in <em>year ten</em>.'],
      lede:
        'Full strip out and rebuild, or a targeted update if the layout already works. Cabinetry, stone, splashback, appliances, plumbing and electrical all run under one contract.',
      facts: [
        { k: 'On site', v: 'About 18 days' },
        { k: 'Cabinetry lead time', v: '4 to 6 weeks' },
        { k: 'Contract', v: 'Fixed price' },
        { k: 'Warranty', v: 'Six years structural' },
      ],
    },
    intro: {
      heading: 'Most of a kitchen is decided before anything is delivered.',
      body: [
        'By the time the cabinets arrive on site the important choices have already been made. Where the fridge goes, how far the sink sits from the cooktop, whether the bin is on the side you actually stand on. Those are the things you notice every day for the next ten years, and they cost nothing to get right at the drawing stage.',
        'We measure the room ourselves, check the walls for plumb and the floor for level, then set the cabinetry out to the room as it is rather than as the plan assumes it is. A kitchen scribed to a wall that leans is the difference between a tight finish and a gap you can see from the doorway.',
      ],
      pull: 'The tiler turns up when the cabinetmaker is finished, not a week later.',
    },
    blocks: [
      {
        img: 1,
        title: 'Custom cabinetry',
        body:
          'Built to the room rather than assembled from a standard carcass run. Soft close runners and hinges throughout, adjustable shelving, and drawers where most kitchens put doors, because you can see the back of a drawer without kneeling down.',
        points: ['Made to measure carcasses', 'Soft close everywhere', 'Deep pot drawers', 'Scribed to the wall'],
        alt: 'A handleless charcoal drawer front pulled open, showing a soft close runner and oak dividers inside',
      },
      {
        img: 2,
        title: 'Benchtops',
        body:
          'Engineered stone, natural stone or laminate depending on what the room needs and what you want to spend. Where a benchtop turns a corner we mitre it so the veining runs continuously around the edge instead of stopping dead at a joint.',
        points: ['Engineered and natural stone', 'Mitred waterfall ends', 'Laminate where it suits', 'Templated after install'],
        alt: 'A mitred stone benchtop corner with the veining running continuously around the edge',
      },
      {
        img: 3,
        title: 'Splashbacks',
        body:
          'Tiled, stone or glass. The join where the splashback meets the benchtop is the one everybody looks at, so it gets set out first and cut to suit rather than filled with silicone at the end and hoped for.',
        points: ['Full height stone', 'Tiled and feature tile', 'Glass', 'Window splashbacks'],
        alt: 'A full height stone splashback behind a cooktop meeting the benchtop in a tight joint',
      },
      {
        img: 4,
        title: 'Lighting',
        body:
          'Task lighting under the overheads so you are not chopping in your own shadow, and something warmer over the island for the rest of the time. Both circuits are separate, which is a five minute decision at rough in and impossible afterwards.',
        points: ['Under cabinet task lighting', 'Pendants over the island', 'Separate switching', 'Dimmable circuits'],
        alt: 'Warm under cabinet lighting washing down a stone benchtop at night',
      },
    ],
    also: [
      'Complete renovations',
      'Appliance supply and install',
      'Plumbing and electrical',
      'Rangehood and ducting',
      'Butler pantries',
      'Island benches and seating',
      'Pantry joinery',
      'Waste and recycling drawers',
    ],
    materials: {
      heading: 'What we build them from',
      items: [
        { name: 'Engineered stone', note: 'Consistent colour, low porosity, cut and installed under the current NSW silica rules.' },
        { name: 'Natural stone', note: 'Marble and granite. Every slab is different, so you select the actual slab.' },
        { name: 'Two pack polyurethane', note: 'A sprayed finish with no visible grain. Repairable if it ever gets knocked.' },
        { name: 'Timber veneer', note: 'Real timber over a stable substrate. Grain can be matched across a run of doors.' },
        { name: 'Laminate', note: 'The honest budget option. Modern laminates are far better than their reputation.' },
        { name: 'Melamine carcasses', note: 'Moisture resistant board for the boxes you never see, which is where it belongs.' },
      ],
    },
    run: {
      heading: 'How a kitchen runs',
      steps: [
        { n: '01', title: 'Measure and check', body: 'Site measure, walls checked for plumb, floor checked for level, services located. The cabinetry drawings are made from this, not from the original house plans.' },
        { n: '02', title: 'Strip out', body: 'Old kitchen out, waste removed, dust barriers up. We leave you a temporary sink and bench wherever the plumbing allows it.' },
        { n: '03', title: 'Rough in', body: 'Plumbing and electrical moved to the new layout while the walls are open. Cheap now, expensive later.' },
        { n: '04', title: 'Cabinets in', body: 'Carcasses set, levelled and fixed. Doors and drawers hung and adjusted so the gaps between them are even across the whole run.' },
        { n: '05', title: 'Template and stone', body: 'The stone is templated off the installed cabinets rather than the drawings, then cut and fitted. This is the wait in the middle of every kitchen job.' },
        { n: '06', title: 'Fit off', body: 'Splashback, appliances, tapware, handles, lighting. Then we walk it with you, write the list, and fix the list.' },
      ],
    },
    specs: [
      { k: 'Typical time on site', v: 'About 18 working days', illustrative: true },
      { k: 'Cabinetry lead time', v: 'Four to six weeks before we start', illustrative: true },
      { k: 'Stone', v: 'Templated after the cabinets are in' },
      { k: 'Do you keep a sink', v: 'Yes, for most of the build' },
    ],
    ba: {
      caption: 'A kitchen where moving the fridge to the pantry wall gained two metres of usable bench.',
      alt: 'A kitchen',
    },
    faqs: [
      {
        q: 'How long does a kitchen renovation take?',
        a: 'About 18 working days on site for a typical kitchen, plus four to six weeks lead time on cabinetry and stone before we start. The stone adds a gap in the middle because it can only be templated once the cabinets are physically in the room.',
        illustrative: true,
      },
      {
        q: 'Can I stay in the house during the work?',
        a: 'Almost always. We stage the job so you keep a working sink and a run of bench for most of it, put dust barriers up, and sweep the site at the end of every day. The week the stone is out is the hardest one, and we will tell you when it is coming.',
      },
      {
        q: 'Do I have to move the plumbing?',
        a: 'Not necessarily, and if the existing layout works we will tell you so rather than sell you a bigger job. Moving the sink or the cooktop is worth doing when it fixes the way you use the room, and not worth doing when it only shifts the problem.',
      },
      {
        q: 'Can you work with a kitchen designer I have already used?',
        a: 'Yes. Bring the drawings and we will price them as drawn, then tell you anything we would do differently and why. You decide which of it you want.',
      },
      {
        q: 'Who supplies the appliances?',
        a: 'Either of us. We buy at trade rates so it is usually cheaper through us, but plenty of people find a sale and buy their own. If you supply them, the appliance warranty sits with you and the retailer, and we note that in the quote.',
      },
    ],
    cta: {
      title: 'Tell us about your kitchen.',
      body:
        'We will come and measure the room, then send a fixed written quote with the cabinetry, the stone and the appliances itemised. No cost and no obligation.',
    },
    related: ['tiling', 'flooring', 'bathroom-renovations'],
  },

  {
    slug: 'bathroom-renovations',
    key: 'bathroom',
    name: 'Bathroom Renovations',
    short: 'Bathrooms',
    title: 'Bathroom Renovations Sydney | Ensuite and Laundry Renovation',
    description:
      'Bathroom, ensuite and laundry renovation across Sydney. Certified waterproofing, walk in showers, vanities, tiling and fixtures on a fixed price contract.',
    keywords: ['Bathroom renovation', 'Ensuite renovation', 'Laundry renovation', 'Small bathroom renovation', 'Bathroom renovators Sydney'],
    hero: {
      eyebrow: '<span class="annot-signal">Bathrooms</span> · Sydney wide',
      lines: ['The waterproofing', 'you will never', '<em>see</em> again.'],
      lede:
        'The smallest room in the house has the most trades per square metre and the least room for a mistake to hide. Strip out, waterproofing, screed, tiling, tapware and fit off, all under one contract.',
      facts: [
        { k: 'On site', v: 'About 15 days' },
        { k: 'Waterproofing', v: 'Certified' },
        { k: 'Contract', v: 'Fixed price' },
        { k: 'Warranty', v: 'Six years structural' },
      ],
    },
    intro: {
      heading: 'One layer decides whether the room lasts, and it gets covered up on day four.',
      body: [
        'Waterproofing is the only part of a bathroom you cannot inspect once the job is finished. It goes on early, it disappears under the screed and the tiles, and if it was rushed you find out two years later through the ceiling of the room below.',
        'Ours is applied to the standard, given the time it needs to cure between coats, and certified. We photograph it before it is covered and the certificate goes in your handover folder. That is not a service, it is the bare minimum, but it is worth asking every builder you speak to whether they do it.',
      ],
      pull: 'It is the one failure that takes the ceiling below with it.',
    },
    blocks: [
      {
        img: 1,
        title: 'Certified waterproofing',
        body:
          'Bond breakers in the internal corners, membrane to the floor, the hob and up the walls to the required height, and the cure time it is supposed to get rather than the cure time the programme would prefer. Certified on completion.',
        points: ['Bond breaker in corners', 'Correct membrane heights', 'Full cure between coats', 'Certificate at handover'],
        alt: 'Coloured waterproof membrane being brushed into an internal corner over a bond breaker',
      },
      {
        img: 2,
        title: 'Walk in showers',
        body:
          'Frameless or semi frameless glass, a linear drain or a centre waste, and a floor screeded to actual falls so the water goes where it should. Niches are set out to land on a tile joint rather than cut through the middle of one.',
        points: ['Frameless glass', 'Linear and point drainage', 'Recessed niches', 'Screeded falls'],
        alt: 'A frameless walk in shower with a recessed tiled niche and a linear floor drain',
      },
      {
        img: 3,
        title: 'Vanities and storage',
        body:
          'Wall hung or floor standing, custom or off the shelf. Wall hung makes a small bathroom look bigger and makes the floor easier to clean, but it needs noggins in the wall before the sheeting goes on, which is a decision you make early or not at all.',
        points: ['Wall hung and floor standing', 'Custom joinery', 'Stone and moulded tops', 'Mirror cabinets'],
        alt: 'A wall hung timber vanity with a stone top, undermount basin and a backlit mirror',
      },
      {
        img: 4,
        title: 'Tapware and fixtures',
        body:
          'Mixers, rails, rain heads and accessories. Wall plates land flush and level with the tile joints because the rough in was set out against the tile layout rather than against the studs.',
        points: ['Wall and basin mixers', 'Rain heads and rails', 'Heated towel rails', 'Toilet suites'],
        alt: 'A matte black wall mounted basin mixer sitting flush and level with the tile joint',
      },
    ],
    also: [
      'Full renovations',
      'Ensuites',
      'Laundry renovations',
      'Powder rooms',
      'Small bathroom layouts',
      'Underfloor heating',
      'Exhaust and ventilation',
      'Accessible and step free showers',
    ],
    materials: {
      heading: 'What goes into the room',
      items: [
        { name: 'Liquid membrane', note: 'Applied in coats with the cure time between them. The part that decides everything.' },
        { name: 'Sand and cement screed', note: 'Falls formed in screed, not made up in the tile bed. Water follows the screed.' },
        { name: 'Porcelain tiles', note: 'Low absorption, hard wearing, and the format we use for most floors and walls.' },
        { name: 'Ceramic wall tiles', note: 'Lighter and cheaper for walls where they are not taking traffic.' },
        { name: 'Natural stone', note: 'Beautiful and needs sealing. We will be straight with you about the upkeep.' },
        { name: 'Epoxy and cement grout', note: 'Epoxy in the shower where staining matters, cement elsewhere where it does not.' },
      ],
    },
    run: {
      heading: 'How a bathroom runs',
      steps: [
        { n: '01', title: 'Strip out', body: 'Everything out to the frame, waste removed, and the first honest look at what the last renovation left behind the walls.' },
        { n: '02', title: 'Repairs and rough in', body: 'Any rot or rusted frame fixed, noggins added for the vanity and rails, plumbing and electrical moved to the new layout.' },
        { n: '03', title: 'Sheet and screed', body: 'Wet area sheeting, then the floor screeded to falls so the water runs to the drain from every corner of the shower.' },
        { n: '04', title: 'Waterproof', body: 'Membrane applied, cured, photographed and certified. Nothing goes over it until it is ready, and this is the step that will not be hurried.' },
        { n: '05', title: 'Tiling', body: 'Set out from the centre so the cuts land evenly at both ends, walls and floor, then grouted and sealed.' },
        { n: '06', title: 'Fit off', body: 'Vanity, toilet, tapware, glass, accessories. Silicone last, then the walk through and the list.' },
      ],
    },
    specs: [
      { k: 'Typical time on site', v: 'About 15 working days', illustrative: true },
      { k: 'Typical cost', v: '$25,000 to $45,000 for a main bathroom', illustrative: true },
      { k: 'Biggest cost driver', v: 'Moving the plumbing' },
      { k: 'Waterproofing', v: 'Certified, certificate at handover' },
    ],
    ba: {
      caption: 'A main bathroom where replacing the bath with a walk in shower kept the natural light where it was useful.',
      alt: 'A bathroom',
    },
    faqs: [
      {
        q: 'How much does a bathroom renovation cost?',
        a: 'A full strip out and rebuild of a standard main bathroom in Sydney typically runs between $25,000 and $45,000, depending on the size of the room, the tile selection and whether the layout moves. Moving plumbing is the single biggest driver. We give a fixed itemised price after seeing the room.',
        illustrative: true,
      },
      {
        q: 'What if we only have one bathroom?',
        a: 'We will tell you honestly how many days you will be without it before you commit, and we will sequence the job to make that stretch as short as it can be. Some clients organise a portable option for that window. It is a fair question to ask any builder and you should be suspicious of a vague answer.',
      },
      {
        q: 'Do you certify the waterproofing?',
        a: 'Yes. It is applied to standard, photographed before it is covered, and certified, and the certificate goes in your handover folder. If you ever sell the house it is worth having.',
      },
      {
        q: 'Can you renovate an ensuite or a laundry at the same time?',
        a: 'Yes, and it is usually cheaper to do them together. The same trades are already on site, the waterproofer only mobilises once, and the tiler is already set up. Doing the second room a year later costs more than doing it now.',
      },
      {
        q: 'Do small bathrooms cost less?',
        a: 'Less than a big one, but not proportionally. A small bathroom still needs every trade that a large one needs, and the fixed costs of a strip out, a waterproofer and a plumber do not shrink with the floor area.',
      },
    ],
    cta: {
      title: 'Tell us about the bathroom.',
      body:
        'We will come and look at the room, then send a fixed written quote with the scope itemised and the waterproofing spelled out. No cost and no obligation.',
    },
    related: ['tiling', 'kitchen-renovations', 'flooring'],
  },

  {
    slug: 'decking',
    key: 'decking',
    name: 'Decking',
    short: 'Decking',
    title: 'Deck Builder Sydney | Timber and Composite Decking',
    description:
      'Timber and composite deck builder across Sydney. Custom deck design, hardwood and composite decking, stairs, balustrades and sloping sites on a fixed price contract.',
    keywords: ['Timber deck builder', 'Composite decking', 'Outdoor deck construction', 'Deck renovation', 'Entertaining areas'],
    hero: {
      eyebrow: '<span class="annot-signal">Decking</span> · Sydney wide',
      lines: ['Built for', 'fifteen Sydney', '<em>summers</em>.'],
      lede:
        'Merbau, spotted gum and composite. Sloping sites, split levels and stairs. Set out square, fixed straight, and detailed so water runs off rather than sitting in the joints.',
      facts: [
        { k: 'Typical build', v: '5 to 8 days' },
        { k: 'Materials', v: 'Hardwood and composite' },
        { k: 'Balustrade', v: 'Required over 1m' },
        { k: 'Warranty', v: 'Six years structural' },
      ],
    },
    intro: {
      heading: 'A deck fails from underneath, which is where nobody looks at quote stage.',
      body: [
        'The boards are the part you choose and the part you see. The subframe is the part that decides whether you are still happy with it in fifteen years. Joist spacing, the right stirrups, drainage that actually drains, and gaps that let the timber move without opening up.',
        'Sydney backyards are rarely flat and almost never square to the house. We set out from the house, level off it, and let the discrepancy land at the far edge where a fascia board covers it, rather than running the boards out of parallel across the whole deck.',
      ],
      pull: 'Water sitting in a joint is what rots a deck from the inside.',
    },
    blocks: [
      {
        img: 1,
        title: 'Custom deck design',
        body:
          'Measured on site, set out to the house, and worked around what is actually in the yard. Levels, stairs, the direction the boards run and where the deck stops are all decisions that get made with you standing in the space rather than over a catalogue.',
        points: ['Site measure and levels', 'Split level and stepped', 'Sloping and difficult sites', 'Board direction planned'],
        alt: 'A string line pulled tight across deck joists with a square and a level resting on the frame',
      },
      {
        img: 2,
        title: 'Hardwood decking',
        body:
          'Merbau and spotted gum. Predrilled and screwed rather than nailed, screws in a straight line, consistent gaps, and the ends sealed before they go down so the board does not draw water up through the cut.',
        points: ['Merbau', 'Spotted gum', 'Blackbutt', 'Oiled and finished'],
        alt: 'Close detail of oiled merbau decking boards with countersunk screws in a straight line',
      },
      {
        img: 3,
        title: 'Composite decking',
        body:
          'Costs more up front and takes no oiling. Worth it around a pool, on a deck that gets full western sun, or for anyone who knows they are never going to re oil a hardwood deck and would rather be honest about it now.',
        points: ['Capped composite', 'Hidden fasteners', 'No annual oiling', 'Pool surrounds'],
        alt: 'Close detail of charcoal composite decking with a hidden fastener clip visible in the gap',
      },
      {
        img: 4,
        title: 'Stairs and balustrades',
        body:
          'Even risers, because an uneven one is the step everybody trips on. Balustrade is required by code once the deck is more than a metre above ground, and we tell you that at quote stage rather than after the frame is up.',
        points: ['Even rise and going', 'Steel and wire balustrade', 'Timber handrails', 'Lighting to risers'],
        alt: 'A merbau deck stair with warm light in the risers and a black steel wire balustrade',
      },
    ],
    also: [
      'Deck renovation and reboarding',
      'Entertaining areas',
      'Pool surrounds',
      'Privacy screens',
      'Subframe replacement',
      'Sanding and re oiling',
      'Steps and landings',
      'Under deck storage',
    ],
    materials: {
      heading: 'What we build them from',
      items: [
        { name: 'Merbau', note: 'The Sydney default. Hard, stable, dark red brown, and it needs oil to keep the colour.' },
        { name: 'Spotted gum', note: 'Australian hardwood with more colour variation and a very high durability rating.' },
        { name: 'Blackbutt', note: 'Lighter and paler than merbau. A good match for a house with light timber inside.' },
        { name: 'Capped composite', note: 'A polymer shell over a composite core. No oiling, low fade, higher up front cost.' },
        { name: 'Treated pine subframe', note: 'H3 or H4 depending on ground contact, on galvanised stirrups above the soil.' },
        { name: 'Stainless fixings', note: 'Near the coast, anything else stains the timber within a season.' },
      ],
    },
    run: {
      heading: 'How a deck runs',
      steps: [
        { n: '01', title: 'Levels and set out', body: 'Levels taken off the house and across the yard, the finished deck height fixed against the door threshold, and the footprint pegged out so you can see it before we dig.' },
        { n: '02', title: 'Footings', body: 'Holes dug, footings poured, galvanised stirrups set so the posts sit above the ground rather than in it. This is the step that decides the life of the deck.' },
        { n: '03', title: 'Subframe', body: 'Bearers and joists set square and level at the right centres for the board you have chosen. Everything checked with a string line before a board goes anywhere near it.' },
        { n: '04', title: 'Boards', body: 'Laid with consistent gaps, predrilled, screwed in line, ends sealed. Cuts land at the fascia rather than in the middle of the deck.' },
        { n: '05', title: 'Stairs and balustrade', body: 'Stairs set out for an even rise, balustrade fixed to code where the height requires it, handrails at a height that suits the people using them.' },
        { n: '06', title: 'Finish', body: 'Sanded where it needs it, cleaned, oiled or left to weather depending on what you chose, and the site cleared.' },
      ],
    },
    specs: [
      { k: 'Typical build time', v: 'Five to eight working days', illustrative: true },
      { k: 'Balustrade required', v: 'Above one metre from ground' },
      { k: 'Hardwood upkeep', v: 'Re oil roughly every 12 to 18 months' },
      { k: 'Composite upkeep', v: 'Wash it' },
    ],
    ba: {
      caption: 'A backyard that fell almost 600mm across the width of the house, stepped in two levels rather than built as one high platform.',
      alt: 'A deck',
    },
    faqs: [
      {
        q: 'Do I need council approval for a deck?',
        a: 'Often not. A low level deck within certain size and setback limits can usually go through as exempt development in NSW, and a larger or higher one may need a complying development certificate. It depends on the height, the area and your block. We will tell you which one you are looking at when we quote.',
      },
      {
        q: 'Merbau or composite?',
        a: 'Merbau if you like the look of real timber and will re oil it every year or so. Composite if you will not, or if it is going around a pool or in full western sun. Composite costs more to buy and less to own. Neither answer is wrong, but pretending you will oil a deck you will not oil is the expensive mistake.',
      },
      {
        q: 'Can you build on a slope?',
        a: 'Yes, and most Sydney backyards have one. A fall across the site usually means a stepped or split level deck, which looks better than one tall platform and often keeps part of it under the balustrade threshold.',
      },
      {
        q: 'Can you repair or reboard an existing deck?',
        a: 'If the subframe is sound, yes, and it is a good way to get a new deck for a lot less. We will get under it and check the bearers, joists and stirrups first, and we will tell you plainly if the frame is not worth reboarding over.',
      },
      {
        q: 'How long before I can use it?',
        a: 'Straight away for the deck itself. If it is being oiled, give the finish the drying time on the tin before you drag furniture across it, which is usually a day or two depending on the weather.',
      },
    ],
    cta: {
      title: 'Tell us about the backyard.',
      body:
        'We will come and take levels across the site, then send a fixed written quote with the timber, the subframe and the balustrade itemised. No cost and no obligation.',
    },
    related: ['tiling', 'granny-flats', 'flooring'],
  },

  {
    slug: 'flooring',
    key: 'flooring',
    name: 'Flooring',
    short: 'Flooring',
    title: 'Flooring Sydney | Hybrid, Timber, Laminate and Vinyl',
    description:
      'Flooring installation across Sydney. Engineered timber, hybrid, laminate and vinyl plank, with subfloor levelling done properly and priced before we start.',
    keywords: ['Hybrid flooring', 'Timber flooring', 'Laminate flooring', 'Vinyl flooring', 'Floor replacement Sydney'],
    hero: {
      eyebrow: '<span class="annot-signal">Flooring</span> · Sydney wide',
      lines: ['The floor', 'is only as flat', 'as <em>what is under it</em>.'],
      lede:
        'Engineered timber, hybrid, laminate and vinyl. We level the subfloor first and tell you what that costs before we start, because a floor laid over a dip will move and no finish will save it.',
      facts: [
        { k: 'Typical install', v: '3 to 5 days' },
        { k: 'Subfloor', v: 'Checked and levelled' },
        { k: 'Contract', v: 'Fixed price' },
        { k: 'Warranty', v: 'Six years structural' },
      ],
    },
    intro: {
      heading: 'This is where the cheap quote and the honest quote are furthest apart.',
      body: [
        'Two quotes for the same floor can be thousands apart, and the difference is almost never the boards. It is whether the subfloor preparation was priced or left out. Levelling an old floor takes a day, sometimes two, and costs real money, so it is the easiest line to quietly omit and the fastest way to look cheaper than everyone else.',
        'We put a straight edge on your subfloor and show you the gap before we quote. If it needs levelling you will see why. If it does not, you will not be paying for it.',
      ],
      pull: 'A floor laid over a dipped subfloor will move, and no finish will save it.',
    },
    blocks: [
      {
        img: 1,
        title: 'Subfloor levelling',
        body:
          'Straight edge across the whole area, low spots marked, then self levelling compound or sheeting depending on what we find. Old Sydney houses routinely run 15 to 20mm out across a living room and nobody knows until the carpet comes up.',
        points: ['Straight edge check', 'Self levelling compound', 'Sheeting and packing', 'Moisture testing'],
        alt: 'A long straight edge across a concrete subfloor showing a dip, with levelling compound spread beside it',
      },
      {
        img: 2,
        title: 'Engineered timber',
        body:
          'A real timber wear layer over a stable plywood core, so you get actual oak and it does not move with the seasons the way a solid board does. Can be sanded back and refinished later, which laminate and hybrid cannot.',
        points: ['European oak', 'Wide and long boards', 'Brushed and oiled finishes', 'Refinishable later'],
        alt: 'The end profile of an engineered oak floorboard showing the oak wear layer over a plywood core',
      },
      {
        img: 3,
        title: 'Hybrid and vinyl',
        body:
          'A rigid core plank with a waterproof surface and acoustic backing already attached. It handles water, it handles dogs, and it goes in fast. The right answer for a rental, a wet area or a family that is honest about how the floor gets treated.',
        points: ['Hybrid rigid core', 'Vinyl plank', 'Waterproof', 'Pre attached acoustic backing'],
        alt: 'A hybrid vinyl plank being angled down and locked into the previous board',
      },
      {
        img: 4,
        title: 'Edges and trims',
        body:
          'The expansion gap is not optional, it is what stops the floor buckling in February. It gets hidden properly behind the skirting or a slim scotia rather than filled with something that will crack.',
        points: ['Skirting and scotia', 'Door jamb undercuts', 'Threshold trims', 'Stair nosings'],
        alt: 'Wide oak boards meeting a charcoal skirting with a clean shadow line',
      },
    ],
    also: [
      'New flooring',
      'Floor replacement',
      'Carpet removal and disposal',
      'Laminate flooring',
      'Acoustic underlay',
      'Strata compliant acoustic ratings',
      'Stair treads',
      'Commercial grade vinyl',
    ],
    materials: {
      heading: 'What you can put down',
      items: [
        { name: 'Engineered timber', note: 'Real oak over ply. The best looking option and the only one you can refinish.' },
        { name: 'Hybrid', note: 'Rigid core, waterproof, acoustic backing attached. Very hard to damage.' },
        { name: 'Laminate', note: 'A printed surface on a dense core. Cheapest per square metre and surprisingly tough.' },
        { name: 'Vinyl plank', note: 'Softer and quieter underfoot, fully waterproof, good over an imperfect slab.' },
        { name: 'Acoustic underlay', note: 'Required by most strata schemes. We will check your by laws before we quote.' },
        { name: 'Levelling compound', note: 'The unglamorous part that decides whether the floor feels solid.' },
      ],
    },
    run: {
      heading: 'How a floor runs',
      steps: [
        { n: '01', title: 'Check the subfloor', body: 'Straight edge over the whole area, moisture tested where it is a slab, and the low spots marked in front of you so the levelling cost is not a surprise.' },
        { n: '02', title: 'Clear and remove', body: 'Old floor covering up and out, tack strips and staples pulled, the slab or sheeting swept back to a clean surface.' },
        { n: '03', title: 'Level', body: 'Compound poured and spread, or sheeting packed and fixed, then given the drying time it needs before anything goes on top.' },
        { n: '04', title: 'Underlay', body: 'Acoustic or moisture barrier underlay depending on the floor below and what your strata by laws require.' },
        { n: '05', title: 'Lay the boards', body: 'Set out so the boards run the long way and the last row is not a sliver. Expansion gaps left at every wall and every fixed object.' },
        { n: '06', title: 'Trims and clean', body: 'Skirting or scotia, door jambs undercut so the floor runs under rather than butts up, thresholds fitted, and the place vacuumed properly.' },
      ],
    },
    specs: [
      { k: 'Typical install', v: 'Three to five working days', illustrative: true },
      { k: 'Subfloor levelling', v: 'Priced separately and shown to you first' },
      { k: 'Strata', v: 'Acoustic underlay to your by laws' },
      { k: 'Furniture', v: 'We move it, you empty it' },
    ],
    ba: {
      caption: 'A 1930s living room whose subfloor dipped nearly 18mm end to end, levelled before the oak went down.',
      alt: 'A living room floor',
    },
    faqs: [
      {
        q: 'Hybrid or engineered timber?',
        a: 'Engineered timber if you want real timber and are prepared to look after it. Hybrid if the floor is going to take water, dogs, kids or tenants. Hybrid is close to indestructible and never quite looks like timber up close. Engineered oak looks like oak because it is oak, and it marks.',
      },
      {
        q: 'Do you have to level the subfloor?',
        a: 'Only if it needs it, and we will show you rather than tell you. We put a straight edge down and you can see the gap under it yourself. If a quote for your floor does not mention the subfloor at all, ask why.',
      },
      {
        q: 'Can you lay over existing tiles?',
        a: 'Usually yes, if the tiles are sound and the height works at the doors and against the kitchen kickboards. It saves the cost and mess of removing them. If the tiles are drummy or lifting they have to come up first, and we will check that before quoting.',
      },
      {
        q: 'What about strata approval?',
        a: 'Most strata schemes set a minimum acoustic rating for hard flooring and many need written approval before you start. We will tell you what rating your underlay achieves so you can put it in front of the committee.',
      },
      {
        q: 'Do you move the furniture?',
        a: 'We move the furniture, you empty it. Wardrobes, drawers and bookshelves need to be emptied before we get there, and anything fragile is better off packed away by you than carried by us.',
      },
    ],
    cta: {
      title: 'Tell us about the floor.',
      body:
        'We will come and put a straight edge on the subfloor, then send a fixed written quote with the levelling priced separately so you can see exactly what it costs. No cost and no obligation.',
    },
    related: ['tiling', 'kitchen-renovations', 'bathroom-renovations'],
  },

  {
    slug: 'tiling',
    key: 'tiling',
    name: 'Tiling',
    short: 'Tiling',
    title: 'Tiling Sydney | Bathroom, Kitchen Splashback and Floor Tiling',
    description:
      'Tiling across Sydney. Bathroom tiling, kitchen splashbacks, floor tiling and outdoor tiling in ceramic, porcelain and feature tiles, set out properly before the first tile goes down.',
    keywords: ['Bathroom tiling', 'Kitchen splashbacks', 'Floor tiling', 'Outdoor tiling', 'Tilers Sydney'],
    hero: {
      eyebrow: '<span class="annot-signal">Tiling</span> · Sydney wide',
      lines: ['Set out from', 'the centre,', '<em>every time</em>.'],
      lede:
        'Large format, mosaic, herringbone and outdoor. Floors, walls and wet areas. Set out so the cuts land where they should and the grout lines stay straight across the whole room.',
      facts: [
        { k: 'Set out', v: 'Chalked before we start' },
        { k: 'Formats', v: 'Up to large format' },
        { k: 'Wet areas', v: 'Waterproofed and certified' },
        { k: 'Warranty', v: 'Six years structural' },
      ],
    },
    intro: {
      heading: 'You cannot fix a bad set out with good tiling.',
      body: [
        'Almost no room in a Sydney house is square. Start tiling from a wall and by the time you reach the far side the grout lines have drifted, and the cut at the end is a 20mm sliver on one side and a full tile on the other. Everybody sees it and nobody can say why the room looks wrong.',
        'We set out from the centre line so the cuts land evenly at both ends, chalk the whole room before the first tile is buttered, and walk it with you if you want to see exactly where the cuts will fall. It takes an extra hour at the start and it is the difference between a tiled room and a tiled room that looks right.',
      ],
      pull: 'The finish that shows every millimetre of the preparation underneath it.',
    },
    blocks: [
      {
        img: 1,
        title: 'Set out',
        body:
          'Centre lines snapped in chalk, the layout checked against the room, and the cuts planned before anything is stuck down. Where a feature or a niche is involved the set out starts from that and works outwards.',
        points: ['Centre line set out', 'Cuts planned in advance', 'Niches on a joint', 'Walked with you first'],
        alt: 'Chalk lines snapped across a bare screed with a square, spacers and levelling clips beside them',
      },
      {
        img: 2,
        title: 'Floor tiling',
        body:
          'Large format porcelain needs a flat bed and levelling clips, or you get lippage on every joint and you feel it underfoot for the next twenty years. The substrate gets checked and corrected first, same as a timber floor.',
        points: ['Large format porcelain', 'Levelling clips and wedges', 'Substrate preparation', 'Straight set and stack bond'],
        alt: 'A large format porcelain tile being lowered onto ribbed adhesive with levelling clips in the joints',
      },
      {
        img: 3,
        title: 'Wall tiling and features',
        body:
          'Splashbacks, full height walls, herringbone, mosaic and feature panels. A herringbone that does not meet exactly at the points is worse than no herringbone at all, so this is a pattern that gets set out on paper first.',
        points: ['Kitchen splashbacks', 'Full height walls', 'Herringbone and mosaic', 'Feature tiles'],
        alt: 'A herringbone feature tile wall with the points meeting exactly and uniform grout joints',
      },
      {
        img: 4,
        title: 'Outdoor and alfresco',
        body:
          'Outdoor tiling has to shed water and survive a Sydney summer on a west facing terrace. Falls away from the house, external grade adhesive, movement joints where they belong, and a slip rating that suits a wet surface.',
        points: ['Alfresco and terraces', 'Pool surrounds', 'Falls away from the house', 'Slip rated finishes'],
        alt: 'Large format textured pavers on an alfresco terrace at dusk running out to a pool edge',
      },
    ],
    also: [
      'Bathroom and wet areas',
      'Ceramic',
      'Porcelain',
      'Natural stone',
      'Waterproofing',
      'Regrouting and repairs',
      'Laundry and powder rooms',
      'Stairs and landings',
    ],
    materials: {
      heading: 'What you can tile in',
      items: [
        { name: 'Porcelain', note: 'Dense, low absorption, hard wearing. The default for floors and wet areas.' },
        { name: 'Ceramic', note: 'Lighter and cheaper. Fine on walls, not the right call for a busy floor.' },
        { name: 'Natural stone', note: 'Marble, travertine and limestone. Needs sealing and rewards it.' },
        { name: 'Mosaic', note: 'Sheet mounted for shower floors, where the extra joints give grip and follow the falls.' },
        { name: 'Feature tiles', note: 'Herringbone, fish scale, subway. Worth doing on one wall rather than four.' },
        { name: 'Epoxy grout', note: 'Stain resistant and harder to work with. Right in a shower, overkill in a hallway.' },
      ],
    },
    run: {
      heading: 'How a tiling job runs',
      steps: [
        { n: '01', title: 'Check the substrate', body: 'Flatness checked, drummy tiles or loose sheeting found now rather than after. A tile is only as flat as what it is stuck to.' },
        { n: '02', title: 'Prepare and waterproof', body: 'Screed to falls in wet areas, membrane applied and cured where water is involved, primer everywhere else.' },
        { n: '03', title: 'Set out', body: 'Centre lines chalked, the layout dry laid where the pattern needs it, cuts planned to land evenly at both ends of the room.' },
        { n: '04', title: 'Lay', body: 'Full bed of adhesive, back buttered where the format calls for it, levelling clips through the joints so nothing sits proud of its neighbour.' },
        { n: '05', title: 'Grout', body: 'Joints cleaned out, grouted in the colour you chose, and sponged off before it goes off rather than scrubbed off after.' },
        { n: '06', title: 'Seal and finish', body: 'Silicone in the movement joints and internal corners, stone sealed if it needs it, then the floor cleaned properly.' },
      ],
    },
    specs: [
      { k: 'Set out', v: 'From the centre line, chalked first' },
      { k: 'Large format', v: 'Levelling clips through every joint' },
      { k: 'Wet areas', v: 'Waterproofed and certified' },
      { k: 'Silicone', v: 'In movement joints, not in place of a cut' },
    ],
    ba: {
      caption: 'A hallway 40mm out of parallel end to end, set out from the centre line so the discrepancy landed in the cuts at the skirting.',
      alt: 'A tiled hallway',
    },
    faqs: [
      {
        q: 'How do I choose a tile size?',
        a: 'Bigger tiles mean fewer grout lines and a calmer looking room, and they need a flatter substrate to sit properly. Small format and mosaic follow a curve or a fall, which is why shower floors use them. In a small bathroom a large tile usually makes the room look bigger, not smaller.',
      },
      {
        q: 'Can you tile over existing tiles?',
        a: 'On a wall, sometimes. On a floor, usually, if the existing tiles are sound and the extra height works at the doors. In a wet area it is generally the wrong call, because the waterproofing has to be redone underneath and that means the old tiles come up anyway.',
      },
      {
        q: 'What grout colour should I use?',
        a: 'Matching the tile makes the surface read as one thing, which is what most people want on a floor or a full height wall. Contrasting grout makes the pattern the feature, which is worth it on herringbone or subway and tiring everywhere else. We will hold samples up in the actual room light before you commit.',
      },
      {
        q: 'Why does the grout crack in the corners?',
        a: 'Because grout is rigid and buildings move. Internal corners and the joint where a wall meets a floor take flexible silicone rather than grout. If yours has cracked, that is what was done wrong, and it is a straightforward fix.',
      },
      {
        q: 'Do you do regrouting and repairs?',
        a: 'Yes. Regrouting, resealing, replacing cracked or drummy tiles, and rescuing a shower that leaks at the hob. We will tell you honestly when a repair is worth it and when you are better off putting the money toward doing the room properly.',
      },
    ],
    cta: {
      title: 'Tell us about the room.',
      body:
        'We will come and measure it, then send a fixed written quote with the tile, the preparation and the set out itemised. No cost and no obligation.',
    },
    related: ['bathroom-renovations', 'kitchen-renovations', 'flooring'],
  },

  {
    slug: 'granny-flats',
    key: 'granny',
    name: 'Granny Flats',
    short: 'Granny flats',
    title: 'Granny Flat Builder Sydney | Secondary Dwellings and Backyard Studios',
    description:
      'Granny flat builder across Sydney. Design, council approvals and construction of secondary dwellings and backyard studios, handled end to end under one contract.',
    keywords: ['Granny flat builder', 'Secondary dwelling', 'Backyard studio', 'Granny flat Sydney', 'Complying development granny flat'],
    hero: {
      eyebrow: '<span class="annot-signal">Granny flats</span> · Sydney wide',
      lines: ['A second home', 'in the yard you', '<em>already own</em>.'],
      lede:
        'Design, approvals and construction under one contract. The council process is the part that stops most of these projects before they start, so we handle it end to end.',
      facts: [
        { k: 'Typical build', v: 'About 16 weeks' },
        { k: 'Approval path', v: 'Usually a CDC' },
        { k: 'Contract', v: 'Design to handover' },
        { k: 'Warranty', v: 'Six years structural' },
      ],
    },
    intro: {
      heading: 'Most people stop at the paperwork, not the building.',
      body: [
        'A granny flat is a straightforward build. The part that defeats people is everything before it: working out whether the block qualifies, what the setbacks allow, where the sewer runs, and which approval path applies. That is months of work if you have never done it, and it is the reason a lot of backyards stay empty.',
        'We take the whole thing. Feasibility on your block, design, the approval, construction, and handover, with one contract and one person answering the phone. You find out early whether it is possible rather than after you have spent money finding out it is not.',
      ],
      pull: 'You get one contract covering approval through to handover.',
    },
    blocks: [
      {
        img: 1,
        title: 'Design',
        body:
          'Worked backwards from your block. Setbacks, the maximum floor area, where the windows can go without looking into a neighbour, and how the main house keeps a usable yard. A granny flat that fights the site is one that never gets approved.',
        points: ['Site and feasibility check', 'Floor plans and elevations', 'One and two bedroom', 'Privacy and orientation'],
        alt: 'Granny flat floor plans and elevations rolled out on a site table with a scale rule across them',
      },
      {
        img: 2,
        title: 'The council process',
        body:
          'Most secondary dwellings in NSW can go through as a complying development certificate rather than a full development application, which is considerably faster. We will tell you which path your block is on before you commit to anything.',
        points: ['Complying development certificate', 'Development applications where needed', 'Sewer and services checks', 'Certifier liaison'],
        alt: 'A folder of stamped drawings and approval documents on a dark desk with a site plan on top',
      },
      {
        img: 3,
        title: 'Construction',
        body:
          'Slab, frame, roof, lock up, then the full internal fit out. Same crew, same standards and the same daily message as any of our renovation jobs, run on a programme you get at the start.',
        points: ['Slab and footings', 'Frame and roof', 'Services connection', 'Full internal fit out'],
        alt: 'A granny flat wall frame standing plumb on a finished concrete slab with roof trusses set above',
      },
      {
        img: 4,
        title: 'Turnkey delivery',
        body:
          'Finished to the point where someone could move in. Kitchen, bathroom, flooring, window furnishings, the path from the street and the landscaping around it. You get keys, not a shell and a list of things still to organise.',
        points: ['Kitchenette or full kitchen', 'Bathroom and laundry', 'Flooring and finishes', 'Paths, access and landscaping'],
        alt: 'The interior of a completed granny flat at dusk with a charcoal kitchenette and oak flooring',
      },
    ],
    also: [
      'Secondary dwellings',
      'Backyard studios',
      'Home offices',
      'Teenage retreats',
      'One and two bedroom layouts',
      'Separate metering',
      'Driveway and access',
      'Site and services connection',
    ],
    materials: {
      heading: 'Why people build them',
      items: [
        { name: 'Family close by', note: 'Parents or adult children with their own front door. The most common reason by a distance.' },
        { name: 'Rental return', note: 'A second dwelling on land you already own, without buying anything.' },
        { name: 'Working from home', note: 'A separate building rather than a corner of the lounge room.' },
        { name: 'Property value', note: 'A permanent approved dwelling rather than a shed with a bed in it.' },
        { name: 'Flexibility', note: 'It changes use as the family does, from teenagers to tenants to grandparents.' },
        { name: 'Speed', note: 'A CDC path is measured in weeks where a full DA can run for months.' },
      ],
    },
    run: {
      heading: 'How a granny flat runs',
      steps: [
        { n: '01', title: 'Feasibility', body: 'Block size, zoning, setbacks, easements and where the sewer runs. We find out whether it can be done and what it can be before anyone spends money on a design.' },
        { n: '02', title: 'Design', body: 'A plan that fits the rules and the yard, with the windows placed for privacy in both directions and the main house left with usable outdoor space.' },
        { n: '03', title: 'Approval', body: 'Documentation prepared and lodged, certifier engaged, conditions worked through. This is the step we take off you entirely.' },
        { n: '04', title: 'Slab and frame', body: 'Site cleared, services located, footings and slab poured, then frame and roof up to lock up stage.' },
        { n: '05', title: 'Fit out', body: 'Services connected, linings, kitchen, bathroom, flooring and finishes. The same trades who do our renovation work.' },
        { n: '06', title: 'Handover', body: 'Final inspections, occupation certificate, the walk through and the list, then keys and the warranty paperwork.' },
      ],
    },
    specs: [
      { k: 'Typical build time', v: 'About 16 weeks on site', illustrative: true },
      { k: 'Usual approval path', v: 'Complying development certificate' },
      { k: 'Maximum floor area', v: '60m² under the NSW housing code' },
      { k: 'Contract covers', v: 'Feasibility through to handover' },
    ],
    ba: {
      caption: 'A backyard where the sewer main ran diagonally through the obvious build location, so the footprint shifted three metres to the rear boundary.',
      alt: 'A backyard',
    },
    faqs: [
      {
        q: 'Can I build a granny flat on my block?',
        a: 'In NSW a block generally needs to be at least 450m², at least 12m wide at the building line and zoned to allow it. There are setback and site coverage rules on top of that, and easements or a sewer main can rule out part of the yard. We check all of it before you commit to a design.',
      },
      {
        q: 'How big can it be?',
        a: 'Up to 60m² of internal floor area under the NSW Affordable Rental Housing policy, plus allowances for things like a covered patio. That is comfortably a two bedroom dwelling with a proper kitchen and bathroom.',
      },
      {
        q: 'Do you handle the council approval?',
        a: 'Yes, end to end. Most secondary dwellings qualify as complying development, which is assessed by a private certifier rather than the council and is considerably faster than a development application. Where a DA is genuinely required we handle that too, and we will tell you up front which one applies.',
      },
      {
        q: 'How long does the whole thing take?',
        a: 'Roughly 16 weeks on site once approval is through. The approval itself varies with the path, and a complying development certificate is measured in weeks where a development application can run for months. We give you an estimated programme with the quote.',
      },
      {
        q: 'Can I rent it out?',
        a: 'A secondary dwelling approved under the NSW housing code can generally be rented separately from the main house. It has to stay on the same lot and cannot be subdivided off. Check the current rules with your certifier as part of the approval, because this is the one that changes.',
      },
    ],
    cta: {
      title: 'Tell us about the block.',
      body:
        'We will check what your block actually allows before anything else, then send a fixed written quote covering design, approval and construction. No cost and no obligation.',
    },
    related: ['decking', 'kitchen-renovations', 'bathroom-renovations'],
  },
];

export const serviceBySlug = Object.fromEntries(servicePages.map((s) => [s.slug, s]));
