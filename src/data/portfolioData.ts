export type ComponentStatus = "Implemented" | "In Development" | "Planned";

export interface ProjectComponent {
  name: string;
  status: ComponentStatus;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "AI & LLM" | "Computer Vision & IoT" | "Machine Learning" | "Mobile & Software";
  statusBadge: string;
  isFlagship: boolean;
  shortDescription: string;
  problemStatement: string;
  technicalApproach: string;
  safetyArchitectureNote?: string;
  components?: ProjectComponent[];
  techStack: string[];
  githubUrl?: string;
  isRepoPublic: boolean;
  repoNotice?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ArticleDraft {
  id: string;
  title: string;
  synopsis: string;
  keyThemes: string[];
  estimatedReadingTime: string;
  status: "Draft Outline" | "Research in Progress";
  coreEngineeringQuestions: string[];
}

export interface PersonalInfo {
  fullName: string;
  title: string;
  headline: string;
  supportingDescription: string;
  location: string;
  email: string;
  linkedInUrl: string;
  gitHubUrl: string;
  aboutBio: string[];
  focusAreas: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface EducationInfo {
  degree: string;
  institution: string;
  location: string;
  expectedGraduation: string;
  status: string;
  coursework: string[];
  academicNote: string;
}

export interface ExperienceInfo {
  role: string;
  organization: string;
  location: string;
  arrangement: string;
  status: string;
  summary: string;
  responsibilities: string[];
}

export const personalInfo: PersonalInfo = {
  fullName: "Tariq Khattak",
  title: "AI Engineer Intern",
  headline: "Building practical AI applications with Python.",
  supportingDescription:
    "Software Engineering undergraduate at CECOS University, focused on Generative AI, computer vision, LLM applications and backend engineering.",
  location: "Peshawar, Khyber Pakhtunkhwa, Pakistan",
  email: "tariqjm143@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/tariq-khattak-43b923257/",
  gitHubUrl: "https://github.com/12hurricane",
  aboutBio: [
    "I am a Software Engineering undergraduate at CECOS University and an AI Engineer Intern at TechCitySoft, focused on building practical, reliable software applications with Python, Generative AI, and computer vision.",
    "My hands-on development is focused on practical software systems: SafeSight-AI, an assistive vision prototype exploring computer vision for real-time obstacle awareness, and MediAssist, a medication management system applying language models for symptom extraction paired with deterministic rule checking for dosage limits.",
    "I prioritize modular backend architectures, reliable data pipelines, and verifiable benchmark evaluations.",
  ],
  focusAreas: [
    {
      title: "Generative AI & LLM Engineering",
      description: "Building practical applications with language models, structured output extraction, and evaluation pipelines.",
      icon: "Cpu",
    },
    {
      title: "Computer Vision & Edge AI",
      description: "Working with YOLO object detection, OpenCV preprocessing, and spatial heuristics on camera feeds.",
      icon: "Eye",
    },
    {
      title: "Python Backend Engineering",
      description: "Developing performant RESTful APIs with FastAPI, PostgreSQL, asynchronous worker queues, and typed schema validation.",
      icon: "Server",
    },
    {
      title: "RAG & Vector Retrieval",
      description: "Connecting local and cloud LLMs with vector embeddings, semantic retrieval, and verified document context.",
      icon: "Database",
    },
    {
      title: "AI Safety & Rule Boundaries",
      description: "Isolating safety-critical calculations inside deterministic validation logic rather than unconstrained model outputs.",
      icon: "Workflow",
    },
  ],
};

export const educationInfo: EducationInfo = {
  degree: "Bachelor of Science in Software Engineering",
  institution: "CECOS University",
  location: "Peshawar, Pakistan",
  expectedGraduation: "2027",
  status: "Undergraduate Student",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Software Engineering Methodologies",
    "Artificial Intelligence Fundamentals",
    "Operating Systems & Computer Networks",
  ],
  academicNote: "Focusing on systems programming, algorithmic foundations, and applied artificial intelligence.",
};

export const experienceInfo: ExperienceInfo = {
  role: "AI Engineer Intern",
  organization: "TechCitySoft",
  location: "Peshawar, Pakistan",
  arrangement: "Remote / Pakistan",
  status: "Active Internship",
  summary:
    "Developing AI features and backend integration pipelines, focusing on modular software components, API design, and reliable application logic.",
  responsibilities: [
    "Building and testing practical application features with Python and FastAPI.",
    "Integrating LLM extraction pipelines with backend application logic.",
    "Designing structured validation schemas for model inputs and outputs.",
    "Evaluating API performance, error handling, and data contracts.",
    "Documenting system workflows and component architectures.",
  ],
};

export const projects: Project[] = [
  {
    id: "safesight-ai",
    title: "SafeSight-AI",
    subtitle: "Smart Glasses for Visually Impaired Persons",
    category: "Computer Vision & IoT",
    statusBadge: "Final Year Project / Prototype Development",
    isFlagship: true,
    shortDescription:
      "An AI-powered assistive vision system designed to help visually impaired individuals understand their surrounding environment through camera-based visual perception and audio feedback.",
    problemStatement:
      "Visually impaired individuals face daily navigational obstacles, spatial disorientation, and unassisted collision risks. Traditional white canes provide local tactile feedback, but cannot classify distant objects, recognize obstacles, or offer directional orientation cues.",
    technicalApproach:
      "SafeSight-AI utilizes a lightweight wearable frame coupled with edge mobile processing. Visual streams from miniature cameras are processed by on-device computer vision models to detect objects and approximate proximity under controlled conditions, converting spatial data into low-latency audio notifications.",
    safetyArchitectureNote:
      "Assistive prototype only. Current validation is performed on mobile camera feeds and recorded bench datasets. Wireless camera-to-phone hardware streaming and physical spectacle mounting are under ongoing hardware prototyping; does not claim autonomous navigation or road-crossing safety.",
    components: [
      {
        name: "Object Detection & Spatial Classification (YOLO)",
        status: "Implemented",
        description: "Pre-trained computer vision model identifying common obstacles on live camera feeds and benchmark video clips.",
      },
      {
        name: "Software Vision Pipeline (Python / OpenCV)",
        status: "Implemented",
        description: "Frame ingestion, resizing, preprocessing, and inference orchestration running on host/mobile compute.",
      },
      {
        name: "Controlled Distance Estimation Heuristics",
        status: "In Development",
        description: "Bounding-box ratio and geometric heuristics evaluated under calibrated, fixed-focal camera conditions.",
      },
      {
        name: "Audio-Based Environmental Alert Synthesis",
        status: "In Development",
        description: "Directional audio cue dispatch and text-to-speech warnings communicating relative obstacle proximity.",
      },
      {
        name: "Mobile Edge Client Application (Flutter)",
        status: "In Development",
        description: "Mobile companion application designed to host model inference and receive telemetry from peripheral sensors.",
      },
      {
        name: "Wireless Camera-to-Phone Hardware Stream",
        status: "Planned",
        description: "Low-latency Wi-Fi / Bluetooth video streaming between the wearable glasses module and smartphone processor.",
      },
      {
        name: "ESP32 Wearable Frame & IMU Sensor Mount",
        status: "Planned",
        description: "Custom lightweight physical spectacle mount integrating ESP32, power management, and inertial measurement unit.",
      },
    ],
    techStack: [
      "Python",
      "OpenCV Pipeline",
      "YOLO Object Detection",
      "Flutter (In Dev)",
      "ESP32 Frame (Planned)",
    ],
    isRepoPublic: false,
    repoNotice: "Academic Final Year Project under active development. Hardware and software verification in progress.",
  },
  {
    id: "mediassist",
    title: "MediAssist",
    subtitle: "AI-Assisted Medication Management System",
    category: "AI & LLM",
    statusBadge: "Development / Research Prototype",
    isFlagship: true,
    shortDescription:
      "An AI-assisted medication management application designed to organize prescriptions, medication schedules, reminders, adherence tracking, and health-worker workflows.",
    problemStatement:
      "Medication non-adherence and polypharmacy complications lead to preventable hospitalizations. Patients frequently struggle with complex multi-drug schedules, illegible prescription instructions, and confusing pharmacological terminology.",
    technicalApproach:
      "MediAssist separates unstructured text processing from safety-critical validation. It uses local LLMs for structured document extraction and plain-language explanation, while isolating dosage math, schedule validation, and drug interaction checks in deterministic, rule-based modules.",
    safetyArchitectureNote:
      "Prototype Safety Design: Medication calculations, dosage bounds, and interaction warnings are evaluated by rule-based algorithmic checks. Language models are restricted to unstructured text extraction and plain-language summarization, and do not make clinical decisions.",
    components: [
      {
        name: "Prescription Parsing & Extraction (Regex / LLM Schema)",
        status: "Implemented",
        description: "Structured extraction of medication names, frequency, and dosage instructions from digital inputs.",
      },
      {
        name: "Deterministic Medication Scheduling Engine",
        status: "Implemented",
        description: "Rule-based engine calculating intake timestamps according to fixed daily intervals.",
      },
      {
        name: "Relational Persistence Schema (PostgreSQL)",
        status: "Implemented",
        description: "Database models tracking patient medication registries, schedule intervals, and logged adherence records.",
      },
      {
        name: "FastAPI RESTful Backend Services",
        status: "Implemented",
        description: "Asynchronous API endpoints handling authentication, schedule queries, and patient profile management.",
      },
      {
        name: "RAG Pharmaceutical Reference Search",
        status: "In Development",
        description: "Vector indexing and embedding retrieval across open pharmaceutical knowledge bases for drug info queries.",
      },
      {
        name: "Deterministic Drug-Drug Interaction Safety Engine",
        status: "In Development",
        description: "Rule-based conflict table cross-checking active prescriptions against known contraindication matrices.",
      },
      {
        name: "Adherence Tracking & Missed-Dose Alerts",
        status: "In Development",
        description: "Time-window verification checking dose confirmation logs and queuing reminders.",
      },
      {
        name: "LangGraph Safety Orchestration Graph",
        status: "In Development",
        description: "Multi-node state graph routing user queries through safety verification gates before generating output.",
      },
      {
        name: "Patient & Clinician Cross-Platform UI (Flutter)",
        status: "Planned",
        description: "Mobile client with high-contrast accessibility mode and dedicated caregiver oversight screens.",
      },
      {
        name: "Multilingual Communication Engine (Urdu / Pashto)",
        status: "Planned",
        description: "Verified localized translation pipeline for patient instructions with deterministic terminology safeguards.",
      },
    ],
    techStack: [
      "FastAPI (Implemented)",
      "PostgreSQL (Implemented)",
      "Pydantic Schemas (Implemented)",
      "Ollama Prompts (In Dev)",
      "RAG Search (In Dev)",
      "LangGraph (In Dev)",
    ],
    isRepoPublic: false,
    repoNotice: "Research prototype under active iteration. Architecture documentation available in portfolio.",
  },
  {
    id: "ai-loan-eligibility",
    title: "Loan Eligibility Analysis Concept",
    subtitle: "Coursework Machine Learning Study Outline",
    category: "Machine Learning",
    statusBadge: "Coursework Study Outline",
    isFlagship: false,
    shortDescription:
      "An academic study outline analyzing loan approval problem formulation, data preparation requirements, and evaluation concepts for classification models.",
    problemStatement:
      "Understanding data preprocessing steps and evaluation metrics required for automated credit risk assessment.",
    technicalApproach:
      "Explored problem formulation, feature considerations (income, credit history, loan amount), and theoretical classification approaches for tabular data.",
    techStack: ["Python", "Machine Learning Concepts", "Data Analysis"],
    githubUrl: "https://github.com/12hurricane/AI-lab-project",
    isRepoPublic: true,
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation Concept",
    subtitle: "Coursework Recommendation Study Outline",
    category: "Machine Learning",
    statusBadge: "Coursework Study Outline",
    isFlagship: false,
    shortDescription:
      "An academic study exploring the conceptual differences between content-based metadata matching and collaborative rating prediction for media discovery.",
    problemStatement:
      "Investigating algorithmic approaches for handling media catalog discovery and sparse user preferences.",
    technicalApproach:
      "Researched similarity metrics and metadata filtering concepts for ranking media recommendations.",
    techStack: ["Python", "Recommendation Concepts"],
    githubUrl: "https://github.com/12hurricane/movie-recommendation-",
    isRepoPublic: true,
  },
  {
    id: "flutter-contact-app",
    title: "Flutter Contact List Application",
    subtitle: "Basic Mobile Contact Viewer Prototype",
    category: "Mobile & Software",
    statusBadge: "Academic Mobile Prototype",
    isFlagship: false,
    shortDescription:
      "A basic Flutter application developed as coursework to display a list of contacts and add new entries using standard in-memory widget state.",
    problemStatement:
      "Exploring mobile UI layout and user input handling in Flutter for basic contact record entry.",
    technicalApproach:
      "Built with Flutter and Dart using stateful widgets to render a scrollable contact list and form inputs for adding new entries in memory.",
    techStack: ["Flutter", "Dart", "Mobile UI", "Widget State"],
    githubUrl: "https://github.com/12hurricane/flutter-lab-project",
    isRepoPublic: true,
  },
];

export const demonstratedSkills: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Dart", "C++", "JavaScript", "SQL", "HTML / CSS"],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "Computer Vision",
      "YOLO Object Detection",
      "OpenCV Pipeline",
      "Scikit-Learn",
      "Classification & Regression",
      "Feature Engineering & EDA",
    ],
  },
  {
    category: "Generative AI & LLM Engineering",
    skills: [
      "Ollama (Local LLM Inference)",
      "Structured JSON Extraction",
      "Prompt Architecture & Verification",
    ],
  },
  {
    category: "Backend Development",
    skills: [
      "FastAPI",
      "Python Async / Asyncio",
      "RESTful API Architecture",
      "PostgreSQL & Relational Schemas",
      "Deterministic Safety Rules",
      "Firebase (Classic Hosting)",
    ],
  },
  {
    category: "Mobile Development",
    skills: [
      "Flutter",
      "Dart Architecture",
      "Mobile Client State Management",
      "Android App Development",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git & GitHub",
      "Linux CLI & Bash",
      "VS Code",
      "Postman / Thunder Client",
      "Firebase CLI",
    ],
  },
];

