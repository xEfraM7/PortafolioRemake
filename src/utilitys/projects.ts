import comingSoon from "../assets/img/coming-soon.jpg";
import journalImg from "../assets/img/journal-app.png";
import encriptador from "../assets/img/encriptado.png";
import hisCapture from "../assets/img/hisCapture.jpg";
import librarianCollectorCapture from "../assets/img/librarianCollectorCaptura.jpg";
import projectRCapture from "../assets/img/projectR.jpg";
import projectGifs from "../assets/img/project-gifs.png";

export const projects = [
    {
      title: "Proyecto de Gifs",
      description: "con GIPHY",
      imgUrl: projectGifs,
      href: "https://gif-expert-app-2.netlify.app",
    },
    {
      title: "Journal App",
      description: "Firebase authentication and React-Redux",
      imgUrl: journalImg,
      href: " https://journal-k9ogsanjj-xefram7.vercel.app",
    },
    {
      title: "Encriptador Oracle",
      description: "Code Challenge #1 Oracle-AluraLatam",
      imgUrl: encriptador,
      href: "https://xefram7.github.io/EncriptadorOracle.github.io/",
    },
    {
      title: "Project R",
      description: "Software para restaurants hecho por CodeInTheWeb",
      imgUrl: projectRCapture,
    },
    {
      title: "Librarian Collector",
      description:
        "Desarrollo de seguridad en el inicio de sesion de un sistema de bibliotecas",
      imgUrl: librarianCollectorCapture,
    },
    {
      title: "Hospital Information System",
      description:
        "Desarrollo de modulos de consulta externa tanto maquetacion como funcionamiento",
      imgUrl: hisCapture,
    },
    {
      title: "Coming Soon",
      description: "",
      imgUrl: comingSoon,
    },
  ];