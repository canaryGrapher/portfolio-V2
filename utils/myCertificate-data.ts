// importing types 
import { ICertificates } from "../interfaces/certificates"

const distinctIssuers: string[] = ["Udemy", "Binance", "Codecademy", "Coursera", "HP LIFE", "IECSE Manipal", "LetsUpgrade", "LinkedIn Learning", "Microsoft Student Partners India"]

const certificateData: ICertificates[] = [
    {
        name: "MERN Stack Front To Back: Full Stack React, Redux & Node.js",
        organization: "Udemy",
        issuedDate: "May 2022",
        link: "https://www.udemy.com/certificate/UC-2f866c6f-6465-4bbf-ad90-969747f80bac/",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/udemy_LFu_kWqON.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654027829213"
    },
    {
        name: "Campus BUIDLer Program",
        organization: "Binance",
        issuedDate: "November 2021",
        link: "https://certificate.evidenz.io/check/E98B5BFA969C27BBFE68CC317A312CE943BB7BF22D646F6EDF61D6662C4E11B5Y1BwMmZ6dVZ6QkFFcEZjbEduM1BkWjlLVFZOZDk0bjRwb1FUOXRLTkVLZmVleTlr",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/binanceAcademy_ocSYi2TaAjJ.png?updatedAt=1639174894227"
    },
    {
        name: "Social Entrepreneurship",
        organization: "HP LIFE",
        issuedDate: "November 2021",
        link: "https://www.life-global.org/certificate?UUID=62ab007d-f91a-4444-acde-53dc04c4c4df",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/hpLife_Qp6x9Fqlg04.jpg?updatedAt=1639130929232"
    },
    {
        name: "AWS Cloud Computing",
        organization: "LetsUpgrade",
        issuedDate: "September 2022",
        link: "https://verify.letsupgrade.in/#verify/LUAWS0820A1455",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/letsUpgrade_sJO9OXn-a.jpg?updatedAt=1639130948080"
    },
    {
        name: "Blockchain Essentials",
        organization: "LetsUpgrade",
        issuedDate: "August 2020",
        link: "https://verify.letsupgrade.in/#verify/LUBL0720A0683",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/letsUpgrade_sJO9OXn-a.jpg?updatedAt=1639130948080"
    },
    {
        name: "Hands on Arduino",
        organization: "Microsoft Student Partners India",
        issuedDate: "March 2019",
        link: "",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/microsoftStudentPartner_Q2yi-4dUALuR.jpg?updatedAt=1639174719460"
    },
    {
        name: "Learn the Command Line Course",
        organization: "Codecademy",
        issuedDate: "November 2018",
        link: "https://www.codecademy.com/profiles/CanaryGrapher/certificates/c87ba0541f8be78bc2f4ba1128233f6f",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/codecademy_VvXWpQbxm.jpg?updatedAt=1639174719229"
    },
    {
        name: "Learn TypeScript Course",
        organization: "Codecademy",
        issuedDate: "October 2021",
        link: "https://www.codecademy.com/profiles/CanaryGrapher/certificates/56fb1e71303e37b643bb1905f31c8a09",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/codecademy_VvXWpQbxm.jpg?updatedAt=1639174719229"
    },
    {
        name: "Learn Go Course",
        organization: "Codecademy",
        issuedDate: "October 2021",
        link: "",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/codecademy_VvXWpQbxm.jpg?updatedAt=1639174719229"
    },
    {
        name: "Learn Git Course",
        organization: "Codecademy",
        issuedDate: "October 2021",
        link: "https://www.codecademy.com/profiles/CanaryGrapher/certificates/a8ab218d5950c29861635cc0bf12fd13",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/codecademy_VvXWpQbxm.jpg?updatedAt=1639174719229"
    },
    {
        name: "Webflow Tools for Web Developers",
        organization: "LinkedIn Learning",
        issuedDate: "May 2021",
        link: "https://www.linkedin.com/learning/workflow-tools-for-web-developers",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/linkedinLearning_zKtWHPC4Gh9.jpg?updatedAt=1639174719385"
    },
    {
        name: "Succeesing in DevOps",
        organization: "LinkedIn Learning",
        issuedDate: "May 2021",
        link: "",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/linkedinLearning_zKtWHPC4Gh9.jpg?updatedAt=1639174719385"
    },
    {
        name: "React:Server-Side Rendering (2018)",
        organization: "LinkedIn Learning",
        issuedDate: "May 2021",
        link: "",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/linkedinLearning_zKtWHPC4Gh9.jpg?updatedAt=1639174719385"
    },
    {
        name: "React: Ecosystems",
        organization: "LinkedIn Learning",
        issuedDate: "May 2021",
        link: "",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/linkedinLearning_zKtWHPC4Gh9.jpg?updatedAt=1639174719385"
    },
    {
        name: "React.js: Building an Interface",
        organization: "LinkedIn Learning",
        issuedDate: "May 2021",
        link: "",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/linkedinLearning_zKtWHPC4Gh9.jpg?updatedAt=1639174719385"
    },
    {
        name: "Learning Node.js",
        organization: "LinkedIn Learning",
        issuedDate: "May 2021",
        link: "",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/linkedinLearning_zKtWHPC4Gh9.jpg?updatedAt=1639174719385"
    },
    {
        name: "Inclusive Tech: Building Your Team",
        organization: "LinkedIn Learning",
        issuedDate: "May 2021",
        link: "",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/linkedinLearning_zKtWHPC4Gh9.jpg?updatedAt=1639174719385"
    },
    {
        name: "GraphQL Essential Training",
        organization: "LinkedIn Learning",
        issuedDate: "May 2021",
        link: "",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/linkedinLearning_zKtWHPC4Gh9.jpg?updatedAt=1639174719385"
    },
    {
        name: "Git Essential Training: The Basics",
        organization: "LinkedIn Learning",
        issuedDate: "May 2021",
        link: "",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/linkedinLearning_zKtWHPC4Gh9.jpg?updatedAt=1639174719385"
    },
    {
        name: "Learning npm the Node Package Manager",
        organization: "LinkedIn Learning",
        issuedDate: "June 2021",
        link: "",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/linkedinLearning_zKtWHPC4Gh9.jpg?updatedAt=1639174719385"
    },
    {
        name: "Technical Support Fundamentals",
        organization: "Coursera",
        issuedDate: "January 2022",
        link: "https://www.coursera.org/account/accomplishments/certificate/GM6MFP9GPR2Q",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "Algorithmic Thinking (Part 1)",
        organization: "Coursera",
        issuedDate: "September 2021",
        link: "https://www.coursera.org/account/accomplishments/certificate/NFFNRJB5BHT4",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "Algorithmic Thinking (Part 2)",
        organization: "Coursera",
        issuedDate: "November 2021",
        link: "https://www.coursera.org/account/accomplishments/certificate/EAGG5MHQ2BEV",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "Principles of Computing (Part 1)",
        organization: "Coursera",
        issuedDate: "May 2021",
        link: "https://www.coursera.org/account/accomplishments/certificate/J64R9JYX9GA2",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "Principles of Computing (Part 2)",
        organization: "Coursera",
        issuedDate: "October 2021",
        link: "https://www.coursera.org/account/accomplishments/certificate/SD5SNSAXQCUF",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "An Introduction to Interactive Programming in Python (Part 1)",
        organization: "Coursera",
        issuedDate: "April 2021",
        link: "https://www.coursera.org/account/accomplishments/certificate/VM6EGTHRG2DU",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "An Introduction to Interactive Programming in Python (Part 2)",
        organization: "Coursera",
        issuedDate: "May 2021",
        link: "https://www.coursera.org/account/accomplishments/certificate/E2VBF44TF32D",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "Getting Started with Go",
        organization: "Coursera",
        issuedDate: "October 2020",
        link: "https://www.coursera.org/account/accomplishments/certificate/MCZ7SAEVQRJD",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "Blockchain Platforms",
        organization: "Coursera",
        issuedDate: "May 2020",
        link: "https://www.coursera.org/account/accomplishments/certificate/XG7EVU4CCP73",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "Blockchain Specialization",
        organization: "Coursera",
        issuedDate: "May 2020",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/PP6JELVRVAHC",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "Decentralized Applications (Dapps)",
        organization: "Coursera",
        issuedDate: "May 2020",
        link: "https://www.coursera.org/account/accomplishments/certificate/24EA362GSZSF",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "Smart Contracts",
        organization: "Coursera",
        issuedDate: "May 2020",
        link: "https://www.coursera.org/account/accomplishments/certificate/QA8SSY93WSSZ",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "Blockchain Basics",
        organization: "Coursera",
        issuedDate: "March 2020",
        link: "https://www.coursera.org/account/accomplishments/verify/7MX9V5K68364",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "Front-End Web UI Framework and Tools: Bootstrap 4",
        organization: "Coursera",
        issuedDate: "May 2020",
        link: "https://www.coursera.org/account/accomplishments/certificate/VDT9F9QAUHBB",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "Visual Elements of User Interface Designs",
        organization: "Coursera",
        issuedDate: "April 2020",
        link: "https://www.coursera.org/account/accomplishments/certificate/6K7UTD4JL3JD",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "Interactivity with JavaScript",
        organization: "Coursera",
        issuedDate: "August 2019",
        link: "https://www.coursera.org/account/accomplishments/verify/AAEMW7SD97W7",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "Python Data Structures",
        organization: "Coursera",
        issuedDate: "June 2019",
        link: "https://www.coursera.org/account/accomplishments/verify/2RTLH5ZVUHA6",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "Introduction to CSS3",
        organization: "Coursera",
        issuedDate: "May 2019",
        link: "https://www.coursera.org/account/accomplishments/verify/4RGQMJ2CAHZ3",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },
    {
        name: "Programming for Everybody (Getting Started with Python)",
        organization: "Coursera",
        issuedDate: "May 2019",
        link: "https://www.coursera.org/account/accomplishments/verify/LFUDUG5ZDC83",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/courseraLogo_SjHTU5bG9H4.jpg?updatedAt=1639117206338"
    },

    {
        name: "Full Stack Web Development with Node.js, Express.js, React.js and MySQL",
        organization: "IECSE Manipal",
        issuedDate: "March 2019",
        link: "",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Certificates/iecseManipal_dWXv5grWvnC.jpg?updatedAt=1639130952909"
    },

]

export { certificateData, distinctIssuers }