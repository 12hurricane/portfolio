const fs = require("fs");
const path = require("path");

function generateResume() {
  const contentStream = `
0.2 0.25 0.28 rg
45 745 522 1.5 re f
0 0 0 rg

BT
/F2 19 Tf
45 754 Td
(TARIQ KHATTAK) Tj
ET

BT
/F2 9.5 Tf
0.21 0.71 0.65 rg
45 730 Td
(AI ENGINEER  |  GENERATIVE AI  |  LLM APPLICATIONS) Tj
0 0 0 rg
/F1 8.5 Tf
0.3 0.35 0.38 rg
45 718 Td
(Peshawar, Pakistan   |   Email: tariqjm143@gmail.com   |   LinkedIn: in/tariq-khattak-43b923257   |   GitHub: github.com/12hurricane) Tj
0 0 0 rg
ET

0.8 0.82 0.85 rg
45 708 522 0.75 re f
0 0 0 rg

BT
/F2 10 Tf
0.1 0.15 0.18 rg
45 693 Td
(PROFESSIONAL SUMMARY) Tj
0 0 0 rg
/F1 8.5 Tf
0.2 0.25 0.28 rg
45 680 Td
(Undergraduate Software Engineering student and AI Engineer Intern focused on developing practical, reliable AI-powered) Tj
45 669 Td
(applications using Python, machine learning, large language models, and modern backend architectures. Dedicated to building) Tj
45 658 Td
(verifiable systems with deterministic safety constraints, structured retrieval (RAG), and scalable agentic workflows.) Tj
ET

0.8 0.82 0.85 rg
45 647 522 0.75 re f
0 0 0 rg

BT
/F2 10 Tf
0.1 0.15 0.18 rg
45 632 Td
(EDUCATION) Tj
0 0 0 rg
/F2 9 Tf
45 619 Td
(Bachelor of Science in Software Engineering) Tj
/F3 8.5 Tf
0.3 0.35 0.38 rg
45 608 Td
(CECOS University, Peshawar, Pakistan   |   Expected Graduation: 2027   |   Status: Undergraduate Student) Tj
/F1 8.2 Tf
0.25 0.28 0.30 rg
45 596 Td
(Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems,) Tj
45 586 Td
(Software Engineering Methodologies, Artificial Intelligence Fundamentals, Operating Systems & Networks.) Tj
ET

0.8 0.82 0.85 rg
45 575 522 0.75 re f
0 0 0 rg

BT
/F2 10 Tf
0.1 0.15 0.18 rg
45 560 Td
(PROFESSIONAL EXPERIENCE) Tj
0 0 0 rg
/F2 9 Tf
45 547 Td
(AI Engineer Intern) Tj
/F3 8.5 Tf
0.3 0.35 0.38 rg
145 547 Td
(-- TechCitySoft  \(Remote / Pakistan\)) Tj
415 547 Td
([Active Internship]) Tj
/F1 8.2 Tf
0.2 0.25 0.28 rg
45 534 Td
(- Developing and integrating practical AI application components, LLM-based processing pipelines, and backend APIs.) Tj
45 523 Td
(- Designing modular software components using Python, FastAPI, and asynchronous backend services.) Tj
45 512 Td
(- Implementing deterministic validation boundaries and safety checks to ensure reliable, non-hallucinatory AI execution.) Tj
45 501 Td
(- Testing, profiling, and documenting intelligent system workflows and data persistence schemas.) Tj
ET

0.8 0.82 0.85 rg
45 490 522 0.75 re f
0 0 0 rg

BT
/F2 10 Tf
0.1 0.15 0.18 rg
45 475 Td
(TECHNICAL PROJECTS) Tj
0 0 0 rg
/F2 8.8 Tf
45 462 Td
(SafeSight-AI: Smart Glasses for Visually Impaired Persons) Tj
/F3 8 Tf
0.3 0.35 0.38 rg
330 462 Td
([Final Year Project / Prototype Development]) Tj
/F1 8.2 Tf
0.2 0.25 0.28 rg
45 450 Td
(- Assistive vision system leveraging camera-based environmental perception and directional audio feedback alerts.) Tj
45 440 Td
(- Implemented lightweight YOLO-based object detection and spatial classification on video streams and camera frames.) Tj
45 430 Td
(- Developing controlled distance estimation heuristics; offloading inference to smartphone to optimize wearable thermal budget.) Tj
45 420 Td
(- Hardware design in progress: ESP32 spectacle frame integration and inertial measurement unit (IMU) orientation sensing.) Tj

/F2 8.8 Tf
0 0 0 rg
45 405 Td
(MediAssist: AI-Assisted Medication Management System) Tj
/F3 8 Tf
0.3 0.35 0.38 rg
330 405 Td
([Research Prototype / Development]) Tj
/F1 8.2 Tf
0.2 0.25 0.28 rg
45 393 Td
(- AI-assisted healthcare application organizing prescriptions, medication intake schedules, adherence logs, and alerts.) Tj
45 383 Td
(- Engineered deterministic scheduling math engine to isolate clinical dosage safety from stochastic LLM generation.) Tj
45 373 Td
(- Developed asynchronous RESTful backend endpoints in FastAPI backed by structured PostgreSQL relational persistence.) Tj
45 363 Td
(- Integrating RAG retrieval across verified pharmaceutical documents for conversational patient query answering.) Tj

/F2 8.8 Tf
0 0 0 rg
45 346 Td
(Machine Learning & Software Engineering Lab Projects) Tj
/F3 8 Tf
0.3 0.35 0.38 rg
330 346 Td
([Academic Repositories]) Tj
/F1 8.2 Tf
0.2 0.25 0.28 rg
45 334 Td
(- AI Loan Eligibility Prediction: Exploratory data analysis, feature engineering, and classification models (github.com/12hurricane/AI-lab-project).) Tj
45 324 Td
(- Movie Recommendation System: Content-based and collaborative filtering recommendation engine (github.com/12hurricane/movie-recommendation-).) Tj
45 314 Td
(- Flutter Contact Management App: Clean architecture mobile contact manager with local storage (github.com/12hurricane/flutter-lab-project).) Tj
ET

0.8 0.82 0.85 rg
45 303 522 0.75 re f
0 0 0 rg

BT
/F2 10 Tf
0.1 0.15 0.18 rg
45 288 Td
(TECHNICAL SKILLS) Tj
0 0 0 rg
/F2 8.2 Tf
45 275 Td
(Programming Languages:) Tj
/F1 8.2 Tf
0.2 0.25 0.28 rg
160 275 Td
(Python, Dart, C++, JavaScript, HTML, CSS) Tj
0 0 0 rg
/F2 8.2 Tf
45 263 Td
(AI & Machine Learning:) Tj
/F1 8.2 Tf
0.2 0.25 0.28 rg
160 263 Td
(Generative AI, Large Language Models (LLMs), RAG, Machine Learning, Prompt Engineering,) Tj
160 253 Td
(AI Application Architecture, Agentic AI, Ollama (Local LLMs), OpenAI API, Vector Embeddings) Tj
0 0 0 rg
/F2 8.2 Tf
45 241 Td
(Backend & Database:) Tj
/F1 8.2 Tf
0.2 0.25 0.28 rg
160 241 Td
(FastAPI, Django, Django Channels (WebSockets), RESTful API Design, PostgreSQL, Firebase) Tj
0 0 0 rg
/F2 8.2 Tf
45 229 Td
(Mobile Development:) Tj
/F1 8.2 Tf
0.2 0.25 0.28 rg
160 229 Td
(Flutter, Dart, Android Application Development, Reactive State Management) Tj
0 0 0 rg
/F2 8.2 Tf
45 217 Td
(Development & Tools:) Tj
/F1 8.2 Tf
0.2 0.25 0.28 rg
160 217 Td
(Git, GitHub, VS Code, Docker (Containerization), Linux CLI) Tj
0 0 0 rg
/F2 8.2 Tf
45 205 Td
(Specialization Areas:) Tj
/F1 8.2 Tf
0.2 0.25 0.28 rg
160 205 Td
(Agentic AI, Multi-Agent Systems, MLOps, Distributed Systems, AI Safety & Verification) Tj
ET

0.8 0.82 0.85 rg
45 190 522 0.75 re f
0 0 0 rg

BT
/F3 7.8 Tf
0.4 0.45 0.48 rg
45 175 Td
(Note: All information reflects verified academic standing at CECOS University and active engineering internship at TechCitySoft.) Tj
45 165 Td
(Portfolio & Live Systems: tariqkhattak.dev   |   GitHub: github.com/12hurricane) Tj
ET
`;

  const streamBuf = Buffer.from(contentStream.trim(), "utf-8");

  let output = "%PDF-1.4\n";
  const offsets = [];

  function writeObj(id, str) {
    offsets[id] = Buffer.byteLength(output, "utf8");
    output += id + " 0 obj\n" + str + "\nendobj\n";
  }

  writeObj(1, "<< /Type /Catalog /Pages 2 0 R >>");
  writeObj(2, "<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  writeObj(3, "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R /F3 6 0 R >> >> /Contents 7 0 R >>");
  writeObj(4, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  writeObj(5, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  writeObj(6, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>");
  writeObj(7, "<< /Length " + streamBuf.length + " >>\nstream\n" + contentStream.trim() + "\nendstream");

  const xrefOffset = Buffer.byteLength(output, "utf8");
  output += "xref\n0 8\n0000000000 65535 f \n";
  for (let i = 1; i <= 7; i++) {
    output += String(offsets[i]).padStart(10, "0") + " 00000 n \n";
  }
  output += "trailer\n<< /Size 8 /Root 1 0 R >>\nstartxref\n" + xrefOffset + "\n%%EOF\n";

  const targetPath = path.join(__dirname, "..", "public", "resume-tariq-khattak.pdf");
  fs.writeFileSync(targetPath, output, "utf8");
  console.log("Successfully generated:", targetPath, "Size:", Buffer.byteLength(output, "utf8"), "bytes");
}

generateResume();
