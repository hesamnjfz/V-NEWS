import { images } from "@/lib/images";

export const brand = {
  name: "V News Network",
  short: "V News",
  mark: "V",
  tagline: "Clarity in a noisy world.",
  description:
    "Independent reporting across politics, markets, technology, and culture — delivered with speed, rigor, and editorial integrity.",
  email: "themehrzadtalayifar@gmail.com",
  telegram: "https://t.me/Mehrzad_talayifar",
  telegramHandle: "@Mehrzad_talayifar",
};

export const navLinks = [
  { label: "Top Stories", href: "#top-stories" },
  { label: "World", href: "#world" },
  { label: "Investigations", href: "#investigations" },
  { label: "Live", href: "#live" },
  { label: "Voices", href: "#voices" },
  { label: "Network", href: "#network" },
  { label: "Contact", href: "#contact" },
];

export const trendingTopics = [
  "Global Summit",
  "Markets Watch",
  "AI Regulation",
  "Climate Desk",
  "Elections 2026",
  "Energy Shift",
  "Media Ownership",
  "Urban Heat",
];

export const opinionPieces = [
  {
    id: "op-1",
    author: "Elena Voss",
    role: "World Editor",
    title: "The real cost of diplomatic delay is paid by ordinary people",
    excerpt:
      "Summits look decisive on camera. Off-camera, every postponed clause becomes another month of uncertainty for families on the line.",
  },
  {
    id: "op-2",
    author: "Marcus Chen",
    role: "Politics Columnist",
    title: "Turnout is not a surprise — our models were the surprise",
    excerpt:
      "When youth voters move as a bloc, yesterday's polling becomes fiction. Newsrooms that ignore that are writing for an electorate that no longer exists.",
  },
  {
    id: "op-3",
    author: "Amira Hassan",
    role: "Business Desk",
    title: "Resilience is the new efficiency — and boards know it",
    excerpt:
      "Supply shocks taught a brutal lesson: the cheapest path is not always the safest one. Capital is finally pricing that in.",
  },
];

export const breakingHeadlines = [
  "Markets open lower as central banks signal prolonged rate pause",
  "Emergency summit convened after overnight diplomatic breakthrough",
  "Tech giants face new cross-border data rules effective September",
  "Climate agency upgrades extreme-heat alert for southern corridors",
  "Exclusive: leaked memo outlines major infrastructure spending shift",
  "Live: coalition talks resume after midnight walkout",
  "Shipping insurers raise rates across critical trade corridors",
  "Special report: who funds the next wave of media consolidation",
];

export const worldHeadlines = [
  "Tokyo markets rally as yen stabilizes after emergency FX intervention",
  "EU leaders deadlock over migration quotas ahead of midnight deadline",
  "Cairo mediation yields tentative ceasefire framework for border zone",
  "São Paulo floods displace tens of thousands; relief corridor opens",
  "Nairobi climate talks push binding methane cuts for major emitters",
  "Seoul and Tokyo revive intelligence-sharing pact after three-year freeze",
  "Lagos port congestion eases as new customs digital lane goes live",
  "Ottawa unveils Arctic security package amid rising northern traffic",
];

export const deskHeadlines = [
  "Berlin: industrial output slips; energy subsidies extended through winter",
  "New Delhi: monsoon forecast revised upward for key agricultural belts",
  "Mexico City: antitrust probe widens into cross-border telecom mergers",
  "Sydney: wildfire smoke triggers air-quality alerts across eastern coast",
  "Istanbul: shipping lanes rerouted after overnight canal traffic halt",
  "Johannesburg: power-grid reforms unlock private renewable capacity",
  "Singapore: fintech licensing wave reshapes regional payments map",
  "Buenos Aires: debt swap talks advance after overnight creditor meeting",
];

/** Micro-bits shown between scrolling headlines */
export const wireInterstitials = [
  { kind: "tag", text: "Just In" },
  { kind: "time", text: "2 min ago" },
  { kind: "tag", text: "Developing" },
  { kind: "stat", text: "2.4M reading" },
  { kind: "tag", text: "Exclusive" },
  { kind: "desk", text: "London desk" },
  { kind: "time", text: "Updated now" },
  { kind: "tag", text: "Live" },
  { kind: "stat", text: "48 bureaus" },
  { kind: "desk", text: "Dubai desk" },
  { kind: "tag", text: "Verified" },
  { kind: "time", text: "4 min ago" },
  { kind: "stat", text: "Watching: Markets" },
  { kind: "desk", text: "Tokyo desk" },
  { kind: "tag", text: "Priority" },
  { kind: "time", text: "1 min ago" },
] as const;

