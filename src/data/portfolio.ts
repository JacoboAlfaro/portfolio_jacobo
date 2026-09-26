
import type { IconType } from "react-icons";
import {
  FaBookOpen,
  FaGlobe,
  FaHandshake,
  FaLaptop,
  FaMobileAlt,
  FaPuzzlePiece,
} from "react-icons/fa";

export const social = {
  email: "jacobo.alfaro06@gmail.com",
  github: "https://github.com/JacoboAlfaro",
  linkedin: "https://www.linkedin.com/in/jacoboalfaro/",
  demo: "https://www.trackenergy.co/landing",
} as const;

export const links = {
  trackenergyWebsite: "https://www.trackenergy.co/landing",
  parkenarCode: "https://github.com/JacoboAlfaro/ParknearFrontend",
  parkenarDemo: "https://youtu.be/kCeROEUptr0",
  socialMediaApiCode: "https://github.com/JacoboAlfaro/SocialMedia2-master",
} as const;

export const profile = {
  name: "Jacobo Alfaro Hernández",
  mark: "JA",
  role: "Desarrollador de Software Full-Stack",
  location: "Manizales, Colombia",
  kicker:
    "Estudiante de Ingeniería de Sistemas · Web Developer · Full-Stack",
  hero:
    "Soy estudiante de Ingeniería de Sistemas y desarrollador de software. Me interesa crear aplicaciones web y móviles, resolver problemas mediante tecnología y seguir creciendo en el desarrollo de software.",
} as const;

export const nav = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
] as const;

export type SkillLevel = "experiencia" | "proyectos";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export const skillLevels: { id: SkillLevel; label: string }[] = [
  { id: "experiencia", label: "Con experiencia" },
  { id: "proyectos", label: "En proyectos" }
];

export function skillLevelLabel(level: SkillLevel): string {
  return skillLevels.find((item) => item.id === level)?.label ?? level;
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "Angular", level: "experiencia" },
      { name: "TypeScript", level: "experiencia" },
      { name: "JavaScript", level: "experiencia" },
      { name: "React", level: "proyectos" },
      { name: "Next.js", level: "proyectos" },
      { name: "HTML", level: "experiencia" },
      { name: "CSS", level: "experiencia" },
      { name: "Tailwind CSS", level: "experiencia" }
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "C#", level: "experiencia" },
      { name: ".NET", level: "experiencia" },
      { name: "ASP.NET Core", level: "experiencia" },
      { name: "Node.js", level: "proyectos" },
      { name: "Express", level: "proyectos" }
    ],
  },
  {
    title: "Móvil",
    items: [
      { name: "React Native", level: "proyectos" },
      { name: "Expo", level: "proyectos" }
    ],
  },
  {
    title: "Bases de datos",
    items: [
      { name: "SQL", level: "experiencia" },
      { name: "PostgreSQL", level: "experiencia" },
      { name: "MySQL", level: "experiencia" },
      { name: "SQL Server", level: "proyectos" },
      { name: "MongoDB", level: "proyectos" }
    ],
  },
  {
    title: "APIs",
    items: [
      { name: "REST", level: "experiencia" },
      { name: "JWT", level: "experiencia" },
      { name: "Swagger", level: "experiencia" },
      { name: "Postman", level: "experiencia" },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { name: "Git", level: "experiencia" },
      { name: "GitHub", level: "experiencia" },
      { name: "Visual Studio", level: "proyectos" },
      { name: "Visual Studio Code", level: "proyectos" }
    ],
  },
];

export const traits: { icon: IconType; label: string }[] = [
  { icon: FaLaptop, label: "Desarrollo de software" },
  { icon: FaGlobe, label: "Desarrollo web" },
  { icon: FaMobileAlt, label: "Desarrollo móvil" },
  { icon: FaPuzzlePiece, label: "Resolución de problemas" },
  { icon: FaBookOpen, label: "Aprendizaje continuo" },
  { icon: FaHandshake, label: "Trabajo en equipo" },
];

