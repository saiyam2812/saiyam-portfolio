import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
    ArrowUpRight,
    CheckCircle2,
    Mail,
    Send,
} from "lucide-react";

import "./Contact.css";

export default function Contact() {
    return (
        <section
            id="contact"
            className="contact-section"
        >
            <div className="contact-container">

                {/* META */}

                <motion.div
                    className="contact-meta"
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                >
                    <span>09</span>
                    <span>/</span>
                    <span>CONNECT</span>
                </motion.div>


                {/* MAIN */}

                <div className="contact-main">

                    {/* LEFT */}

                    <motion.div
                        className="contact-heading"
                        initial={{
                            opacity: 0,
                            x: -25,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                    >
                        <span className="contact-eyebrow">
                            OPEN CHANNEL
                        </span>

                        <h2>
                            LET'S
                            <br />
                            BUILD
                            <br />
                            <span>
                                SOMETHING.
                            </span>
                        </h2>

                        <p>
                            Open to interesting software
                            engineering problems,
                            backend systems, AI engineering
                            and opportunities to build
                            meaningful products.
                        </p>

                        <div className="contact-actions">

                            <a
                                href="mailto:saiyambhuraria45@gmail.com"
                                className="contact-primary"
                            >
                                <Mail size={15} />
                                SEND MESSAGE
                                <ArrowUpRight size={13} />
                            </a>

                            <a
                                href="https://github.com/saiyam2812"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-secondary"
                            >
                                <FaGithub size={15} />
                                GITHUB
                            </a>

                            <a
                                href="https://www.linkedin.com/in/saiyambhuraria/"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-secondary"
                            >
                                <FaLinkedin size={15} />
                                LINKEDIN
                            </a>

                        </div>
                    </motion.div>


                    {/* RIGHT */}

                    <motion.div
                        className="contact-panel"
                        initial={{
                            opacity: 0,
                            x: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                    >

                        <div className="contact-panel-header">

                            <div>
                                <span>
                                    SYSTEM STATUS
                                </span>

                                <h3>
                                    CONNECTION
                                </h3>
                            </div>

                            <div className="contact-online">
                                <span />
                                ONLINE
                            </div>

                        </div>


                        <div className="contact-divider" />


                        <div className="contact-status-list">

                            <div className="contact-status-item">

                                <div>
                                    <span>
                                        OPEN TO
                                    </span>

                                    <strong>
                                        Software Engineering
                                    </strong>
                                </div>

                                <CheckCircle2
                                    size={14}
                                />

                            </div>


                            <div className="contact-status-item">

                                <div>
                                    <span>
                                        FOCUS
                                    </span>

                                    <strong>
                                        Backend / AI Engineering
                                    </strong>
                                </div>

                                <CheckCircle2
                                    size={14}
                                />

                            </div>


                            <div className="contact-status-item">

                                <div>
                                    <span>
                                        LOCATION
                                    </span>

                                    <strong>
                                        India
                                    </strong>
                                </div>

                                <CheckCircle2
                                    size={14}
                                />

                            </div>

                        </div>


                        <div className="contact-divider" />


                        <div className="contact-terminal-line">

                            <span>
                                $
                            </span>

                            <span>
                                initiate_connection
                            </span>

                            <Send size={12} />

                        </div>

                    </motion.div>

                </div>


                {/* FOOTER LINE */}

                <div className="contact-bottom">

                    <span>
                        AVAILABLE FOR THE RIGHT
                        OPPORTUNITY
                    </span>

                    <span>
                        2026 / SAIYAM
                    </span>

                </div>

            </div>
        </section>
    );
}