<div align="center">

# 🎓 Skill Bridge Lanka

### Connecting learning, skill assessment, and career development

**An education and career-development platform prototype designed to help learners understand their skills, discover areas for improvement, and explore pathways toward professional growth.**

![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Prototype%20%2F%20In%20Development-0EA5E9)

</div>

---

## 📖 Overview

**Skill Bridge Lanka** explores a unified learning and career-support experience. The project brings together a public-facing learning website, a web-development skill assessment interface, and a planned suite of backend services for profiles, assessments, career guidance, learning recommendations, and job-market information.

The aim is to help learners move from **identifying their current skill level** toward **planning what to learn next**. The current repository contains an interactive React frontend prototype and architecture/configuration notes for proposed backend services.

> **Project status:** The homepage, assessment level-selection interface, and a multiple-choice quiz with results and retry are implemented in the frontend. Several wider platform capabilities shown in the marketing interface or backend notes are **planned concepts**, not verified end-to-end functionality.

## 🎯 The Problem

People exploring IT careers often face fragmented resources for evaluating their existing skills, finding appropriate learning materials, and understanding possible career paths. Skill Bridge Lanka is intended to connect these steps in one platform:

1. **Assess** foundational skills and identify knowledge gaps.
2. **Learn** using resources appropriate to the learner's level.
3. **Explore** career guidance and job-market information.
4. **Track** progress over time as skills develop.

The first step—an interactive assessment experience—is represented in the current frontend.

## ✨ Current Functionality

| Feature | What it does | Status |
|---|---|---|
| Home page | Introduces the platform, its learning theme, and value proposition | Implemented UI |
| Responsive navigation | Provides a navigation bar and mobile menu | Implemented UI |
| Features overview | Presents skill analysis, mentoring, certification, flexible learning, projects, and counseling as platform goals | Implemented marketing UI |
| Assessment level selection | Displays Beginner, Intermediate, and Advanced levels and navigates to the quiz screen | Implemented UI |
| Multiple-choice assessment | Lets users select an answer and advance through a set of questions | Implemented frontend |
| Assessment progress | Displays question count and a progress indicator | Implemented frontend |
| Score and retry | Shows a final score and allows the user to retake the quiz | Implemented frontend |
| Accounts, personalized recommendations, and job tracking | Envisioned for the wider platform | Not verified in the current branch |

### 🧠 Skill Assessment Walkthrough

The assessment experience uses these routes:

`/` → Home page  
`/assessment` → Level selection  
`/assessment/quiz` → Interactive quiz

The level-selection screen offers:

| Level | Displayed question count | Intended audience |
|---|---:|---|
| Beginner | 10 | Learners starting with web-development basics |
| Intermediate | 15 | Learners assessing practical understanding |
| Advanced | 20 | Learners exploring more challenging concepts |

**Implementation detail:** These counts are currently shown on the selection cards. The quiz component itself uses a shared, hard-coded set of **five web-development questions** for all levels. It does not yet load distinct question banks for each difficulty.

The current question set covers introductory HTML, CSS, JavaScript, accessibility, and React concepts. Answer selection, score calculation, a completion screen, and a retry action are handled locally in React state; the repository does not demonstrate score persistence.

## 🧭 Planned Platform Modules

The backend configuration document defines a potential modular service layout. The following modules describe the **planned platform scope**, not confirmed operational APIs.

| Module | Intended responsibility | Documented local port |
|---|---|---:|
| User Registration & Profile Management | User accounts and learner profiles | 8081 |
| Skill Assessment System | Assessment data, questions, and results | 8082 |
| Premium IT Career Counselling Service | Career guidance and counselling | 8083 |
| Learning Resource Suggestions | Recommendations for learning resources | 8084 |
| Job Market Information & Progress Tracking | Career-market information and learner progress | 8085 |

The backend notes propose using **Spring Boot** and **separate MySQL databases** for these services. They contain configuration guidance, including a sample datasource setup; the checked repository's `Backend/` folder currently contains those notes rather than the services' source implementations.

## 🛠️ Technology Stack

### Present in the frontend

- **React 19** — component-based user interfaces
- **JavaScript / JSX** — application logic and components
- **Vite 7** — development server and frontend build tool
- **React Router 7** — client-side routing
- **Lucide React** — icon system
- **CSS** — component styling, layout, responsive presentation, and custom design tokens
- **ESLint** — JavaScript and React linting

### Documented backend direction

- **Spring Boot / Java** — proposed backend services
- **MySQL** — proposed separate service databases

