// Personal Portfolio Configuration for Risfat Amin
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = { animated: true };

const greeting = {
  username: "Risfat Amin",
  title: "Hi, I'm Risfat ",
  subTitle: emoji(
    "Passionate Flutter Developer 🚀 with a proven track record of building scalable, high-performance mobile apps. Expert in Bloc, Riverpod and clean architecture, delivering seamless user experiences and optimizing business operations."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Ehfxh_ZI9Ddnph-3-UN29LsqU6nze130/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/risfat",
  linkedin: "https://www.linkedin.com/in/risfat",
  gmail: "risfat.bd@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "BUILDING HIGH-IMPACT APPLICATIONS THAT SOLVE REAL-WORLD PROBLEMS",
  skills: [
    emoji("⚡ Architecting and developing scalable mobile applications using Flutter"),
    emoji("⚡ Implementing complex state management with Riverpod & BLoC"),
    emoji("⚡ Enhancing application security and performance for high user engagement"),
    emoji("⚡ Developing real-time features using WebSockets, Firebase, and REST APIs")
  ],
  softwareSkills: [
    { skillName: "Flutter", fontAwesomeClassname: "fab fa-android" },
    { skillName: "Dart", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Daffodil International University",
      logo: require("./assets/images/diuLogo.png"),
      subHeader: "Bachelor in Computer Science and Engineering",
      duration: "September 2019 - August 2023",
      desc: "Graduated with a strong focus on software development, project management, and system design."
    }
  ]
};

// Tech Stacks
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Flutter & Cross-Platform Development", progressPercentage: "95%" },
    { Stack: "State Management (Riverpod, BLoC)", progressPercentage: "90%" },
    { Stack: "Backend & API Development (Node.js, Firebase)", progressPercentage: "85%" },
    { Stack: "Database Management (SQL, SQLite, Firestore)", progressPercentage: "80%" },
    { Stack: "Cloud Services & DevOps (Docker, Firebase, CI/CD)", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};



// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer (Flutter)",
      company: "Nexdecade Technology (Pvt.) Ltd",
      companylogo: require("./assets/images/nexdecade.png"),
      date: "Sep 2023 – Present",
      desc: "Developing high-performance mobile applications that optimize business operations.",
      descBullets: [
        "Designed & deployed M2M VTS, NSI VTS, and GP VTS, improving fleet tracking by 30%",
        "Developed NexPos POS system, reducing transaction processing time by 25%",
        "Built Nex Inventory, optimizing stock tracking and reducing discrepancies by 40%",
        "Led end-to-end project execution, ensuring 95% on-time delivery with minimal bugs"
      ]
    },
    {
      role: "Mobile Application Developer",
      company: "Digital Solution Bangladesh",
      companylogo: require("./assets/images/dsbLogo.png"),
      date: "Apr 2023 – Aug 2023",
      desc: "Engineered mobile solutions for government initiatives, enhancing public service efficiency.",
      descBullets: [
        "Delivered high-impact government projects, increasing efficiency by 35%",
        "Resolved critical cross-platform issues, achieving a 98% crash-free rate",
        "Enhanced user engagement & downloads by 50% through feature optimizations",
        "Implemented security protocols, reducing vulnerabilities and improving app trust"
      ]
    },
    {
      role: "Full Stack Developer (Remote)",
      company: "Horizon Brand Consultants",
      companylogo: require("./assets/images/horizonLogo.jpg"),
      date: "Mar 2021 – Nov 2022",
      desc: "Developed scalable, data-driven web applications that boosted user retention.",
      descBullets: [
        "Increased client user retention by 45% through optimized web solutions",
        "Built secure backend systems, reducing server downtime by 25%",
        "Streamlined database queries, improving data processing speed by 40%",
        "Collaborated with designers & stakeholders to align solutions with brand objectives"
      ]
    }
  ]
};


