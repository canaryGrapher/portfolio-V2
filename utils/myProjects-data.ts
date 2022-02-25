// importing types 
import { IProject } from "../interfaces/projects"

const projectsData: IProject[] = [
    {
        name: "Multipass-Control",
        description: "An NPM package to control Multipass VM manager from within your NodeJS application for controls like launching, stopping, or deleting Ubuntu images. This package requires an installation of Multipass on your system. Made this package because I needed to use it in some other project.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/multipassControl_d8l4kpGmuhu.png?updatedAt=1639116453545",
        link: "https://www.npmjs.com/package/multipass-control",
        tech: ["NodeJS", "Ubuntu", "Multipass", "Server"]
    },
    {
        name: "HelpCorona",
        description: "I saw a lot of people giving out their phone numbers while asking for help on Twitter and other social media platforms during the Covid-19 pandemic, so I created a platform that would allow people to ask for help anonymously and then be reached out by a team of volunteers when a lead was available.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/helpCorona_RbufJXY6Kolt.png?updatedAt=1639116452217",
        link: "https://github.com/canaryGrapher/HelpCorona",
        tech: ["ReactJS", "NodeJS"]
    },
    {
        name: "Open-Journal",
        description: "I wanted to have a personal e-journal where I could record my everyday thoughts and ideas. I did not want to use any of the online alternatives, and I wanted it to be running on my home server to access it only at my home. It also comes with a CLI companion app to make posts on the fly but not read it. This companion app runs in the Terminal and can be accessed by a batch/bash file.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/openJournal_X0EzK8T9lPWe.png?updatedAt=1639116453750",
        link: "https://github.com/canaryGrapher/Open-Journal",
        tech: ["JavaScript", "ExpressJS", "NodeJS", "HalfmoonUI"]
    },
    {
        name: "MIST website",
        description: "I was assigned to create a new website for the creation of the site from scratch. I designed and coded the website, with a few amendments suggested by other club members.In August 2020, I released a second version of the website, written in NodeJS and ReactJS.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/mistWebsite_-EGlaYze-.png?updatedAt=1639116452520",
        link: "https://wearemist.in/",
        tech: ["JavaScript", "NextJS", "MongoDB", "TailwindCSS"]
    },
    {
        name: "SLcM API",
        description: "The slcmAPI is the Open-Sourced REST-API for Manipal University's Student Life cycle Management Portal. This API is an aid for those who want to build an app or a website requiring data on SLcM. Avoid the hassle of writing your code to scrape data from the website when all you can do is make queries to this API.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/slcmAPI_PhnppSa9G.png?updatedAt=1639116453757",
        link: "https://github.com/canaryGrapher/slcmAPI",
        tech: ["NodeJS", "ExpressJS", "PuppeteerJS"]
    },
    {
        name: "WhatsAppBulker",
        description: "WhatsApp Bulker is an automation tool written in Python that makes it easy to send the same message to multiple recipients. Originally created to send out reminders for club interviews and entrance test, this script can be used for other things too.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/whatsappBulker_Dhvyj3yfWtW.png?updatedAt=1639116451941",
        link: "https://github.com/var-greyShader/whatsappBulker",
        tech: ["Python", "Selenium"]
    },
    {
        name: "The Lying Monkey - API",
        description: "API for connecting the flutter frontend to the Machine Learning Model. The application was made as a part of the Manipal Hackathon to detect fake news on various social media platforms.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/The_Lying_Monkey_8KOOIVQlR?updatedAt=1645787625483",
        link: "https://github.com/canaryGrapher/Lying-Monkey/tree/API",
        tech: ["NodeJS", "ExpressJS"]
    },
    {
        name: "checkFiler",
        description: "A python script to find the file extension and details of an unknown file by comparing the magic numbers of the unknown file to the existing database.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/checkFiler_NDuPawG_T?updatedAt=1645788045791",
        link: "https://github.com/canaryGrapher/checkFiler",
        tech: ["Python"]
    },
    {
        name: "Smart Cupboard Lighting",
        description: "An Arduino-based project that runs on a proximity sensor to automatically turn on/off the lights in a cupboard based on the door position.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/Smart_Cupboard_Lighting_y-1vuNo4B?updatedAt=1645792733846",
        link: "https://github.com/canaryGrapher/smart-cupboard-lighting",
        tech: ["C++", "Arduino"]
    },
    {
        name: "Empowered Nation website",
        description: "Website for Empowered Nations - a company that researches and develops technologies to deal with everyday problems.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/Empowered_Nation_wWyMa4P0X2B3?updatedAt=1645793494282",
        link: "https://github.com/canaryGrapher/empowered-nation/tree/master",
        tech: ["NodeJS", "ExpressJS", "Bootsrap"]
    },
    {
        name: "Verify Card",
        description: "WebApp to check if the credit/debit card number is valid or not, using Luhn Algorithms along with the ability to find the issuing agency of the card using the predefined IIN numbers.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/VerifyCard_yHwfTbVG-f4k?updatedAt=1645793870686",
        link: "https://github.com/canaryGrapher/verify-card",
        tech: ["ReactJS"]
    },
    {
        name: "Pokédex",
        description: "An unofficial Pokédex dashboard webapp created using ReactJS displaying information of over 600 different Pokémon.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/Pokedex_181LOUpSr?updatedAt=1645812266220",
        link: "https://github.com/canaryGrapher/pokedex",
        tech: ["ReactJS", "Bootstrap"]
    },
    {
        name: "Cryptocup Questions Dashboard",
        description: "A WebApp that displays random questions to be answered by the contestants of the Cryptocup competition held during TechTatva '19.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/CryptoCup_e3TA7hHHHpJt?updatedAt=1645814705099",
        link: "https://github.com/canaryGrapher/Cryptocup",
        tech: ["ExpressJS", "NodeJS"]
    },
    {
        name: "ToDo App",
        description: "A simple, static to-do app written in JavaScript with the help of React Library. My First React application project.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/ToDo_jR64vMYj9?updatedAt=1645814963894",
        link: "https://github.com/canaryGrapher/todoApp",
        tech: ["ReactJS", "Bootstrap"]
    },
    {
        name: "Semicolon",
        description: "Entry for the website design and development competition conducted by IEEE-Manipal chapter, Manipal University without use of any library. Won the appreciation for the best design.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/Semicolon_LEFbH1KAr?updatedAt=1645815423423",
        link: "https://github.com/canaryGrapher/Semicolon",
        tech: ["JavaScript"]
    },
    {
        name: "InnoServer",
        description: "I created a test server in my university after getting the necessary permissions. This is the announcement page for it.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/InnoServer_7gHmMCZi8?updatedAt=1645817271566",
        link: "https://github.com/canaryGrapher/InnoServer",
        tech: ["JavaScript", "Bootstrap"]
    },
    {
        name: "Endoscopy Card",
        description: "Backend and the dashboard for an all-in-one RFID Card system that allows patients and health facilities to access patients' uploaded medical documents from anywhere, on registered devices by scanning the tags on the RFID card.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/Endoscopy_Card_metmJfujiZga?updatedAt=1645817271615",
        link: "https://github.com/canaryGrapher/endoscopy-card",
        tech: ["NodeJS", "ExpressJS", "MongoDB", "Mongoose", "Google-auth"]
    },
    {
        name: "E-Cell | MIT",
        description: "The website for the Entrepreneurship Cell of MIT, Manipal",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/E-cell_Manipal_x5tWrq476LR8?updatedAt=1645816607582",
        link: "https://github.com/canaryGrapher/E-cell-MIT",
        tech: ["Bootstrap"]
    },
    {
        name: "MIST Shitpost",
        description: "The shitposting portal for Manipal Information Security Team. Anonymity guaranteed. Club related shit only!!",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/MIST_Shitposting_KE_Io5WRaC?updatedAt=1645817272018",
        link: "https://github.com/canaryGrapher/MIST-Shitposting",
        tech: ["Halfmoon CSS"]
    },
    {
        name: "Ctrl+C",
        description: "The code for CTRL+C TechTatva event by Manipal Information Security Team. A website cloning competition.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/Ctrl_C_JImWJX0aQ.jpg?updatedAt=1645818428297",
        link: "https://github.com/canaryGrapher/ctrl-c",
        tech: ["MaterialUI", "ReactJS", "FluentUI", "Animate.CSS", "NodeJS", "ExpressJS"]
    },
    {
        name: "Manipal Placement Portal",
        description: "An open-sourced campus placement catalogue web application to keep a track of all the companies visiting educational campuses.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/Manipal_Placements_vTk7wqRRt3LQ.jpg?updatedAt=1645818428187",
        link: "https://github.com/canaryGrapher/manipalplacements",
        tech: ["NextJS", "Ant Design", "TailwindCSS", "MongoDB", "Mongoose", "Firebase", "LocalForage"]
    },
    {
        name: "Certify Chain",
        description: "Certify chain is a blockchain based certificate generation network where an organization can issue certificates, which can then by verified by any third party.",
        image: "https://ik.imagekit.io/canarygrapher/Portfolio/home/Projects/Certify_Chain_IWoMy3S0yjq9.jpg?updatedAt=1645818428503",
        link: "https://github.com/canaryGrapher/certify-chain",
        tech: ["NextJS", "Ant Design", "TailwindCSS", "MongoDB", "Web3JS", "Metamask Wallet"]
    }
]

export { projectsData }