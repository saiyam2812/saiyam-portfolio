import { useState } from "react";
import { motion } from "framer-motion";
import {
    BrainCircuit,
    CheckCircle2,
    Database,
    FileText,
    Loader2,
    Search,
    Sparkles,
} from "lucide-react";

import "./RAGSimulator.css";

type PipelineStage =
    | "idle"
    | "analyzing"
    | "retrieving"
    | "context"
    | "generating"
    | "complete";

type Document = {
    id: string;
    title: string;
    content: string;
    keywords: string[];
};

type RetrievedDocument = Document & {
    score: number;
};

/*
 * ============================================================
 * SIMULATED KNOWLEDGE BASE
 * ============================================================
 *
 * V1 is intentionally a simulation.
 *
 * The Projects document is restricted to the projects that
 * actually exist in the GitHub Projects section:
 *
 * 1. Invoice Processing Automation
 * 2. Student Management API
 * 3. Audio Engine - Condition Detection
 *
 * Work experience such as CEMILAC / Newgen / AWC is NOT treated
 * as a portfolio project here.
 */

const knowledgeBase: Document[] = [
    {
        id: "skills",
        title: "skills.md",

        keywords: [
            "java",
            "spring",
            "spring boot",
            "react",
            "postgresql",
            "mysql",
            "backend",
            "frontend",
            "api",
            "docker",
            "git",
            "github",
            "technology",
            "technologies",
            "tech",
            "stack",
        ],

        content:
            "Saiyam works with Java, Spring Boot, React, REST APIs, PostgreSQL, MySQL, Git, GitHub, Docker and related development tools.",
    },

    {
        id: "experience",
        title: "experience.md",

        keywords: [
            "experience",
            "software engineer",
            "intern",
            "awc",
            "backend",
            "api",
            "automation",
            "cemilac",
            "newgen",
            "work",
            "working",
            "job",
            "career",
        ],

        content:
            "Saiyam has software engineering experience involving Java, Spring Boot, React, API integration, enterprise workflow systems and automation.",
    },

    {
        id: "projects",
        title: "projects.md",

        keywords: [
            "project",
            "projects",
            "portfolio",
            "invoice",
            "invoice processing",
            "student",
            "student management",
            "management api",
            "audio",
            "audio engine",
            "condition detection",
            "machine learning project",
            "ml project",
        ],

        content:
            "Saiyam's selected GitHub projects are Invoice Processing Automation, Student Management API, and Audio Engine - Condition Detection.",
    },

    {
        id: "ai-direction",
        title: "ai-direction.md",

        keywords: [
            "ai",
            "artificial intelligence",
            "machine learning",
            "ml",
            "llm",
            "rag",
            "embeddings",
            "knowledge graph",
            "agents",
            "agent",
            "learning",
            "future",
            "moving",
        ],

        content:
            "Saiyam is moving toward AI engineering and is exploring machine learning, LLM applications, RAG, embeddings, knowledge graphs and AI agents.",
    },
];

const stageLabels: Record<PipelineStage, string> = {
    idle: "READY",
    analyzing: "ANALYZING QUERY",
    retrieving: "RETRIEVING",
    context: "BUILDING CONTEXT",
    generating: "GENERATING",
    complete: "COMPLETE",
};

const wait = (milliseconds: number) =>
    new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });

/*
 * ============================================================
 * RETRIEVAL ENGINE
 * ============================================================
 *
 * V1 simulation:
 *
 * We are NOT using embeddings or a vector database yet.
 *
 * The simulator checks the query against the keywords stored
 * inside our simulated documents and assigns a relevance score.
 */

