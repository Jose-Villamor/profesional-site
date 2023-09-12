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
    "An enthusiastic Data Scientist / Engineer with a passion for AI, Data and Tech. With experience executing Data Science, Data Management and Development solutions. Consistently demonstrating the ability to  attain critical objectives while maintaining curiosity and drive."
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
      "🛠 Responsible for executing data science, data management and process automation solutions."
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
      skillName: "Git Hub",
      fontAwesomeClassname: "fab fa-brands fa-github"
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
      skillName: "MLflow",
      fontAwesomeClassname: "fas fa-solid fa-recycle"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "PySpark",
      fontAwesomeClassname: "fas fa-regular fa-star"
    },
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
      subHeader: "Data Scientist/Engineer",
      duration: "October 2021 - Present",
      desc: "Python · SQL · Git Hub · Azure · MLflow · Docker · PySpark",
      responsabilities: [
        "Conduct end-to-end Machine Learning and NLP projects.",
        "Perform Big Data processing, analysis, and Machine Learning modeling.",
        "Create ETL pipelines for data received by members.",
        "Support the development of in-house automation and data dissemination web tools."
      ],
      achievements: [
        "Implemented a system to transpose HS national codes using embeddings.",
        "Developed a deep learning model to predict imports of goods and port congestion.",
        "Created a Python library to process import data."
      ]
    },
    {
      schoolName: "PwC - Malta",
      logo: require("./assets/images/pwcLogo.png"),
      subHeader: "Data Scientist",
      duration: "January 2020 - September 2021",
      desc: "Python · SQL · Git Hub · AWS · MLflow · Docker · Alteryx",
      responsabilities: [
        "Implementation of Data Science modeling of real estate and financial data.",
        "Perform NLP projects for legal documents and social media.",
        "Development of automation and scraping tools.",
        "Mentor newcomers and interns in ML practices and new technologies."
      ],
      achievements: [
        "Responsible for the end-to-end project of Malta's real estate ML project.",
        "Created an app that provided NLP insights into companies mandatory docs.",
        "Led the development of a VAT automation tool using VBA and Alteryx."
      ]
    },
    {
      schoolName: "Transcom",
      logo: require("./assets/images/transcomLogo.png"),
      subHeader: "Data analyst",
      duration: "November 2018 - December 2019",
      desc: "Python · SQL · Git Hub · Tableau · Excel",
      responsabilities: [
        "Prepare KPI dashboards on product and agent performance.",
        "Perform root cause analysis regarding customer behavior.",
        "Collect, clean, and ingest data into databases for analysis, reports, and modeling.",
        "Develop Data Science models to increase efficiency and obtain insights."
      ],
      achievements: [
        "Introduced automation of several ETL processes.",
        "Responsible for the first ML models implemented that reduced time to objectives.",
        "Provided guidance on Machine Learning and new technologies to colleagues."
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
