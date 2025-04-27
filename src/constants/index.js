import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  // mongodb,
  git,
  // figma,
  // docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  // threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // {
  //   title: "Web Developer",
  //   icon: web,
  // },
  {
    title: "Reactjs Developer",
    icon: mobile,
  },
  {
    title: "cybersecurity",
    icon: backend,
  },
  {
    title: "Blender 3D Artist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Reactjs",
    company_name: "VIS worldwide",
    icon: 'https://visworldwide.com/asset/styles/Web%20Logo%20Org%20White.png',
    iconBg: "#383E56",
    date: "March 2023",
    points: [
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
 
    ],
  },
  {
    title: "Blender3D Artist",
    company_name: "EDUGALITECH",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 ",
    points: [
      "Created and optimized 3D visual assets using Blender for educational and promotional content.",
    ],
  },
  {
    title: "ISC2 Member",
    company_name: "ISC2",
    icon: 'https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/logos/logo.svg?iar=0',
    iconBg: "#383E56",
    date: "Jan 2025",
    points: [
      "Active member of ISC2, demonstrating a strong commitment to cybersecurity best practices .",
    ],
  },
  {
    title: "Chief Executive Officer",
    company_name: "TECHSHAPER",
    icon: meta,
    iconBg: "#383E56",
    date: "Jan 2025",
    points: [
      "As CEO of TechShaper, lead the company’s strategic vision to empower clients in shaping their technology solutions maintaining.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Manage Landing Page",
    description:
      "The Manage Landing Page is a clean and responsive user interface designed to promote a project management SaaS platform called Manage. The focus of this frontend-only project is to visually communicate the platform’s value proposition, with well-structured sections highlighting key features such as team collaboration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/UkashaMusa/Manage-UI",
  },
  {
    name: "U-MEDIC – Doctor Appointment",
    description:
      "U-MEDIC is a full-stack medical appointment booking web application that allows users to find trusted doctors, view specialities, and book appointments online. The platform also integrates secure online payments via PayPal for a smooth and hassle-free experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
      {
        name: "MangoDB",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/UkashaMusa/U-MEDIC_UI_FRONTEND/tree/main",
  },
  {
    name: "Internazionale Lisa Academy",
    description:
      "Internazionale Lisa Academy is a modern and responsive educational website built to represent a global learning institution. The site was developed using React.js for dynamic and efficient user interfaces and styled with Tailwind CSS for clean, responsive layouts.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Web3D form",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/UkashaMusa/internazionale-lisa-academy",
  },
];

export { services, technologies, experiences, testimonials, projects };
