import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowUpRight,
    BriefcaseBusiness,
    ChevronDown,
    Database,
    Gauge,
    GitBranch,
    ShieldCheck,
    TestTube2,
} from "lucide-react";

import "./Experience.css";

type ExperienceItem = {
    id: string;
    period: string;
    duration: string;
    company: string;
    role: string;
    location: string;
    type: string;
    icon: React.ElementType;
    summary: string;
    responsibilities: string[];
    technologies: string[];
    metrics: {
        value: string;
        label: string;
        icon: React.ElementType;
    }[];
};

const experiences: ExperienceItem[] = [
    {
        id: "awc",
        period: "SEP 2025 — PRESENT",
        duration: "CURRENT",
        company: "AWC SOFTWARE",
        role: "SOFTWARE ENGINEER",
        location: "NOIDA, UTTAR PRADESH",
        type: "FULL-TIME · ON-SITE",
        icon: BriefcaseBusiness,

        summary:
            "Building backend and enterprise applications with Java and Spring Boot, while working across REST APIs, workflow automation, databases and React-based interfaces.",

        responsibilities: [
            "Developed an Invoice Processing Automation System using Java and Spring Boot.",
            "Designed and deployed 15+ REST APIs for secure data exchange.",
            "Automated 10+ repetitive business processes through reusable workflow utilities.",
            "Contributed to the CEMILAC DA-ISO enterprise application through backend logic and API integrations.",
            "Implemented secure authentication and application integrations.",
            "Optimized SQL queries and JPA/Hibernate mappings.",
            "Collaborated in Agile/Scrum sprints, code reviews and defect resolution.",
        ],

        technologies: [
            "Java",
            "Spring Boot",
            "REST APIs",
            "React",
            "PostgreSQL",
            "JPA / Hibernate",
            "JavaScript",
            "Git",
        ],

        metrics: [
            {
                value: "90%",
                label: "FEWER PROCESSING ERRORS",
                icon: Gauge,
            },
            {
                value: "~40%",
                label: "FASTER INVOICE TURNAROUND",
                icon: ArrowUpRight,
            },
            {
                value: "~35%",
                label: "LOWER QUERY EXECUTION TIME",
                icon: Database,
            },
            {
                value: "15+",
                label: "REST APIs",
                icon: GitBranch,
            },
        ],
    },

    {
        id: "qapitol",
        period: "MAR 2025 — AUG 2025",
        duration: "6 MONTHS",
        company: "QAPITOL QA",
        role: "QUALITY ASSURANCE INTERN",
        location: "GURUGRAM",
        type: "INTERNSHIP · HYBRID",
        icon: TestTube2,

        summary:
            "Worked across functional testing, API validation, automation and performance testing, with a focus on identifying defects and API bottlenecks.",

        responsibilities: [
            "Designed and executed 100+ functional and API test cases.",
            "Performed REST API validation using Postman.",
            "Built automation scripts using REST Assured and Selenium.",
            "Reduced regression effort by approximately 30%.",
            "Conducted load and performance testing using Apache JMeter.",
            "Tested APIs with 500+ concurrent users to identify and optimize bottlenecks.",
            "Participated in defect triage and root-cause analysis within Agile environments.",
        ],

        technologies: [
            "Manual Testing",
            "API Testing",
            "Postman",
            "REST Assured",
            "Selenium",
            "Apache JMeter",
            "Regression Testing",
            "Performance Testing",
        ],

        metrics: [
            {
                value: "100+",
                label: "TEST CASES",
                icon: TestTube2,
            },
            {
                value: "~30%",
                label: "LESS REGRESSION EFFORT",
                icon: ArrowUpRight,
            },
            {
                value: "500+",
                label: "CONCURRENT USERS",
                icon: Gauge,
            },
        ],
    },
];

