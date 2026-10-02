/**
 * Every piece of marketing copy on the page lives here.
 *
 * This is deliberately the only file a non-developer needs to touch to
 * change wording, pricing, specs or FAQ answers. All copy below is
 * PLACEHOLDER pending client review. See README for the sign-off list.
 */

export const site = {
  name: "Squeejit",
  tagline: "Trailside windshield rescue",
  description:
    "One bottle. Scrubber, squeegee and cleaner in your hand, so you can clear a mud-blind windshield in under a minute, anywhere the trail takes you.",
  // TODO(client): confirm before launch
  email: "hello@squeejit.com",
  social: {
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    facebook: "https://facebook.com/",
  },
};

/**
 * Build credit shown in the footer. The wordmark itself lives in
 * Footer.astro, since the markup splits it to highlight the pun. Set `url`
 * here to turn the credit into a link.
 */
export const credit = {
  url: "",
};

export const nav = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Specs", href: "#specs" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Built for the rough stuff",
  headlinePre: "Mud on,",
  headlineSlash: "mud off.",
  sub:
    "The trail doesn't come with a car wash. Squeejit puts cleaner, a scrubber and a squeegee in one bottle that rides in your door pocket. A blind windshield costs you sixty seconds, not the rest of the day.",
  primaryCta: "Get yours",
  secondaryCta: "See how it works",
  // Short trust markers under the CTA row
  trust: [
    "Refillable 8 oz bottle",
    "Streak-free formula",
    "Fits any door pocket",
  ],
};

export const problem = {
  eyebrow: "The problem",
  heading: "Ten miles in, you can't see a thing",
  body:
    "One water crossing, one truck ahead of you, one bad line through a rut, and your windshield goes opaque. A dry rag smears it. A water bottle spreads it around. A shop towel from the toolbox puts scratches in the glass you'll be looking through for years.",
  kicker:
    "Every UTV has a toolkit, a first aid kit and a recovery strap. Nobody packs a bucket and a sponge.",
};

export const steps = [
  {
    n: "01",
    title: "Squirt",
    body:
      "Flip the cap and lay a line of cleaner across the glass. The twist-top puts it exactly where you want it. No wind-blown spray, no wasted product.",
  },
  {
    n: "02",
    title: "Scrub",
    body:
      "Flip the bottle and work the bonded scrubber pad across the mess. Stiff enough to break dried mud and bug splatter loose, soft enough to leave the glass alone.",
  },
  {
    n: "03",
    title: "Squeegee",
    body:
      "One pass with the integrated blade pulls the slurry off clean. No towel, no streaks, no waiting for it to dry in the sun.",
  },
];

/** Callout labels for the annotated product diagram. */
export const anatomy = {
  eyebrow: "Anatomy",
  heading: "Three tools. One hand.",
  body:
    "Squeejit isn't a bottle with accessories strapped to it. The scrubber and squeegee are part of the body, so nothing rattles loose on a rough trail and nothing gets left behind at camp.",
  parts: [
    {
      label: "Twist-top cap",
      detail: "One-handed open and close, even in gloves. Seals tight against vibration.",
      // Percentage position over the product image. Tune once the real photo lands
      x: 52,
      y: 12,
    },
    {
      label: "Scrubber pad",
      detail: "Bonded along the full bottle length. Breaks dried mud without scratching glass.",
      x: 70,
      y: 48,
    },
    {
      label: "Squeegee blade",
      detail: "Flexible edge that clears the full width of a UTV windshield in one pull.",
      x: 74,
      y: 72,
    },
    {
      label: "8 oz refillable body",
      detail: "Enough for roughly a dozen cleans. Refill it instead of replacing it.",
      x: 34,
      y: 62,
    },
  ],
};

export const features = [
  {
    icon: "bolt",
    title: "Sixty-second clean",
    body: "Squirt, scrub, squeegee. No bucket, no hose, no waiting.",
  },
  {
    icon: "hand",
    title: "One-handed",
    body: "Works with gloves on, from the driver's seat if you have to.",
  },
  {
    icon: "box",
    title: "Door-pocket sized",
    body: "Eight inches tall. Lives where a water bottle lives.",
  },
  {
    icon: "drop",
    title: "Streak-free formula",
    body: "Ammonia-free, so it's safe on polycarbonate and tinted glass.",
  },
  {
    icon: "recycle",
    title: "Refillable",
    body: "Top it off from a gallon jug. The tool outlasts the fluid.",
  },
  {
    icon: "shield",
    title: "Won't scratch",
    body: "Pad and blade are chosen to lift grit away, not drag it across the glass.",
  },
];

export const demo = {
  eyebrow: "Proof",
  heading: "Watch it work",
  body:
    "Forty seconds, one pass, no towel. Drag the handle to see the difference.",
  beforeLabel: "Before",
  afterLabel: "After",
};

