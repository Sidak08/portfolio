/**
 * Shared project data configuration for both mobile and desktop layouts
 * Contains icon mappings and complete project dataset
 */

// ============================================================================
// TECHNOLOGY ICONS CONFIGURATION
// ============================================================================

/**
 * Icon mapping object for technology stack visualization
 * Maps technology names to their respective logo file paths
 */
export const icons = {
  adobe: "/logos/adobe.png",
  amplify: "/logos/amplify.png",
  auth0: "/logos/auth0.png",
  aws: "/logos/aws.png",
  chatGpt: "/logos/chatGpt.png",
  expo: "/logos/expo.png",
  gemeni: "/logos/gemeni.png",
  git: "/logos/git.png",
  insomnia: "/logos/insomnia.png",
  js: "/logos/js.png",
  materialUi: "/logos/materialUi.png",
  mediaPipe: "/logos/mediaPipe.png",
  mongoDb: "/logos/mongoDb.png",
  mySql: "/logos/mySql.png",
  near: "/logos/near.png",
  nextJs: "/logos/nextJs.png",
  nodeJs: "/logos/nodeJs.png",
  npm: "/logos/npm.png",
  puppeteer: "/logos/puppeteer.png",
  python: "/logos/python.png",
  react: "/logos/react.png",
  stripe: "/logos/stripe.png",
  tailwind: "/logos/tailwind.png",
  tensorflow: "/logos/tensorflow.png",
  threeJs: "/logos/threeJs.png",
  ts: "/logos/ts.png",
  vercel: "/logos/vercel.png",
};

// ============================================================================
// PROJECTS DATA CONFIGURATION
// ============================================================================

/**
 * Complete projects dataset containing all project information
 * Each project includes:
 * - id: Unique identifier for the project
 * - title: Project display name
 * - description: Concise, detailed project highlights
 * - image: Main project screenshot/image
 * - icons: Array of technology icons used
 * - links: Array of external links (demo, GitHub, live site)
 * - color: Primary accent color for the project theme
 */
