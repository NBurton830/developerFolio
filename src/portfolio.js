/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nyshawn",
  title: "Hi all, I'm Nyshawn",
  subTitle: emoji(
    "A passionate Full Stack Software Developer, having an experience of building eCommerce Storefronts with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1L29x1n7plC9Gg5EAFMka6b_hpETXpW56QvTlN7o0YP8/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nburton830",
  linkedin: "https://www.linkedin.com/in/nyshawn-burton",
  gmail: "nyshawnburton16@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@nyshawnburton",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Shopify",
      fontAwesomeClassname: "fas fa-store"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "High School STEM Student",
      subHeader: "2 Years of STEM Education",
      duration: "September 2016 - June 2018",
      desc: "Participated in the STEM program at my high school, learning the basics of coding and computer science.",
      descBullets: [
        "Founder of Engineering & Robotics Club",
        "Ranked 7th in the Nation VEX Robotics",
        "2nd Place in State for VEX Robotics"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "40%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
/*
RESUME PROFESSIONAL EXPERIENCE SECTION
Professional Experience
Lead eCommerce Developer | cellhelmet 
Jun 2023 – Nov 2023
Customized Shopify Plus theme for mobile accessories, increasing mobile performance scores by 30
Prevented a potential accessibility lawsuit by improving site accessibility, resulting in a 20-point CLS score improvement
Conducted ongoing maintenance and delivered features without access to detailed metrics
Integrated third-party tools to support upsells and streamline checkout
Built dynamic product detail pages using metafields and advanced Liquid logic


Lead eCommerce Developer | Athletic Brewing Co. 
Jul 2022 – Dec 2022
Delivered new navigation, homepage components, custom cart, and PDP through targeted feature development
Performed performance tuning, leading to a 5-point CLS score improvement
Maintained existing codebase while supporting new initiatives and subscription-based 
Lead eCommerce Developer | Gapstow 
 Jan 2022 – June 2022
Contracted via agency to maintain and enhance multiple Shopify storefronts
Delivered new features and bugfixes across various client sites
Focused on performance, mobile usability, and UX alignment with client goals
Senior eCommerce Developer (Remote) | 
Sweden Unlimited 
Jun 2021 – Jan 2022
Led development of reusable Shopify 2.0 Lite templates based on the Dawn & Slate themes
Built modular, style guide-driven components for fashion/lifestyle clients
Conducted front-end performance audits and accessibility upgrades
Delivered high-end storefronts with focus on branding consistency and scalability


Lead eCommerce Developer | Shoreside Digital LLC 
Mar 2021 – Jun 2021
Focused on mobile-first UX enhancements for DTC brands
Developed themes and implemented UI improvements based on client needs
Front-End Developer | BVA (Brand Value Accelerator) · Feb 2019 – Feb 2021
Maintained and improved 10+ Shopify storefronts and Workarea builds post-acquisition
Developed React-based agency website using a style guide-driven approach
Delivered both greenfield builds and ongoing feature/bugfix support
Collaborated closely with QA and strategy teams to refine UI and boost conversions


Junior Front-End Developer | Workarea (WebLinc) · Jun 2018 – Feb 2019
Built and maintained multi-site eCommerce storefronts using SCSS, jQuery, JavaScript, and Rails
Contributed to accessibility and SEO enhancements on the Workarea platform
Worked in an agile environment maintaining 5–6 sites with MongoDB, Redis, Elasticsearch, and Docker


Front-End Intern | Workarea (WebLinc) · Jan 2018 – Jun 2018
Participated in agile development cycles, testing, and tooling for eCommerce projects


*/
// Use The RESUME PROFESIONAL EXPERIENCE as a reference
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // Use The RESUME PROFESIONAL EXPERIENCE as a reference
    {
      role: "Lead eCommerce Developer",
      company: "cellhelmet",
      companylogo: require("./assets/images/cellhelmet_logo.jpg"),
      date: "Jun 2023 – Nov 2023",
      desc: "Customized Shopify Plus theme for mobile accessories, increasing mobile performance scores by 30. Prevented a potential accessibility lawsuit by improving site accessibility, resulting in a 20-point CLS score improvement. Conducted ongoing maintenance and delivered features without access to detailed metrics. Integrated third-party tools to support upsells and streamline checkout. Built dynamic product detail pages using metafields and advanced Liquid logic.",
      descBullets: []
    },
    {
      role: "Lead eCommerce Developer",
      company: "Athletic Brewing Co.",
      companylogo: require("./assets/images/athletic_brewing_company_llc_logo.jpg"),
      date: "Jul 2022 – Dec 2022",
      desc: "Delivered new navigation, homepage components, custom cart, and PDP through targeted feature development. Performed performance tuning, leading to a 5-point CLS score improvement. Maintained existing codebase while supporting new initiatives and subscription-based features.",
      descBullets: []
    },
    {
      role: "Lead eCommerce Developer",
      company: "Gapstow",
      companylogo: require("./assets/images/gapstow_logo.jpg"),
      date: "Jan 2022 – June 2022",
      desc: "Contracted via agency to maintain and enhance multiple Shopify storefronts. Delivered new features and bugfixes across various client sites. Focused on performance, mobile usability, and UX alignment with client goals.",
      descBullets: []
    },
    {
      role: "Senior eCommerce Developer (Remote)",
      company: "Sweden Unlimited",
      companylogo: require("./assets/images/sweden_unlimited_logo.jpg"),
      date: "Jun 2021 – Jan 2022",
      desc: "Led development of reusable Shopify 2.0 Lite templates based on the Dawn & Slate themes. Built modular, style guide-driven components for fashion/lifestyle clients. Conducted front-end performance audits and accessibility upgrades. Delivered high-end storefronts with focus on branding consistency and scalability.",
      descBullets: []
    },
    {
      role: "Lead eCommerce Developer",
      company: "Shoreside Digital LLC",
      companylogo: require("./assets/images/shoresidedigital_logo.jpg"),
      date: "Mar 2021 – Jun 2021",
      desc: "Focused on mobile-first UX enhancements for DTC brands. Developed themes and  implemented UI improvements based on client needs.",
      date: "Mar 2021 – Jun 2021",
      descBullets: []
    },
    {
      role: "Front-End Developer",
      company: "BVA (Brand Value Accelerator)",
      companylogo: require("./assets/images/bvacommerce_logo.jpg"),
      date: "Feb 2019 – Feb 2021",
      desc: "Maintained and improved 10+ Shopify storefronts and Workarea builds post-acquisition. Developed React-based agency website using a style guide-driven approach. Delivered both greenfield builds and ongoing feature/bugfix support. Collaborated closely with QA and strategy teams to refine UI and boost conversions.",
      descBullets: []
    },
    {
      role: "Junior Front-End Developer",
      company: "Workarea (WebLinc)",
      companylogo: require("./assets/images/weblinc_logo.png"),
      date: "Jun 2018 – Feb 2019",
      desc: "Built and maintained multi-site eCommerce storefronts using SCSS, jQuery, JavaScript, and Rails. Contributed to accessibility and SEO enhancements on the Workarea platform. Worked in an agile environment maintaining 5–6 sites with MongoDB, Redis, Elasticsearch, and Docker.",
      descBullets: []
    },
    {
      role: "Front-End Intern",
      company: "Workarea (WebLinc)",
      companylogo: require("./assets/images/weblinc_logo.png"),
      date: "Jan 2018 – Jun 2018",
      desc: "Participated in agile development cycles, testing, and tooling for eCommerce projects.",
      descBullets: []
    }
  
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/heineken_project.jpg"),
      projectName: "Heineken",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://heineken.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/worldwidestereo_project.png"),
      projectName: "WorldWide Stereo",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://worldwidestereo.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (856) 477-1942",
  email_address: "nyshawnburton16@@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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