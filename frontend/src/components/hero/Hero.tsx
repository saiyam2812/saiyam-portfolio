import { motion } from "framer-motion";
import {
    ArrowDown,
    ArrowUpRight,
    Database,
    GitBranch,
    Server,
    Sparkles,
} from "lucide-react";

const systemItems = [
    {
        label: "API",
        status: "ONLINE",
        icon: Server,
    },
    {
        label: "DATABASE",
        status: "ONLINE",
        icon: Database,
    },
    {
        label: "AI LAB",
        status: "EXPLORING",
        icon: Sparkles,
    },
    {
        label: "CI/CD",
        status: "READY",
        icon: GitBranch,
    },
];

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-grid" />

            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />

            <div className="hero-content">

                <motion.div
                    className="hero-status"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="status-dot" />
                    SYSTEM ONLINE
                </motion.div>

                <motion.p
                    className="hero-eyebrow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    SOFTWARE ENGINEER
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    SAIYAM
                    <br />
                    BHURARIA<span>.</span>
                </motion.h1>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    Building reliable software systems with Java,
                    Spring Boot and React while moving toward
                    AI engineering.
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >

                    <a
                        href="#projects"
                        className="primary-button"
                    >
                        EXPLORE MY WORK
                        <ArrowUpRight size={18} />
                    </a>

                    <a
                        href="https://github.com/saiyam2812"
                        target="_blank"
                        rel="noreferrer"
                        className="secondary-button"
                    >
                        GITHUB
                    </a>

                </motion.div>

            </div>

            <motion.div
                className="system-panel"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 0.5,
                    duration: 0.7,
                }}
            >

                <div className="system-panel-header">
                    <div>
                        <span className="system-label">
                            SYSTEM
                        </span>

                        <span className="system-title">
                            STATUS
                        </span>
                    </div>

                    <span className="system-indicator">
                        ●
                    </span>
                </div>

                <div className="system-divider" />

                <div className="system-items">

                    {systemItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.label}
                                className="system-item"
                                initial={{
                                    opacity: 0,
                                    x: 15,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    delay: 0.8 + index * 0.1,
                                }}
                            >

                                <div className="system-item-left">

                                    <Icon size={15} />

                                    <span>
                                        {item.label}
                                    </span>

                                </div>

                                <div className="system-item-right">

                                    <span
                                        className={
                                            item.status === "ONLINE"
                                                ? "system-online"
                                                : "system-exploring"
                                        }
                                    >
                                        {item.status}
                                    </span>

                                    <span className="system-status-dot" />

                                </div>

                            </motion.div>
                        );
                    })}

                </div>

                <div className="system-footer">
                    <span>BUILD</span>

                    <span>
                        2026.08
                    </span>
                </div>

            </motion.div>

            <div className="hero-scroll">
                <ArrowDown size={16} />
                SCROLL TO EXPLORE
            </div>

        </section>
    );
}