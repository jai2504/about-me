import { RiComputerLine, RiFlutterFill } from 'react-icons/ri'
import { AiOutlineApi, AiOutlineAntDesign } from 'react-icons/ai'
import { FaServer, FaJava } from 'react-icons/fa'
import { IProject, IService } from "./type"
import { BiNetworkChart } from "react-icons/bi";
export const services: IService[] = [
    {
        title: "React Dev",
        about: "Build modern-day UI components to improvise application performance.",
        Icon: RiComputerLine
    },
    {
        title: "Java Dev",
        about: "Computer programmer proficient with coding in <b>Java</b>",
        Icon: FaJava
    },
    {
        title: "Flutter Dev",
        about: "Build hybrid applications using <b>Flutter</b> and <b>Dart</b>",
        Icon: RiFlutterFill
    },
    {
        title: "UI/UX Dev",
        about: "Create user-centered designs by understanding business requirements, and user feedback",
        Icon: AiOutlineAntDesign
    },

    {
        title: "Backend Dev",
        about: "handle Database,server,api using <b>Express</b> & other popular frameworks",
        Icon: BiNetworkChart
    },
    {
        title: "API dev",
        about: "I can develop robust REST API using <b>JAVA</b> and <b>Maven framework</b>",
        Icon: AiOutlineApi
    },

]

export const projects: IProject[] = [
    {
        id:1,
        name: "JN Chat",
        description: "A Flutter app to chat with individuals as well as in groups. Authentication can be done using email as well as Phone",
        image_path: "http://www.clipartbest.com/cliparts/7Ta/Ldk/7TaLdkAbc.png",
        github_url: "https://github.com/jai2504/JN_CHAT",
        category: ["flutter","firebase"],
        key_techs: ["Flutter", "Firebase"]
    },
    {
        id:2,
        name: "Aahaar",
        description: "The Flutter Application aimed at providing extra food available at big parties to the needy ones. The aim is to reduce starvation in the world",
        image_path: "https://raw.githubusercontent.com/jai2504/aahaar/master/assets/images/logo.png",
        github_url: "https://github.com/jai2504/aahaar/",
        category: ["flutter","firebase"],
        key_techs: ["Flutter", "Firebase", "Web Scrapping"]
    },
    {
        id:3,
        name: "Whatsapp Clone",
        description: "A Flutter Project make the UI of famous chat application Whatsapp",
        image_path: "https://blog.back4app.com/wp-content/uploads/2019/11/Create-WhatsApp-Clone-2.png",
        github_url: "https://github.com/jai2504/watsapp",
        category: ["flutter"],
        key_techs: ["Flutter"]
    },
    {
        id:4,
        name: "Pet App Clone",
        description: "A Flutter Project make the UI of a Pet buy application",
        image_path: "https://www.boredpanda.com/blog/wp-content/uploads/2019/01/Br0MiEOAS0z-png__700.jpg",
        github_url: "https://github.com/jai2504/pet",
        category: ["flutter"],
        key_techs: ["Flutter"]
    },
    {
        id:5,
        name: "FoodHub",
        description: "A React Application order food online. Authentication can be done using email as well as Phone",
        image_path: "https://raw.githubusercontent.com/jai2504/foodhub/master/foodHub-frontend-client-master/public/android-chrome-512x512.png",
        github_url: "https://github.com/jai2504/foodhub",
        category: ["react"],
        key_techs: ["React", "MongoDB", "Express"]
    },
   
]