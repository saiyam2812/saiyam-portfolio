import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BootScreenProps {
    onComplete: () => void;
}

const bootMessages = [
    "Initializing engineering experience...",
    "Loading projects...",
    "Loading technical stack...",
    "Loading AI lab...",
];

export default function BootScreen({ onComplete }: BootScreenProps) {
    const [currentMessage, setCurrentMessage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessage((previous) => {
                if (previous < bootMessages.length - 1) {
                    return previous + 1;
                }

                clearInterval(interval);

                setTimeout(onComplete, 700);

                return previous;
            });
        }, 500);

        return () => clearInterval(interval);
    }, [onComplete]);

    const progress =
        ((currentMessage + 1) / bootMessages.length) * 100;

    return (
        <motion.div
            className="boot-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="boot-container">

                <div className="boot-brand">
                    SAIYAM.DEV
                </div>

                <div className="boot-content">

                    <div className="boot-title">
                        INITIALIZING SYSTEM
                    </div>

                    <div className="boot-progress">
                        <motion.div
                            className="boot-progress-bar"
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.4 }}
                        />
                    </div>

                    <div className="boot-log">

                        {bootMessages.map((message, index) => (
                            <div
                                key={message}
                                className={`boot-line ${index <= currentMessage ? "active" : ""
                                    }`}
                            >
                                <span className="boot-symbol">
                                    {index <= currentMessage ? "✓" : "○"}
                                </span>

                                <span>{message}</span>
                            </div>
                        ))}

                    </div>

                    {currentMessage === bootMessages.length - 1 && (
                        <motion.div
                            className="system-ready"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            SYSTEM READY
                        </motion.div>
                    )}

                </div>
            </div>
        </motion.div>
    );
}