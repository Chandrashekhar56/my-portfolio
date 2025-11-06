import { Mail, ExternalLink, Code2, Briefcase, Sparkles, MapPin, ChevronRight, Github, Linkedin, Star, ArrowRight, Zap, Cpu, Database, Globe, Activity, ShoppingCart, BookOpen, Award, FileText } from "lucide-react";

export const projects = [
  {
    title: "HealthApp - Mobile Application ",
    description: "React Native app with Express, Node, MySQL, Ant Design, MUI, and Bootstrap for full-stack health.",
    tags: ["React Native", "Express", "MySQL", "Node.js", "Ant Design", "MUI", "Bootstrap"],
    links: {
      live: "https://example.com",
      repo: "https://github.com/you/healthapp",
    },
    gradient: "from-red-500 to-orange-500",
    icon: <Activity className="w-6 h-6" />,
  },
  {
    title: "E‑commerce Platform",
    description: "React full-stack e-commerce application with Express, Node, MySQL, Ant Design, MUI, and Bootstrap integration.",
    tags: ["React", "Express", "MySQL", "Node.js", "Ant Design", "MUI", "Bootstrap"],
    links: {
      live: "https://example.com",
      repo: "https://github.com/you/ecommerce",
    },
    gradient: "from-indigo-500 to-purple-500",
    icon: <ShoppingCart className="w-6 h-6" />,
  },
  {
    title: "Digital Storybook",
    description: "Interactive React application for creating and reading digital storybooks, using Express, Node, MySQL, Ant Design, MUI, and Bootstrap.",
    tags: ["React", "Express", "MySQL", "Node.js", "Ant Design", "MUI", "Bootstrap"],
    links: {
      live: "https://example.com",
      repo: "https://github.com/you/digital-storybook",
    },
    gradient: "from-green-500 to-teal-500",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "HealthApp - Web Application",
    description: "React web application with full-stack support using Express, Node, MySQL, Ant Design, MUI, and Bootstrap.",
    tags: ["React", "Express", "MySQL", "Node.js", "Ant Design", "MUI", "Bootstrap"],
    links: {
      live: "https://example.com",
      repo: "https://github.com/you/healthapp-advanced",
    },
    gradient: "from-pink-500 to-red-500",
    icon: <Activity className="w-6 h-6" />,
  },
];

export const skills = [
  { name: "HTML", level: 90, icon: <FileText className="w-4 h-4" />, color: "bg-orange-500" },
  { name: "CSS", level: 90, icon: <Code2 className="w-4 h-4" />, color: "bg-blue-500" },
  { name: "JavaScript", level: 90, icon: <Code2 className="w-4 h-4" />, color: "bg-yellow-400" },
  { name: "React", level: 90, icon: <Code2 className="w-4 h-4" />, color: "bg-blue-500" },
  { name: "React Native", level: 90, icon: <Code2 className="w-4 h-4" />, color: "bg-teal-500" },
  { name: "MySQL", level: 90, icon: <Globe className="w-4 h-4" />, color: "bg-yellow-500" },
  { name: "Express.js", level: 90, icon: <Code2 className="w-4 h-4" />, color: "bg-gray-700" },
  { name: "Node.js", level: 90, icon: <Database className="w-4 h-4" />, color: "bg-green-500" },
  { name: "MongoDB", level: 90, icon: <Database className="w-4 h-4" />, color: "bg-green-600" },
  { name: "Tailwind CSS", level: 90, icon: <Code2 className="w-4 h-4" />, color: "bg-purple-500" },
  { name: "Ant Design", level: 90, icon: <Code2 className="w-4 h-4" />, color: "bg-blue-700" },
  { name: "Bootstrap", level: 90, icon: <Code2 className="w-4 h-4" />, color: "bg-indigo-500" },
  { name: "MUI", level: 90, icon: <Code2 className="w-4 h-4" />, color: "bg-teal-700" },
];

export const links = {
  name: "Chandrashekhar sati",
  title: "Hi I am Chandrashekhar Sati, a Full‑Stack Developer",
  about: "I craft digital experiences that blend cutting-edge technology with intuitive design, transforming complex ideas into elegant solutions.",
  email: "shekharsati56@example.com",
  linkedin: "https://www.linkedin.com/in/chandrashekhar-sati-8330a6192/",
  location: "Dehradun, IN",
  github: "https://github.com/Chandrashekhar56"
};

export const education = [
  {
    degree: "Master of Computer Application (MCA)",
    school: "Swami Rama Himalayan University",
    year: "2020 - 2022",
    details: "Focused on software development, web technologies, and data structures.",
    icon: <Award className="w-5 h-5 text-white" />,
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    school: "Himalayan Institute of Technology",
    year: "2017 - 2020",
    details: "Focused on software development, web technologies, and data structures.",
    icon: <Award className="w-5 h-5 text-white" />,
  },
  {
    degree: "12th Grade",
    school: "G.I.C Paintoli chamoli (Uttarakhand Board of School Education)",
    year: "2017",
    icon: <Award className="w-5 h-5 text-white" />,
  },
  {
    degree: "10th Grade",
    school: "G.I.C Paintoli chamoli (Uttarakhand Board of School Education)",
    year: "2015",
    icon: <Award className="w-5 h-5 text-white" />,
  },
];

export const experience = [
  {
    role: "Full‑Stack Developer",
    company: "Virtuevise Technologies",
    year: "2023 - Present",
    details: "Developed responsive web applications and implemented full-stack features collaborating with team members.",
    stack:  ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MySQL", "MongoDB", "Tailwind CSS", "MUI", "Ant Design"],
    icon: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    role: "Intern Developer",
    company: "Virtuevise Technologies",
    year: "",
    details: "Assisted in developing full-stack features including front-end and back-end, gaining hands-on experience with React, Node.js, Express, and databases in an agile environment.",
    stack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MySQL", "MongoDB", "Tailwind CSS", "MUI", "Ant Design"],
    icon: <Briefcase className="w-5 h-5 text-white" />,
  },
];
