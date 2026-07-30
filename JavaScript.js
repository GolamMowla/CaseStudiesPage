/* =============================================================
   MOWLA DIGITAL — CASE STUDIES CLIENT SCRIPT
   Same navbar / reveal / counter behaviour as the main site.
   New here: case-study data, filterable grid, detail modal,
   gallery lightbox, and FAQ accordion.
   ============================================================= */

/* -----------------------------------------------------------
   CASE STUDY DATA
   ----------------------------------------------------------- */
var CASE_STUDIES = [
  {
    id: "fashion-retargeting",
    categories: ["meta", "ecommerce"],
    categoryLabel: "Meta Ads",
    title: "Turning Browsers Into Buyers for a Fashion Label",
    industry: "Fashion E-commerce",
    country: "Canada",
    duration: "5 months",
    budget: "$28,000 CAD managed spend",
    tools: ["Meta Ads", "Meta Pixel", "Conversion API", "Canva", "GA4"],
    resultBadge: "+212% ROAS",
    accent: "#2563EB",
    chart: [30, 42, 38, 55, 68, 82, 95],
    summary: "A direct-to-consumer fashion brand was spending on Meta Ads with almost no retargeting structure, leaving cart abandoners and past customers untouched.",
    overview: "The client, a Toronto-based women's fashion label selling primarily through Shopify, had run boosted-post style Meta campaigns for over a year with inconsistent results. Golam Mowla Digital was brought in to rebuild the account from the ad account structure up, with a specific focus on turning existing site traffic into repeat revenue.",
    clientBackground: "Founded in 2021, the brand had a loyal but small customer base and a catalog of roughly 140 SKUs. Most historical ad spend had gone toward cold prospecting, with no dedicated retargeting funnel and no server-side tracking to recover the conversions lost to iOS 14.5 signal loss.",
    challenge: "Return on ad spend had been sliding for three consecutive months, cart abandonment sat above 78%, and the Meta Pixel was under-reporting purchases by an estimated 30-35% due to browser tracking restrictions. The brand could not tell which products or audiences were actually profitable.",
    goals: [
      "Lift blended ROAS from 1.6x to at least 3x within the first quarter",
      "Rebuild tracking so purchase data was accurate within 5%",
      "Stand up a full-funnel structure covering cold, warm, and retargeting audiences",
      "Reduce cost per purchase without cutting overall spend"
    ],
    research: "A full account audit mapped every past campaign against product margin data to identify which collections were quietly unprofitable. Competitor ad libraries and customer reviews were reviewed to pull out the language and imagery that actually drove add-to-carts, rather than guessing at creative direction.",
    strategy: "The account was restructured into three tiers: broad-interest cold prospecting using Advantage+ audience expansion, a warm tier retargeting site visitors and video viewers with carousel ads, and a bottom-funnel tier targeting cart abandoners and past purchasers with dynamic product ads and a limited-time incentive.",
    campaignStructure: "Cold campaigns ran on a 3-day learning budget with broad targeting and Advantage+ placements. Warm campaigns used a 14-day site-visitor window split by product category. Retargeting ran a 7-day cart-abandoner window with dynamic creative pulling live inventory and pricing directly from the product feed.",
    audience: "Three core segments were built: women aged 24-45 with fashion and lifestyle affinities for cold prospecting, 14-day site engagers for mid-funnel, and a high-intent list combining cart abandoners, wishlist adds, and past purchasers for retargeting and cross-sell.",
    creativeTesting: "Six creative concepts were tested across static product shots, UGC-style try-on video, and carousel lookbooks. UGC video consistently outperformed studio photography on cost per add-to-cart, so it became the primary format for cold and warm audiences while dynamic catalog ads handled retargeting automatically.",
    trackingSetup: "Meta Conversion API was implemented server-side through Shopify's native integration and deduplicated against the browser Pixel using event IDs. GA4 was configured with enhanced e-commerce events, and a weekly reconciliation check compared Shopify order data against platform-reported purchases.",
    optimizationProcess: "Budgets were reviewed twice weekly against a strict cost-per-purchase ceiling per tier. Underperforming ad sets were paused after a 3-day minimum learning window rather than reactively, and winning creative was refreshed every 10-14 days to manage frequency and fatigue.",
    results: [
      { value: "212%", label: "ROAS Growth" },
      { value: "4.6x", label: "Blended ROAS" },
      { value: "-41%", label: "Cost / Purchase" },
      { value: "3.1x", label: "Retargeting Revenue" }
    ],
    lessonsLearned: [
      "Server-side tracking recovered a meaningful share of purchases that browser-only Pixel data was silently dropping",
      "UGC-style video consistently beat polished studio photography for this audience",
      "A dedicated retargeting tier was the single highest-leverage change to blended ROAS"
    ],
    finalOutcome: "Within five months the account moved from an unreliable 1.6x ROAS to a stable 4.6x blended ROAS, with the retargeting tier alone generating more than 3x the revenue of the previous all-cold-traffic approach. The brand now runs on a repeatable structure the internal team can maintain month to month."
  },
  {
    id: "appliance-shopping-scaleup",
    categories: ["google", "ecommerce"],
    categoryLabel: "Google Ads",
    title: "Scaling Shopping & Search for a Home Appliance Retailer",
    industry: "Home Appliance Retail",
    country: "Australia",
    duration: "6 months",
    budget: "$46,000 AUD managed spend",
    tools: ["Google Ads", "Performance Max", "Merchant Center", "GA4", "Looker Studio"],
    resultBadge: "3.4x ROAS",
    accent: "#2563EB",
    chart: [25, 34, 40, 47, 60, 74, 88],
    summary: "A multi-category appliance retailer wanted to scale Google Shopping spend without letting cost per acquisition creep up as budget grew.",
    overview: "This Melbourne-based retailer sells major and small appliances through a WooCommerce storefront, competing directly against large marketplaces on price. The brief was straightforward but difficult: grow monthly ad spend by roughly 2.5x while holding ROAS steady.",
    clientBackground: "The business had run a single, unsegmented Shopping campaign for over a year, bidding the same way on a $40 kettle as a $2,200 refrigerator. Search campaigns existed but overlapped heavily with Shopping, competing against themselves in the auction.",
    challenge: "As budget increased, the account fell into diminishing returns quickly. High-margin large appliances were being outbid by cheap, high-volume accessories, and there was no visibility into which product categories were actually driving profitable growth.",
    goals: [
      "Grow monthly spend from $6,000 to $15,000+ without ROAS dropping below 3x",
      "Separate high-margin appliances from low-margin accessories in bidding",
      "Reduce wasted spend from Search and Shopping cannibalising each other",
      "Build reporting the client's team could read without help"
    ],
    research: "Product-level margin and historical conversion data were pulled from Merchant Center and cross-referenced against WooCommerce order history to build a true profitability picture by category, not just by revenue.",
    strategy: "Shopping was split into tiered campaigns by margin and price point, each with its own target ROAS, while Performance Max was layered in for the highest-margin appliance categories to capture cross-channel demand. Search campaigns were rebuilt around branded and high-intent commercial terms only, removing overlap with Shopping.",
    campaignStructure: "Three Standard Shopping campaigns segmented by margin tier, one Performance Max campaign scoped to premium appliance categories with exclusion rules to avoid duplicate serving, and a tightly themed Search campaign built on exact and phrase match commercial-intent keywords.",
    audience: "Shopping and Performance Max targeting leaned on Google's signal-based audiences supplemented with a first-party customer list for exclusion, so existing owners of a given appliance category weren't served the same ad again. Search used in-market appliance audiences as a bid modifier layer.",
    creativeTesting: "Product feed titles and descriptions were rewritten to lead with the attributes shoppers actually searched for (capacity, energy rating, brand) rather than internal SKU naming. Responsive Search Ads were tested with price-led versus feature-led headlines, with feature-led headlines winning on quality score and CTR.",
    trackingSetup: "Enhanced conversions were enabled alongside GA4 e-commerce tracking, and offline conversion adjustments were layered in to reflect cancelled or returned orders so target ROAS bidding wasn't optimising against inflated numbers.",
    optimizationProcess: "Target ROAS was adjusted weekly per tier based on a rolling 14-day performance window, budgets were reallocated from underperforming to overperforming tiers every Monday, and negative keyword lists were expanded continuously from search term reports.",
    results: [
      { value: "3.4x", label: "ROAS at Scale" },
      { value: "150%", label: "Spend Growth" },
      { value: "-28%", label: "Cost / Conversion" },
      { value: "62%", label: "Revenue from Shopping" }
    ],
    lessonsLearned: [
      "Margin-based campaign segmentation mattered more than any single bidding strategy change",
      "Removing Search/Shopping overlap freed up auction share that was previously wasted on internal competition",
      "Feature-led ad copy outperformed price-led copy once the product mix diversified beyond loss-leader items"
    ],
    finalOutcome: "Monthly spend grew from $6,000 to $15,000 while ROAS held at 3.4x, with the high-margin Performance Max campaign becoming the single largest contributor to profitable revenue growth in the account."
  },
  {
    id: "real-estate-lead-gen",
    categories: ["meta"],
    categoryLabel: "Meta Ads",
    title: "Building a Predictable Lead Pipeline for a Real Estate Developer",
    industry: "Real Estate",
    country: "Bangladesh",
    duration: "4 months",
    budget: "৳18,50,000 managed spend",
    tools: ["Meta Ads", "Meta Pixel", "WhatsApp Business API", "Google Sheets", "GTM"],
    resultBadge: "-54% Cost / Lead",
    accent: "#2563EB",
    chart: [40, 36, 52, 61, 70, 77, 91],
    summary: "A Dhaka-based apartment developer needed a steady flow of qualified buyer leads for two ongoing residential projects, not just form fills.",
    overview: "The developer had two mid-range residential projects actively selling units and relied heavily on referrals and a small print budget. Meta Ads had been tried briefly but abandoned after generating a high volume of low-quality leads that the sales team couldn't convert.",
    clientBackground: "With two live projects and a third in pre-launch, the sales team needed a lead source that could be filtered by budget and location interest before a call was ever made, since site visits are costly to arrange in Dhaka traffic.",
    challenge: "Early lead generation campaigns produced a flood of curious but unqualified form fills, cost per lead was high relative to the sales team's capacity to follow up, and there was no fast way to route hot leads to the right sales agent.",
    goals: [
      "Cut cost per lead while improving lead quality, not just volume",
      "Route interested buyers straight into WhatsApp for faster follow-up",
      "Build separate funnels for the two active projects",
      "Give the sales team a simple, filterable view of incoming leads"
    ],
    research: "Past sales data was reviewed to identify the budget range, family size, and location preferences of buyers who actually closed, versus those who only ever inquired. This buyer profile became the targeting and messaging foundation for both projects.",
    strategy: "Instant Forms were replaced with a click-to-WhatsApp campaign structure so interested buyers could ask questions immediately instead of waiting for a callback, combined with a qualifying question sequence inside WhatsApp before a lead was marked sales-ready.",
    campaignStructure: "Two parallel campaign sets, one per project, each running lookalike-based cold prospecting alongside a warm retargeting layer for people who had viewed the project's floor plan gallery or video walkthrough on the landing page.",
    audience: "A 2% lookalike built from the developer's past buyer list anchored cold targeting, layered with interest and behavior signals around home ownership, family life stages, and relevant neighborhoods, then narrowed further by income-indicative signals available on the platform.",
    creativeTesting: "Static floor-plan carousels were tested against short walkthrough video ads narrated in Bangla. Video consistently produced a lower cost per WhatsApp conversation, while carousels performed better for buyers already further along who wanted to compare unit layouts directly.",
    trackingSetup: "Meta Pixel and the Conversion API were connected through GTM on the landing pages, WhatsApp conversations were tagged as a custom conversion event, and a Google Sheet fed by the WhatsApp Business API gave the sales team a live, filterable lead log.",
    optimizationProcess: "Weekly reviews compared cost per WhatsApp conversation against the sales team's actual close rate per campaign, not just platform-reported cost per lead, so budget followed real sales outcomes rather than vanity metrics.",
    results: [
      { value: "-54%", label: "Cost / Lead" },
      { value: "2.3x", label: "Qualified Leads" },
      { value: "38%", label: "Faster Follow-Up" },
      { value: "9", label: "Units Reserved" }
    ],
    lessonsLearned: [
      "Click-to-WhatsApp outperformed traditional lead forms for high-consideration, high-price purchases",
      "Cost per lead is the wrong headline metric when lead quality varies this much between projects",
      "Bangla-language video walkthroughs built trust faster than English-language static creative"
    ],
    finalOutcome: "The developer moved from an abandoned, low-quality lead source to a predictable pipeline feeding both active projects, with nine units directly attributable to campaign-sourced leads within the engagement window."
  },
  {
    id: "tracking-infrastructure-rebuild",
    categories: ["tracking"],
    categoryLabel: "GA4 + GTM + Pixel",
    title: "Rebuilding Conversion Tracking After a Platform Migration",
    industry: "Tracking Implementation",
    country: "United States",
    duration: "6 weeks",
    budget: "Fixed-scope tracking engagement",
    tools: ["GA4", "Google Tag Manager", "Meta Conversion API", "Server-Side GTM", "BigQuery"],
    resultBadge: "99.2% Match Rate",
    accent: "#2563EB",
    chart: [20, 45, 58, 70, 85, 93, 99],
    summary: "A subscription e-commerce brand lost the majority of its conversion data during a platform migration and needed tracking rebuilt from the ground up before scaling ad spend again.",
    overview: "After migrating from a custom cart to Shopify Plus, the client's GA4 and Meta Pixel implementations broke silently. Purchase events stopped firing correctly, revenue reporting no longer matched Shopify's own numbers, and paid media had effectively been running blind for three weeks.",
    clientBackground: "The brand runs a monthly subscription box model with a meaningful share of revenue coming from one-time upsells at checkout, which made accurate event-level tracking (not just page views) essential to understanding true campaign performance.",
    challenge: "GA4 purchase events were firing on page load rather than on actual order confirmation, inflating conversion counts. The Meta Pixel had no server-side backup, so iOS traffic was almost entirely unmeasured, and no one on the client's team could confirm which numbers, if any, were trustworthy.",
    goals: [
      "Restore accurate, order-confirmed purchase tracking in GA4 within two weeks",
      "Stand up server-side tracking so iOS traffic loss no longer masked true performance",
      "Reconcile platform-reported revenue against Shopify's actual order data to under 2% variance",
      "Document the setup so future theme or app changes don't silently break tracking again"
    ],
    research: "A full tag audit in GTM's preview mode traced every conversion event back to its trigger, uncovering that the checkout page's new Shopify Plus template no longer matched the original DOM selectors the old tags relied on.",
    strategy: "Rather than patch the broken client-side tags, tracking was rebuilt using Shopify's native GA4 and Meta pixel data layer events combined with a server-side Google Tag Manager container, giving a first-party, browser-independent source of truth for every purchase.",
    campaignStructure: "Not applicable in the traditional sense — this was a pure tracking and measurement engagement rather than a media buying campaign, scoped specifically to data infrastructure.",
    audience: "Not applicable — no audience targeting was part of this engagement; the work was entirely on the measurement layer feeding the client's existing Meta and Google campaigns.",
    creativeTesting: "Not applicable — no ad creative was produced as part of this engagement.",
    trackingSetup: "A server-side GTM container was deployed on a first-party subdomain, receiving Shopify's checkout data layer events and forwarding deduplicated purchase events to both GA4 and Meta's Conversion API using shared event IDs. BigQuery export was enabled on GA4 for long-term raw event access.",
    optimizationProcess: "Every event was validated against real test purchases across desktop, iOS Safari, and Android Chrome before go-live, followed by a two-week parallel monitoring period comparing platform-reported revenue against Shopify's order export line by line.",
    results: [
      { value: "99.2%", label: "Event Match Rate" },
      { value: "1.4%", label: "Revenue Variance" },
      { value: "0", label: "Duplicate Purchases" },
      { value: "100%", label: "iOS Coverage Restored" }
    ],
    lessonsLearned: [
      "Client-side-only tracking is fragile against theme and checkout changes outside the marketing team's control",
      "A server-side layer pays for itself quickly once ad spend resumes on accurate data",
      "Documentation matters as much as the implementation — the next platform change should not cause the same outage"
    ],
    finalOutcome: "Within six weeks the client had a first-party, server-side tracking foundation reporting revenue within 1.4% of Shopify's own numbers, giving the media team confidence to resume and scale paid spend on trustworthy data."
  },
  {
    id: "local-business-seo-rebuild",
    categories: ["seo", "wordpress"],
    categoryLabel: "SEO + WordPress",
    title: "Rebuilding a Local Service Business's Organic Visibility",
    industry: "Local Business Services",
    country: "United Kingdom",
    duration: "8 months",
    budget: "Monthly retainer engagement",
    tools: ["WordPress", "Elementor", "Google Search Console", "GA4", "Local SEO Tools"],
    resultBadge: "+164% Organic Traffic",
    accent: "#2563EB",
    chart: [22, 30, 41, 53, 66, 80, 96],
    summary: "A regional home-services company had a slow, technically outdated WordPress site that ranked nowhere for the local searches actually driving bookings.",
    overview: "This UK-based home services company (boiler and heating repair) relied almost entirely on a directory listing and word of mouth. Their existing WordPress site was five years old, built on a heavy page-builder theme, and effectively invisible in local search for their core service areas.",
    clientBackground: "The business covers a dozen towns across two counties, competing against both large national franchises with big ad budgets and smaller local competitors who had, in several cases, better-optimised (if less polished) websites.",
    challenge: "The site loaded in over 6 seconds on mobile, had no location-specific service pages, duplicate title tags across most pages, and no structured data at all — a combination that kept it off page one for nearly every commercially relevant local search term.",
    goals: [
      "Rebuild the site on a faster, cleaner WordPress foundation",
      "Rank on page one for core service + location search terms across all 12 towns",
      "Increase organic form fills and phone calls, not just traffic",
      "Fix the Google Business Profile and local citation inconsistencies dragging down local pack rankings"
    ],
    research: "Keyword research combined search volume with commercial intent signals for every service-and-town combination, while a full technical audit in Search Console and Lighthouse identified the specific issues suppressing crawl efficiency and page speed.",
    strategy: "The site was rebuilt on a lightweight WordPress and Elementor setup with a location-page template covering each of the twelve service towns, paired with a structured on-page SEO rollout and a citation cleanup across major UK local directories.",
    campaignStructure: "Not applicable in the paid-media sense — this was an organic SEO and website rebuild engagement structured around monthly technical, content, and local-citation milestones rather than ad campaigns.",
    audience: "Search intent segments rather than ad audiences: emergency repair searchers, planned installation researchers, and comparison shoppers checking reviews, each mapped to a different page type and calls-to-action.",
    creativeTesting: "On-page testing focused on call-to-action placement and phone number visibility above the fold, since the primary conversion action was a phone call rather than a form in most emergency-intent searches.",
    trackingSetup: "GA4 was configured with call-tracking integration and form-submission events, Search Console was connected for organic query-level reporting, and Google Business Profile insights were reviewed monthly alongside organic rankings.",
    optimizationProcess: "Core Web Vitals were monitored monthly with image and script optimization passes, new location pages were published on a steady monthly cadence rather than all at once, and internal linking was restructured as new content went live to consolidate topical authority.",
    results: [
      { value: "164%", label: "Organic Traffic" },
      { value: "9/12", label: "Towns Ranking Page 1" },
      { value: "2.1s", label: "Mobile Load Time" },
      { value: "3.4x", label: "Organic Calls & Forms" }
    ],
    lessonsLearned: [
      "Page speed and duplicate metadata were suppressing rankings more than any lack of content volume",
      "Twelve genuinely localized service pages outperformed one generic service-area page by a wide margin",
      "Google Business Profile and citation consistency had an outsized effect on local pack visibility"
    ],
    finalOutcome: "Nine of the twelve target towns reached page-one local rankings within eight months, organic traffic grew 164%, and phone/form conversions from organic search more than tripled — reducing the business's reliance on directory referrals."
  },
  {
    id: "skincare-shopify-growth",
    categories: ["ecommerce", "meta"],
    categoryLabel: "Shopify Ecommerce Growth",
    title: "Scaling a Skincare Brand's Shopify Funnel End to End",
    industry: "Skincare / Beauty",
    country: "United States",
    duration: "7 months",
    budget: "$62,000 USD managed spend",
    tools: ["Shopify", "Meta Ads", "Google Ads", "Klaviyo", "GA4", "Conversion API"],
    resultBadge: "3.8x Revenue Growth",
    accent: "#2563EB",
    chart: [28, 39, 45, 58, 71, 84, 100],
    summary: "An independent skincare brand needed full-funnel growth — acquisition, checkout conversion, and retention — not just more ad spend.",
    overview: "This clean-beauty skincare brand had a strong product and loyal early customer base but a Shopify store that hadn't been optimised past its default theme setup, plus a paid media mix concentrated entirely in Meta Ads with no email or SMS retention program.",
    clientBackground: "With a five-product core line and a growing subscription option, the brand's biggest opportunity was less about generating more first-time traffic and more about converting and retaining the traffic it already had.",
    challenge: "Checkout completion rate lagged the skincare category benchmark, average order value was flat month over month, and with zero flows in Klaviyo, the brand was leaving first-purchase customers with no path back to a second order.",
    goals: [
      "Grow total revenue while improving, not just maintaining, blended ROAS",
      "Lift average order value through bundling and post-purchase upsells",
      "Build a retention program that turned first-time buyers into subscribers",
      "Diversify acquisition beyond a single ad platform"
    ],
    research: "Checkout funnel analytics were reviewed step by step to find the exact drop-off points, while a competitor and category review benchmarked pricing, bundling, and subscription mechanics against comparable clean-beauty brands.",
    strategy: "The engagement covered three fronts simultaneously: Google Shopping was added alongside Meta to diversify acquisition, the Shopify checkout and product pages were restructured around bundles and a subscribe-and-save option, and a full Klaviyo flow suite was built to capture the retention revenue the brand had been leaving on the table.",
    campaignStructure: "Meta ran cold prospecting and dynamic retargeting as in prior engagements, Google Shopping and Search were added as a second acquisition channel, and Klaviyo ran welcome, abandoned cart, post-purchase, and win-back flows layered on top of both.",
    audience: "Paid audiences mirrored the fashion and appliance engagements' structure — lookalike and interest-based cold targeting with a dedicated retargeting tier — while Klaviyo segments were built around purchase recency, product affinity, and subscription status.",
    creativeTesting: "Bundle-focused ad creative outperformed single-product ads on average order value at checkout, and a limited free-gift-with-subscription offer became the highest-converting subscription incentive tested across three variants.",
    trackingSetup: "Meta Conversion API and GA4 e-commerce tracking were implemented as a baseline, with Klaviyo's native Shopify integration providing the purchase and subscription event data needed to trigger flows accurately and attribute retention revenue separately from paid media.",
    optimizationProcess: "Weekly reviews tracked acquisition, AOV, and retention revenue as three separate levers rather than one blended number, so a strong week in one area didn't mask a problem developing in another. Klaviyo flows were A/B tested on send timing and subject lines monthly.",
    results: [
      { value: "3.8x", label: "Total Revenue Growth" },
      { value: "+31%", label: "Average Order Value" },
      { value: "22%", label: "Revenue from Email/SMS" },
      { value: "4.4x", label: "Blended ROAS" }
    ],
    lessonsLearned: [
      "Retention infrastructure was as high-leverage as any paid media optimisation in this account",
      "Bundling lifted AOV more effectively than a straightforward price increase would have",
      "Adding a second acquisition channel reduced platform-level volatility in daily revenue"
    ],
    finalOutcome: "Over seven months total revenue grew 3.8x, with email and SMS flows contributing 22% of revenue that previously didn't exist, and a diversified two-channel acquisition strategy giving the brand a more resilient growth base going into its next funding conversation."
  }
];

