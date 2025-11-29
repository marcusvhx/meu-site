import pdpMockup from "/src/assets/previews/pdp/pdp-mockup.png";
import pdp1 from "/src/assets/previews/pdp/pdp-1.png";
import pdp2 from "/src/assets/previews/pdp/pdp-2.png";
import pdp3 from "/src/assets/previews/pdp/pdp-3.png";
import pdp4 from "/src/assets/previews/pdp/pdp-4.png";
import pdp5 from "/src/assets/previews/pdp/pdp-5.png";
import pdp6 from "/src/assets/previews/pdp/pdp-6.png";
import pdp7 from "/src/assets/previews/pdp/pdp-7.png";
import pdp8 from "/src/assets/previews/pdp/pdp-8.png";
import pdp9 from "/src/assets/previews/pdp/pdp-9.png";
import pdp10 from "/src/assets/previews/pdp/pdp-10.png";
import pdp11 from "/src/assets/previews/pdp/pdp-11.png";

import next from "/src/assets/icons/stack/next.svg";
import tailwind from "/src/assets/icons/stack/tailwind.svg";
import lucide from "/src/assets/icons/stack/lucide.svg";
interface iDefaut {
  previewImg: string;
  title: string;
  text: string;
}
interface iForNormals extends iDefaut {
  link: string;
  imgs: string[];
}

interface iForDevs extends iDefaut {
  stack: {
    icon: string;
    title: string;
  }[];
}

interface iProjectsData {
  forNormals: iForNormals;
  forDevs: iForDevs;
}

export const projectsData: iProjectsData[] = [
  {
    forNormals: {
      link: "https://paisdepetcandeias.vercel.app",
      previewImg: pdpMockup,
      title: "Pais de Pet",
      text: "A pais de pet é um centro de cuidados para pets. A empresa queria fortalecer sua preseça digital e fornecer uma imagem mais profissional para os clientes, para solucionar isso, com o auxílio de uma designer, construi um site com visual moderno e amigável, enfatizando a missão da empresa.\n O objetivo principal do desse projeto era criar uma carta de apresentação para que os clientes entandam os valores e conheçam seus profissionais, serviços e opiniões de pessoas que já foram atendidas.",
      imgs: [
        pdpMockup,
        pdp1,
        pdp2,
        pdp3,
        pdp4,
        pdp5,
        pdp6,
        pdp7,
        pdp8,
        pdp9,
        pdp10,
        pdp11,
      ],
    },
    forDevs: {
      previewImg: pdp6,
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
    forNormals: { link: "", title: "", text: "", previewImg: "", imgs: [] },
    forDevs: {title: "", text: "", previewImg: "", stack: [] },
  },
  {
    forNormals: { link: "", title: "", text: "", previewImg: "", imgs: [] },
    forDevs: {title: "", text: "", previewImg: "", stack: [] },
  },
];
