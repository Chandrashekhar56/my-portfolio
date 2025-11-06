/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { Mail, Code2, Sparkles, MapPin, ChevronRight, Github, Linkedin, Star, ArrowRight, Database, Globe } from "lucide-react";
import shekharImg from '../assets/shekhar.png';
import githubImg from '../assets/githubpng.png';
import linkedInImg from '../assets/linkedin.png';
import whatsappImg from '../assets/whatsapp.png';
import emailImg from '../assets/email.png'
import socialMedia from '../assets/socialMedia.png'
import { Typewriter } from "react-simple-typewriter";
import { education, experience, links, projects, skills } from "../utils/helper";
import "../css/portfolio.css";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    animationDelay: Math.random() * 5,
    duration: Math.random() * 10 + 10
  }));

  const [showIcon, setShowIcon] = useState(false);
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      
      {/* Fixed Social Icons */}
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-3 z-50 bg-gradient-to-r from-blue-400 to-purple-400 p-1 rounded-full shadow-lg">
        <a
          onClick={() => setShowIcon(!showIcon)}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 flex items-center justify-center  rounded-full shadow-lg hover:scale-125 transition-transform duration-300 rounded-full"
        >
          <img src={socialMedia} alt="socialMedia" className="w-12 h-12 rounded-full" />
        </a>
        <a
          href="https://wa.me/8273496262"
          target="_blank"
          rel="noreferrer"
          className={`w-12 h-12 flex items-center justify-center  rounded-full shadow-lg hover:scale-125 transition-transform duration-300 ${showIcon ? '' : 'hidden'}`}
        >
          <img src={whatsappImg} alt="WhatsApp" className="w-12 h-12" />
        </a>
        <a
          href="https://www.linkedin.com/in/chandrashekhar-sati-8330a6192/"
          target="_blank"
          rel="noreferrer"
          className={`w-12 h-12 flex items-center justify-center  rounded-full shadow-lg hover:scale-125 transition-transform duration-300 ${showIcon ? '' : 'hidden'}`}
        >
          <img src={linkedInImg} alt="LinkedIn" className="w-12 h-12" />
        </a>

        <a
          href="https://github.com/Chandrashekhar56"
          target="_blank"
          rel="noreferrer"
          className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-125 transition-transform duration-300 ${showIcon ? '' : 'hidden'}`}
        >
          <img src={githubImg} alt="GitHub" className="w-12 h-12" />
        </a>

        <a
          href={`mailto:${links.email}`}
          className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-125 transition-transform duration-300 ${showIcon ? '' : 'hidden'}`}
        >
          <img src={emailImg} alt="Email" className="w-12 h-12" />
        </a>

      </div>

      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)]"></div>
        {floatingElements.map(el => (
          <div
            key={el.id}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${el.left}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${el.animationDelay}s`,
              animationDuration: `${el.duration}s`
            }}
          />
        ))}
      </div>

      {/* Custom Cursor */}
      <div
        className="fixed w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          transform: `scale(${isLoaded ? 1 : 0})`
        }}
      />

      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 z-40">
        <nav className="mx-auto max-w-6xl flex justify-between items-center px-6 py-4 overflow-x-auto">

          <div className="name-large">
            {links.name}
          </div>

          <div className="name-small">
            CSS
          </div>

          {/* Nav links */}
          <div className={`flex gap-8 text-sm transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            {["home", "projects", "skills", "contact", "experience", "education"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`hover:text-blue-400 transition-all duration-300 relative group capitalize ${activeSection === item ? 'text-blue-400' : 'text-gray-300'}`}
                onClick={() => setActiveSection(item)}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </nav>

      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 max-w-6xl w-full">
          {/* Text Content */}
          <div className={`text-center lg:text-left max-lg:mt-[100px] transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              <span className="text-blue-400 font-medium">Welcome to my digital space</span>
            </div>
            {/* <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
              {links.title}
            </h1> */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
              <Typewriter
                words={[links.title]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-pulse">
              {links.about}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <a
                href={`mailto:${links.email}`}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold flex items-center gap-3 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Let's Connect
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <div className="flex gap-4">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 group border border-gray-700 hover:border-blue-500"
                >
                  <Github className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300" />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 group border border-gray-700 hover:border-blue-500"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300" />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>{links.location}</span>
            </div>
          </div>

          {/* Photo Section */}
          <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="relative group">
              {/* Glowing Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Main Photo Container - Modern Rounded Rectangle with Tilt */}
              <div className="relative mt-14 w-80 h-96 md:w-96 md:h-[450px] group-hover:scale-105 transition-transform duration-700 ease-out">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 relative overflow-hidden rounded-3xl border-2 border-blue-400/30 group-hover:border-purple-400/50 transition-colors duration-500 transform rotate-3 group-hover:rotate-1">
                  {/* Placeholder for your photo */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      {/* <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">CSS</span>
                      </div> */}
                      <img src={shekharImg} alt="shekhar" className="w-full h-full object-cover" />
                      {/* <p className="text-xs text-gray-500 mt-2">Replace this placeholder</p> */}
                    </div>
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Inner Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/5 to-purple-400/5"></div>
                </div>

                {/* Floating Tech Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce opacity-60 flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-purple-400 rounded-full animate-pulse opacity-60 flex items-center justify-center">
                  <Database className="w-4 h-4 text-white" />
                </div>
                <div className="absolute top-1/4 -right-8 w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-60 flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <div className="absolute bottom-1/4 -left-6 w-7 h-7 bg-green-400 rounded-full animate-bounce opacity-60 flex items-center justify-center" style={{ animationDelay: '1s' }}>
                  <Globe className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my latest work, where innovation meets functionality
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: isLoaded ? 'slideUp 0.8s ease-out forwards' : 'none'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="relative p-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50 hover:border-blue-500/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* <div className="flex gap-4">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group/link"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                      Live Demo
                    </a>
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group/link"
                    >
                      <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                      Source
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative py-20 px-6 bg-gradient-to-r from-gray-900/50 to-blue-900/10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-gray-400 text-lg">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:bg-gray-800/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${skill.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>

                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isLoaded ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-400 mt-2">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="relative py-20 px-6 bg-gradient-to-r from-gray-900/50 to-green-900/10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional journey and roles I have undertaken
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {experience.map((exp, index) => (
              <div
                key={exp.role}
                className="group relative p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:bg-green-800/50"
              >
                {/* Floating Icon */}
                <div className="absolute -top-5 -left-5 w-10 h-10 bg-green-500/30 rounded-full flex items-center justify-center animate-bounce">
                  {exp.icon}
                </div>

                <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                <p className="text-gray-400 mb-2">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-4">{exp.year}</p>
                <p className="text-gray-300 text-sm">{exp.details}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.stack?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50 hover:border-green-400/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="relative py-20 px-6 bg-gradient-to-r from-gray-900/50 to-purple-900/10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My academic background and qualifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="group relative p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:bg-blue-800/50"
              >
                {/* Floating Icon */}
                <div className="absolute -top-5 -left-5 w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center animate-bounce">
                  {edu.icon}
                </div>

                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-gray-400 mb-2">{edu.school}</p>
                <p className="text-gray-500 text-sm mb-4">{edu.year}</p>
                <p className="text-gray-300 text-sm">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50">
            <div className="mb-8">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let's Create Something Amazing
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Ready to transform your ideas into reality? Let's collaborate and build the next big thing together.
              </p>
            </div>

            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />Connect to me
              {/* {links.email} */}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center border-t border-gray-800 bg-gradient-to-r from-gray-900/50 to-gray-800/30">
        <div className="max-w-4xl mx-auto">
          {/* Name & Title */}
          <h3 className="text-xl font-bold text-white mb-2">
            Chandrashekhar Sati
          </h3>
          <p className="text-gray-400 mb-6">Full-Stack Developer</p>
          {/* Bottom Note */}
          <p className="text-gray-600 mt-6 text-sm">
            © {new Date().getFullYear()} Chandrashekhar Sati. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}