import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import {
    Terminal as TerminalIcon,
    ChevronRight,
} from "lucide-react";

import "./Terminal.css";

type CommandOutput = {
    command: string;
    output: string[];
};

const availableCommands = [
    "help",
    "about",
    "stack",
    "experience",
    "projects",
    "ai",
    "github",
    "contact",
    "clear",
];

const commandDescriptions: Record<string, string> = {
    help: "Show available commands",
    about: "About Saiyam",
    stack: "View engineering stack",
    experience: "View professional experience",
    projects: "Explore projects",
    ai: "Enter AI Lab",
    github: "Open GitHub",
    contact: "Get in touch",
    clear: "Clear terminal",
};

const executeCommand = (
    command: string
): string[] => {
    switch (command) {
        case "help":
            return [
                "Available commands:",
                "",
                "  about       → About Saiyam",
                "  stack       → Engineering stack",
                "  experience  → Professional experience",
                "  projects    → Explore projects",
                "  ai          → Enter AI Lab",
                "  github      → Open GitHub",
                "  contact     → Get in touch",
                "  clear       → Clear terminal",
            ];

        case "about":
            return [
                "SAIYAM BHURARIA",
                "",
                "Software Engineer focused on building",
                "backend systems, APIs, automation and",
                "full-stack applications.",
                "",
                "Currently moving toward AI Engineering.",
            ];

        case "stack":
            return [
                "ENGINEERING STACK",
                "",
                "Backend      → Java / Spring Boot",
                "Frontend     → React / TypeScript",
                "Database     → PostgreSQL / MySQL",
                "Testing      → Postman / JMeter / RestAssured",
                "DevOps       → Git / GitHub / Jenkins / Docker",
            ];

        case "experience":
            return [
                "EXPERIENCE",
                "",
                "Software Engineering Intern",
                "AWC Software",
                "",
                "Focus:",
                "• Java / Spring Boot",
                "• React",
                "• API Integration",
                "• Enterprise Workflow Systems",
            ];

        case "projects":
            return [
                "PROJECTS",
                "",
                "[01] Invoice Processing Automation",
                "[02] STUDENT MANAGEMENT API",
                "[03] AUDIO ENGINE CONDITION DETECTION",
                "",
                "Use the PROJECTS section above to",
                "explore detailed case studies.",
            ];

        case "ai":
            return [
                "AI LAB",
                "",
                "Current direction:",
                "",
                "• Machine Learning",
                "• LLM Applications",
                "• RAG",
                "• Embeddings",
                "• Knowledge Graphs",
                "• AI Agents",
                "",
                "STATUS → EXPLORING",
            ];

        case "github":
            window.open(
                "https://github.com/saiyam2812",
                "_blank",
                "noopener,noreferrer"
            );

            return [
                "Opening GitHub...",
            ];

        case "contact":
            return [
                "CONTACT",
                "",
                "Let's build something interesting.",
                "",
                "Scroll to the contact section",
                "or use the CONTACT button above.",
            ];

        default:
            return [
                `Command not found: ${command}`,
                "",
                'Type "help" to see available commands.',
            ];
    }
};

export default function Terminal() {
    const [input, setInput] = useState("");

    const [history, setHistory] = useState<
        CommandOutput[]
    >([]);

    const handleCommand = () => {
        const command = input
            .trim()
            .toLowerCase();

        if (!command) {
            return;
        }

        if (command === "clear") {
            setHistory([]);
            setInput("");
            return;
        }

        const output = executeCommand(command);

        setHistory((previous) => [
            ...previous,
            {
                command,
                output,
            },
        ]);

        setInput("");
    };

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            handleCommand();
        }
    };

    return (
        <section
            id="terminal"
            className="terminal-section"
        >
            <div className="terminal-container">

                {/* Section heading */}

                <motion.div
                    className="terminal-meta"
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
                    <span>07</span>
                    <span>/</span>
                    <span>INTERACTIVE TERMINAL</span>
                </motion.div>

                {/* Terminal */}

                <motion.div
                    className="terminal-window"
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
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                >

                    {/* Header */}

                    <div className="terminal-header">

                        <div className="terminal-header-left">

                            <TerminalIcon size={15} />

                            <span>
                                SAIYAM@PORTFOLIO
                            </span>

                        </div>

                        <div className="terminal-dots">
                            <span />
                            <span />
                            <span />
                        </div>

                    </div>

                    {/* Terminal body */}

                    <div className="terminal-body">

                        <div className="terminal-welcome">

                            <div>
                                SAIYAM.DEV TERMINAL
                            </div>

                            <div className="terminal-muted">
                                Interactive portfolio interface
                            </div>

                            <div className="terminal-muted">
                                Type "help" to get started.
                            </div>

                        </div>

                        {/* Command history */}

                        <div className="terminal-history">

                            {history.map(
                                (entry, index) => (
                                    <div
                                        className="terminal-command-block"
                                        key={`${entry.command}-${index}`}
                                    >

                                        <div className="terminal-command">

                                            <ChevronRight size={13} />

                                            <span>
                                                {entry.command}
                                            </span>

                                        </div>

                                        <div className="terminal-output">

                                            {entry.output.map(
                                                (line, lineIndex) => (
                                                    <div
                                                        key={lineIndex}
                                                        className={
                                                            line.startsWith("•")
                                                                ? "terminal-bullet"
                                                                : ""
                                                        }
                                                    >
                                                        {line || "\u00A0"}
                                                    </div>
                                                )
                                            )}

                                        </div>

                                    </div>
                                )
                            )}

                        </div>

                        {/* Input */}

                        <div className="terminal-input-row">

                            <ChevronRight size={14} />

                            <input
                                value={input}
                                onChange={(event) =>
                                    setInput(event.target.value)
                                }
                                onKeyDown={handleKeyDown}
                                placeholder="type a command..."
                                spellCheck={false}
                                autoComplete="off"
                                aria-label="Terminal command"
                            />

                            <span className="terminal-cursor">
                                _
                            </span>

                        </div>

                    </div>

                    {/* Footer */}

                    <div className="terminal-footer">

                        <span>
                            {availableCommands.length} commands
                        </span>

                        <span>
                            <FaGithub size={11} />
                            github.com/saiyam2812
                        </span>

                    </div>

                </motion.div>

                {/* Command hints */}

                <div className="terminal-hints">

                    {availableCommands
                        .slice(0, 5)
                        .map((command) => (
                            <button
                                key={command}
                                onClick={() => {
                                    if (command === "clear") {
                                        setHistory([]);
                                        return;
                                    }

                                    const output =
                                        executeCommand(command);

                                    setHistory((previous) => [
                                        ...previous,
                                        {
                                            command,
                                            output,
                                        },
                                    ]);
                                }}
                            >
                                <span>$</span>
                                {command}
                            </button>
                        ))}

                </div>

            </div>
        </section>
    );
}