// Open Source Contributions
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Major Projects
const bigProjects = {
  title: "Projects & Contributions",
  subtitle: "A selection of impactful applications I've developed",
  projects: [
    {
      image: require("./assets/images/m2mLogo.png"),
      projectName: "M2M VTS",
      projectDesc: "Real-time vehicle tracking system enhancing fleet efficiency.",
      footerLink: [
        { name: "Visit Play Store", url: "https://play.google.com/store/apps/details?id=com.m2mbd.vts&hl=en" }
      ]
    },
    {
      image: require("./assets/images/siratLogo.png"),
      projectName: "Sirat E Mustaqeem",
      projectDesc: "Islamic productivity app with Quran, Hadiths, and prayer reminders.",
      footerLink: [
        { name: "View on Play Store", url: "https://play.google.com/store/apps/details?id=com.risfat.siratemustaqeem" }
      ]
    },
    {
      image: require("./assets/images/rxplayerLogo.png"),
      projectName: "Rx Player",
      projectDesc: "Advanced media player with intuitive UI & powerful playback features.",
      footerLink: [
        { name: "View on Play Store", url: "https://play.google.com/store/apps/details?id=com.devtech365.rxplayer" }
      ]
    },
    {
      image: require("./assets/images/quizbeeLogo.png"),
      projectName: "QuizBee - Ultimate Quiz Battle",
      projectDesc: "Gamified quiz app with real-time battles, rewards, and community features.",
      footerLink: [
        { name: "View on Play Store", url: "https://play.google.com/store/apps/details?id=com.devtech365.quizbee" }
      ]
    },
    {
      image: require("./assets/images/cinexploreLogo.png"),
      projectName: "CineXplore",
      projectDesc: "Entertainment tracking platform allowing users to explore, review, and discuss movies & TV shows.",
      footerLink: [
        { name: "View on Play Store", url: "https://play.google.com/store/apps/details?id=com.risfat.cinexplore" }
      ]
    },
    {
      image: require("./assets/images/diuLogo.png"),
      projectName: "DIU Transport",
      projectDesc: "University bus tracking app with real-time location updates & automated ticketing system.",
      footerLink: [
        { name: "View Demo", url: "https://drive.google.com/drive/folders/1ah_MyiSwZJDrk0NEs5GUqhIHopDBqjrH?usp=sharing" }
      ]
    },
    {
      image: require("./assets/images/muscleSistersLogo.png"),
      projectName: "Muscle Sisters",
      projectDesc: "Fitness app featuring personalized workout programs, progress tracking, and video tutorials.",
      footerLink: [
        { name: "View on App Store", url: "https://apps.apple.com/us/app/muscle-sisters/id6446286232" }
      ]
    },
    {
      image: require("./assets/images/nexdecadeLogo.png"),
      projectName: "Nex Inventory",
      projectDesc: "Enterprise inventory management system, reducing stock discrepancies by 40%.",
      footerLink: [
        { name: "Internal Project", url: "#" }
      ]
    }
  ],
  display: true
};

// Achievements
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Recognitions, certifications, and open-source contributions.",
  achievementsCards: [
    {
      title: "HyperNet",
      subtitle: "Wrapper around Dio that can perform API requests with better error handling and easily get the result of any API request.",
      image: require("./assets/images/flutterLogo.png"),
      footerLink: [
        { name: "View on Pub.dev", url: "https://pub.dev/packages/hyper_net" }
      ]
    },
    {
      title: "Flutter Media Delete Plugin",
      subtitle: "Published an open-source package for deleting media files in Flutter.",
      image: require("./assets/images/flutterLogo.png"),
      footerLink: [
        { name: "View on Pub.dev", url: "https://pub.dev/packages/flutter_media_delete" }
      ]
    }
  ],
  display: true
};



// Blog Section
const blogSection = {
  title: "Blogs",
  subtitle: "Sharing knowledge through blogs.",
  blogs: [],
  display: false
};

// Talks Section
const talkSection = {
  title: "Talks",
  subtitle: emoji("Sharing insights at tech events."),
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Tech discussions and experiences.",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume.",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's connect and discuss projects or just say hi.",
  number: "+8801737757944",
  email_address: "risfat.bd@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "risfat404", // Replace "twitter" with your twitter username without @
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
