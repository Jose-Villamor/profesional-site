import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jose Villamor",
  title: "Hello, I'm Jose",
  subTitle: emoji(
    "An enthusiastic and innovative Data Scientist with a passion for AI modeling, data management, and MLOps. Capable of meeting deadlines and achieving priority objectives while maintaining curiosity and drive."
  ),
  resumeLink:
    "https://jose-villamor.github.io/Resume_pdf/CV.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Jose-Villamor",
  linkedin: "https://www.linkedin.com/in/jose-villamor-6b4093a3/?original_referer=",
  gmail: "josejoaquinvillamor@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: emoji("Skills 🦾"),
  subTitle: "A DATA SCIENTIST SKILLED IN BOTH DATA ENGINEERING AND MLOps",
  skills: [
    emoji(
      "🛠 Responsible for executing machine learning, data analysis and process automation solutions."
    ),
    emoji("🛠 Competency in identifying operational improvements and developing prototypes to assess viability."),

    emoji(
      "🛠 Oversee data-centric and operational practices, ensuring integrity, delivery and quality."
    )
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS 3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-brands fa-windows"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git Actions",
      fontAwesomeClassname: "fas fa-solid fa-code-branch"
    },
    {
      skillName: "PySpark",
      fontAwesomeClassname: "fas fa-regular fa-star"
    },
    {
      skillName: "MLflow",
      fontAwesomeClassname: "fas fa-solid fa-recycle"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "World Trade Organization",
      logo: require("./assets/images/omgLogo.png"),
      subHeader: "Programmer",
      duration: "October 2021 - June 2023",
      desc: "Python · SQL · Git · HTML/CSS/JavaScript · Microsoft Azure",
      descBullets: [
        "Processing of data received by members and its integration into database systems.",
        "Conduct digitalization, automation, and data science projects.",
        "Development of prototypes and web tools.",
      ]
    },
    {
      schoolName: "PwC - Malta",
      logo: require("./assets/images/pwcLogo.png"),
      subHeader: "Data Scientist",
      duration: "January 2021 - September 2021",
      desc: "Python · SQL · Git · VBA · Alteryx · Power BI",
      descBullets: [
        "Development of automation tools with Python and VBA.",
        "Implementation of ETL processes using Alteryx.",
        "Identification and prototyping of ML applications across the firm."
    ]
    },
    {
      schoolName: "Transcom",
      logo: require("./assets/images/transcomLogo.png"),
      subHeader: "Data analyst",
      duration: "November 2018 - December 2020",
      desc: ["Python · SQL · Git · Tableau · Excel"],
      descBullets: [
        "Preparation of KPIs' dashboards.",
        "Development of machine learning models and advanced analytical techniques.",
        "Creation and management of database solutions."
      ]
    }
  ]
};

// Your top 5 competences

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "80%"
    },
    {
      Stack: "MLOps",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud",
      progressPercentage: "60%"
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
  display: true
};

// Some big projects you have worked on

const bigProjects = {
  title: emoji("🎓 Certifications"),
  subtitle: "DIPLOMAS OBTAINED ON OFFICIAL SITES",
  projects: [
     {
      image: require("./assets/images/dvc-cert.webp"),
      projectName: "AWS Developer Associate",
      projectDesc: "",
      footerLink: [
        {
          name: "Access Diploma",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dvc-cert.webp"),
      projectName: "MLOps using Git Actions",
      projectDesc: "",
      footerLink: [
        {
          name: "Access Diploma",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/dvc-cert.webp"),
      projectName: "Iterative Tools Certification",
      projectDesc: "",
      footerLink: [
        {
          name: "Access Diploma",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Online certifications Section

const blogSection = {
  title: emoji("📚 Courses"),
  subtitle:
    "Educational programs from e-learning platforms",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.udemy.com/certificate/UC-7d505b1b-ae65-461e-a71d-c4eced13f66d/",
      title: "Practical MLOps for Data Scientists and DevOps",
      description:
        "Improves the ability to build, deploy and maintain ML solutions with DevOps practices using AWS."
    },
    {
      url: "https://www.udemy.com/certificate/UC-f5263c96-286e-4877-8ef6-d128447bca61/",
      title: "DevOps Beginners to Advanced with Projects - 2023",
      description:
        "DevOps complete course that includes Linux, AWS, Scripting, Jenkins, Ansible, Docker, K8s and much more."
    },   
    {
      url: "https://www.udemy.com/certificate/UC-755cc42d-46f5-4104-b7aa-6300fbf829ec/",
      title: "2023 Web Development Bootcamp",
      description:
        "Full-Stack Web Developer course using the latest technologies: HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps."
    },
    {
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/7QQPT2VA3RTE",
      title: "Deep Learning Specialization",
      description:
        "Understand the capabilities, challenges, and consequences of deep learning and participate in the development of leading-edge AI tech."
    },
    {
      url: "https://www.coursera.org/account/accomplishments/certificate/4YMYU2Y8BQHV",
      title: " Machine Learning (Standford University)",
      description:
        "Provides a mathematical undestanding of  Machine Learning centered on linear algebra, calculus and probability."
    },
    {
      url: "https://github.com/Jose-Villamor/Courses-Certifications",
      title: "Other Certifications",
      description:
        "See all certifications I have acquire regarding Machine Learning, Data Management and Software Engineering practices."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  bigProjects,
  blogSection,
  isHireable
};
