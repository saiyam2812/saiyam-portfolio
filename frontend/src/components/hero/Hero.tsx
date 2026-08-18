import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-grid" />

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
                    Building reliable software systems with
                    Java, Spring Boot and React while moving
                    toward AI engineering.
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

            <div className="hero-scroll">
                <ArrowDown size={16} />
                SCROLL TO EXPLORE
            </div>

        </section>
    );
}