export const builtFor = [
  { name: "Side-by-sides", note: "UTV windshields, front and rear" },
  { name: "ATVs", note: "Headlight lenses and hand guards" },
  { name: "Dirt bikes", note: "Goggle lenses between motos" },
  { name: "Trucks & Jeeps", note: "Overlanding, no water to spare" },
  { name: "Boats", note: "Salt spray on the console glass" },
  { name: "Snowmobiles", note: "Slush and road film" },
];

export const specs = [
  { label: "Capacity", value: "8 fl oz (237 mL)" },
  { label: "Height", value: '8.25 in (21 cm)' },
  { label: "Diameter", value: '2.4 in (6.1 cm)' },
  { label: "Weight, filled", value: "10.5 oz (298 g)" },
  { label: "Bottle material", value: "HDPE, refillable" },
  { label: "Scrubber", value: "Bonded polymer bristle pad" },
  { label: "Squeegee", value: "Flexible TPE blade" },
  { label: "Formula", value: "Ammonia-free, biodegradable surfactant" },
  { label: "Safe on", value: "Glass, polycarbonate, acrylic, tint" },
  { label: "Cleans per fill", value: "~12 windshields" },
];

export const reviews = {
  eyebrow: "From the trail",
  heading: "What riders say",
  // TODO(client): replace with real, attributable customer reviews before
  // launch. Fabricated testimonials are both a legal and a trust problem.
  items: [
    {
      quote:
        "Ran the Rubicon in April with three trucks ahead of me. Cleaned my windshield four times without ever getting out of the seat.",
      name: "Placeholder Reviewer",
      location: "Placer County, CA",
      rating: 5,
    },
    {
      quote:
        "I kept a spray bottle and a roll of towels in the bed for years. This replaced both and takes up a fraction of the room.",
      name: "Placeholder Reviewer",
      location: "St. George, UT",
      rating: 5,
    },
    {
      quote:
        "Bought one, then bought three more for the rest of the group. It's the thing everyone borrows at the staging area.",
      name: "Placeholder Reviewer",
      location: "Sand Hollow, UT",
      rating: 5,
    },
  ],
};

export const buy = {
  eyebrow: "Get one",
  heading: "Pick your setup",
  note: "Free shipping on orders over $50. 45-day money-back guarantee.",
  // TODO(client): confirm final pricing and SKU names
  options: [
    {
      id: "single",
      name: "Single",
      blurb: "One bottle, filled and ready.",
      price: "$26",
      compareAt: null,
      badge: null,
      includes: ["1x Squeejit, filled", "8 oz cleaner"],
      featured: false,
    },
    {
      id: "double",
      name: "Trail Pack",
      blurb: "One for the rig, one for the chase truck.",
      price: "$44",
      compareAt: "$48",
      badge: "Most popular",
      includes: ["2x Squeejit, filled", "16 oz cleaner total", "Free shipping"],
      featured: true,
    },
    {
      id: "refill",
      name: "Refill Kit",
      blurb: "For riders who already have the tool.",
      price: "$32",
      compareAt: null,
      badge: null,
      includes: ["1x Squeejit, filled", "1 gallon refill concentrate"],
      featured: false,
    },
  ],
};

export const faq = [
  {
    q: "Will the scrubber scratch my windshield?",
    a: "No. The pad is chosen to lift grit off the surface rather than drag it across, and the formula floats debris away as you work. It's safe on glass, polycarbonate, acrylic and factory tint. As with any cleaning tool, knock off loose gravel before you scrub.",
  },
  {
    q: "Can I use it on a plastic windshield?",
    a: "Yes. The formula is ammonia-free, which is what causes clouding and crazing on polycarbonate over time. That's the main reason household glass cleaner is a bad idea on a UTV windshield.",
  },
  {
    q: "How many cleanings do I get per bottle?",
    a: "Roughly a dozen full windshields, depending on how bad the mud is. Refills are available so you're not throwing away the tool every time the fluid runs out.",
  },
  {
    q: "Does it work on dried-on mud?",
    a: "Yes, that's what the scrubber is for. Lay down cleaner, let it sit for fifteen seconds to soften the crust, then scrub and squeegee.",
  },
  {
    q: "Will it freeze in the winter?",
    a: "TODO(client): confirm the formula's freeze point before answering this publicly.",
  },
  {
    q: "What's your return policy?",
    a: "Forty-five days. If it doesn't earn its spot in your door pocket, send it back for a full refund.",
  },
];

export const finalCta = {
  heading: "Stop driving blind",
  body:
    "One bottle in the door pocket is the difference between turning around and finishing the ride.",
  cta: "Get your Squeejit",
};