export const exploringSkills: { title: string; description: string; currentFocus: string }[] = [
  {
    title: "Retrieval-Augmented Generation (RAG) & Vector Indexing",
    description: "Architecting semantic retrieval pipelines with dense vector embeddings, chunking trade-offs, and hybrid keyword-vector search for domain-specific reference queries.",
    currentFocus: "Evaluating offline embedding models and semantic retrieval accuracy for MediAssist drug reference lookups.",
  },
  {
    title: "LangGraph State Workflows & Multi-Agent Graphs",
    description: "Designing cyclic state machines where LLM outputs are deterministically routed through validation gates and error recovery loops.",
    currentFocus: "Prototyping state transitions and safety guardrail nodes in Python.",
  },
  {
    title: "Mobile Offline Persistence (SQLite)",
    description: "Implementing local relational storage, schema migrations, and reactive offline-first repositories in Flutter mobile applications.",
    currentFocus: "Benchmarking sqflite integrations and offline data synchronization patterns.",
  },
  {
    title: "Containerization & Docker",
    description: "Packaging Python FastAPI microservices and AI model dependencies into lightweight, reproducible container images.",
    currentFocus: "Authoring multi-stage Docker builds optimized for Python and edge computer vision packages.",
  },
  {
    title: "Multi-Agent Systems",
    description: "Designing coordinated agent networks where specialized subagents negotiate, verify, and execute complex interdependent tasks.",
    currentFocus: "Studying state graphs, consensus protocols, and inter-agent communication channels.",
  },
  {
    title: "Distributed AI Systems",
    description: "Scaling AI workloads across cluster nodes, handling partitioned inference, and parallelizing data processing pipelines.",
    currentFocus: "Investigating distributed queuing, asynchronous worker topologies, and low-latency IPC.",
  },
  {
    title: "Microservices Architecture",
    description: "Decoupling AI model services from business logic, user auth, and persistent state using resilient RPC and event buses.",
    currentFocus: "Building modular API gateways and containerized microservice boundaries.",
  },
  {
    title: "MLOps & Continuous AI Deployment",
    description: "Automating model evaluation gates, tracking dataset drift, and managing deployment pipelines for local and cloud models.",
    currentFocus: "Configuring automated test suites and model evaluation checkpoints.",
  },
  {
    title: "Cyber-Physical Systems & IoT AI",
    description: "Connecting edge vision and sensor hardware (ESP32, IMUs) with real-time inference pipelines in assistive hardware.",
    currentFocus: "Benchmarking embedded sensor data throughput and low-power telemetry.",
  },
  {
    title: "AI Safety & Deterministic Verification",
    description: "Ensuring AI-powered software isolates critical business and clinical decisions inside formal, rule-based verification bounds.",
    currentFocus: "Designing deterministic boundary layers between stochastic LLM output and persistent state.",
  },
  {
    title: "Computer Vision & Edge Perception",
    description: "Advancing real-time object tracking, spatial depth heuristics, and low-latency feature extraction on constrained hardware.",
    currentFocus: "Optimizing YOLO models for edge inference speed on mobile devices.",
  },
  {
    title: "Agentic AI & Tool Synthesis",
    description: "Building systems where LLMs autonomously select and execute external tools while adhering to strict permission schemas.",
    currentFocus: "Experimenting with tool calling error-handling and autonomous recovery loops.",
  },
];

