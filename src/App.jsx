import { useEffect, useState } from "react";
import { Github, Code2, MapPin, Menu, X, ExternalLink, GraduationCap, Terminal, GitBranch, Braces } from "./components/Icons";
import Contact from "./components/Contact";
import { profile, projects, experiences } from "./data";

const navigation = [["sobre", "Sobre mim"], ["projetos", "Projetos"], ["experiencias", "Experiências"], ["contato", "Contato"]];

export default function App() {
    const [language, setLanguage] = useState("pt");
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("sobre");

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    if (entry.target.id) setActive(entry.target.id);
                }
            });
        }, { threshold: 0.15 });
        document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
            <header className="header">
                <a className="logo" href="#inicio" aria-label="Thiago Guerra, início">tg<span>.</span>
                </a>
                <nav className={menuOpen ? "navigation open" : "navigation"} aria-label="Menu principal">
                    {navigation.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? "active" : ""} onClick={() => setMenuOpen(false)}>{label}</a>)}
                </nav>
                <a className="header-github" href={profile.github} target="_blank" rel="noreferrer" aria-label="Meu GitHub">
                    <Github size={21} />
                </a>
                <button className="menu-button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
            </header>
            <main id="conteudo">
                <section id="inicio" className="hero">
                    <div className="hero-content">
                        <p className="availability">
                            <span /> Em busca da primeira oportunidade</p>
                        <p className="intro">Olá, eu sou o Thiago</p>
                        <h1>Aprendendo.<br />Construindo.<br />
                            <span>Evoluindo.</span>
                        </h1>
                        <p className="hero-description">Estudo Engenharia de Software na PUC Minas. Por aqui, compartilho os projetos que faço enquanto aprendo sobre programação e desenvolvimento web.</p>
                        <div className="hero-actions">
                            <a className="button primary" href="#projetos">Conheça meus projetos <Code2 size={18} />
                            </a>
                            <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">
                                <Github size={18} /> Meu GitHub</a>
                        </div>
                        <p className="location">
                            <MapPin size={15} /> Belo Horizonte, MG <span>·</span> PUC Minas</p>
                    </div>
                    <div className="hero-art" aria-label="Ilustração de um editor de código com informações do meu perfil">
                        <div className="orbit orbit-one" />
                        <div className="orbit orbit-two" />
                        <div className="code-window">
                            <div className="window-bar">
                                <div className="window-dots">
                                    <i />
                                    <i />
                                    <i />
                                </div>
                                <span>sobre-mim.js</span>
                                <Code2 size={16} />
                            </div>
                            <div className="code-body">
                                <p>
                                    <span className="purple">const</span> thiago = {'{'}</p>
                                <p className="indent">área: <span className="green">"Engenharia de Software"</span>,</p>
                                <p className="indent">foco: <span className="green">"Desenvolvimento web"</span>,</p>
                                <p className="indent">aprendendo: [</p>
                                <p className="indent double">
                                    <span className="green">"Java", "React", "Node.js"</span>
                                </p>
                                <p className="indent">],</p>
                                <p className="indent">curiosidade: <span className="purple">true</span>
                                </p>
                                <p>{'}'};</p>
                                <p className="code-comment">// Um projeto de cada vez.</p>
                                <p className="terminal-line">
                                    <span>❯</span> npm run dev <span className="cursor">▍</span>
                                </p>
                            </div>
                        </div>
                        <div className="floating-label">
                            <GitBranch size={16} /> sempre em desenvolvimento</div>
                    </div>
                    <a className="scroll-hint" href="#sobre">
                        <span /> Continue explorando</a>
                </section>
                <div className="tech-strip">
                    <span>MINHA CAIXA DE FERRAMENTAS</span>
                    <div>{["Java", "JavaScript", "React", "Node.js", "HTML & CSS", "Git & GitHub"].map((tech) => <span key={tech}>{tech}</span>)}</div>
                </div>
                <section id="sobre" className="section reveal about-section">
                    <div>
                        <p className="eyebrow">SOBRE MIM</p>
                        <h2>Um pouco<br />sobre mim<span>.</span>
                        </h2>
                        <div className="education">
                            <GraduationCap size={26} />
                            <div>
                                <strong>Engenharia de Software</strong>
                                <p>PUC Minas · Belo Horizonte</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-copy">
                        <div className="language-switch" role="group" aria-label="Idioma da apresentação">
                            <button className={language === "pt" ? "selected" : ""} onClick={() => setLanguage("pt")} aria-pressed={language === "pt"}>Português</button>
                            <button className={language === "en" ? "selected" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>English</button>
                        </div>
                        <div lang={language === "pt" ? "pt-BR" : "en"}>{language === "pt" ? <>
                            <p>Sou o Thiago, estudante do 2º período de Engenharia de Software na PUC Minas, em Belo Horizonte. Estou no início da minha formação e gosto de aprender testando as coisas na prática.</p>
                            <p>Já fiz projetos com Python, Java e JavaScript. Hoje, tenho estudado mais desenvolvimento web, principalmente React, Node.js e integração com APIs. Também me interesso por back-end, inteligência artificial e automação.</p>
                            <p>Procuro meu primeiro estágio para ganhar experiência, aprender com a equipe e participar de projetos fora da faculdade.</p>
                        </> : <>
                            <p>I'm Thiago, a second-semester Software Engineering student at PUC Minas in Belo Horizonte, Brazil. I'm at the beginning of my degree and enjoy learning by trying things out.</p>
                            <p>I've worked on projects using Python, Java and JavaScript. Lately, I've been studying web development, especially React, Node.js and API integration. I'm also interested in back-end development, artificial intelligence and automation.</p>
                            <p>I'm looking for my first internship to gain experience, learn from a team and work on projects beyond university.</p>
                        </>}</div>
                        <div className="interest-tags">
                            <span>
                                <Terminal size={16} /> Back-end</span>
                            <span>
                                <Braces size={16} /> Desenvolvimento web</span>
                            <span>
                                <Code2 size={16} /> Automação</span>
                        </div>
                    </div>
                </section>
                <section id="projetos" className="section reveal">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">PROJETOS</p>
                            <h2>Projetos que já fiz<span>.</span>
                            </h2>
                        </div>
                        <a className="text-link" href={`${profile.github}?tab=repositories`} target="_blank" rel="noreferrer">Todos no GitHub <Github size={17} />
                        </a>
                    </div>
                    <p className="section-description">Trabalhos da faculdade e projetos de estudo, do mais antigo ao mais recente.</p>
                    <div className="timeline">{projects.map((project) => <article className="project-card" key={project.name}>
                        <div className="timeline-date">
                            <span />{project.date}</div>
                        <div className="project-preview">{project.image ? <img src={project.image} alt={`Tela do projeto ${project.name} em funcionamento`} loading="lazy" /> : <div className="project-placeholder">
                            <Code2 size={48} strokeWidth={1} />
                            <strong>{project.name}</strong>
                            <span>Projeto acadêmico · consulte o repositório</span>
                        </div>}</div>
                        <div className="project-info">
                            <span className="project-category">{project.category}</span>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                            <a className="text-link" href={project.github} target="_blank" rel="noreferrer">
                                <Github size={17} /> Ver repositório <ExternalLink size={14} />
                            </a>
                        </div>
                    </article>)}</div>
                </section>
                <section id="experiencias" className="section reveal experience-section">
                    <div>
                        <p className="eyebrow">TRAJETÓRIA</p>
                        <h2>Minha formação<br />e experiências<span>.</span>
                        </h2>
                        <p>Ainda não tive uma experiência profissional na área. Minha prática vem das disciplinas da faculdade e dos projetos que desenvolvo sozinho e em grupo.</p>
                    </div>
                    <div className="experience-list">{experiences.map((experience) => <article key={experience.institution}>
                        <span className="experience-period">{experience.period}</span>
                        <h3>{experience.role}</h3>
                        <p className="institution">{experience.institution}</p>
                        <p>{experience.description}</p>
                    </article>)}</div>
                </section>
                <Contact />
            </main>
            <footer>
                <a href="#inicio" className="logo">tg<span>.</span>
                </a>
                <p>Thiago Guerra · Engenharia de Software</p>
                <span>© {new Date().getFullYear()} Thiago Guerra</span>
            </footer>
        </>
    );
}
