import { motion } from "framer-motion";
import "./About.css";
import {
    ArrowUpRight,
    BrainCircuit,
    Code2,
    Database,
    Layers3,
} from "lucide-react";

const engineeringAreas = [
    {
        icon: Code2,
        label: "BACKEND",
        value: "JAVA / SPRING",
    },
    {
        icon: Layers3,
        label: "ARCHITECTURE",
        value: "REST / MVC / SOLID",
    },
    {
        icon: Database,
        label: "DATA",
        value: "SQL / JPA",
    },
    {
        icon: BrainCircuit,
        label: "EXPLORING",
        value: "AI / ML / LLMs",
    },
];

const metrics = [
    {
        value: "15+",
        label: "REST APIs",
        description: "Built and maintained",
    },
    {
        value: "90%",
        label: "ERROR REDUCTION",
        description: "Invoice automation",
    },
    {
        value: "~40%",
        label: "TURNAROUND",
        description: "Invoice processing",
    },
];

export default function About() {
    return (
        <section id="about" className="about-section">

            {/* Section Header */}

            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-number">
                    01 / ABOUT
                </span>

                <span className="section-line" />

                <span className="section-context">
                    ENGINEERING PROFILE
                </span>
            </motion.div>


            {/* Main About Content */}

            <div className="about-grid">

                {/* Left */}

                <motion.div
                    className="about-main"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >

                    <p className="about-eyebrow">
                        SOFTWARE ENGINEER
                    </p>

                    <h2>
                        Building systems
                        <br />
                        that <span>work.</span>
                    </h2>

                    <p className="about-description">
                        I focus on building reliable backend and full-stack
                        applications using Java, Spring Boot, React and
                        relational databases.
                    </p>

                    <p className="about-description">
                        My work spans REST APIs, authentication, workflow
                        automation, database optimization and enterprise
                        application development. Alongside engineering work,
                        I continuously explore new technologies and AI tools
                        to understand how they work and where they can be useful.
                    </p>

                    <div className="about-link-row">

                        <a
                            href="#projects"
                            className="about-link"
                        >
                            EXPLORE MY WORK
                            <ArrowUpRight size={16} />
                        </a>

                    </div>

                </motion.div>


                {/* Right */}

                <motion.div
                    className="about-profile"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.15,
                    }}
                >

                    <div className="profile-card">

                        <div className="profile-card-header">

                            <span>
                                CURRENT ROLE
                            </span>

                            <span className="profile-status">
                                ● ACTIVE
                            </span>

                        </div>

                        <div className="profile-role">
                            SOFTWARE ENGINEER
                        </div>

                        <div className="profile-company">
                            AWC SOFTWARE PVT LTD
                        </div>

                        <div className="profile-divider" />

                        <div className="profile-meta">

                            <div>
                                <span>FOCUS</span>
                                <strong>BACKEND SYSTEMS</strong>
                            </div>

                            <div>
                                <span>STACK</span>
                                <strong>JAVA / SPRING / REACT</strong>
                            </div>

                        </div>

                    </div>


                    <div className="direction-card">

                        <div className="direction-header">

                            <span>
                                CONTINUOUS LEARNING
                            </span>

                            <BrainCircuit size={16} />

                        </div>

                        <div className="direction-title">
                            UNDERSTANDING WHAT&apos;S NEXT
                        </div>

                        <div className="direction-path">

                            <div className="direction-node active">
                                <span />
                                SOFTWARE ENGINEERING
                            </div>

                            <div className="direction-connector" />

                            <div className="direction-node">
                                <span />
                                AI / ML
                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>


            {/* Engineering Areas */}

            <motion.div
                className="engineering-areas"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
            >

                {engineeringAreas.map((area, index) => {

                    const Icon = area.icon;

                    return (
                        <div
                            className="engineering-area"
                            key={area.label}
                        >

                            <div className="engineering-area-top">

                                <Icon size={17} />

                                <span>
                                    0{index + 1}
                                </span>

                            </div>

                            <span className="engineering-area-label">
                                {area.label}
                            </span>

                            <strong>
                                {area.value}
                            </strong>

                        </div>
                    );

                })}

            </motion.div>


            {/* Metrics */}

            <motion.div
                className="about-metrics"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.7,
                    delay: 0.15,
                }}
            >

                {metrics.map((metric) => (

                    <div
                        className="metric"
                        key={metric.label}
                    >

                        <div className="metric-value">
                            {metric.value}
                        </div>

                        <div className="metric-label">
                            {metric.label}
                        </div>

                        <div className="metric-description">
                            {metric.description}
                        </div>

                    </div>

                ))}

            </motion.div>

        </section>
    );
}