/** Thin status strips between ticker rows */
export const wirePulseBars = [
  {
    id: "pulse-a",
    items: [
      { label: "On air", value: "Morning Brief" },
      { label: "Hot", value: "Summit talks" },
      { label: "Markets", value: "Risk-off" },
      { label: "Alert", value: "Heat corridor" },
    ],
  },
  {
    id: "pulse-b",
    items: [
      { label: "Live desks", value: "NY · LON · DXB" },
      { label: "Readers", value: "2.4M online" },
      { label: "Next", value: "Night Desk 22:00" },
      { label: "Wire", value: "Priority queue" },
    ],
  },
] as const;

export const heroFlashItems = [
  {
    label: "Live now",
    value: "V Morning Brief",
    meta: "Studio A",
  },
  {
    label: "Readers",
    value: "2.4M",
    meta: "online today",
  },
  {
    label: "Bureaus",
    value: "48",
    meta: "covering now",
  },
];

export const flashAlerts = [
  {
    id: "fa-1",
    tag: "Markets",
    time: "12 min ago",
    text: "Markets open lower as central banks signal prolonged rate pause",
  },
  {
    id: "fa-2",
    tag: "World",
    time: "28 min ago",
    text: "Emergency summit convened after overnight diplomatic breakthrough",
  },
  {
    id: "fa-3",
    tag: "Exclusive",
    time: "1 hr ago",
    text: "Leaked memo outlines major infrastructure spending shift",
  },
];

export type Story = {
  id: string;
  title: string;
  dek: string;
  category: string;
  author: string;
  location: string;
  time: string;
  readTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  breaking?: boolean;
};

export const featuredStory: Story = {
  id: "featured-1",
  title: "Inside the quiet realignment reshaping global power",
  dek: "From trade corridors to security pacts, a new order is forming in plain sight — and few capitals are ready for what comes next.",
  category: "World",
  author: "Elena Voss",
  location: "Geneva",
  time: "Updated 14 min ago",
  readTime: "12 min read",
  image: images.hero,
  imageAlt: "New York City skyline at dusk",
  featured: true,
  breaking: true,
};

export const topStories: Story[] = [
  {
    id: "ts-1",
    title: "The overnight vote that redrew a nation's political map",
    dek: "Turnout surged in unexpected districts as coalition talks begin before dawn.",
    category: "Politics",
    author: "Marcus Chen",
    location: "Capital Desk",
    time: "2 hours ago",
    readTime: "8 min",
    image: images.politics,
    imageAlt: "Crowds gathered near government buildings",
  },
  {
    id: "ts-2",
    title: "Why boardrooms are rewriting risk after the supply shock",
    dek: "CFOs are abandoning just-in-time orthodoxy for resilience — at a steep price.",
    category: "Business",
    author: "Amira Hassan",
    location: "Markets",
    time: "3 hours ago",
    readTime: "6 min",
    image: images.markets,
    imageAlt: "Financial market charts and trading screens",
  },
  {
    id: "ts-3",
    title: "A breakthrough chip design few outsiders saw coming",
    dek: "Researchers detail a packing method that could cut inference costs dramatically.",
    category: "Technology",
    author: "Jules Park",
    location: "Silicon Valley",
    time: "5 hours ago",
    readTime: "9 min",
    image: images.tech,
    imageAlt: "Circuit board and technology hardware close-up",
  },
  {
    id: "ts-4",
    title: "Heat, water, and the cities racing to adapt in real time",
    dek: "Mayors from four continents share the playbook — and the hard limits — of urban climate defense.",
    category: "Climate",
    author: "Sofia Mendes",
    location: "Field Desk",
    time: "6 hours ago",
    readTime: "11 min",
    image: images.climate,
    imageAlt: "Melting glacier and climate landscape",
  },
];

