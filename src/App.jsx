import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Code2, Database, Terminal, ExternalLink, Globe } from 'lucide-react';

const Github = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const projects = [
  {
    title: 'Linkly',
    description: 'A modern, production-ready bio-link platform inspired by Linktree × Bitly. Features real-time analytics, UPI payments, and JWT auth.',
    tags: ['Java 21', 'Spring Boot 3', 'React 18', 'PostgreSQL'],
    github: 'https://github.com/adocxwork/linkly',
    live: 'https://linkly-plum.vercel.app/'
  },
  {
    title: 'MiniGit (mgit)',
    description: 'A lightweight version control system built purely in Go. Features automated 3-way merges, full conflict resolution, and a reactive built-in React Web GUI.',
    tags: ['Golang', 'React.js', 'HTML/CSS'],
    github: 'https://github.com/adocxwork/minigit'
  },
  {
    title: 'Schedulo',
    description: 'Full-stack scheduling platform inspired by Calendly. Handles timezone-aware slot generation and double-booking prevention.',
    tags: ['FastAPI', 'PostgreSQL', 'React.js', 'Vite'],
    github: 'https://github.com/adocxwork/Schedulo'
  },
  {
    title: 'URL Shortener',
    description: 'Lightweight RESTful URL shortening service built using Golang standard library. Zero external dependencies.',
    tags: ['Golang', 'REST API', 'JSON'],
    github: 'https://github.com/adocxwork/URL-Shortner/'
  },
  {
    title: 'Auto Mind',
    description: 'An AI-driven backend architecture designed to automate reasoning workflows and context-aware decision-making.',
    tags: ['Backend Architecture', 'AI Integration'],
    github: 'https://github.com/adocxwork/Auto_Mind'
  }
];

const skills = [
  {
    category: 'Backend & APIs',
    icon: <Terminal size={18} />,
    items: ['Java', 'Golang', 'Python', 'Spring Boot', 'Spring Security', 'FastAPI', 'REST APIs', 'JWT']
  },
  {
    category: 'Database & Data',
    icon: <Database size={18} />,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Hibernate', 'Spring Data JPA']
  },
  {
    category: 'Core Concepts',
    icon: <Code2 size={18} />,
    items: ['Data Structures & Algorithms', 'System Design', 'OOP', 'DBMS', 'OS', 'Computer Networks']
  }
];

export default function App() {
  return (
    <>
      <nav>
        <div className="container nav-container">
          <div className="nav-logo">AG.</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-glow"></div>
          <div className="container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 variants={fadeInUp}>Aditya Gupta</motion.h1>
              <motion.p className="subtitle" variants={fadeInUp}>
                Backend Engineer crafting robust, scalable systems and diving deep into data structures.
              </motion.p>
              <motion.div className="social-links" style={{ justifyContent: 'flex-start' }} variants={fadeInUp}>
                <a href="https://github.com/adocxwork" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/adocxwork/" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:adityagupta.ac@gmail.com" className="icon-link">
                  <Mail size={24} />
                </a>
                <a href="https://leetcode.com/u/adocxwork" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <Code2 size={24} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp}>Technical Arsenal</motion.h2>
              <div className="skills-grid">
                {skills.map((skillGroup, idx) => (
                  <motion.div key={idx} className="card" variants={fadeInUp}>
                    <div className="skill-category">
                      <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {skillGroup.icon} {skillGroup.category}
                      </h3>
                    </div>
                    <ul className="skill-items">
                      {skillGroup.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp}>Featured Work</motion.h2>
              <div className="grid">
                {projects.map((project, idx) => (
                  <motion.div key={idx} className="card" variants={fadeInUp}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <h3 className="card-title">{project.title}</h3>
                      <div className="card-links">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                            <Github size={20} />
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-link">
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="card-desc">{project.description}</p>
                    <div className="tag-list">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="section">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp}>Competitive Programming</motion.h2>
              <div className="grid">
                <motion.div className="card" variants={fadeInUp}>
                  <h3 className="card-title">LeetCode Knight</h3>
                  <p className="card-desc">Contest Rating: 1878</p>
                  <ul className="skill-items">
                    <li>Top 5.28% globally</li>
                    <li>44,981 / 876,708 Global Rank</li>
                    <li>423+ Problems Solved</li>
                    <li>54 Contests Attended</li>
                  </ul>
                </motion.div>
                <motion.div className="card" variants={fadeInUp}>
                  <h3 className="card-title">Other Milestones</h3>
                  <ul className="skill-items">
                    <li style={{marginBottom: '1rem'}}>Selected for Flipkart GRiD 6.0 (2024) among 4.8L+ participants</li>
                    <li>Competed in Adobe India Hackathon (2025) among 2.6L+ participants</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="social-links">
            <a href="https://github.com/adocxwork" className="icon-link"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/adocxwork/" className="icon-link"><Linkedin size={20} /></a>
            <a href="https://x.com/adocxwork" className="icon-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
            </a>
          </div>
          <p>© {new Date().getFullYear()} Aditya Gupta. Built with React & Vite.</p>
        </div>
      </footer>
    </>
  );
}
