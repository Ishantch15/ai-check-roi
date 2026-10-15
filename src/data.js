// Checklist content — edit freely. Each section has a title, a short note and its checks.
export const sections = [
  {
    id: 'access',
    title: 'Technical Access',
    note: "If AI crawlers can't reach or read your pages, nothing else on this list matters. Using Cloudflare? Check its AI bot settings — some crawlers are blocked by default.",
    items: [
      'Check robots.txt, firewall (WAF) and CDN rules so the AI crawlers you approve can reach your most important pages.',
      'Look at server logs to confirm AI crawlers are visiting and getting clean 200 responses, not errors.',
      'Make sure key content is in the rendered HTML — not hidden behind tabs, clicks or heavy JavaScript.',
      'Turn on IndexNow (via your CMS or CDN) so new and updated pages are discovered faster.',
    ],
  },
  {
    id: 'test',
    title: 'Run an AI Visibility Test',
    note: 'AI answers change from run to run. Repeat each prompt in fresh sessions, several times a day over a few days, and judge by the pattern — not a single answer.',
    items: [
      'Open a temporary / incognito chat in ChatGPT, Gemini, Claude, Perplexity or another assistant.',
      'Ask a non-branded question, e.g. "What are the best [service] providers in [city / category]?"',
      'Add a real buyer need, budget or constraint to the prompt and note how the recommendations shift.',
      'Once the non-branded tests are done, ask AI to compare you with a key competitor on an important buying factor.',
      'Note whether your brand is mentioned, actually recommended, linked or cited, and described correctly.',
      'Log the exact prompt, platform, model, date and full answer for every run.',
    ],
  },
  {
    id: 'content',
    title: 'Structure & Content',
    note: 'AI pulls answers from pages that are clear, specific and easy to quote.',
    items: [
      'Start with the pages that already show up in AI answers or bring in AI referral traffic.',
      "State each page's main topic plainly in the title tag, H1 and first paragraph.",
      'Answer the comparison and follow-up questions buyers actually ask AI tools.',
      'Pick the format that fits: tables for comparisons, numbered steps for how-tos, FAQs only for genuinely repeated questions.',
      'Publish original data, expert opinion or first-hand experience that others would want to cite.',
      'Audit your content for topic gaps, overlapping pages and pages without a clear focus.',
    ],
  },
  {
    id: 'pr',
    title: 'Digital PR for AI',
    note: 'AI trusts what others say about you as much as what you say about yourself.',
    items: [
      'Find out which publications, experts and third-party sites AI cites for your priority buyer questions.',
      'List the journalists and outlets covering your niche (platforms like Qwoted are a good starting point).',
      "Pitch quotable expert commentary, data or unique insight that makes journalists' jobs easier.",
      'Track brand mentions as well as backlinks — language models use both as context.',
      'Get your brand mentioned alongside the topics you want to be known for (co-citations).',
      'Reuse earned coverage on your site: press page, author/expert profiles and supporting content.',
      'Check that AI answers reflect the facts, expertise and positioning your coverage established.',
    ],
  },
  {
    id: 'measure',
    title: 'Measurement & Monitoring',
    note: 'Tie AI visibility back to traffic, leads and revenue — not just mentions.',
    items: [
      "Use Google Search Console and Bing Webmaster Tools' AI performance data for first-party visibility numbers.",
      'Set up an AI referral channel in GA4 to track visits, conversions and revenue from AI assistants.',
      'Use Microsoft Clarity to review AI referrals, crawler activity, on-site behaviour and conversions.',
      'Re-test the same buyer questions every week across ChatGPT, Google AI Mode, Copilot and Perplexity.',
      'Keep a shared scorecard: mention rate, citations, answer accuracy and which competitors appear.',
    ],
  },
]

export const expert = {
  name: 'Zeeshan Siddiqui',
  role: 'SEO & AEO Strategy · ROI Spectrum',
  photo: './zeeshan.webp',
  linkedin: 'https://www.linkedin.com/in/zeeshan-siddiqui/',
  authorPage: 'https://roispectrum.com/author/zeeshan-siddiqui/',
  bio: [
    'Zeeshan Siddiqui works across SEO, digital marketing, technology and data-driven growth at ROI Spectrum. His focus is understanding search trends, website performance, content and user behaviour — and turning that into strategies that bring in the right audience.',
    'He writes practical guides on organic growth, website optimisation and analytics, with one goal: make complex search concepts simple enough for any business to act on, and build visibility that lasts.',
  ],
}

export const caseStudies = [
  {
    tag: 'E-commerce · UK',
    title: 'Personalised Wholesale Blanks',
    summary: 'Technical SEO, entity-rich content and internal linking grew organic sessions to 56.6K and pushed attributed goal value to £5.1M.',
    image: 'https://roispectrum.com/wp-content/uploads/2026/07/organic_com_0c2c1cc28c.png',
    url: 'https://roispectrum.com/seo-case-study-personalise-wholesaleblanks-co-uk/',
    stats: [
      { value: '+823K', label: 'impressions' },
      { value: '+60K', label: 'sessions' },
      { value: '£5.1M', label: 'goal value' },
    ],
  },
  {
    tag: 'B2B Services · Canada',
    title: 'MCA Group — Commercial Cleaning',
    summary: '12-month local SEO program made organic search MCA\'s main growth channel — and ranked them #1 in AI answers for commercial cleaning in Toronto.',
    image: 'https://roispectrum.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-22-2026-07_17_20-PM-1.png',
    url: 'https://roispectrum.com/case-study-of-commercial-cleaning-company/',
    stats: [
      { value: '65.5K', label: 'sessions' },
      { value: '+1,356', label: 'conversions' },
      { value: '#1', label: 'in AI answers' },
    ],
  },
  {
    tag: 'Local Services · USA',
    title: 'North County Spa',
    summary: 'Built organic search from zero — 8.2K sessions in 8 months with 70% engagement, ranking for high-intent local massage searches in Carlsbad, CA.',
    image: 'https://roispectrum.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-22-2026-07_23_58-PM-1.png',
    url: 'https://roispectrum.com/north-county-spa-seo-case-study/',
    stats: [
      { value: '8.2K', label: 'organic sessions' },
      { value: '86.6%', label: 'search visibility' },
      { value: '408K', label: 'impressions' },
    ],
  },
  {
    tag: 'Creator Economy · Canada',
    title: 'Maya Nujaim — Pianist',
    summary: 'Social strategy, an e-commerce site, and analytics helped an independent pianist grow her audience, sell sheet music online, and land musician collaborations.',
    image: 'https://roispectrum.com/wp-content/uploads/2026/09/Untitled-design.jpg',
    url: 'https://roispectrum.com/maya-nujaim-pianist-digital-transformation/',
    stats: [
      { value: '107K', label: 'Instagram followers' },
      { value: '558', label: 'posts published' },
      { value: '+508', label: 'followers in 1 week' },
    ],
  },
]

// Where form submissions are delivered (via FormSubmit.co — no backend needed)
export const FORM_EMAIL = 'digvijay@roispectrum.com'
