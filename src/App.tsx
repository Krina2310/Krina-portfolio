import { useState } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "AI-Based Recommendation E-Commerce Website",
    description:
      "An e-commerce website with an AI-based recommendation feature designed to provide users with a more personalised shopping experience.",
    tags: ["HTML", "CSS", "JavaScript", "AI", "E-Commerce"],
    link: "https://github.com/Krina2310/AI-ecommerce",
    featured: true,
  },
  {
    title: "Course Management System",
    description:
      "A Python-based system for managing students, courses, grades, attendance, and academic rankings with visualisation support.",
    tags: ["Python", "Data Management", "Visualisation"],
    link: "https://github.com/scn01/Course-Management-System",
    featured: true,
  },
  {
    title: "Student Grade Calculator",
    description:
      "A Python application that calculates student grades, stores data, creates visualisations, and supports what-if academic analysis.",
    tags: ["Python", "NumPy", "Pandas", "Matplotlib"],
    link: "https://github.com/scn01/Student-grade-calculator-python",
    featured: true,
  },
  {
    title: "Student Management System",
    description:
      "A Python CRUD application for creating, reading, updating, and deleting student records using data structures and file handling.",
    tags: ["Python", "CRUD", "File Handling"],
    link: "https://github.com/scn01",
  },
];

