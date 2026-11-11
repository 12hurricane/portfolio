# Tariq Khattak — Personal AI Engineer Portfolio

A modern, professional, minimal, and fully responsive personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 🎨 Design System & Theme

- **Primary Background**: `#171C20` (Deep charcoal)
- **Secondary Background**: `#20282D` (Section surface contrast)
- **Card Background**: `#252F34` (Elevated components)
- **Primary Accent**: `#35B6A5` (Teal)
- **Secondary Accent**: `#75C9BB` (Light teal)
- **Text Primary**: `#F1F5F4` (Crisp off-white)
- **Text Secondary**: `#A8B5B2` (Readable muted slate)
- **Borders**: `#354147` (Subtle dark border)
- **Typography**: Space Grotesk (headings) and Inter (body)

---

## 🚀 Key Highlights & Architectural Rigor

1. **Authentic Presentation & Zero Hype**:
   - Accurately positioned as an **AI Engineer Intern** at **TechCitySoft** and undergraduate Software Engineering student at **CECOS University, Peshawar** (Expected 2027).
   - Zero fabricated metrics, no fake years of experience, and no unearned "Senior Architect" labels.

2. **Featured Project Spotlight with Real Component Statuses**:
   - **SafeSight-AI** (Smart Glasses for Visually Impaired, FYP/Prototype):
     - Camera perception & object detection (`Implemented`)
     - Controlled distance estimation & audio alerts (`In Development`)
     - ESP32 hardware frame & IMU integration (`Planned`)
     - Safety note: Controlled evaluation; not claimed for autonomous navigation.
   - **MediAssist** (AI Medication Management System, Research Prototype):
     - Prescription parsing & scheduling logic (`Implemented`)
     - FastAPI backend & PostgreSQL persistence (`Implemented`)
     - RAG retrieval, drug interaction checker, clinician interface (`In Development`)
     - Multilingual support (`Planned`)
     - Strict safety constraint: Clinical math & interactions are handled exclusively by deterministic rule engines, completely isolating patient safety from stochastic LLM generation.
   - **Verified GitHub Projects**:
     - `AI-lab-project` -> Loan eligibility ML classification
     - `movie-recommendation-` -> Content/collaborative recommendation engine
     - `flutter-lab-project` -> Contact management mobile application

3. **Demonstrated vs. Exploring Technical Skills**:
   - **Demonstrated Skills** categorized across Languages, AI/ML, LLM Tech, Backend, Mobile, and Tools with realistic tiers (`Core`, `Proficient`, `Working Knowledge`).
   - **Currently Exploring** tab highlighting forward-looking research in Multi-Agent Systems, MLOps, Distributed Systems, and Formal AI Safety.

4. **Transparent Contact & Communication**:
   - Direct email (`tariqjm143@gmail.com`) with 1-click copy feedback.
   - Message composer with client validation that launches `mailto:` or copies formatted text to clipboard without pretending to be a faux backend delivery.

---

## 🛠️ Getting Started & Commands

```bash
# Run development server
npm run dev

# Run TypeScript type check
npx tsc --noEmit

# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Theme custom variables, custom scrollbar, dot grid
│   │   ├── icon.svg             # Clean vector favicon
│   │   ├── layout.tsx           # SEO metadata, OpenGraph, JSON-LD schema, Inter/Space Grotesk
│   │   └── page.tsx             # Composed portfolio page
│   ├── components/
│   │   ├── Navbar.tsx           # Responsive header with mobile toggle & accessible controls
│   │   ├── Hero.tsx             # Headline, title, avatar badge, verified social channels
│   │   ├── About.tsx            # Full narrative, 5 core focus pillars, safety philosophy
│   │   ├── ExperienceEducation.tsx # Dual timeline: TechCitySoft internship & CECOS University
│   │   ├── Projects.tsx         # Spotlight cards, real architecture statuses, category filter
│   │   ├── Skills.tsx           # Demonstrated vs. Exploring tabs & technology search
│   │   ├── Interests.tsx        # 8 research & specialization domains
│   │   ├── Blog.tsx             # 7 planned technical draft outlines with core questions
│   │   ├── Contact.tsx          # Direct channels, validated composer, mailto/clipboard actions
│   │   └── Footer.tsx           # Dynamic current year, credits, back-to-top button
│   └── data/
│       └── portfolioData.ts     # Centralized configuration for all portfolio content
├── public/
│   └── resume-tariq-khattak.pdf # Valid resume PDF
├── package.json                 # Next.js 14.2, React 18.3, TypeScript 5, Tailwind CSS
├── tailwind.config.ts           # Custom charcoal & teal color tokens
└── tsconfig.json                # Strict TypeScript configuration
```

---

## 📝 Updating Portfolio Content

All personal details, projects, skills, education, and articles are centralized in [`src/data/portfolioData.ts`](file:///d:/portfolio/src/data/portfolioData.ts). You can update your bio, add new repository URLs, or publish new project components by editing this single file.
