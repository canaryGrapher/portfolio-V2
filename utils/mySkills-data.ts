// importing types
import { ISkills, IToolsandTechnologies } from "../interfaces/home";

const skillsData: ISkills[] = [
    {
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Skills/ui-ux_ahjf1sYTRxF.png",
        title: "UI/UX Designs",
        info: "I can make interface designs that are meaningful, appealing and accessible."
    },
    {
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Skills/webdev_C_10p8J3sSLi.png",
        title: "Web Development",
        info: "I have made a handful of websites for student organizations in my university."
    },
    {
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Skills/scripting_26OBEdTRvuWz.png",
        title: "Scripting",
        info: "I can write automation scripts in JavaScript as well as Python"
    },
    {
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Skills/server-management_qPbXfj1Ancl.png",
        title: "Server Management",
        info: "I have a little experiene managing a server at my university for the purpose of prototyping."
    }
]

const toolsAndTechnologies: IToolsandTechnologies[] = [
    {
        title: "UI/UX Designs",
        tools: ["Figma", "AdobeXD", "Invision Studio"]
    },
    {
        title: "Web Dev",
        tools: ["ReactJS", "NextJS", "GatsbyJS", "NodeJS", "ExpressJS", "NestJS", "RemixJS"]
    },
    {
        title: "Databases",
        tools: ["Redis", "MongoDB"]
    },
    {
        title: "Web Styling",
        tools: ["CSS", "Sass", "Bootstrap", "ReactStrap", "Ant Design", "Tailwind CSS"]
    },
    {
        title: "Programming Languages",
        tools: ["C++", "JavaScript", "Python", "TypeScript", "Solidity", "Go*"]
    },
    {
        title: "Technologies",
        tools: ["Git", "GitHub"]
    },
    {
        title: "Hardware",
        tools: ["Arduino"]
    },
    {
        title: "Server Management",
        tools: ["Ubuntu Server", "AWS", "Vercel", "Heroku", "Cloudfare", "NGINX", "Digital Ocean"]
    },
    {
        title: "Cloud Instruments",
        tools: ["Azure ARM", "Boto3", "AWS SNS", "AWS Cloudwatch", "AWS CloudTrail", "AWS Lambda"]
    },
    {
        title: "CAD",
        tools: ["SolidWorks", "Catia", "Autodesk AutoCAD"]
    }

]

export { skillsData, toolsAndTechnologies };