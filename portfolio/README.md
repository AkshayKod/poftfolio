# 🚀 Akshay G — Personal Developer Portfolio

<div align="center">

![Portfolio Preview Banner](https://img.shields.io/badge/Akshay_G-Full_Stack_Developer-00ff87?style=for-the-badge&logo=react&logoColor=black)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

<p align="center">
  A state-of-the-art, high-performance developer portfolio built with <strong>React 19</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS v4</strong>, and <strong>Framer Motion</strong>.
</p>

[View Demo](#-live-demo) • [Key Features](#-key-features) • [Tech Stack](#-tech-stack) • [Quick Start](#-quick-start) • [Project Structure](#-project-structure) • [License](#-license) • [Contact](#-contact--connect)

</div>

---

## 👨‍💻 About Akshay G

I am an **MCA Graduate (2024–2026)** from Mangalore Institute of Technology & Engineering and a **Full-Stack Web Developer** passionate about architecting scalable systems, building responsive web applications, and designing intuitive user interfaces.

* 🎓 **MCA (2024–2026)**: Mangalore Institute of Technology & Engineering (CGPA: 7.15)
* 🎓 **BCA (2021–2024)**: Sri Dharmasthala Manjunatheshwara College, Ujire (CGPA: 6.23)
* 📄 **Published Research**: *Real-Time Sign Language Alphabet Recognition Using MobileNetV2 Transfer Learning* — IEEE Bangalore Section / ICNPCV 2026
* 💼 **Experience**: Web Development Intern at Accolade Tech Solutions & Codelab System

---

## ✨ Key Features

- 🌟 **Futuristic Glassmorphism & Cyberpunk Theme**: Custom dark aesthetic with neon emerald/cyan accents and dynamic glow effects.
- ⚡ **Interactive 3D Tilt & Magnetic Effects**: Physics-based interactive buttons, spring-physics cursor tracking hero avatar, and smooth scroll animations via Framer Motion.
- 📱 **Fully Responsive Layout**: Tailored for mobile, tablet, laptop, and ultra-wide displays.
- 📄 **Direct Resume & Cover Letter Viewer/Download**: Integrated PDF links for quick recruiter review.
- 🧩 **Centralized JSON Data Engine**: All bio, skills, experience, projects, certifications, and research data driven from `src/data/portfolio.json`.
- 🔍 **Interactive Project Showcase**: Stacking glass cards with live preview links, tech badges, and GitHub repository links.
- 🏆 **Certifications & Publications Display**: Highlighted credentials from TCS iON, Infosys, Accenture, JPMorgan Chase, and Udemy.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, TypeScript, HTML5, CSS3 |
| **Styling & Design** | Tailwind CSS v4, Custom CSS Variables, Glassmorphism |
| **Animations & FX** | Framer Motion, Spring Physics, CSS Keyframes |
| **Icons & UI** | Lucide React |
| **Build & Tooling** | Vite 8, ESLint, TypeScript Compiler |
| **Backend & APIs** | Node.js, Express.js, REST APIs, PHP, PHPMailer |
| **Databases** | MongoDB, MySQL, SQL |
| **AI & DevOps** | Generative AI, Prompt Engineering, Docker, Git, GitHub |

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── Akshay_G_Cover_Letter.pdf    # Downloadable Cover Letter
│   ├── Akshay_G_Resume.pdf          # Downloadable Resume
│   ├── profile.jpg                  # Profile Photo
│   ├── profile_nobg.png             # Transparent Hero Avatar
│   └── favicon.svg                  # Browser Favicon
├── src/
│   ├── components/
│   │   ├── layout/                  # Navbar, Footer, BackgroundFX, CoverLetter
│   │   ├── sections/                # Hero, About, Skills, Experience, Projects,
│   │   │                            # Publications, Certifications, Education, Contact
│   │   └── ui/                      # MagneticButton, SectionHeading, RevealOnScroll
│   ├── data/
│   │   └── portfolio.json           # 🎯 Centralized portfolio data
│   ├── hooks/
│   │   └── usePortfolio.ts          # Custom hook for portfolio data access
│   ├── types/
│   │   └── portfolio.ts             # Strict TypeScript definitions
│   ├── utils/
│   │   └── motion.ts                # Reusable Framer Motion animation variants
│   ├── App.tsx                      # Root Application component
│   ├── index.css                    # Tailwind CSS v4 setup & custom utilities
│   └── main.tsx                     # React root mount
├── LICENSE                          # MIT License
├── index.html                       # HTML5 Template with SEO Meta tags
├── package.json                     # Scripts & Dependencies
├── tsconfig.json                    # TypeScript Configuration
└── vite.config.ts                   # Vite configuration with Tailwind CSS plugin
```

---

## 🚀 Quick Start

Follow these steps to run the portfolio locally on your machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (version 18+ recommended) installed.

### 2. Clone the Repository
```bash
git clone https://github.com/AkshayKod/poftfolio.git
cd poftfolio/portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```

The application will start at:
👉 **`http://localhost:5173`**

### 5. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 6. Preview Production Build
```bash
npm run preview
```

---

## 📝 Customizing the Portfolio Data

To update any content on the site, simply edit:
👉 `src/data/portfolio.json`

You can update:
- **Profile Info**: Name, taglines, bio, contact details, social URLs.
- **Projects**: Titles, descriptions, tech stacks, live links, GitHub URLs.
- **Experience**: Companies, roles, durations, and key achievements.
- **Skills**: Skill groups and technology tags.
- **Certifications & Education**: Degrees, grades, issuers, and dates.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact & Connect

- **Email**: [acharyaakshay367@gmail.com](mailto:acharyaakshay367@gmail.com)
- **LinkedIn**: [linkedin.com/in/akshay-g-55821b270](https://www.linkedin.com/in/akshay-g-55821b270/)
- **GitHub**: [github.com/AkshayKod](https://github.com/AkshayKod)
- **Phone**: +91-9141030375
- **Location**: Mangalore, Karnataka, India

---

<div align="center">
  <sub>Designed & Developed with ❤️ by <strong>Akshay G</strong></sub>
</div>
