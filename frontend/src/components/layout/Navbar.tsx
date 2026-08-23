import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar-logo">
                SAIYAM<span>.DEV</span>
            </div>

            <div className="navbar-links">
                <a href="#about">ABOUT</a>
                <a href="#stack">STACK</a>
                <a href="#experience">EXPERIENCE</a>
                <a href="#projects">PROJECTS</a>
                <a href="#ai-lab">AI LAB</a>
                <a
                    href="/Saiyam_s_Resume.pdf"
                    download="Saiyam_s_Resume.pdf"
                    className="resume-button"
                >
                    RESUME
                </a>
            </div>

            <div className="navbar-actions">


                <a
                    href="https://github.com/saiyam2812"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub size={18} />
                </a>

                <a
                    href="https://linkedin.com/in/saiyambhuraria"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={18} />
                </a>

                <a
                    href="#contact"
                    className="contact-button"
                >
                    CONTACT
                </a>

            </div>

        </nav>
    );
}