export interface Project {
  id: string;
  name: string;
  kind: string;
  summary: string;
  technologies: string[];
  visual: "energy" | "park" | "crm" | "estate" | "fly" | "social";
  featured: boolean;
  codeUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "trackenergy",
    name: "TrackEnergy",
    kind: "Prestación de servicio",
    summary:
      "Plataforma de gestión y monitoreo de energía para visualizar generación, consumo y activos. Trabajé el frontend en Angular y un backend en Node.js y Express, con dashboards diario, mensual, anual y en tiempo real, cuidando las consultas al API y la separación entre rutas, controladores y servicios.",
    technologies: [
      "Angular",
      "TypeScript",
      "Angular Material",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MySQL",
    ],
    visual: "energy",
    featured: true,
    demoUrl: links.trackenergyWebsite
  },
  {
    id: "parknear",
    name: "ParkNear",
    kind: "Proyecto académico",
    summary:
      "Gestión de zonas de estacionamiento en el contexto de las zonas azules de Manizales, con perfiles de conductor, encargado y administrador. La app móvil está hecha con React Native y Expo. El backend se organizó en servicios (auth, usuarios, reservas, pagos, zonas y soporte) detrás de un API Gateway, con JWT, PostgreSQL y una integración académica de Mercado Pago.",
    technologies: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "PostgreSQL",
      "JWT",
      "Google Maps",
    ],
    visual: "park",
    featured: true,
    codeUrl: links.parkenarCode,
    demoUrl: links.parkenarDemo,
  },
  {
    id: "social-media-api",
    name: "Social Media API",
    kind: "Proyecto académico",
    summary:
      "Backend para una plataforma de contenido social, con usuarios, publicaciones, comentarios, autenticación y validación. La interfaz de apoyo está en Angular.",
    technologies: [
      "ASP.NET Core",
      "Angular",
      "Entity Framework",
      "JWT",
      "Swagger",
    ],
    visual: "social",
    featured: false,
    codeUrl: links.socialMediaApiCode
  },
];

export interface ExperienceItem {
  title: string;
  area: string;
  location?: string;
  period?: string;
  summary: string;
  activities: string[];
  note?: string;
  technologies: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: "Prestador de servicio — TrackEnergy",
    area: "Desarrollo de la aplicación web",
    summary:
      "Como prestador de servicio se migró la aplicación web de TrackEnergy de php a Angular, manteniendo la funcionalidad y agregando nuevas características.",
    activities: [
      "Desarrollo del frontend con Angular, TypeScript y Angular Material.",
      "Dashboards de generación y consumo: diario, mensual, anual y tiempo real.",
      "Consumo de APIs",
      "Componentes reutilizables, rutas y formularios.",
      "Backend con Node.js y Express, y datos en PostgreSQL y MySQL.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Angular Material",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "Práctica empresarial — Emergia",
  area: "Aplicaciones / Desarrollos Corporativos",
  location: "Manizales, Colombia",
  period: "Agosto 2023 — Febrero 2024",
  summary:
    "Durante mi práctica empresarial del tecnólogo apoyé el área de Aplicaciones Corporativas en actividades relacionadas con desarrollo y calidad de software.",
  activities: [
    "Apoyo en desarrollo de aplicaciones.",
    "Pruebas de software y pruebas de APIs.",
    "Documentación de aplicaciones.",
    "Apoyo a procesos de calidad.",
    "Uso de Git, GitHub y Postman.",
    "Comunicación con usuarios y validación de funcionalidades.",
    "Trabajo bajo metodologías ágiles y con el equipo de desarrollo.",
  ],
  note: "",
  technologies: [
    "Angular",
    ".NET",
    "C#",
    "JavaScript",
    "APIs REST",
    "Postman",
    "Git",
    "Pruebas",
    "Documentación",
  ],
  },
];

export const education = [
  {
    title: "Ingeniería de Sistemas",
    place: "Universidad Autónoma de Manizales",
    status: "Actualmente en formación",
    detail:
      "Formación universitaria en curso, enfocada en seguir creciendo como desarrollador de software.",
    current: true,
  },
  {
    title: "Tecnólogo en Análisis y Programación de Sistemas Informáticos",
    place: "Universidad Autónoma de Manizales",
    status: "Completada",
    detail:
      "Desarrollo de software, programación, bases de datos, análisis de sistemas y desarrollo de aplicaciones.",
    current: false,
  },
  {
    title: "Técnico Profesional en Programación de Computadores",
    place: "Universidad Autónoma de Manizales",
    status: "Completada",
    detail:
      "Programación, desarrollo de software, fundamentos de sistemas y bases de datos.",
    current: false,
  },
] as const;

export const learning = [
  "Angular",
  "TypeScript",
  "Arquitectura de aplicaciones",
  "React Native",
  "Desarrollo full-stack",
  ".NET",
  "APIs REST",

] as const;