function retrieveDocuments(
    query: string
): RetrievedDocument[] {
    const normalizedQuery = query
        .toLowerCase()
        .trim();

    const scored = knowledgeBase.map((document) => {
        const matchedKeywords =
            document.keywords.filter((keyword) =>
                normalizedQuery.includes(keyword)
            );

        let score =
            matchedKeywords.length * 20;

        /*
         * ----------------------------------------------------
         * Technology / Stack Questions
         * ----------------------------------------------------
         */

        if (
            normalizedQuery.includes("technology") ||
            normalizedQuery.includes("technologies") ||
            normalizedQuery.includes("tech") ||
            normalizedQuery.includes("stack")
        ) {
            if (document.id === "skills") {
                score += 35;
            }
        }

        /*
         * ----------------------------------------------------
         * Project Questions
         * ----------------------------------------------------
         */

        if (
            normalizedQuery.includes("project") ||
            normalizedQuery.includes("projects") ||
            normalizedQuery.includes("portfolio")
        ) {
            if (document.id === "projects") {
                score += 40;
            }
        }

        /*
         * ----------------------------------------------------
         * Experience Questions
         * ----------------------------------------------------
         */

        if (
            normalizedQuery.includes("experience") ||
            normalizedQuery.includes("work") ||
            normalizedQuery.includes("working") ||
            normalizedQuery.includes("job") ||
            normalizedQuery.includes("career")
        ) {
            if (document.id === "experience") {
                score += 35;
            }
        }

        /*
         * ----------------------------------------------------
         * AI Questions
         * ----------------------------------------------------
         */

        if (
            normalizedQuery.includes("ai") ||
            normalizedQuery.includes("llm") ||
            normalizedQuery.includes("rag") ||
            normalizedQuery.includes(
                "machine learning"
            ) ||
            normalizedQuery.includes("embedding") ||
            normalizedQuery.includes(
                "knowledge graph"
            ) ||
            normalizedQuery.includes("agent")
        ) {
            if (document.id === "ai-direction") {
                score += 40;
            }
        }

        return {
            ...document,
            score: Math.min(score, 99),
        };
    });

    /*
     * Only return documents with actual relevance.
     *
     * IMPORTANT:
     * There is intentionally NO fallback document here.
     *
     * Therefore:
     *
     * "What is the weather today?"
     *
     * returns []
     *
     * instead of randomly retrieving portfolio documents.
     */

    return scored
        .filter(
            (document) => document.score > 0
        )
        .sort(
            (a, b) => b.score - a.score
        )
        .slice(0, 3);
}

/*
 * ============================================================
 * RESPONSE GENERATOR
 * ============================================================
 *
 * This is also simulated.
 *
 * It is NOT an LLM.
 */

function generateResponse(
    query: string,
    documents: RetrievedDocument[]
): string {
    const normalizedQuery =
        query.toLowerCase();

    /*
     * ----------------------------------------------------
     * PROJECT QUESTIONS
     * ----------------------------------------------------
     *
     * IMPORTANT:
     * Only the three GitHub Projects are mentioned here.
     */

    if (
        normalizedQuery.includes("project") ||
        normalizedQuery.includes("projects") ||
        normalizedQuery.includes("portfolio")
    ) {
        return (
            "Saiyam's selected GitHub projects are " +
            "Invoice Processing Automation, " +
            "Student Management API, and " +
            "Audio Engine - Condition Detection."
        );
    }

    /*
     * ----------------------------------------------------
     * TECHNOLOGY QUESTIONS
     * ----------------------------------------------------
     */

    if (
        normalizedQuery.includes("technology") ||
        normalizedQuery.includes(
            "technologies"
        ) ||
        normalizedQuery.includes("tech") ||
        normalizedQuery.includes("stack")
    ) {
        return (
            "Saiyam works primarily with Java, " +
            "Spring Boot, React, REST APIs, " +
            "PostgreSQL and related development tools."
        );
    }

    /*
     * ----------------------------------------------------
     * AI QUESTIONS
     * ----------------------------------------------------
     */

    if (
        normalizedQuery.includes("ai") ||
        normalizedQuery.includes("llm") ||
        normalizedQuery.includes("rag") ||
        normalizedQuery.includes(
            "machine learning"
        ) ||
        normalizedQuery.includes(
            "embedding"
        ) ||
        normalizedQuery.includes(
            "knowledge graph"
        ) ||
        normalizedQuery.includes(
            "agent"
        )
    ) {
        return (
            "Saiyam is currently moving toward " +
            "AI engineering and exploring " +
            "machine learning, LLM applications, " +
            "RAG, embeddings, knowledge graphs " +
            "and AI agents."
        );
    }

    /*
     * ----------------------------------------------------
     * EXPERIENCE QUESTIONS
     * ----------------------------------------------------
     */

    if (
        normalizedQuery.includes(
            "experience"
        ) ||
        normalizedQuery.includes("work") ||
        normalizedQuery.includes(
            "working"
        ) ||
        normalizedQuery.includes("job") ||
        normalizedQuery.includes("career")
    ) {
        return (
            "Saiyam's software engineering " +
            "experience includes Java, Spring Boot, " +
            "React, API integration, enterprise " +
            "workflow systems and automation."
        );
    }

    /*
     * ----------------------------------------------------
     * GENERIC RESPONSE
     * ----------------------------------------------------
     */

    return (
        `Relevant portfolio knowledge was ` +
        `retrieved from ${documents
            .map(
                (document) =>
                    document.title
            )
            .join(", ")}.`
    );
}

