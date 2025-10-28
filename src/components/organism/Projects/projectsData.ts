import pdpDesktop from "/src/assets/previews/pais-de-pet-desktop.png";
import pdpDesktop2 from "/src/assets/previews/pais-de-pet-desktop-2.png";
import next from "/src/assets/icons/stack/next.svg";
import tailwind from "/src/assets/icons/stack/tailwind.svg";
import lucide from "/src/assets/icons/stack/lucide.svg";
interface iProjectsData {
  forNormals: {
    previewImg: string;
    title: string;
    text: string;
    imgs: string[];
  };
  forDevs: {
    previewImg: string;
    title: string;
    text: string;
    stack: {
      icon: string;
      title: string;
    }[];
  };
}

export const projectsData: iProjectsData[] = [
  {
    forNormals: {
      previewImg: pdpDesktop,
      title: "Pais de Pet",
      text: "A pais de pet é um centro de cuidados para pets. A empresa queria fortalecer sua preseça digital e fornecer uma imagem mais profissional para os clientes, para solucionar isso, com o auxílio de uma designer, construi um site com visual moderno e amigável, enfatizando a missão da empresa.\n O objetivo principal do desse projeto era criar uma carta de apresentação para que os clientes entandam os valores e conheçam seus profissionais, serviços e opiniões de pessoas que já foram atendidas.",
      imgs: [pdpDesktop, pdpDesktop2],
    },
    forDevs: {
      previewImg: pdpDesktop2,
      title: "Para Devs",
      text: "O desenvolvimento do projeto foi simples em relação a outros projetos, o objetivo foi criar um site estático, responsivo e otimizado para SEO. Utilizei NextJs para aproveitar suas funcionalidades de geração de sites estáticos e otimização automática.\n Para o estilo, optei por TailwindCss e Lucide, que me permitiu criar um design moderno e responsivo de forma rápida e eficiente.",
      stack: [
        { icon: next, title: "NextJs" },
        { icon: tailwind, title: "TailwindCss" },
        { icon: lucide, title: "Lucide" },
      ],
    },
  },
  {
    forNormals: { title: "", text: "", previewImg: "",imgs:[] },
    forDevs: { title: "", text: "", previewImg: "", stack: [] },
  },
  {
    forNormals: { title: "", text: "", previewImg: "",imgs:[] },
    forDevs: { title: "", text: "", previewImg: "", stack: [] },
  },
];