var GALLERY_ITEMS = [
  { title: "Meta Ads Manager — Campaign Structure", cs: "fashion-retargeting" },
  { title: "Google Shopping — Product Feed Performance", cs: "appliance-shopping-scaleup" },
  { title: "GA4 — Custom Reporting Dashboard", cs: "tracking-infrastructure-rebuild" },
  { title: "Search Console — Ranking Growth", cs: "local-business-seo-rebuild" },
  { title: "Klaviyo — Retention Flow Revenue", cs: "skincare-shopify-growth" },
  { title: "WhatsApp Lead Log — Real-Time Routing", cs: "real-estate-lead-gen" }
];

var PROCESS_STEPS = [
  { n: "01", title: "Research", desc: "Audit accounts, data, and market" },
  { n: "02", title: "Planning", desc: "Define goals, funnel, and KPIs" },
  { n: "03", title: "Setup", desc: "Build tracking and account structure" },
  { n: "04", title: "Launch", desc: "Ship campaigns and creative" },
  { n: "05", title: "Optimization", desc: "Test, refine, reallocate budget" },
  { n: "06", title: "Scaling", desc: "Grow spend on proven winners" },
  { n: "07", title: "Final Result", desc: "Report outcomes and next steps" }
];

var BEFORE_AFTER = [
  { icon: "icon-ga4", label: "Average ROAS", before: "1.6x", after: "4.2x", improve: "+163% improvement" },
  { icon: "icon-seo", label: "Organic Traffic", before: "1,240/mo", after: "3,280/mo", improve: "+164% improvement" },
  { icon: "icon-cart", label: "Cost / Conversion", before: "$46", after: "$21", improve: "-54% reduction" },
  { icon: "icon-check", label: "Checkout Completion", before: "58%", after: "79%", improve: "+21pt improvement" }
];