export default function Experience() {
    const [expandedId, setExpandedId] = useState<string | null>("awc");

    return (
        <section
            id="experience"
            className="experience-section"
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
                    03 / EXPERIENCE
                </span>

                <span className="section-line" />

                <span className="section-context">
                    ENGINEERING JOURNEY
                </span>
            </motion.div>

            {/* Intro */}

            <div className="experience-intro">

                <motion.div
                    initial={{
                        opacity: 0,
                        x: -20,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                >
                    <p className="experience-eyebrow">
                        FROM QUALITY TO ENGINEERING
                    </p>

                    <h2>
                        Building,
                        <br />
                        testing &{" "}
                        <span>learning.</span>
                    </h2>
                </motion.div>

                <motion.p
                    className="experience-intro-text"
                    initial={{
                        opacity: 0,
                        x: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
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
                    My experience spans quality engineering,
                    API testing, automation and software
                    development — giving me perspective across
                    different stages of the engineering lifecycle.
                </motion.p>

            </div>

            {/* Timeline */}

            <div className="experience-timeline">

                <div className="timeline-line" />

                {experiences.map((experience, index) => {

                    const Icon = experience.icon;

                    const isExpanded =
                        expandedId === experience.id;

                    return (
                        <motion.article
                            key={experience.id}
                            className={`experience-item ${isExpanded ? "expanded" : ""
                                }`}
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
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.12,
                            }}
                        >

                            {/* Timeline marker */}

                            <div className="timeline-marker">

                                <Icon size={15} />

                            </div>

                            {/* Experience Card */}

                            <div className="experience-card">

                                <button
                                    className="experience-card-header"
                                    onClick={() =>
                                        setExpandedId(
                                            isExpanded
                                                ? null
                                                : experience.id
                                        )
                                    }
                                >

                                    <div className="experience-header-main">

                                        <div className="experience-period">
                                            {experience.period}
                                        </div>

                                        <h3>
                                            {experience.company}
                                        </h3>

                                        <div className="experience-role">
                                            {experience.role}
                                        </div>

                                        <div className="experience-meta">
                                            <span>
                                                {experience.location}
                                            </span>

                                            <span>
                                                {experience.type}
                                            </span>

                                            <span>
                                                {experience.duration}
                                            </span>
                                        </div>

                                    </div>

                                    <div className="experience-expand">

                                        <span>
                                            {isExpanded
                                                ? "CLOSE"
                                                : "VIEW"}
                                        </span>

                                        <ChevronDown
                                            size={16}
                                            className={
                                                isExpanded
                                                    ? "rotated"
                                                    : ""
                                            }
                                        />

                                    </div>

                                </button>

                                <AnimatePresence initial={false}>

                                    {isExpanded && (

                                        <motion.div
                                            className="experience-details"
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.35,
                                            }}
                                        >

                                            {/* Summary */}

                                            <p className="experience-summary">
                                                {experience.summary}
                                            </p>

                                            {/* Metrics */}

                                            <div className="experience-metrics">

                                                {experience.metrics.map(
                                                    (metric) => {

                                                        const MetricIcon =
                                                            metric.icon;

                                                        return (
                                                            <div
                                                                className="experience-metric"
                                                                key={
                                                                    metric.label
                                                                }
                                                            >

                                                                <MetricIcon
                                                                    size={15}
                                                                />

                                                                <strong>
                                                                    {metric.value}
                                                                </strong>

                                                                <span>
                                                                    {metric.label}
                                                                </span>

                                                            </div>
                                                        );
                                                    }
                                                )}

                                            </div>

                                            {/* Responsibilities */}

                                            <div className="experience-detail-grid">

                                                <div>

                                                    <div className="detail-label">
                                                        CONTRIBUTIONS
                                                    </div>

                                                    <ul className="responsibility-list">

                                                        {experience.responsibilities.map(
                                                            (responsibility) => (
                                                                <li
                                                                    key={
                                                                        responsibility
                                                                    }
                                                                >
                                                                    {responsibility}
                                                                </li>
                                                            )
                                                        )}

                                                    </ul>

                                                </div>

                                                <div>

                                                    <div className="detail-label">
                                                        TECHNOLOGIES
                                                    </div>

                                                    <div className="experience-technologies">

                                                        {experience.technologies.map(
                                                            (technology) => (
                                                                <span
                                                                    key={
                                                                        technology
                                                                    }
                                                                >
                                                                    {technology}
                                                                </span>
                                                            )
                                                        )}

                                                    </div>

                                                </div>

                                            </div>

                                        </motion.div>

                                    )}

                                </AnimatePresence>

                            </div>

                        </motion.article>
                    );
                })}

            </div>

            {/* Closing statement */}

            <motion.div
                className="experience-footer"
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
                <ShieldCheck size={18} />

                <span>
                    ENGINEERING THROUGH MULTIPLE LENSES —
                    BUILD, TEST, OPTIMIZE.
                </span>
            </motion.div>

        </section>
    );
}