export const blogDrafts: ArticleDraft[] = [
  {
    id: "rag-from-documents-to-answers",
    title: "Understanding Retrieval-Augmented Generation: From Documents to Intelligent Answers",
    synopsis:
      "A deep dive into why pure LLM generation fails in domain-specific workflows and how to architect reliable chunking, vector indexing, and hybrid retrieval systems.",
    keyThemes: ["RAG Architecture", "Vector Embeddings", "Chunking Strategies", "Local Search"],
    estimatedReadingTime: "8 min read",
    status: "Draft Outline",
    coreEngineeringQuestions: [
      "How do document chunk size and overlap impact semantic retrieval accuracy?",
      "Why is hybrid search (dense embeddings + sparse BM25) superior for domain terminology?",
      "What are the latency bottlenecks when running RAG pipelines completely offline?",
    ],
  },
  {
    id: "reliable-ai-local-llms",
    title: "Building Reliable AI Applications with Local LLMs",
    synopsis:
      "Practical engineering considerations for running models via Ollama and Hugging Face on local workstations: memory footprints, quantization, and reproducible JSON outputs.",
    keyThemes: ["Local LLMs", "Ollama", "Quantization (GGUF)", "Hardware Optimization"],
    estimatedReadingTime: "10 min read",
    status: "Draft Outline",
    coreEngineeringQuestions: [
      "How does 4-bit vs 8-bit quantization degrade reasoning capabilities in coding and structured output tasks?",
      "Strategies for maintaining predictable structured JSON generation without external cloud APIs.",
      "Managing GPU VRAM constraints when serving multiple concurrent requests locally.",
    ],
  },
  {
    id: "agents-vs-traditional-software",
    title: "AI Agents vs Traditional Software Workflows: Finding the Boundary",
    synopsis:
      "Analyzing where autonomous agentic decision loops genuinely add value versus where traditional deterministic code, state machines, and CRUD logic remain superior.",
    keyThemes: ["Agentic AI", "Software Architecture", "State Machines", "Engineering Trade-offs"],
    estimatedReadingTime: "7 min read",
    status: "Draft Outline",
    coreEngineeringQuestions: [
      "When does adding an LLM agent introduce unnecessary non-determinism into predictable software systems?",
      "How can state machines constrain agent actions to ensure valid state transitions?",
      "Cost-benefit analysis of agentic autonomous planning vs parameterized deterministic algorithms.",
    ],
  },
  {
    id: "deterministic-logic-in-ai-safety",
    title: "Why Deterministic Logic Matters in AI Safety and Medical Software",
    synopsis:
      "Drawing from architectural decisions in MediAssist: why medical dosage calculations, adherence checks, and safety barriers must never be delegated to stochastic language models.",
    keyThemes: ["AI Safety", "Healthcare Software", "Deterministic Systems", "Risk Mitigation"],
    estimatedReadingTime: "9 min read",
    status: "Draft Outline",
    coreEngineeringQuestions: [
      "How to design an architectural sandbox that prevents LLM hallucinations from touching clinical database fields?",
      "Implementing deterministic verification wrappers around stochastic model outputs.",
      "Regulatory and engineering requirements for AI-assisted healthcare applications.",
    ],
  },
  {
    id: "ai-apps-flutter-fastapi",
    title: "Building AI-Powered Applications with Flutter and FastAPI",
    synopsis:
      "A complete guide to coupling a reactive cross-platform mobile frontend with high-throughput asynchronous Python microservices for streaming AI responses.",
    keyThemes: ["Flutter", "FastAPI", "Async Python", "Streaming SSE", "Mobile AI"],
    estimatedReadingTime: "11 min read",
    status: "Draft Outline",
    coreEngineeringQuestions: [
      "How to stream token-by-token responses from FastAPI to a Flutter client via Server-Sent Events (SSE)?",
      "Handling network interruptions and partial model output recovery on mobile connections.",
      "Structuring clean API response schemas to power reactive mobile UI widgets.",
    ],
  },
  {
    id: "exploring-multi-agent-systems",
    title: "Exploring Multi-Agent Systems: Architecture, Communication, and Orchestration",
    synopsis:
      "Examining patterns for multi-agent coordination using LangGraph: supervisor patterns, peer-to-peer negotiation, and avoiding infinite agent loops.",
    keyThemes: ["Multi-Agent Systems", "LangGraph", "Message Passing", "Orchestration"],
    estimatedReadingTime: "12 min read",
    status: "Draft Outline",
    coreEngineeringQuestions: [
      "What communication topologies prevent message explosions in decentralized multi-agent setups?",
      "How to implement timeout, circuit-breaker, and human-in-the-loop escape hatches in recursive agent graphs?",
      "Evaluating agent collaboration efficiency vs single prompt chain execution.",
    ],
  },
  {
    id: "deploying-llm-applications",
    title: "Practical Challenges in Deploying LLM Applications",
    synopsis:
      "Real-world lessons on API rate limits, latency management, semantic caching, token cost accounting, and monitoring model degradation in production.",
    keyThemes: ["Production AI", "Latency Optimization", "Semantic Caching", "API Resilience"],
    estimatedReadingTime: "8 min read",
    status: "Draft Outline",
    coreEngineeringQuestions: [
      "How does Redis-based semantic caching reduce repetitive LLM inference costs and latency?",
      "Implementing backoff, jitter, and graceful degradation when upstream inference providers throttle requests.",
      "Logging telemetry for hallucinations and retrieval failures without compromising user privacy.",
    ],
  },
];