var TESTIMONIALS = [
  {
    quote: "Golam rebuilt our entire Meta account structure and our ROAS more than doubled in under two months. What stood out was how clearly he explained every decision — no jargon, just results we could see in our own Shopify dashboard.",
    name: "Sarah Whitfield",
    role: "Founder, DTC Fashion Brand · Canada",
    initials: "SW"
  },
  {
    quote: "Our tracking had been broken for weeks after a platform migration and we didn't even know it. The rebuild was fast, well documented, and our numbers finally match what Shopify shows. Genuinely reassuring to work with.",
    name: "Michael Chen",
    role: "Ecommerce Director, Subscription Brand · USA",
    initials: "MC"
  },
  {
    quote: "We'd tried Meta lead ads before with disappointing results. The click-to-WhatsApp approach changed everything — our sales team gets qualified conversations instead of cold form fills, and cost per lead dropped by more than half.",
    name: "Farhan Ahmed",
    role: "Sales Head, Residential Developer · Bangladesh",
    initials: "FA"
  }
];

var FAQS = [
  {
    q: "How do you measure success across different types of campaigns?",
    a: "Every engagement starts with agreeing on the metric that actually matters for that business — blended ROAS for ecommerce, cost per qualified lead for real estate, organic ranking and call volume for SEO. Vanity metrics like raw click volume are reported for context but never used to judge success on their own."
  },
  {
    q: "Do you require a minimum ad spend or contract length?",
    a: "There's no fixed minimum spend, but most accounts need a realistic budget to reach statistical significance for testing — this is discussed openly during the initial audit. Engagements typically run month to month after an initial commitment period agreed upfront, with no long-term lock-in."
  },
  {
    q: "What happens if our tracking is already broken when we start?",
    a: "Tracking is audited before any media strategy work begins. If purchase or lead data isn't trustworthy, fixing that comes first — running paid media on broken data usually causes more harm than running with a smaller budget on accurate data."
  },
  {
    q: "Can you work alongside our existing in-house or agency team?",
    a: "Yes — several engagements have run alongside an in-house designer, a separate SEO consultant, or an internal customer service team handling WhatsApp responses. Clear scope boundaries are agreed at the start so responsibilities don't overlap or fall through the cracks."
  },
  {
    q: "Which platforms and tools do you specialize in?",
    a: "Meta Ads, Google Ads, GA4, Google Tag Manager (including server-side), Meta Conversion API, WordPress/WooCommerce, and Shopify. For platforms outside that core set, that's said upfront rather than taking on work outside proven expertise."
  },
  {
    q: "How quickly can we expect to see results?",
    a: "Tracking and account-structure fixes typically show measurable impact within 2-4 weeks. Paid media efficiency gains usually stabilize over 6-8 weeks as the algorithm exits its learning phase. SEO is the slowest lever, with meaningful ranking movement typically taking 3-6 months."
  }
];

