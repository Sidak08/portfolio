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
 * - description: Detailed project description
 * - image: Main project screenshot/image
 * - icons: Array of technology icons used
 * - links: Array of external links (demo, GitHub, live site)
 * - color: Primary accent color for the project theme
 */
export const projects = [
  {
    id: 1,
    title: "Scrapyard Brampton",
    description:
      "Founded one of the largest high school-exclusive hackathons, attracting 70+ participants. Led end-to-end event planning and secured over $20,000 in sponsorships with viral social media marketing reaching 30,000+ views. Inspired curiosity and fostered innovation in teenagers through engaging programming and mentorship experiences.",
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
    description:
      "This is my largest project by far (15k lines and 78 files). It is a complete reservation management system. The PWA lets you create a dynamic layout for your restaurant; mapping out each chair and table. After that, each of them can be reserved for individual guests from our dashboard or dynamic link which is generated for every restaurant and can be sent out to the guests for them to choose at their convenience. It includes many other features that are too much to list here but can be seen in the demo video.",
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
    description:
      "This is my portfolio website kinda Déjà vu seeing the project while being inside the project. Well, I don't know if this text is even making it on there; I am writing this for the future, so who knows? But in this project, I discuss about myself and how I love attending hackathons. These hackathons are the reason I was interested in learning programming and have guided most of my experience. I also talk a bit about my high school experience; currently a grade 11.",
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
    description:
      "IOS-Status-Bar is the first npm package I created. It all started like many projects—after spending 6.5 hours on Google, trying to figure out how to edit the status bar on an iPhone when using Expo. This part of the screen is usually restricted, but I discovered a few workarounds. None of the tutorials I found actually worked, but I managed to find an exploit that did. Initially, I thought about keeping it as a local package, but I decided to try something new and publish it. The result? The package has been downloaded over 1,000 times, helping many others solve the same issue.",
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
    description:
      "This is one of the hardest projects I have attempted not because contents of the project but because it was made at GDSC Hacks under 24 hours with no sleep. The project itself is a simple masterpiece. To begin it takes in an audio recording (lecture). This audio recording is converted to text and sent to Gemini. Then Gemini is instructed to generate cue cards from the prompt. This process is repeated as a fail-safe just in case Gemini does not return JSON as an answer. Now this is the cool part the question and answer can be interacted with hand gestures. The software uses Media Pipe to detect when certain gestures are being made so closing your fist shows the answer while swiping mid-air should take you to the next question.",
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
    description:
      "Boombox.ai is another one of my hackathon projects. This was also a difficult project for the worst reason. UFT hacks 2023 theme was retro; you can imagine how many ideas you can have with that. But we still persevered through and got this in the end. The entire UI is one massive interactive boom box. So hitting the play and pause button or adjusting the volume sliders is the correct way of interacting with it. But there is a good reason why it is called an AI. It can analyze your face guess your mood and generate a playlist which is connected to your Spotify account so you can play pause and use it from any sort of device.",
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
    description:
      "UniSign was inspired by a World War I documentary where we saw how those deafened by explosions struggled to communicate. This motivated us to create a solution to bridge that gap. Our research revealed a lack of tools translating sign language into other languages, leading us to develop UniSign. It uses a RandomForestClassifier with frontend technologies like Next.js, React, and Tailwind. Users capture an image of a hand sign, which the backend processes to predict the corresponding letter. The prediction is then translated into a chosen language using the Google Translate API and displayed, enabling accessible, real-time communication.",
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
    description:
      "Inspired by the natural link between crypto and betting, we created PredicTurf to offer a safe, reliable app that combines both. Users log in, link their Near wallet, and access a dashboard with match predictions powered by a custom machine-learning model, a leaderboard, and betting options. Unique features include custom betting amounts and NFT stickers generated by GPT-4, stored in an Adobe Express-linked wallet. Despite challenges like implementing Near's wallet and training the model, we expanded our skills in APIs and cloud services. We plan to improve by adding more betting options, enhancing the machine learning model, and fully developing the NFT wallet.",
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
    description:
      "Our project was inspired by the realization that society often overlooks the importance of collective action in addressing environmental and social issues. A pivotal moment occurred during a beach meeting where a staff member said, 'One person's actions might not make a difference, but when many people act together, they can create a huge impact.' This idea motivated us to develop a platform that empowers users to contribute to positive change by engaging in sustainable practices aligned with the 17 UN Sustainable Development Goals. Through our app, users can complete tasks, verified by AI, that promote sustainability and earn rewards, knowing their collective efforts can make a significant difference.",
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
    description:
      'Sprig is a custom console I built using a Raspberry Pi Pico, designed to host a simple yet challenging game focused on survival. In the game, you navigate by altering the direction of gravity—pressing "W" causes you to fall upwards, while "S" makes you fall downwards. The objective is to survive as long as possible by landing on moving platforms that prevent you from falling into the void. The game ends if you either fall into the void or collide with a block, making it a test of quick reflexes and timing.',
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
    description:
      "I created a plotting device that generates a unique flower design just for you, chosen from over 80 million possible variations. Initially intended as a Mother's Day gift, the project became a personal challenge and a return to coding after a two-month break due to school and exams. Building it was a mostly enjoyable experience, though I relied heavily on trial and error and console logs before discovering the documentation for the blot library. Crafting circles was particularly tricky, but it allowed me to refresh my trigonometry skills. Overall, it was a fun and rewarding project, reigniting my passion for coding.",
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