export const projects = [
  {
    id: 1,
    title: "Scrapyard Brampton",
    description: [
      "Founded and organized a high school-exclusive hackathon for **70+ participants**.",
      "Led event logistics, programming, and mentorship experiences from planning through execution.",
      "Secured **$20,000+ in sponsorships** and drove **30,000+ social-media views** through campaign strategy.",
    ],
    image: "/project_images/ScrapyardOrganizers.JPG",
    icons: [],
    links: [
      {
        aval: true,
        type: "website",
        icons: "/project_logos/external_link.png",
        link: "https://scrapyard.hackclub.com/toronto",
        text: "Visit Site",
      },
    ],
    color: "#FF6B35",
  },
  {
    id: 2,
    title: "RSVP System",
    description: [
      "Built a **15,000-line reservation-management PWA** across **78 files**.",
      "Created an **interactive floor-plan editor** for mapping restaurant tables and seats.",
      "Enabled staff-managed reservations and **restaurant-specific booking links** for guests.",
    ],
    image: "/project_images/rsvp-sys.png",
    icons: [
      icons.js,
      icons.mongoDb,
      icons.nextJs,
      icons.tailwind,
      icons.react,
      icons.stripe,
      icons.git,
      icons.npm,
      icons.insomnia,
      icons.vercel,
    ],
    links: [
      {
        aval: true,
        type: "video",
        icons: "/project_logos/youtube.png",
        link: "https://youtu.be/Cdt1e-P3qYs",
        text: "Demo",
      },
      {
        aval: true,
        type: "github",
        icons: "/project_logos/github.png",
        link: "https://github.com/Sidak08/RsvpSysNext",
        text: "Github",
      },
      {
        aval: true,
        type: "website",
        icons: "/project_logos/external_link.png",
        link: "https://rsvp-sys-next.vercel.app/",
        text: "bestseat.study",
      },
    ],
    color: "#cf2f97",
  },
  {
    id: 3,
    title: "Portfolio",
    description: [
      "Designed and developed a **responsive portfolio** to present projects, skills, and experience.",
      "Showcases **hackathon work** and the learning journey that shaped my interest in software development.",
      "Built with a custom visual system, interactive sections, and desktop/mobile-specific layouts.",
    ],
    image: "/project_images/portfolio.png",
    icons: [
      icons.js,
      icons.nextJs,
      icons.tailwind,
      icons.react,
      icons.git,
      icons.npm,
      icons.vercel,
    ],
    links: [
      {
        aval: true,
        type: "video",
        icons: "/project_logos/youtube.png",
        link: "https://www.sidak.dev/",
        text: "Demo",
      },
      {
        aval: true,
        type: "github",
        icons: "/project_logos/github.png",
        link: "https://github.com/Sidak08/portfolio",
        text: "Github",
      },
      {
        aval: true,
        type: "website",
        icons: "/project_logos/external_link.png",
        link: "https://www.sidak.dev/",
        text: "Visit Site",
      },
    ],
    color: "#ED256C",
  },
  {
    id: 4,
    title: "Ios-status-bar",
    description: [
      "Published my **first npm package** to simplify iOS status-bar customization in Expo apps.",
      "Developed a practical workaround for a platform area that is normally difficult to control.",
      "Reached **1,000+ downloads** by packaging the solution for other React Native developers.",
    ],
    image: "/project_images/ios-status-bar.png",
    icons: [icons.js, icons.react, icons.git, icons.npm, icons.expo],
    links: [
      {
        aval: true,
        type: "video",
        icons: "/project_logos/youtube.png",
        link: "",
        text: "Demo",
      },
      {
        aval: true,
        type: "github",
        icons: "/project_logos/github.png",
        link: "https://github.com/Sidak08/Status-Bar",
        text: "Github",
      },
      {
        aval: true,
        type: "website",
        icons: "/project_logos/external_link.png",
        link: "https://www.npmjs.com/package/ios-status-bar",
        text: "NPM Package",
      },
    ],
    color: "#C763F4",
  },
  {
    id: 5,
    title: "Ai-que-cards",
    description: [
      "Built in **under 24 hours** at GDSC Hacks to turn lecture recordings into study materials.",
      "Transcribes audio and uses **Gemini** to generate structured cue cards with response validation.",
      "Uses **MediaPipe hand tracking**: a fist reveals answers and an in-air swipe advances cards.",
    ],
    image: "/project_images/ai-que-cards.png",
    icons: [
      icons.js,
      icons.react,
      icons.git,
      icons.mediaPipe,
      icons.npm,
      icons.nextJs,
      icons.vercel,
      icons.expo,
    ],
    links: [
      {
        aval: true,
        type: "video",
        icons: "/project_logos/youtube.png",
        link: "",
        text: "Demo",
      },
      {
        aval: true,
        type: "github",
        icons: "/project_logos/github.png",
        link: "https://github.com/Sidak08/AIQueCards",
        text: "Github",
      },
      {
        aval: true,
        type: "website",
        icons: "/project_logos/external_link.png",
        link: "https://ai-que-cards.vercel.app/",
        text: "Visit Site",
      },
    ],
    color: "#A396F9",
  },
  {
    id: 6,
    title: "Boom-Box.ai",
    description: [
      "Created a retro, **fully interactive boombox interface** for UofT Hacks 2023.",
      "Mapped playback and volume controls directly to the physical controls in the visual UI.",
      "Used **facial analysis** to estimate mood and generate Spotify-connected playlists.",
    ],
    image: "/project_images/boombox.png",
    icons: [
      icons.js,
      icons.react,
      icons.git,
      icons.mediaPipe,
      icons.nodeJs,
      icons.tensorflow,
      icons.npm,
    ],
    links: [
      {
        aval: true,
        type: "video",
        icons: "/project_logos/youtube.png",
        link: "",
        text: "Demo",
      },
      {
        aval: true,
        type: "github",
        icons: "/project_logos/github.png",
        link: "https://github.com/Sidak08/boombox.ai",
        text: "Github",
      },
      {
        aval: true,
        type: "website",
        icons: "/project_logos/external_link.png",
        link: "https://boombox-ai.vercel.app/",
        text: "Visit Site",
      },
    ],
    color: "#75D8FF",
  },
  {
    id: 7,
    title: "UNI-Sign",
    description: [
      "Built an **accessibility-focused tool** that interprets photographed hand signs as letters.",
      "Classifies signs with a **Random Forest model** and presents predictions in a web interface.",
      "Translates predicted text into a selected language through the Google Translate API.",
    ],
    image: "/project_images/uni-sign.png",
    icons: [
      icons.js,
      icons.react,
      icons.git,
      icons.mediaPipe,
      icons.nodeJs,
      icons.tensorflow,
      icons.npm,
    ],
    links: [
      {
        aval: true,
        type: "video",
        icons: "/project_logos/youtube.png",
        link: "",
        text: "Demo",
      },
      {
        aval: true,
        type: "github",
        icons: "/project_logos/github.png",
        link: "",
        text: "Github",
      },
      {
        aval: true,
        type: "website",
        icons: "/project_logos/external_link.png",
        link: "",
        text: "Visit Site",
      },
    ],
    color: "#CF2F97",
  },
  {
    id: 8,
    title: "Predicturf",
    description: [
      "Built a prediction platform combining match forecasts, leaderboards, and wallet-based participation.",
      "Integrated **NEAR wallet connectivity** with a dashboard powered by a custom machine-learning model.",
      "Added adjustable wager amounts and **GPT-4-generated NFT stickers** linked to Adobe Express wallets.",
    ],
    image: "/project_images/predicturf.png",
    icons: [
      icons.js,
      icons.react,
      icons.git,
      icons.tensorflow,
      icons.npm,
      icons.near,
      icons.chatGpt,
      icons.adobe,
    ],
    links: [
      {
        aval: true,
        type: "video",
        icons: "/project_logos/youtube.png",
        link: "",
        text: "Demo",
      },
      {
        aval: true,
        type: "github",
        icons: "/project_logos/github.png",
        link: "https://github.com/Sidak08/PredicTurf-hawkHacks2024",
        text: "Github",
      },
      {
        aval: true,
        type: "website",
        icons: "/project_logos/external_link.png",
        link: "https://predicturf-c9fkfmzss-sidaks-projects-86f5ddf1.vercel.app/",
        text: "Visit Site",
      },
    ],
    color: "#ED256C",
  },
  {
    id: 9,
    title: "Ecoquest",
    description: [
      "Created a sustainability platform organized around the **17 UN Sustainable Development Goals**.",
      "Guides users through practical actions that contribute to environmental and social impact.",
      "Uses **AI verification and rewards** to encourage consistent, collective participation.",
    ],
    image: "/project_images/eco-quest.png",
    icons: [
      icons.js,
      icons.react,
      icons.git,
      icons.npm,
      icons.tensorflow,
      icons.gemeni,
      icons.expo,
    ],
    links: [
      {
        aval: true,
        type: "video",
        icons: "/project_logos/youtube.png",
        link: "",
        text: "Demo",
      },
      {
        aval: true,
        type: "github",
        icons: "/project_logos/github.png",
        link: "",
        text: "Github",
      },
      {
        aval: true,
        type: "website",
        icons: "/project_logos/external_link.png",
        link: "",
        text: "Visit Site",
      },
    ],
    color: "#C763F4",
  },
  {
    id: 10,
    title: "Sprig",
    description: [
      "Built a custom **Raspberry Pi Pico console** to run an original survival game.",
      "Designed **gravity-reversing controls**: W sends the player upward and S sends them downward.",
      "Created a reflex-based challenge where players navigate moving platforms and avoid hazards.",
    ],
    image: "/project_images/sprig.png",
    icons: [icons.js, icons.git, icons.npm],
    links: [
      {
        aval: true,
        type: "video",
        icons: "/project_logos/youtube.png",
        link: "",
        text: "Demo",
      },
      {
        aval: true,
        type: "github",
        icons: "/project_logos/github.png",
        link: "",
        text: "Github",
      },
      {
        aval: true,
        type: "website",
        icons: "/project_logos/external_link.png",
        link: "",
        text: "Visit Site",
      },
    ],
    color: "#A396F9",
  },
  {
    id: 11,
    title: "Blot",
    description: [
      "Programmed a plotting device to generate personalized flower designs with **80M+ variations**.",
      "Created it as a Mother’s Day gift and a creative return to coding after school exams.",
      "Applied **trigonometry** and the Blot drawing library to construct the flower geometry.",
    ],
    image: "/project_images/blot.png",
    icons: [icons.js, icons.git, icons.npm],
    links: [
      {
        aval: true,
        type: "video",
        icons: "/project_logos/youtube.png",
        link: "",
        text: "Demo",
      },
      {
        aval: true,
        type: "github",
        icons: "/project_logos/github.png",
        link: "",
        text: "Github",
      },
      {
        aval: true,
        type: "website",
        icons: "/project_logos/external_link.png",
        link: "",
        text: "Visit Site",
      },
    ],
    color: "#75D8FF",
  },
];