/* -----------------------------------------------------------
   SVG COVER GENERATOR — abstract dashboard/chart mockups in
   the site's own accent color, not stock photography.
   ----------------------------------------------------------- */
function buildCoverSVG(cs, w, h) {
  w = w || 400; h = h || 220;
  var bars = cs.chart;
  var max = Math.max.apply(null, bars);
  var padX = 28, padTop = 64, padBottom = 26;
  var chartW = w - padX * 2;
  var chartH = h - padTop - padBottom;
  var bw = chartW / bars.length * 0.55;
  var gap = chartW / bars.length;
  var barsSvg = "";
  for (var i = 0; i < bars.length; i++) {
    var bh = (bars[i] / max) * chartH;
    var x = padX + i * gap + (gap - bw) / 2;
    var y = padTop + chartH - bh;
    var isLast = i === bars.length - 1;
    barsSvg += '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + bh.toFixed(1) + '" rx="4" fill="' + (isLast ? cs.accent : "#DBEAFE") + '"></rect>';
  }
  return (
    '<svg viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + escAttr(cs.title) + ' performance chart">' +
      '<rect width="' + w + '" height="' + h + '" fill="#F8FAFC"></rect>' +
      '<circle cx="24" cy="22" r="5" fill="#E5E7EB"></circle>' +
      '<circle cx="42" cy="22" r="5" fill="#E5E7EB"></circle>' +
      '<circle cx="60" cy="22" r="5" fill="#E5E7EB"></circle>' +
      '<rect x="20" y="38" width="120" height="10" rx="5" fill="#111827"></rect>' +
      '<rect x="' + (w - 90) + '" y="34" width="70" height="18" rx="9" fill="' + cs.accent + '" opacity="0.12"></rect>' +
      '<text x="' + (w - 55) + '" y="47" text-anchor="middle" font-family="Poppins, sans-serif" font-size="11" font-weight="700" fill="' + cs.accent + '">' + escAttr(cs.resultBadge.split(" ")[0]) + '</text>' +
      barsSvg +
      '<line x1="' + padX + '" y1="' + (padTop + chartH) + '" x2="' + (w - padX) + '" y2="' + (padTop + chartH) + '" stroke="#E5E7EB" stroke-width="1"></line>' +
    '</svg>'
  );
}

function escAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function findCS(id) {
  for (var i = 0; i < CASE_STUDIES.length; i++) {
    if (CASE_STUDIES[i].id === id) return CASE_STUDIES[i];
  }
  return null;
}

/* -----------------------------------------------------------
   INIT
   ----------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  initNavbar();
  initMobileMenu();
  renderHeroStats();
  renderCaseStudyGrid();
  renderDashboard();
  renderGallery();
  renderProcessStepper();
  renderBeforeAfter();
  renderTestimonials();
  renderFAQ();
  initScrollReveal();
  initCounters();
  initPortfolioFilter();
  initModal();
  initLightbox();
  initFooterYear();
});

/* ---------- Sticky navbar shadow on scroll ---------- */
function initNavbar() {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;
  function onScroll() {
    if (window.scrollY > 12) navbar.classList.add('is-scrolled');
    else navbar.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- Mobile / tablet hamburger menu ---------- */
function initMobileMenu() {
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Hero quick stats ---------- */
function renderHeroStats() {
  var el = document.getElementById('heroStats');
  if (!el) return;
  var stats = [
    { icon: 'icon-cart', num: 48, suffix: '+', label: 'Campaigns Managed' },
    { icon: 'icon-ga4', num: 640, prefix: '$', suffix: 'K+', label: 'Ad Spend Managed' },
    { icon: 'icon-check', num: 4, decimals: 1, suffix: 'x', label: 'Average ROAS' },
    { icon: 'icon-mail', num: 32, suffix: '+', label: 'Clients Served' }
  ];
  el.innerHTML = stats.map(function (s) {
    return (
      '<div class="hero-stat" data-reveal>' +
        '<div class="icon-badge"><svg width="20" height="20" class="icon"><use href="#' + s.icon + '"></use></svg></div>' +
        '<div class="stat-num">' + (s.prefix || '') + '<span class="counter" data-count="' + s.num + '" data-decimals="' + (s.decimals || 0) + '">0</span><span class="unit">' + (s.suffix || '') + '</span></div>' +
        '<div class="stat-label">' + s.label + '</div>' +
      '</div>'
    );
  }).join('');
}

/* ---------- Case study grid ---------- */
function renderCaseStudyGrid() {
  var grid = document.getElementById('csGrid');
  if (!grid) return;
  grid.innerHTML = CASE_STUDIES.map(function (cs, i) {
    var reveal = (i % 3 === 0) ? 'left' : (i % 3 === 2) ? 'right' : '';
    return (
      '<article class="cs-card" data-categories="' + cs.categories.join(' ') + '" data-reveal="' + reveal + '">' +
        '<div class="cs-cover">' +
          buildCoverSVG(cs, 400, 220) +
          '<span class="cs-category-tag">' + cs.categoryLabel + '</span>' +
          '<span class="cs-result-badge"><svg width="13" height="13" class="icon"><use href="#icon-check"></use></svg>' + cs.resultBadge + '</span>' +
        '</div>' +
        '<div class="cs-body">' +
          '<div class="cs-meta-row">' +
            '<span><svg width="14" height="14" class="icon"><use href="#icon-cart"></use></svg>' + cs.industry + '</span>' +
            '<span><svg width="14" height="14" class="icon"><use href="#icon-looker"></use></svg>' + cs.country + '</span>' +
          '</div>' +
          '<h3>' + cs.title + '</h3>' +
          '<p class="cs-summary">' + cs.summary + '</p>' +
          '<div class="cs-facts">' +
            '<div class="cs-fact"><div class="cs-fact-label">Duration</div><div class="cs-fact-value">' + cs.duration + '</div></div>' +
            '<div class="cs-fact"><div class="cs-fact-label">Budget</div><div class="cs-fact-value">' + cs.budget + '</div></div>' +
          '</div>' +
          '<div class="cs-tools">' + cs.tools.map(function (t) { return '<span class="cs-tool-pill">' + t + '</span>'; }).join('') + '</div>' +
          '<button class="cs-view-btn" data-open-cs="' + cs.id + '">View Case Study <svg width="16" height="16" class="icon"><use href="#icon-arrow-right"></use></svg></button>' +
        '</div>' +
      '</article>'
    );
  }).join('');
}

/* ---------- Performance dashboard ---------- */
function renderDashboard() {
  var el = document.getElementById('dashboardGrid');
  if (!el) return;
  var kpis = [
    { icon: 'icon-check', num: 4.4, decimals: 1, suffix: 'x', label: 'Average ROAS', trend: '+38%' },
    { icon: 'icon-cart', num: 1.8, decimals: 1, prefix: '$', suffix: 'M+', label: 'Client Revenue Generated', trend: '+52%' },
    { icon: 'icon-seo', num: 3.6, decimals: 1, suffix: '%', label: 'Average CTR', trend: '+19%' },
    { icon: 'icon-ga4', num: 24, prefix: '$', label: 'Average CPA', trend: '-31%' },
    { icon: 'icon-google', num: 0.85, decimals: 2, prefix: '$', label: 'Average CPC', trend: '-17%' },
    { icon: 'icon-woo', num: 9200, suffix: '+', label: 'Purchases Driven', trend: '+64%' },
    { icon: 'icon-mail', num: 18, prefix: '$', label: 'Average Lead Cost', trend: '-54%' },
    { icon: 'icon-arrow-right', num: 14600, suffix: '+', label: 'Total Conversions', trend: '+47%' }
  ];
  el.innerHTML = kpis.map(function (k) {
    return (
      '<div class="kpi-card" data-reveal>' +
        '<div class="kpi-card-top">' +
          '<div class="kpi-icon"><svg width="20" height="20" class="icon"><use href="#' + k.icon + '"></use></svg></div>' +
          '<span class="kpi-trend"><svg width="12" height="12" class="icon"><use href="#icon-arrow-right"></use></svg>' + k.trend + '</span>' +
        '</div>' +
        '<div class="kpi-value">' + (k.prefix || '') + '<span class="counter" data-count="' + k.num + '" data-decimals="' + (k.decimals || 0) + '">0</span><span class="unit">' + (k.suffix || '') + '</span></div>' +
        '<div class="kpi-label">' + k.label + '</div>' +
      '</div>'
    );
  }).join('');
}

/* ---------- Campaign gallery ---------- */
function renderGallery() {
  var el = document.getElementById('galleryGrid');
  if (!el) return;
  el.innerHTML = GALLERY_ITEMS.map(function (g, i) {
    var cs = findCS(g.cs);
    return (
      '<div class="gallery-item" data-reveal data-gallery-index="' + i + '">' +
        '<div class="gallery-frame">' + buildCoverSVG(cs, 400, 240) + '</div>' +
        '<div class="gallery-caption"><span>' + g.title + '</span><span class="gallery-zoom-icon"><svg width="16" height="16" class="icon"><use href="#icon-search"></use></svg></span></div>' +
      '</div>'
    );
  }).join('');
}

/* ---------- Process stepper ---------- */
function renderProcessStepper() {
  var el = document.getElementById('processStepper');
  if (!el) return;
  el.innerHTML = PROCESS_STEPS.map(function (s) {
    return (
      '<div class="process-step" data-reveal>' +
        '<div class="process-dot">' + s.n + '</div>' +
        '<h4>' + s.title + '</h4>' +
        '<p>' + s.desc + '</p>' +
      '</div>'
    );
  }).join('');
}

/* ---------- Before / after ---------- */
function renderBeforeAfter() {
  var el = document.getElementById('baGrid');
  if (!el) return;
  el.innerHTML = BEFORE_AFTER.map(function (b) {
    return (
      '<div class="ba-card" data-reveal>' +
        '<div class="ba-card-head"><span class="icon-badge"><svg width="17" height="17" class="icon"><use href="#' + b.icon + '"></use></svg></span><span>' + b.label + '</span></div>' +
        '<div class="ba-compare">' +
          '<div class="ba-col before"><div class="ba-tag">Before</div><div class="ba-num">' + b.before + '</div></div>' +
          '<div class="ba-arrow"><svg width="18" height="18" class="icon"><use href="#icon-arrow-right"></use></svg></div>' +
          '<div class="ba-col after"><div class="ba-tag">After</div><div class="ba-num">' + b.after + '</div></div>' +
        '</div>' +
        '<div class="ba-improve">' + b.improve + '</div>' +
      '</div>'
    );
  }).join('');
}

/* ---------- Testimonials ---------- */
function renderTestimonials() {
  var el = document.getElementById('testimonialGrid');
  if (!el) return;
  var stars = '<svg width="16" height="16" class="icon"><use href="#icon-star"></use></svg>'.repeat(5);
  el.innerHTML = TESTIMONIALS.map(function (t) {
    return (
      '<div class="testimonial-card" data-reveal>' +
        '<div class="testimonial-stars">' + stars + '</div>' +
        '<p class="testimonial-quote">"' + t.quote + '"</p>' +
        '<div class="testimonial-person">' +
          '<div class="testimonial-avatar">' + t.initials + '</div>' +
          '<div><h5>' + t.name + '</h5><span>' + t.role + '</span></div>' +
        '</div>' +
      '</div>'
    );
  }).join('');
}

/* ---------- FAQ accordion ---------- */
function renderFAQ() {
  var el = document.getElementById('faqList');
  if (!el) return;
  el.innerHTML = FAQS.map(function (f, i) {
    return (
      '<div class="faq-item" id="faq-' + i + '">' +
        '<button class="faq-question" aria-expanded="false" aria-controls="faq-answer-' + i + '">' +
          '<span>' + f.q + '</span>' +
          '<svg width="18" height="18" class="icon chev"><use href="#icon-chevron"></use></svg>' +
        '</button>' +
        '<div class="faq-answer" id="faq-answer-' + i + '"><div class="faq-answer-inner">' + f.a + '</div></div>' +
      '</div>'
    );
  }).join('');

  el.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var answer = item.querySelector('.faq-answer');
      var isOpen = item.classList.contains('open');

      el.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-answer').style.maxHeight = null;
          openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = null;
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ---------- Fade / slide reveal on scroll ---------- */
function initScrollReveal() {
  var items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  items.forEach(function (el) { observer.observe(el); });
}

/* ---------- Animated number counters (supports decimals) ---------- */
function initCounters() {
  var counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var decimals = parseInt(el.getAttribute('data-decimals'), 10) || 0;
    var duration = 1400;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = eased * target;
      el.textContent = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = decimals > 0 ? target.toFixed(decimals) : Math.round(target).toLocaleString();
      }
    }
    requestAnimationFrame(step);
  }

  if (!('IntersectionObserver' in window)) {
    counters.forEach(animateCounter);
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(function (el) { observer.observe(el); });
}

/* ---------- Filter ---------- */
function initPortfolioFilter() {
  var buttons = document.querySelectorAll('.filter-btn');
  var countEl = document.getElementById('filterCount');
  if (!buttons.length) return;

  function applyFilter(filter) {
    var cards = document.querySelectorAll('.cs-card');
    var visible = 0;
    cards.forEach(function (card) {
      var cats = (card.getAttribute('data-categories') || '').split(' ');
      var match = filter === 'all' || cats.indexOf(filter) > -1;
      card.classList.toggle('is-hidden', !match);
      if (match) visible++;
    });
    if (countEl) countEl.innerHTML = 'Showing <strong>' + visible + '</strong> of <strong>' + CASE_STUDIES.length + '</strong> case studies';
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      applyFilter(btn.getAttribute('data-filter'));
    });
  });

  applyFilter('all');
}