const skills = [
  "Python",
  "Java",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SQL",
  "Object-Oriented Programming",
  "Data Structures & Algorithms",
  "Git & GitHub",
  "Frontend Development",
  "Problem Solving",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/75 backdrop-blur-xl">
        <nav className="container-width flex h-20 items-center justify-between">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-white"
            onClick={closeMenu}
          >
            Krina<span className="text-sky-400"> Patel</span>
          </a>

          <button
            type="button"
            className="rounded-lg border border-slate-700 px-3 py-2 text-slate-200 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute left-4 right-4 top-24 flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-950 p-6 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}
          >
            <a
              href="#about"
              className="text-slate-300 transition hover:text-white"
              onClick={closeMenu}
            >
              About
            </a>

            <a
              href="#education"
              className="text-slate-300 transition hover:text-white"
              onClick={closeMenu}
            >
              Education
            </a>

            <a
              href="#experience"
              className="text-slate-300 transition hover:text-white"
              onClick={closeMenu}
            >
              Experience
            </a>

            <a
              href="#projects"
              className="text-slate-300 transition hover:text-white"
              onClick={closeMenu}
            >
              Projects
            </a>

            <a
              href="#skills"
              className="text-slate-300 transition hover:text-white"
              onClick={closeMenu}
            >
              Skills
            </a>

            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
              onClick={closeMenu}
            >
              Contact Me
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="grid-background container-width flex min-h-screen items-center pt-28"
      >
        <div className="grid w-full gap-14 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-5 font-medium text-sky-400">
              Computer Science Student • AI & Machine Learning Enthusiast
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Learning, Creating, and Growing in{" "}
              <span className="gradient-text">
                Computer Science.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              I am a Computer Science student at Royal Holloway, University of
              London, interested in artificial intelligence, machine learning,
              software development, and creating practical solutions through
              technology.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-sky-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-sky-300"
              >
                View My Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 px-6 py-3 font-bold text-white transition hover:border-sky-400 hover:text-sky-300"
              >
                View My CV
              </a>
            </div>

            <div className="mt-10 flex gap-5 text-sm text-slate-400">
              <a
                href="https://github.com/Krina2310"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:krina231005@gmail.com"
                className="transition hover:text-white"
              >
                Email ↗
              </a>
            </div>
          </div>

          {/* Introduction Card */}
          <div className="glass-card relative mx-auto w-full max-w-md rounded-3xl p-5">
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900 p-6">
              <div className="mb-8 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <pre className="overflow-x-auto text-sm leading-8 text-slate-300">
                <code>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-sky-300">krina</span> = {"{"}
                  {"\n"}
                  {"  "}degree:{" "}
                  <span className="text-emerald-300">
                    "BSc Computer Science"
                  </span>
                  ,{"\n"}
                  {"  "}university:{" "}
                  <span className="text-emerald-300">
                    "Royal Holloway University of London"
                  </span>
                  ,{"\n"}
                  {"  "}interests: [
                  {"\n"}
                  {"    "}
                  <span className="text-emerald-300">"AI"</span>,{" "}
                  <span className="text-emerald-300">
                    "Machine Learning"
                  </span>
                  ,{"\n"}
                  {"    "}
                  <span className="text-emerald-300">
                    "Software Development"
                  </span>
                  {"\n"}
                  {"  "}],{"\n"}
                  {"  "}availableFor:{" "}
                  <span className="text-emerald-300">"Internships"</span>
                  {"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container-width py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sky-400">
              About Me
            </p>

            <h2 className="text-4xl font-bold text-white">
              Computer Science student building with curiosity
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-400">
            <p>
              I am a Computer Science student at Royal Holloway, University of
              London, with a strong interest in artificial intelligence,
              machine learning, software development, and web technologies.
            </p>

            <p>
              During my first year, I developed projects involving Python
              applications, data management, visualisation, JavaScript, HTML,
              CSS, and AI-based e-commerce recommendations.
            </p>

            <p>
              I enjoy learning new technologies, solving problems, and creating
              practical software that is useful and easy to understand. I am
              currently looking for internship opportunities where I can
              develop my technical skills and gain real-world experience.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-slate-900/35 py-28">
        <div className="container-width">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sky-400">
            Education
          </p>

          <h2 className="text-4xl font-bold text-white">My education</h2>

          <div className="mt-10 space-y-6">
            <article className="glass-card rounded-3xl p-6">
              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Royal Holloway, University of London
                  </h3>

                  <p className="mt-2 text-sky-300">
                    Bachelor of Science in Computer Science
                  </p>
                </div>

                <p className="text-slate-400">
                  September 2025 – June 2028
                </p>
              </div>

              <p className="mt-5 leading-7 text-slate-400">
                Relevant coursework includes programming, algorithms and data
                structures, computer systems, mathematics for computer science,
                software development, web development, databases, software
                engineering, and algorithms and complexity.

                OOP I: 62%, OOP II:65%, Programming Lab(python): 63%, Internet Services: 64%
              </p>
            </article>

            <article className="glass-card rounded-3xl p-6">
              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    EPRAI, Portugal
                  </h3>

                  <p className="mt-2 text-sky-300">
                    Diploma in Computer Programming
                  </p>
                </div>

                <p className="text-slate-400">
                  September 2021 – June 2024
                </p>
              </div>

              <p className="mt-5 leading-7 text-slate-400">
                Studied programming, object-oriented programming, web
                development, databases, software development, and computer
                systems.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container-width py-28">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sky-400">
          Experience
        </p>

        <h2 className="text-4xl font-bold text-white">My experience</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="glass-card rounded-3xl p-6">
            <div className="flex flex-col justify-between gap-2 sm:flex-row">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Continente Bomdia
                </h3>

                <p className="text-sky-300">Cashier</p>
              </div>

              <p className="text-sm text-slate-400">Sep 2024 – Sep 2025</p>
            </div>

            <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-slate-400">
              <li>Processed customer transactions accurately.</li>
              <li>
                Resolved customer enquiries and supported daily store
                operations.
              </li>
              <li>
                Provided friendly and efficient service to ensure customer
                satisfaction.
              </li>
            </ul>
          </article>

          <article className="glass-card rounded-3xl p-6">
            <div className="flex flex-col justify-between gap-2 sm:flex-row">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Recicloteca Lda
                </h3>

                <p className="text-sky-300">Intern</p>
              </div>

              <p className="text-sm text-slate-400">Jan 2023 – Jun 2024</p>
            </div>

            <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-slate-400">
              <li>Troubleshot software and printing issues.</li>
              <li>Updated and maintained static websites using HTML.</li>
              <li>Organised digital files and project resources.</li>
              <li>
                Worked with system configurations and basic design tools.
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-slate-900/35 py-28">
        <div className="container-width">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sky-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold text-white">
            Projects I have worked on
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            These projects demonstrate my experience with Python, JavaScript,
            web development, data management, visualisation, and
            problem-solving.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-400/50 ${
                  project.featured ? "lg:scale-[1.02]" : ""
                }`}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-3xl text-sky-400">◈</span>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 transition hover:text-sky-300"
                  >
                    View on GitHub ↗
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container-width py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sky-400">
              Toolkit
            </p>

            <h2 className="text-4xl font-bold text-white">
              Technologies and skills
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              These are the programming languages, technologies, and computer
              science concepts I have studied and used in my projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 font-medium text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container-width pb-28">
        <div className="rounded-3xl border border-sky-400/20 bg-sky-400/10 p-8 text-center sm:p-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sky-300">
            Contact
          </p>

          <h2 className="text-4xl font-bold text-white">
            Let&apos;s connect.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
            I am currently interested in internship opportunities, learning
            experiences, and projects related to software development, AI, and
            machine learning.
          </p>

          <a
            href="mailto:krina231005@gmail.com"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-bold text-slate-950 transition hover:bg-sky-200"
          >
            krina231005@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/70 py-8">
        <div className="container-width flex flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Krina Patel. All rights reserved.</p>

          <p>Designed and built with React.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;