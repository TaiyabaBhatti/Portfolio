import tailwindcssLogo from "../assets/images/tailwind-icon.png"
import ReactIcon from "../assets/images/react-icon.png";
import ViteIcon from "../assets/images/vite-icon.png";
import FirebaseIcon from "../assets/images/firebase-icon.png";





const projects = [

    {
        title: "Balance Beacon",
        desc: "A web application built with React and Firebase to create awareness and provide resources about Dissociative Identity Disorder (DID)",
        tags: ["Reactjs", "Tailwind", "Firebase"],
        githubLink: "https://github.com/TaiyabaBhatti/Balance-Beacon",
        livePreview: "https://balance-beacon.netlify.app/",
    },
    {
        title: "RemoteHyra",
        desc: "Remotehyra Web Project",
        tags: ["Reactjs", "Tailwind", "EmailJs"],
        githubLink: "https://github.com/TaiyabaBhatti/Remotehyra-Site",
        livePreview: "https://remotehyra.netlify.app/",
    },
    {
        title: "Chef-Claude",
        desc: "A recipe suggestion app powered by Claude API that generates dishes based on user-provided ingredients.",
        tags: ["Reactjs", "Tailwind", "Claude API"],
        githubLink: "https://github.com/TaiyabaBhatti/Chef-Claude-Project",
        livePreview: null
    }











]

const aboutInfo = {

    aboutDesc: "I utilize the new updates and versions of ReactJs and its dependencies, implements the new plugins that makes Frontend more reliable as I learn.",

    interests: ["Cloud", "Sports", "Speaking"]

}

const contactInfo = {
    personalEmail: "taiyababhattii@gmail.com",
    studentEmail: "22sw051@students.muet.edu.pk",
    phoneNumber: "+92 3072360542"
}

const homeSliderIcons = [

    tailwindcssLogo, ReactIcon, ViteIcon, FirebaseIcon, tailwindcssLogo, ReactIcon, ViteIcon, FirebaseIcon,
]





export { projects, aboutInfo, contactInfo, homeSliderIcons };