export const categorySections = [
  {
    id: "world",
    label: "World",
    eyebrow: "Global Desk",
    description: "Diplomacy, conflict, and the forces reshaping nations.",
    stories: [
      {
        id: "w-1",
        title: "Border talks stall as mediators push a narrow window",
        dek: "Envoys warn that delay could reopen a fragile ceasefire corridor.",
        category: "World",
        author: "Ravi Anand",
        location: "Regional Bureau",
        time: "1 hour ago",
        readTime: "5 min",
        image: images.diplomacy,
        imageAlt: "International diplomatic meeting",
      },
      {
        id: "w-2",
        title: "How a forgotten shipping lane became a strategic prize",
        dek: "Insurance rates tell the story governments prefer not to.",
        category: "World",
        author: "Nina Okonkwo",
        location: "Maritime Desk",
        time: "4 hours ago",
        readTime: "7 min",
        image: images.world,
        imageAlt: "Earth from space — global connectivity",
      },
      {
        id: "w-3",
        title: "Youth turnout redraws expectations in three elections",
        dek: "Polling models failed to capture a generation voting as a bloc.",
        category: "World",
        author: "Tomás Rivera",
        location: "Elections Unit",
        time: "7 hours ago",
        readTime: "6 min",
        image: images.crowd,
        imageAlt: "Young crowd gathered outdoors",
      },
    ] as Story[],
  },
  {
    id: "politics",
    label: "Politics",
    eyebrow: "Power & Policy",
    description: "The decisions, deals, and dissent behind the headlines.",
    stories: [
      {
        id: "p-1",
        title: "Budget fight hinges on a single clause few have read",
        dek: "Staffers call it technical. Analysts call it transformative.",
        category: "Politics",
        author: "Helen Drake",
        location: "Policy Desk",
        time: "90 min ago",
        readTime: "8 min",
        image: images.policy,
        imageAlt: "Government corridor and policy setting",
      },
      {
        id: "p-2",
        title: "Inside the coalition's week of private ultimatums",
        dek: "What looked stable on camera nearly collapsed behind closed doors.",
        category: "Politics",
        author: "Omar Said",
        location: "Political Unit",
        time: "3 hours ago",
        readTime: "10 min",
        image: images.parliament,
        imageAlt: "Parliament chamber under bright lights",
      },
    ] as Story[],
  },
];

export const investigations = [
  {
    id: "inv-1",
    title: "The shadow ledger: how public funds vanished in plain sight",
    dek: "A year-long V News investigation traces shell companies, silent approvals, and the auditors who looked away.",
    category: "Investigation",
    author: "Investigation Desk",
    location: "Special Projects",
    time: "Published today",
    readTime: "28 min read",
    image: images.investigate,
    imageAlt: "Documents and analytical workspace",
    chapters: 6,
    documents: 40,
  },
  {
    id: "inv-2",
    title: "Who owns the airwaves after the media mega-deal?",
    dek: "Ownership maps, overlapping boards, and the quiet concentration of local news.",
    category: "Investigation",
    author: "Media Unit",
    location: "Special Projects",
    time: "This week",
    readTime: "18 min read",
    image: images.media,
    imageAlt: "Broadcast microphone and radio equipment",
    chapters: 4,
    documents: 22,
  },
];

export const livePrograms = [
  {
    id: "live-1",
    title: "V Morning Brief",
    time: "06:00 – 09:00",
    status: "On air" as const,
    hosts: "Anya Reid & David Cole",
  },
  {
    id: "live-2",
    title: "Markets Midday",
    time: "12:00 – 13:00",
    status: "Up next" as const,
    hosts: "Priya Nair",
  },
  {
    id: "live-3",
    title: "World Tonight",
    time: "20:00 – 21:30",
    status: "Tonight" as const,
    hosts: "James Ortega",
  },
];

export const networkStats = [
  { value: "48", label: "Bureaus worldwide" },
  { value: "1.2K", label: "Journalists & producers" },
  { value: "24/7", label: "Live coverage" },
  { value: "90+", label: "Languages & editions" },
];

export const bureaus = [
  "New York",
  "London",
  "Dubai",
  "Singapore",
  "Nairobi",
  "São Paulo",
  "Berlin",
  "Tokyo",
];

export const networkValues = [
  {
    title: "Independence",
    body: "Editorial decisions are made by journalists — not advertisers, owners, or algorithms chasing outrage.",
  },
  {
    title: "Verification",
    body: "Every major claim is sourced, challenged, and documented before it reaches the air or the page.",
  },
  {
    title: "Clarity",
    body: "We explain complexity without dumbing it down. Context is not optional — it is the product.",
  },
];

export const socialLinks = [
  { label: "Telegram", href: "https://t.me/Mehrzad_talayifar" },
  { label: "Email", href: "mailto:themehrzadtalayifar@gmail.com" },
  { label: "X", href: "https://x.com/" },
  { label: "YouTube", href: "https://youtube.com/" },
];

export const footerColumns = [
  {
    title: "Sections",
    links: ["World", "Politics", "Business", "Technology", "Climate", "Culture"],
  },
  {
    title: "Watch",
    links: ["Live TV", "V Morning Brief", "World Tonight", "Documentaries"],
  },
  {
    title: "Company",
    links: ["About V", "Careers", "Press", "Standards", "Contact"],
  },
];