The backend technologies above are described in the project notes; their runnable implementations have not been verified in the reviewed branch.

## 🏗️ Project Structure

```text
Skill-Bridge-Lanka-/
├── Backend/
│   └── Backend_Ports.md             # Planned backend services and port/database notes
├── Frontend/
│   ├── DESIGN_SYSTEM.md             # UI colors, typography, spacing, and components
│   └── my-react-app/
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   │   ├── Homepage/
│       │   │   │   ├── Hero.jsx
│       │   │   │   └── Features.jsx
│       │   │   ├── Skill Assessment/
│       │   │   │   ├── LevelSelection.jsx
│       │   │   │   └── SkillAssessment.jsx
│       │   │   ├── Navbar.jsx
│       │   │   └── Footer.jsx
│       │   ├── App.jsx              # Routes and page composition
│       │   └── main.jsx             # React application entry point
│       ├── package.json
│       └── vite.config.js
└── README.md
```

## 🎨 Design Approach

The included [design system](Frontend/DESIGN_SYSTEM.md) follows a **Trust & Connection** theme intended to feel credible, welcoming, and approachable to learners.

| Design token | Color | Purpose |
|---|---|---|
| Deep Royal Blue | `#0F172A` | Primary headings and dark surfaces |
| Vibrant Sky Blue | `#0EA5E9` | Actions and emphasis |
| Light Slate | `#F8FAFC` | Page backgrounds |
| White | `#FFFFFF` | Cards and primary surfaces |
| Slate Grey | `#64748B` | Supporting text |

The design guidance uses an Inter/system sans-serif font stack, consistent spacing, reusable components, and responsive navigation.

## 🚀 Run the Frontend Locally

### Prerequisites

- Node.js and npm
- Git

### Installation

```bash
git clone https://github.com/diludfernando/Skill-Bridge-Lanka-.git
cd Skill-Bridge-Lanka-/Frontend/my-react-app
npm install
```

### Start the development server

```bash
npm run dev
```

Open the **local URL printed by Vite** (typically `http://localhost:5173`).

### Other commands

```bash
npm run build    # Create a production frontend build
npm run preview  # Preview the built frontend
npm run lint     # Run ESLint
```

These commands are declared in the frontend's `package.json`. Backend startup steps are not included because no runnable backend service sources were verified in the reviewed `Backend/` directory.

## 🔄 User Journey

```text
Visit homepage
      │
      ▼
Explore platform features
      │
      ▼
Open skill assessment
      │
      ▼
Select a difficulty level
      │
      ▼
Answer multiple-choice questions
      │
      ▼
View final score
      │
      └──► Retry the assessment
```

**Future direction:** Extend this journey with account creation, persistent results, adaptive learning recommendations, professional guidance, and progress tracking.

## 🗺️ Development Roadmap

The following items are proposed improvements rather than completed features:

- [ ] Connect each difficulty level to its own question bank and intended question count
- [ ] Add assessment categories beyond foundational web-development topics
- [ ] Implement user registration, authentication, and learner profiles
- [ ] Build and connect the planned Spring Boot backend services
- [ ] Store assessments, results, and learner progress in databases
- [ ] Add personalized learning-resource suggestions
- [ ] Implement career-counselling and job-market information workflows
- [ ] Add automated frontend and backend tests
- [ ] Improve accessibility, validation, loading states, and error handling
- [ ] Publish screenshots and deployment/demo instructions

## 🤝 Contributing

Contributions and feedback are welcome. If you would like to improve the project:

1. Fork the repository and create a feature branch.
2. Keep frontend changes aligned with [DESIGN_SYSTEM.md](Frontend/DESIGN_SYSTEM.md).
3. Test your changes locally and run `npm run lint` for frontend changes.
4. Open a pull request describing the change and how you verified it.

For backend development, first coordinate module boundaries and database configuration using [Backend_Ports.md](Backend/Backend_Ports.md).

## 📚 Project Documentation

- [Frontend Design System](Frontend/DESIGN_SYSTEM.md)
- [Backend Service and Port Plan](Backend/Backend_Ports.md)
- [Frontend Application](Frontend/my-react-app)

## 👨‍💻 Repository

Maintained at **[diludfernando/Skill-Bridge-Lanka-](https://github.com/diludfernando/Skill-Bridge-Lanka-)**.

---

<div align="center">

**Skill Bridge Lanka — Assess skills. Build knowledge. Explore career pathways.**

*An evolving learning and career-development prototype.*

</div>
