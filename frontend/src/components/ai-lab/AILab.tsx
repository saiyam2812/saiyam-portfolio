import { motion } from "framer-motion";
import {
    BrainCircuit,
    Network,
    Sparkles,
    ArrowUpRight,
} from "lucide-react";

import RAGSimulator from "./rag/RAGSimulator";

import "./AILab.css";
export default function AILab() {
    return (
        <section
            id="ai-lab"
            className="ai-lab-section"
        >

            <div className="ai-lab-container">

                {/* AI LAB META */}

                <motion.div
                    className="ai-lab-meta"
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
                    <span>08</span>
                    <span>/</span>
                    <span>AI LAB</span>
                </motion.div>


                {/* YOUR AI LAB HEADING */}

                <div className="ai-lab-heading">

                    <div className="ai-lab-title">

                        <h2>
                            ENGINEERING
                            <br />
                            THE NEXT
                            <br />
                            <span>LAYER.</span>
                        </h2>

                    </div>

                    <div className="ai-lab-intro">

                        <BrainCircuit size={22} />

                        <p>
                            I'm exploring how software
                            engineering principles can be
                            extended into intelligent systems.
                        </p>

                    </div>

                </div>


                {/* ==========================================
                    EXPERIMENT 01 — RAG
                ========================================== */}

                <div className="ai-lab-experiment">

                    <div className="ai-lab-experiment-header">

                        <div>

                            <span>
                                EXPERIMENT 01
                            </span>

                            <h3>
                                RETRIEVAL-AUGMENTED
                                GENERATION
                            </h3>

                        </div>

                        <span className="ai-experiment-status">
                            SIMULATION
                        </span>

                    </div>


                    <p className="ai-experiment-description">
                        A visual simulation of how a RAG
                        pipeline retrieves relevant knowledge
                        before generating a response.
                    </p>


                    {/* THIS IS THE IMPORTANT PART */}

                    <RAGSimulator />

                </div>


                {/* ==========================================
                    AI AREAS
                ========================================== */}

                <div className="ai-area-grid">


                    {/* LLM */}

                    <article className="ai-area-card">

                        <div className="ai-card-top">

                            <span className="ai-card-number">
                                02
                            </span>

                            <Sparkles
                                size={19}
                                className="ai-card-icon"
                            />

                        </div>

                        <div className="ai-card-content">

                            <h3>
                                LLM APPLICATIONS
                            </h3>

                            <span className="ai-card-subtitle">
                                INTELLIGENT SOFTWARE
                            </span>

                            <p>
                                Exploring practical applications
                                powered by large language models.
                            </p>

                        </div>

                        <div className="ai-card-footer">

                            <span className="ai-status exploring">
                                EXPLORING
                            </span>

                            <ArrowUpRight size={14} />

                        </div>

                    </article>


                    {/* EMBEDDINGS */}

                    <article className="ai-area-card">

                        <div className="ai-card-top">

                            <span className="ai-card-number">
                                03
                            </span>

                            <BrainCircuit
                                size={19}
                                className="ai-card-icon"
                            />

                        </div>

                        <div className="ai-card-content">

                            <h3>
                                EMBEDDINGS
                            </h3>

                            <span className="ai-card-subtitle">
                                SEMANTIC REPRESENTATIONS
                            </span>

                            <p>
                                Exploring how semantic
                                representations enable
                                intelligent retrieval.
                            </p>

                        </div>

                        <div className="ai-card-footer">

                            <span className="ai-status next">
                                NEXT
                            </span>

                            <ArrowUpRight size={14} />

                        </div>

                    </article>


                    {/* KNOWLEDGE GRAPH */}

                    <article className="ai-area-card">

                        <div className="ai-card-top">

                            <span className="ai-card-number">
                                04
                            </span>

                            <Network
                                size={19}
                                className="ai-card-icon"
                            />

                        </div>

                        <div className="ai-card-content">

                            <h3>
                                KNOWLEDGE GRAPHS
                            </h3>

                            <span className="ai-card-subtitle">
                                CONNECTED KNOWLEDGE
                            </span>

                            <p>
                                Exploring structured
                                relationships between
                                entities and information.
                            </p>

                        </div>

                        <div className="ai-card-footer">

                            <span className="ai-status next">
                                NEXT
                            </span>

                            <ArrowUpRight size={14} />

                        </div>

                    </article>

                </div>


            </div>

        </section>
    );
}