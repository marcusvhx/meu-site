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

import mhs1 from "/src/assets/previews/mhs/mhs-1.png";
import mhs2 from "/src/assets/previews/mhs/mhs-2.png";
import mhs3 from "/src/assets/previews/mhs/mhs-3.png";
import mhs4 from "/src/assets/previews/mhs/mhs-4.png";
import mhs5 from "/src/assets/previews/mhs/mhs-5.png";
import mhs6 from "/src/assets/previews/mhs/mhs-6.png";
import mhs7 from "/src/assets/previews/mhs/mhs-7.png";
import mhs8 from "/src/assets/previews/mhs/mhs-8.png";

import next from "/src/assets/icons/stack/next.svg";
import tailwind from "/src/assets/icons/stack/tailwind.svg";
import lucide from "/src/assets/icons/stack/lucide.svg";
import typescript from "/src/assets/icons/stack/typescript.svg";
import node from "/src/assets/icons/stack/node.svg";
import postgre from "/src/assets/icons/stack/postgre.svg";

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
      text: "A pais de pet é um centro de cuidados para pets. A empresa queria fortalecer sua presença digital e fornecer uma imagem mais profissional para os clientes, para solucionar isso, com o auxílio de um designer, construí um site com visual moderno e amigável, enfatizando a missão da empresa. O objetivo principal do desse projeto era criar uma carta de apresentação para que os clientes entendam os valores e conheçam seus profissionais, serviços e opiniões de pessoas que já foram atendidas.",
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
    forNormals: {
      link: "mhsbarbershop.vercel.app",
      title: "MHS barber Shop",
      text: "A MHS Barber Shop é uma barbearia com foco no conforto e boa experiencia de quem a frequenta, devido a alta demanda de clientes, o dono do estabelecimento percebeu a necessidade de um sistema para gerenciar os agendamentos e aprimmorar a logística do negócio. Para atender a essa demanda, desenvolvi um sistema de agendamento de horários onde os clientes podem fazer agendamentos de forma autônoma e o proprietário é capaz de consultar os agendamentos via Google Agenda.\n Assim o estabelecimento tem um fluxo de clientes mais organizado, melhorando a experiencia dos cliente em relação ao coonforto e tempo de espera.",
      previewImg: mhs1,
      imgs: [mhs1, mhs2, mhs3, mhs4, mhs5, mhs6, mhs7, mhs8],
    },
    forDevs: {
      title: "Para Devs",
      text: "O desenvolvimento desse sistema foi mais complexo que uma simples landing page, exigindo a criação de um backend para gerenciar os agendamentos e integração com a API do Google Agenda. Utilizei NextJs para o frontend, aproveitando suas capacidades de SSR e SSG para otimização de desempenho e SEO, ainda que a MHS ja tenha uma gama ampla e estével de clientes .\n No backend, optei pelo NodeJs com Typescript para que todo o projeto esteja em um único ecossistema, isso acelera o processo de desenvolvimento sem comprometer a qualidade do sistema. O banco de dados escolhido foi PostgreSQL, devido à sua robustez e capacidade de lidar com dados relacionais de forma eficiente.",
      previewImg: mhs2,
      stack: [
        { icon: next, title: "NextJs" },
        { icon: tailwind, title: "TailwindCss" },
        { icon: typescript, title: "Typescript" },
        { icon: node, title: "NodeJs" },
        { icon: postgre, title: "PostgreSQL" },
      ],
    },
  },
  {
    forNormals: { link: "", title: "", text: "", previewImg: "", imgs: [] },
    forDevs: { title: "", text: "", previewImg: "", stack: [] },
  },
];
