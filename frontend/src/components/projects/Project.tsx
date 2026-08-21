import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
    ArrowUpRight,
    ExternalLink,
    Layers3,
    Workflow,
    Database,
} from "lucide-react";

import "./Projects.css";

const projects = [
    {
        number: "01",
        type: "ENGINEERING PROJECT",
        title: "INVOICE",
        titleAccent: "PROCESSING AUTOMATION",

        description:
            "A Java-based automation utility designed to process invoice workflows through API communication, configurable scheduling, extraction and structured logging.",

        technologies: [
            "Java",
            "Maven",
            "REST APIs",
            "OkHttp",
            "Jackson",
            "JSON",
            "Log4j",
        ],

        metrics: [
            {
                value: "90%",
                label: "FEWER PROCESSING ERRORS",
            },
            {
                value: "~40%",
                label: "FASTER TURNAROUND",
            },
            {
                value: "15+",
                label: "REST APIs",
            },
        ],

        architecture: [
            {
                icon: Workflow,
                label: "PROCESSING",
                value: "Automated workflow",
            },
            {
                icon: Layers3,
                label: "INTEGRATION",
                value: "REST communication",
            },
            {
                icon: Database,
                label: "CONFIGURATION",
                value: "Property-driven",
            },
        ],

        github:
            "https://github.com/saiyam2812/Invoice-Processing-Automation-System",
    },

    {
        number: "02",
        type: "BACKEND PROJECT",
        title: "STUDENT",
        titleAccent: "MANAGEMENT API",

        description:
            "A Spring Boot REST API built to manage student records with a layered architecture, validation, persistence and JWT-based authentication.",

        technologies: [
            "Java 17",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "JPA / Hibernate",
            "MySQL",
            "Bean Validation",
        ],

        architecture: [
            {
                icon: Layers3,
                label: "ARCHITECTURE",
                value: "Controller → Service → Repository",
            },
            {
                icon: Workflow,
                label: "API",
                value: "CRUD + Authentication",
            },
            {
                icon: Database,
                label: "PERSISTENCE",
                value: "JPA + MySQL",
            },
        ],

        features: [
            "Student CRUD operations",
            "JWT-based authentication",
            "User registration and login",
            "Request validation",
            "Centralized API response structure",
            "Layered Spring Boot architecture",
        ],

        github:
            "https://github.com/saiyam2812/student-management-api",
    },

    {
        number: "03",
        type: "ML EXPERIMENT",
        title: "AUDIO ENGINE",
        titleAccent: "CONDITION DETECTION",

        description:
            "An end-to-end audio analytics and machine learning pipeline that classifies engine sound into predefined operating conditions using extracted acoustic features.",

        technologies: [
            "Python",
            "Librosa",
            "NumPy",
            "Pandas",
            "Scikit-learn",
            "Random Forest",
            "Joblib",
            "Matplotlib",
        ],

        architecture: [
            {
                icon: Workflow,
                label: "INPUT",
                value: "Synthetic engine audio",
            },
            {
                icon: Layers3,
                label: "FEATURES",
                value: "MFCC + spectral features",
            },
            {
                icon: Database,
                label: "MODEL",
                value: "Random Forest",
            },
        ],

        features: [
            "Normal / Knocking / Sputtering / Silent classification",
            "Synthetic audio dataset generation",
            "13 MFCC coefficients",
            "RMS energy and zero-crossing rate",
            "Spectral centroid and bandwidth",
            "Classification report and confusion matrix",
            "New-audio inference pipeline",
        ],

        github:
            "https://github.com/saiyam2812/Audio-Based-Engine-Condition-Detection",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="projects-section"
        >
            {/* Header */}

            <motion.div
                className="section-header"
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
                transition={{
                    duration: 0.6,
                }}
            >
                <span className="section-number">
                    04 / PROJECTS
                </span>

                <span className="section-line" />

                <span className="section-context">
                    SELECTED WORK
                </span>
            </motion.div>

            {/* Intro */}

            <div className="projects-intro">
                <div>
                    <p className="projects-eyebrow">
                        BUILDING OUTSIDE THE DAY JOB
                    </p>

                    <h2>
                        Selected
                        <br />
                        <span>work.</span>
                    </h2>
                </div>

                <p className="projects-intro-text">
                    A selection of engineering projects,
                    automation work and technical experiments
                    that represent how I build, solve problems
                    and explore new technologies.
                </p>
            </div>

            {/* Projects */}

            <div className="projects-list">
                {projects.map((project, index) => {
                    const isFeatured = index === 0;

                    return (
                        <motion.article
                            key={project.number}
                            className={`project-card ${isFeatured
                                ? "project-featured"
                                : ""
                                }`}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                        >
                            {/* Card Top */}

                            <div className="project-top">
                                <div className="project-number">
                                    {project.number}
                                </div>

                                <div className="project-type">
                                    {project.type}
                                </div>

                                <ArrowUpRight
                                    className="project-arrow"
                                    size={18}
                                />
                            </div>

                            {/* Main Content */}

                            {/* Main Content */}

                            <div className="project-main">

                                <div className="project-heading">

                                    <h3>
                                        {project.title}
                                        <br />

                                        <span>
                                            {project.titleAccent}
                                        </span>
                                    </h3>

                                    <p>
                                        {project.description}
                                    </p>

                                </div>

                                {/* Technologies */}

                                <div className="project-tech">

                                    {project.technologies.map(
                                        (technology) => (
                                            <span
                                                key={technology}
                                                className="tech-tag"
                                            >
                                                {technology}
                                            </span>
                                        )
                                    )}

                                </div>

                            </div>


                            {/* Detailed Information for Non-Featured Projects */}

                            {!isFeatured && (
                                <div className="project-details">

                                    {/* Divider */}

                                    <div className="project-divider" />

                                    {/* Architecture */}

                                    <div className="project-architecture">

                                        {project.architecture?.map(
                                            (item) => {

                                                const Icon = item.icon;

                                                return (
                                                    <div
                                                        className="architecture-item"
                                                        key={item.label}
                                                    >

                                                        <Icon size={16} />

                                                        <div>

                                                            <span>
                                                                {item.label}
                                                            </span>

                                                            <strong>
                                                                {item.value}
                                                            </strong>

                                                        </div>

                                                    </div>
                                                );
                                            }
                                        )}

                                    </div>

                                    {/* Features */}

                                    <div className="project-divider" />

                                    <div className="project-features">

                                        <div className="detail-label">
                                            KEY FEATURES
                                        </div>

                                        <div className="feature-grid">

                                            {project.features?.map(
                                                (feature) => (
                                                    <div
                                                        className="project-feature"
                                                        key={feature}
                                                    >

                                                        <span>
                                                            →
                                                        </span>

                                                        {feature}

                                                    </div>
                                                )
                                            )}

                                        </div>

                                    </div>

                                </div>
                            )}

                            {/* Footer */}

                            <div className="project-divider" />

                            <div className="project-footer">
                                <span className="project-status">
                                    ● PUBLIC PROJECT
                                </span>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link"
                                >
                                    <FaGithub size={14} />

                                    VIEW ON GITHUB

                                    <ExternalLink size={12} />
                                </a>
                            </div>
                        </motion.article>
                    );
                })}
            </div>

            {/* Closing */}

            <motion.div
                className="projects-footer"
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 0.6,
                }}
            >
                <span>
                    MORE PROJECTS ARE AVAILABLE
                    <br />
                    ON GITHUB.
                </span>

                <a
                    href="https://github.com/saiyam2812?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                >
                    EXPLORE REPOSITORIES
                    <ArrowUpRight size={14} />
                </a>
            </motion.div>
        </section>
    );
}