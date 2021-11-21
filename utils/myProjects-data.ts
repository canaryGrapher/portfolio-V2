// importing types 
import { IProject } from "../interfaces/projects"

const projectsData: IProject[] = [
    {
        name: "Multipass-Control",
        description: "An NPM package to control Multipass VM manager from within your NodeJS application for controls like launching, stopping, or deleting Ubuntu images. This package requires an installation of Multipass on your system. Made this package because I needed to use it in some other project.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/About_Me/About1.png?updatedAt=1636366623424",
        link: "https://www.npmjs.com/package/multipass-control",
        tech: ["NodeJS", "Ubuntu", "Multipass", "Server"]
    },
    {
        name: "HelpCorona",
        description: "A package to control Multipass VM manager from within your NodeJS application for controls like launching, stopping or deleting Ubuntu images. This package requires an installation of Multipass on your system.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/About_Me/About1.png?updatedAt=1636366623424",
        link: "https://github.com/canaryGrapher/HelpCorona",
        tech: ["ReactJS", "NodeJS"]
    },
    {
        name: "Open-Journal",
        description: "I wanted to have a personal e-journal where I could record my everyday thoughts and ideas. I did not want to use any of the online alternatives, and I wanted it to be running on my home server to access it only at my home. I created this project in ReactJS, NodeJS, and HalfmoonUI. It also comes with a CLI companion app to make posts on the fly but not read it. This companion app runs in the Terminal and can be accessed by a batch/bash file.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/About_Me/About1.png?updatedAt=1636366623424",
        link: "https://github.com/canaryGrapher/Open-Journal",
        tech: ["JavaScript", "ExpressJS", "NodeJS"]
    },
    {
        name: "MIST website",
        description: "I was assigned to create a new website for the creation of the site from scratch. I designed and coded the website, with a few amendments suggested by other club members.In August 2020, I released a second version of the website, written in NodeJS and ReactJS.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/About_Me/About1.png?updatedAt=1636366623424",
        link: "https://wearemist.in/",
        tech: ["JavaScript", "NextJS", "MongoDB"]
    },
    {
        name: "SLcM API",
        description: "The slcmAPI is the Open-Sourced REST-API for Manipal University's Student Life cycle Management Portal. This API is an aid for those who want to build an app or a website requiring data on SLcM. Avoid the hassle of writing your code to scrape data from the website when all you can do is make queries to this API.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/About_Me/About1.png?updatedAt=1636366623424",
        link: "https://github.com/canaryGrapher/slcmAPI",
        tech: ["NodeJS", "PuppeteerJS"]
    },
    {
        name: "WhatsAppBulker",
        description: "WhatsApp Bulker is an automation tool written in Python that makes it easy to send the same message to multiple recipients. Originally created to send out reminders for club interviews and entrance test, this script can be used for other things too.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/About_Me/About1.png?updatedAt=1636366623424",
        link: "https://github.com/var-greyShader/whatsappBulker",
        tech: ["Python", "Selenium"]
    },
]

export { projectsData }