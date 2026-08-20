import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    BrainCircuit,
    Code2,
    Database,
    GitBranch,
    Layers3,
    Server,
    Terminal,
} from "lucide-react";

import "./EngineeringStack.css";

type StackCategory = {
    id: string;
    label: string;
    icon: React.ElementType;
    description: string;
    technologies: string[];
};

const stackCategories: StackCategory[] = [
    {
        id: "backend",
        label: "BACKEND",
        icon: Server,
        description:
            "Core engineering area focused on APIs, services, business logic and enterprise application development.",
        technologies: [
            "Java",
            "Spring Boot",
            "REST APIs",
            "Maven",
            "JDBC",
        ],
    },
    {
        id: "frontend",
        label: "FRONTEND",
        icon: Code2,
        description:
            "Building responsive interfaces and integrating frontend applications with backend services.",
        technologies: [
            "React",
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
        ],
    },
    {
        id: "data",
        label: "DATA",
        icon: Database,
        description:
            "Working with relational databases, queries, persistence and application data flows.",
        technologies: [
            "PostgreSQL",
            "MySQL",
            "SQL",
            "JPA",
            "Database Optimization",
        ],
    },
    {
        id: "engineering",
        label: "ENGINEERING",
        icon: GitBranch,
        description:
            "Tools and practices used to build, test, version and deploy software reliably.",
        technologies: [
            "Git",
            "GitHub",
            "Jenkins",
            "Docker",
            "Postman",
            "JMeter",
        ],
    },
    {
        id: "exploring",
        label: "EXPLORING",
        icon: BrainCircuit,
        description:
            "Technologies I am learning to understand modern tooling, AI systems and where they can be practically useful.",
        technologies: [
            "Python",
            "Machine Learning",
            "LLMs",
            "RAG",
            "Embeddings",
            "AI Tools",
        ],
    },
];

export default function EngineeringStack() {
    const [activeCategory, setActiveCategory] =
        useState("backend");

    const activeStack = stackCategories.find(
        (category) => category.id === activeCategory
    );

    return (
        <section
            id="stack"
            className="stack-section"
        >
            {/* Section Header */}

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
                    02 / STACK
                </span>

                <span className="section-line" />

                <span className="section-context">
                    ENGINEERING TOOLKIT
                </span>
            </motion.div>

            {/* Heading */}

            <div className="stack-intro">

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
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
                        duration: 0.7,
                    }}
                >
                    <p className="stack-eyebrow">
                        TECHNOLOGY SYSTEM
                    </p>

                    <h2>
                        Tools I use
                        <br />
                        to <span>build.</span>
                    </h2>
                </motion.div>

                <motion.p
                    className="stack-intro-text"
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
                        duration: 0.7,
                        delay: 0.1,
                    }}
                >
                    A practical toolkit built around backend
                    engineering, full-stack development,
                    databases and continuous technical learning.
                </motion.p>

            </div>

            {/* Category Navigation */}

            <div className="stack-layout">

                <div className="stack-navigation">

                    {stackCategories.map((category, index) => {

                        const Icon = category.icon;

                        const isActive =
                            activeCategory === category.id;

                        return (
                            <button
                                key={category.id}
                                className={`stack-category ${isActive ? "active" : ""
                                    }`}
                                onClick={() =>
                                    setActiveCategory(category.id)
                                }
                            >
                                <span className="stack-category-number">
                                    0{index + 1}
                                </span>

                                <span className="stack-category-icon">
                                    <Icon size={16} />
                                </span>

                                <span className="stack-category-label">
                                    {category.label}
                                </span>

                                <span className="stack-category-arrow">
                                    →
                                </span>
                            </button>
                        );

                    })}

                </div>

                {/* Detail Panel */}

                <div className="stack-detail">

                    <AnimatePresence mode="wait">

                        {activeStack && (

                            <motion.div
                                key={activeStack.id}
                                className="stack-detail-content"
                                initial={{
                                    opacity: 0,
                                    y: 12,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -12,
                                }}
                                transition={{
                                    duration: 0.25,
                                }}
                            >

                                <div className="stack-detail-header">

                                    <div>

                                        <span className="stack-detail-label">
                                            SELECTED DOMAIN
                                        </span>

                                        <h3>
                                            {activeStack.label}
                                        </h3>

                                    </div>

                                    <span className="stack-detail-index">
                                        {String(
                                            stackCategories.findIndex(
                                                (category) =>
                                                    category.id ===
                                                    activeStack.id
                                            ) + 1
                                        ).padStart(2, "0")}
                                    </span>

                                </div>

                                <p className="stack-detail-description">
                                    {activeStack.description}
                                </p>

                                <div className="stack-tech-grid">

                                    {activeStack.technologies.map(
                                        (technology, index) => (

                                            <motion.div
                                                key={technology}
                                                className="stack-tech"
                                                initial={{
                                                    opacity: 0,
                                                    y: 8,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    delay:
                                                        index * 0.04,
                                                }}
                                            >

                                                <span className="stack-tech-index">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </span>

                                                <span>
                                                    {technology}
                                                </span>

                                            </motion.div>

                                        )
                                    )}

                                </div>

                            </motion.div>

                        )}

                    </AnimatePresence>

                </div>

            </div>

            {/* Bottom Philosophy */}

            <motion.div
                className="stack-footer"
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

                <div className="stack-footer-icon">
                    <Layers3 size={18} />
                </div>

                <div>

                    <span className="stack-footer-label">
                        ENGINEERING PRINCIPLE
                    </span>

                    <p>
                        Learn the tool. Understand the system.
                        Use it where it actually solves a problem.
                    </p>

                </div>

                <Terminal
                    size={18}
                    className="stack-footer-terminal"
                />

            </motion.div>

        </section>
    );
}