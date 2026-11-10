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
  skills: {
    name: string;
    level: "Core" | "Proficient" | "Working Knowledge" | "Exploring";
  }[];
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
  title: "AI Engineer Intern · Undergraduate Student",
  headline: "Building intelligent applications with Python, computer vision, and backend engineering.",
  supportingDescription:
    "Software Engineering undergraduate at CECOS University and AI Engineer Intern at TechCitySoft. I work with Python, Generative AI, computer vision, and backend engineering to build practical software systems.",
  location: "Peshawar, Khyber Pakhtunkhwa, Pakistan",
  email: "tariqjm143@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/tariq-khattak-43b923257/",
  gitHubUrl: "https://github.com/12hurricane",
  aboutBio: [
    "I am a Software Engineering undergraduate at CECOS University and an AI Engineer Intern at TechCitySoft, focused on building practical, reliable software applications with Python, Generative AI, and computer vision.",
    "My hands-on development is focused on practical software systems: SafeSight-AI, an assistive vision prototype exploring computer vision for real-time obstacle awareness, and MediAssist, a medication management system applying language models for symptom extraction paired with deterministic rule checking for dosage limits.",
    "I prioritize clean backend architectures, reliable data flows, and honest, verifiable engineering over unsubstantiated claims.",
  ],
  focusAreas: [
    {
      title: "AI Application Engineering",
      description: "Developing robust, production-grade applications that integrate intelligent models with clean backend services.",
      icon: "Cpu",
    },
    {
      title: "LLM Integration & RAG",
      description: "Connecting local and cloud LLMs with vector search, embeddings, and structured retrieval pipelines.",
      icon: "Database",
    },
    {
      title: "Intelligent Agents",
      description: "Exploring agentic workflows, multi-step tool use, and orchestration with frameworks like LangGraph.",
      icon: "Workflow",
    },
    {
      title: "Backend Systems",
      description: "Building scalable APIs with FastAPI, Django, PostgreSQL, and asynchronous communication protocols.",
      icon: "Server",
    },
    {
      title: "AI Deployment & Optimization",
      description: "Running local LLMs with Ollama, Docker containerization, and optimizing inference for constrained devices.",
      icon: "Terminal",
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
  location: "Pakistan",
  arrangement: "Remote / Pakistan",
  status: "Active Internship",
  summary:
    "Working on AI engineering tasks involving the development and integration of intelligent application components, AI safety architecture, and practical AI-powered software solutions.",
  responsibilities: [
    "Developing practical AI-powered application features and workflows.",
    "Designing and implementing modular AI-related software components.",
    "Integrating LLM-based processing pipelines with backend application logic.",
    "Building and connecting RESTful APIs using Python backend frameworks.",
    "Evaluating AI safety, deterministic validation, and reliability considerations.",
    "Testing, profiling, and documenting intelligent system components.",
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
        description: "Lightweight computer vision model identifying common obstacles on live camera feeds and benchmark video clips.",
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
      "Computer Vision",
      "YOLO Object Detection",
      "Flutter / Android",
      "ESP32 & Sensors",
      "Edge AI",
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
      "MediAssist bridges patient usability with clinical rigor. It uses local LLMs and RAG strictly for document retrieval and plain-language explanation, while isolating all dosage math, schedule validation, and drug interaction verification inside deterministic, rule-based algorithmic safety checks.",
    safetyArchitectureNote:
      "Strict Clinical Safety Constraint: Medication calculations, dosage bounds, and interaction warnings are computed exclusively via deterministic, rule-based logic. LLMs are strictly quarantined to plain-language summarization and cannot alter prescription parameters or override clinical rules.",
    components: [
      {
        name: "Prescription Parsing & Extraction (Regex / LLM Schema)",
        status: "Implemented",
        description: "Structured extraction of medication names, frequency, and dosage instructions from digital inputs.",
      },
      {
        name: "Deterministic Medication Scheduling Engine",
        status: "Implemented",
        description: "Deterministic math engine calculating intake timestamps with zero non-deterministic hallucination risk.",
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
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Flutter",
      "LangGraph",
      "Local LLMs",
      "RAG & Vectors",
    ],
    isRepoPublic: false,
    repoNotice: "Research prototype under active iteration. Architecture documentation available in portfolio.",
  },
  {
    id: "requirements-traceability",
    title: "Requirements-to-Test Traceability System",
    subtitle: "AI-Assisted Software Requirements Engineering",
    category: "AI & LLM",
    statusBadge: "Project Development / Research",
    isFlagship: false,
    shortDescription:
      "An AI-assisted system exploring the automation of software requirements analysis, acceptance criteria generation, test-case generation, and requirements-to-test traceability.",
    problemStatement:
      "Software projects suffer from requirements drift where user stories, acceptance criteria, and unit test suites become disconnected, resulting in orphaned code paths and unverified edge cases.",
    technicalApproach:
      "Applies specialized LLM agents to decompose natural language user stories into Gherkin-style acceptance criteria and structured test case schemas, generating a bidirectional traceability matrix with human-in-the-loop review.",
    safetyArchitectureNote:
      "AI outputs serve as drafts for QA engineers; system enforces human-in-the-loop sign-off before committing test definitions to requirements repositories.",
    components: [
      {
        name: "Requirements Analyzer & Decomposer",
        status: "Implemented",
        description: "Parses functional specification documents and extracts atomic requirement statements.",
      },
      {
        name: "Acceptance Criteria Synthesis",
        status: "In Development",
        description: "Generates structured Given-When-Then criteria mapped to requirement IDs.",
      },
      {
        name: "Test Case Generation Pipeline",
        status: "In Development",
        description: "Produces test step outlines and verification checkpoints for each criterion.",
      },
      {
        name: "Traceability Matrix Mapping Engine",
        status: "In Development",
        description: "Computes links between requirements, tests, and source code files.",
      },
      {
        name: "Orphan & Impact Analysis Engine",
        status: "Planned",
        description: "Detects untested requirements and identifies test suites invalidated by requirement updates.",
      },
    ],
    techStack: ["Python", "LLMs", "AI Agents", "Backend APIs", "SQL", "LangChain"],
    isRepoPublic: false,
    repoNotice: "Research prototype exploring automated software engineering workflows.",
  },
  {
    id: "ai-loan-eligibility",
    title: "AI Loan Eligibility Prediction",
    subtitle: "Academic Machine Learning Classification",
    category: "Machine Learning",
    statusBadge: "Academic ML Project",
    isFlagship: false,
    shortDescription:
      "An academic machine learning project exploring loan eligibility prediction using structured financial data, exploratory data analysis, and classification algorithms.",
    problemStatement:
      "Automating financial risk assessment while understanding model feature importance and classification reliability across demographic and economic attributes.",
    technicalApproach:
      "Conducted extensive data cleaning, missing value imputation, categorical encoding, and feature scaling, followed by training and evaluating Logistic Regression, Decision Trees, and Random Forests.",
    techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/12hurricane/AI-lab-project",
    isRepoPublic: true,
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation System",
    subtitle: "Collaborative & Content-Based Recommendation",
    category: "Machine Learning",
    statusBadge: "Academic ML Project",
    isFlagship: false,
    shortDescription:
      "A recommendation system project exploring how user preference vectors and movie metadata can be utilized to generate personalized movie recommendations.",
    problemStatement:
      "Addressing the information overload problem in entertainment streaming by matching sparse user preference profiles to relevant media catalogs.",
    technicalApproach:
      "Implemented content-based filtering using TF-IDF / vector similarity on movie metadata and collaborative filtering algorithms to predict user ratings.",
    techStack: ["Python", "Machine Learning", "Recommendation Systems", "Cosine Similarity", "Pandas"],
    githubUrl: "https://github.com/12hurricane/movie-recommendation-",
    isRepoPublic: true,
  },
  {
    id: "flutter-contact-app",
    title: "Flutter Contact Management Application",
    subtitle: "Cross-Platform Mobile Application",
    category: "Mobile & Software",
    statusBadge: "Academic Mobile Project",
    isFlagship: false,
    shortDescription:
      "A Flutter-based mobile application demonstrating clean state management, responsive UI design, local persistence, and structured contact management functionality.",
    problemStatement:
      "Building a performant, cross-platform mobile interface with seamless offline persistence, fast search indexing, and intuitive CRUD workflows.",
    technicalApproach:
      "Built with Flutter and Dart utilizing clean state management architectures, reactive UI widgets, and local data persistence.",
    techStack: ["Flutter", "Dart", "Mobile Development", "SQLite / Local Storage", "Clean Architecture"],
    githubUrl: "https://github.com/12hurricane/flutter-lab-project",
    isRepoPublic: true,
  },
];

export const demonstratedSkills: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: "Core" },
      { name: "Dart", level: "Proficient" },
      { name: "C++", level: "Proficient" },
      { name: "JavaScript", level: "Working Knowledge" },
      { name: "HTML / CSS", level: "Proficient" },
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Generative AI & LLMs", level: "Core" },
      { name: "Machine Learning Fundamentals", level: "Proficient" },
      { name: "Retrieval-Augmented Generation (RAG)", level: "Core" },
      { name: "Prompt Engineering & Evaluation", level: "Proficient" },
      { name: "AI Application Architecture", level: "Core" },
      { name: "Agentic AI Concepts", level: "Working Knowledge" },
    ],
  },
  {
    category: "LLM Technologies & Frameworks",
    skills: [
      { name: "OpenAI API", level: "Core" },
      { name: "Hugging Face Models", level: "Proficient" },
      { name: "Ollama (Local LLMs)", level: "Core" },
      { name: "LangGraph Orchestration", level: "Working Knowledge" },
      { name: "Embeddings & Vector Search", level: "Proficient" },
      { name: "Local LLM Deployment", level: "Proficient" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "FastAPI", level: "Core" },
      { name: "Django", level: "Proficient" },
      { name: "Django Channels (WebSockets)", level: "Working Knowledge" },
      { name: "RESTful API Design", level: "Core" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "Firebase", level: "Working Knowledge" },
    ],
  },
  {
    category: "Mobile Development",
    skills: [
      { name: "Flutter", level: "Core" },
      { name: "Dart", level: "Core" },
      { name: "Android Application Development", level: "Proficient" },
      { name: "Cross-Platform State Management", level: "Proficient" },
    ],
  },
  {
    category: "Development Tools & Environment",
    skills: [
      { name: "Git & GitHub", level: "Core" },
      { name: "VS Code", level: "Core" },
      { name: "Docker (Containerization)", level: "Working Knowledge" },
      { name: "Linux CLI", level: "Proficient" },
    ],
  },
];

export const exploringSkills: { title: string; description: string; currentFocus: string }[] = [
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