/*
 * ============================================================
 * RAG SIMULATOR COMPONENT
 * ============================================================
 */

export default function RAGSimulator() {
    const [query, setQuery] =
        useState(
            "What technologies does Saiyam use?"
        );

    const [stage, setStage] =
        useState<PipelineStage>(
            "idle"
        );

    const [
        retrievedDocuments,
        setRetrievedDocuments,
    ] = useState<
        RetrievedDocument[]
    >([]);

    const [response, setResponse] =
        useState("");

    const [isRunning, setIsRunning] =
        useState(false);

    /*
     * ========================================================
     * RUN PIPELINE
     * ========================================================
     */

    const runPipeline = async () => {
        const trimmedQuery =
            query.trim();

        if (
            !trimmedQuery ||
            isRunning
        ) {
            return;
        }

        setIsRunning(true);

        setResponse("");

        setRetrievedDocuments([]);

        /*
         * STEP 1
         */

        setStage("analyzing");

        await wait(700);

        /*
         * STEP 2
         */

        setStage("retrieving");

        await wait(900);

        const documents =
            retrieveDocuments(
                trimmedQuery
            );

        setRetrievedDocuments(
            documents
        );

        /*
         * ====================================================
         * NO RELEVANT KNOWLEDGE
         * ====================================================
         *
         * If the question isn't about the portfolio
         * knowledge base, stop here.
         */

        if (
            documents.length === 0
        ) {
            setStage("complete");

            setResponse(
                "No relevant knowledge was found. " +
                "This simulator currently answers questions " +
                "about Saiyam's portfolio, experience, " +
                "projects, skills and AI direction."
            );

            setIsRunning(false);

            return;
        }

        /*
         * STEP 3
         */

        setStage("context");

        await wait(900);

        /*
         * STEP 4
         */

        setStage("generating");

        await wait(1000);

        const generatedResponse =
            generateResponse(
                trimmedQuery,
                documents
            );

        setResponse(
            generatedResponse
        );

        /*
         * COMPLETE
         */

        setStage("complete");

        setIsRunning(false);
    };

    /*
     * ========================================================
     * PIPELINE UI
     * ========================================================
     */

    const pipelineSteps = [
        {
            key: "analyzing",
            label: "QUERY",
            icon: Search,
        },
        {
            key: "retrieving",
            label: "RETRIEVE",
            icon: Database,
        },
        {
            key: "context",
            label: "CONTEXT",
            icon: FileText,
        },
        {
            key: "generating",
            label: "GENERATE",
            icon: Sparkles,
        },
    ];

    return (
        <div className="rag-simulator">

            {/* ==================================================
                HEADER
            ================================================== */}

            <div className="rag-header">

                <div className="rag-title-group">

                    <BrainCircuit
                        size={18}
                    />

                    <div>

                        <span className="rag-label">
                            EXPERIMENT 01
                        </span>

                        <h3>
                            RAG PIPELINE SIMULATOR
                        </h3>

                    </div>

                </div>

                <span className="rag-mode">
                    MODE: SIMULATION
                </span>

            </div>

            {/* ==================================================
                QUERY
            ================================================== */}

            <div className="rag-query">

                <label htmlFor="rag-query-input">
                    QUERY
                </label>

                <div className="rag-query-input">

                    <input
                        id="rag-query-input"
                        value={query}
                        onChange={(event) =>
                            setQuery(
                                event.target.value
                            )
                        }
                        onKeyDown={(event) => {
                            if (
                                event.key ===
                                "Enter" &&
                                !isRunning
                            ) {
                                runPipeline();
                            }
                        }}
                        disabled={isRunning}
                        placeholder="Ask something about Saiyam..."
                    />

                    <button
                        type="button"
                        onClick={
                            runPipeline
                        }
                        disabled={
                            isRunning ||
                            !query.trim()
                        }
                    >

                        {isRunning ? (
                            <Loader2
                                size={14}
                                className="rag-spin"
                            />
                        ) : (
                            "RUN PIPELINE"
                        )}

                    </button>

                </div>

            </div>

            {/* ==================================================
                PIPELINE
            ================================================== */}

            <div className="rag-pipeline">

                <div className="rag-subheading">
                    PIPELINE
                </div>

                <div className="rag-pipeline-track">

                    {pipelineSteps.map(
                        (
                            step,
                            index
                        ) => {

                            const Icon =
                                step.icon;

                            const active =
                                stage ===
                                step.key ||
                                stage ===
                                "complete";

                            return (
                                <div
                                    className="rag-pipeline-step"
                                    key={
                                        step.key
                                    }
                                >

                                    <motion.div
                                        className={
                                            active
                                                ? "rag-step-icon active"
                                                : "rag-step-icon"
                                        }
                                        animate={
                                            stage ===
                                                step.key
                                                ? {
                                                    scale: [
                                                        1,
                                                        1.08,
                                                        1,
                                                    ],
                                                }
                                                : {}
                                        }
                                        transition={{
                                            duration:
                                                0.8,
                                            repeat:
                                                stage ===
                                                    step.key
                                                    ? Infinity
                                                    : 0,
                                        }}
                                    >

                                        <Icon
                                            size={
                                                14
                                            }
                                        />

                                    </motion.div>

                                    <span>
                                        {
                                            step.label
                                        }
                                    </span>

                                    {index <
                                        pipelineSteps.length -
                                        1 && (
                                            <div
                                                className={
                                                    active
                                                        ? "rag-connector active"
                                                        : "rag-connector"
                                                }
                                            />
                                        )}

                                </div>
                            );
                        }
                    )}

                </div>

                <div className="rag-stage-status">

                    {isRunning ? (
                        <>
                            <Loader2
                                size={12}
                                className="rag-spin"
                            />

                            {
                                stageLabels[
                                stage
                                ]
                            }
                        </>
                    ) : (
                        <>
                            <CheckCircle2
                                size={12}
                            />

                            {
                                stageLabels[
                                stage
                                ]
                            }
                        </>
                    )}

                </div>

            </div>

            {/* ==================================================
                RETRIEVED DOCUMENTS
            ================================================== */}

            {retrievedDocuments.length >
                0 && (
                    <motion.div
                        className="rag-results"
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                    >

                        <div className="rag-subheading">
                            RETRIEVED DOCUMENTS
                        </div>

                        <div className="rag-documents">

                            {retrievedDocuments.map(
                                (
                                    document
                                ) => (
                                    <div
                                        className="rag-document"
                                        key={
                                            document.id
                                        }
                                    >

                                        <div className="rag-document-info">

                                            <FileText
                                                size={
                                                    14
                                                }
                                            />

                                            <span>
                                                {
                                                    document.title
                                                }
                                            </span>

                                        </div>

                                        <div className="rag-score">

                                            <span>
                                                RELEVANCE
                                            </span>

                                            <strong>
                                                {
                                                    document.score
                                                }
                                                %
                                            </strong>

                                            <div className="rag-score-bar">

                                                <div
                                                    style={{
                                                        width: `${document.score}%`,
                                                    }}
                                                />

                                            </div>

                                        </div>

                                    </div>
                                )
                            )}

                        </div>

                    </motion.div>
                )}

            {/* ==================================================
                RETRIEVED CONTEXT
            ================================================== */}

            {retrievedDocuments.length >
                0 && (
                    <motion.div
                        className="rag-context"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                    >

                        <div className="rag-subheading">
                            RETRIEVED CONTEXT
                        </div>

                        <div className="rag-context-content">

                            {retrievedDocuments.map(
                                (
                                    document
                                ) => (
                                    <div
                                        key={
                                            document.id
                                        }
                                        className="rag-context-item"
                                    >

                                        <span>
                                            {
                                                document.title
                                            }
                                        </span>

                                        <p>
                                            {
                                                document.content
                                            }
                                        </p>

                                    </div>
                                )
                            )}

                        </div>

                    </motion.div>
                )}

            {/* ==================================================
                GENERATED RESPONSE
            ================================================== */}

            {response && (
                <motion.div
                    className="rag-response"
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                >

                    <div className="rag-subheading">
                        GENERATED RESPONSE
                    </div>

                    <div className="rag-response-content">

                        <Sparkles
                            size={15}
                        />

                        <p>
                            {response}
                        </p>

                    </div>

                </motion.div>
            )}

            {/* ==================================================
                FOOTER
            ================================================== */}

            <div className="rag-footer">

                <span>
                    V1.0
                </span>

                <span>
                    RETRIEVAL: SIMULATED
                </span>

                <span>
                    GENERATION: SIMULATED
                </span>

            </div>

        </div>
    );
}