/* ---------- Case study detail modal ---------- */
function initModal() {
  var overlay = document.getElementById('csModalOverlay');
  var modal = document.getElementById('csModal');
  if (!overlay || !modal) return;

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-open-cs]');
    if (trigger) {
      openModal(trigger.getAttribute('data-open-cs'));
      return;
    }
    if (e.target.closest('[data-close-modal]') || e.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  function openModal(id) {
    var cs = findCS(id);
    if (!cs) return;

    var kpisHtml = cs.results.map(function (r) {
      return '<div class="cs-modal-kpi"><div class="kpi-num">' + r.value + '</div><div class="kpi-lbl">' + r.label + '</div></div>';
    }).join('');

    var sections = [
      ['icon-check', 'Overview', cs.overview],
      ['icon-cart', 'Client Background', cs.clientBackground],
      ['icon-search', 'Challenge', cs.challenge],
      ['icon-arrow-right', 'Goals', cs.goals],
      ['icon-seo', 'Research', cs.research],
      ['icon-ga4', 'Strategy', cs.strategy],
      ['icon-gtm', 'Campaign Structure', cs.campaignStructure],
      ['icon-mail', 'Audience', cs.audience],
      ['icon-canva', 'Creative Testing', cs.creativeTesting],
      ['icon-elementor', 'Tracking Setup', cs.trackingSetup],
      ['icon-looker', 'Optimization Process', cs.optimizationProcess]
    ];

    var bodyHtml = sections.map(function (s) {
      var content = Array.isArray(s[2])
        ? '<ul>' + s[2].map(function (li) { return '<li>' + li + '</li>'; }).join('') + '</ul>'
        : '<p>' + s[2] + '</p>';
      return '<div class="cs-modal-section"><h4><svg width="14" height="14" class="icon"><use href="#' + s[0] + '"></use></svg>' + s[1] + '</h4>' + content + '</div>';
    }).join('');

    bodyHtml += '<div class="cs-modal-section"><h4><svg width="14" height="14" class="icon"><use href="#icon-check"></use></svg>Results</h4><div class="cs-modal-kpis">' + kpisHtml + '</div></div>';
    bodyHtml += '<div class="cs-modal-section"><h4><svg width="14" height="14" class="icon"><use href="#icon-star"></use></svg>Lessons Learned</h4><ul>' + cs.lessonsLearned.map(function (li) { return '<li>' + li + '</li>'; }).join('') + '</ul></div>';
    bodyHtml += '<div class="cs-modal-section"><h4><svg width="14" height="14" class="icon"><use href="#icon-arrow-right"></use></svg>Final Outcome</h4><p>' + cs.finalOutcome + '</p></div>';

    modal.innerHTML =
      '<div class="cs-modal-hero">' +
        buildCoverSVG(cs, 920, 220) +
        '<div class="cs-modal-hero-overlay"><h2>' + cs.title + '</h2></div>' +
        '<button class="cs-modal-close" data-close-modal aria-label="Close case study"><svg width="18" height="18" class="icon"><use href="#icon-close"></use></svg></button>' +
      '</div>' +
      '<div class="cs-modal-body">' +
        '<div class="cs-modal-meta">' +
          '<div><div class="lbl">Industry</div><div class="val">' + cs.industry + '</div></div>' +
          '<div><div class="lbl">Country</div><div class="val">' + cs.country + '</div></div>' +
          '<div><div class="lbl">Duration</div><div class="val">' + cs.duration + '</div></div>' +
          '<div><div class="lbl">Budget</div><div class="val">' + cs.budget + '</div></div>' +
        '</div>' +
        bodyHtml +
      '</div>';

    overlay.classList.add('show');
    document.body.classList.add('modal-open');
    overlay.scrollTop = 0;
  }

  function closeModal() {
    overlay.classList.remove('show');
    document.body.classList.remove('modal-open');
  }
}

/* ---------- Gallery lightbox ---------- */
function initLightbox() {
  var overlay = document.getElementById('lightboxOverlay');
  var box = document.getElementById('lightboxBox');
  var imageWrap = document.getElementById('lightboxImageWrap');
  var caption = document.getElementById('lightboxCaption');
  if (!overlay || !box || !imageWrap) return;

  document.addEventListener('click', function (e) {
    var item = e.target.closest('.gallery-item');
    if (item) {
      var idx = parseInt(item.getAttribute('data-gallery-index'), 10);
      var g = GALLERY_ITEMS[idx];
      var cs = findCS(g.cs);
      imageWrap.innerHTML = buildCoverSVG(cs, 780, 460);
      caption.textContent = g.title;
      overlay.classList.add('show');
      document.body.classList.add('modal-open');
      return;
    }
    if (e.target.closest('[data-close-lightbox]') || e.target === overlay) {
      overlay.classList.remove('show');
      document.body.classList.remove('modal-open');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      overlay.classList.remove('show');
      document.body.classList.remove('modal-open');
    }
  });
}

/* ---------- Footer year ---------- */
function initFooterYear() {
  var el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}
