<div align="center">

# 🚀 Ali Reza Habibi | Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-AGPL_v3-blue?style=for-the-badge)](LICENSE)

A modern, responsive portfolio website built with Next.js, featuring smooth animations, dark/light theme support, and a functional contact form.

[**View Live Demo →**](https://ahabibi.vercel.app)

<img src="public/images/projects/portfolio.webp" alt="Portfolio Preview" width="800" />

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Design & UX

- **Responsive Design** — Looks great on all devices
- **Dark/Light Mode** — Seamless theme switching
- **Smooth Animations** — Polished micro-interactions
- **Modern UI** — Clean, minimalist aesthetic

</td>
<td width="50%">

### ⚡ Performance

- **Server Components** — Optimized rendering
- **Image Optimization** — Next.js Image component
- **Fast Load Times** — Minimal JavaScript bundle
- **SEO Optimized** — Meta tags & Open Graph

</td>
</tr>
<tr>
<td width="50%">

### 🛠️ Functionality

- **Contact Form** — Brevo email integration
- **Project Filtering** — Filter by technology
- **AI Chatbot** — Botpress integration
- **Resume Download** — One-click PDF download

</td>
<td width="50%">

### 🔧 Developer Experience

- **Clean Architecture** — Organized file structure
- **Component-Based** — Reusable components
- **Easy to Customize** — Well-documented code
- **Type-Safe** — Consistent patterns

</td>
</tr>
</table>

---

## 🖥️ Tech Stack

| Category          | Technologies                                              |
| ----------------- | --------------------------------------------------------- |
| **Framework**     | [Next.js 16](https://nextjs.org/) (App Router)            |
| **Language**      | JavaScript (JSX)                                          |
| **Styling**       | [Tailwind CSS 4](https://tailwindcss.com/)                |
| **Icons**         | [React Icons](https://react-icons.github.io/react-icons/) |
| **Email Service** | [Brevo](https://www.brevo.com/) (Sendinblue)              |
| **Chatbot**       | [Botpress](https://botpress.com/)                         |
| **Notifications** | [React Hot Toast](https://react-hot-toast.com/)           |
| **Deployment**    | [Vercel](https://vercel.com/)                             |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn** or **pnpm**
- **Brevo Account** (for contact form)

### Installation

1. **Clone the repository**

   ```
   git clone https://github.com/shahreyarhabibi/portfolio-next.js.git
   cd portfolio-next.js
   ```

2. **Install dependencies**

   ```
       npm install
       # or
       yarn install
       # or
       pnpm install
   ```

3. **Set up environment variables**

   Create a .env.local file in the root directory:

   ```
   # Brevo (Sendinblue) Configuration
   BREVO_API_KEY=your_brevo_api_key_here
   SENDER_EMAIL=your_verified_sender_email
   SENDER_NAME=Portfolio Contact Form
   RECIPIENT_EMAIL=your_email@example.com
   ```

4. **Run the development server**

   ```
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**

   Navigate to http://localhost:3000

## 📁 Project Structure

   ```
   src/
   ├── app/
   │   ├── api/
   │   │   └── contact/
   │   │       └── route.js        # Contact form API endpoint
   │   ├── globals.css             # Global styles & CSS variables
   │   ├── layout.js               # Root layout with metadata
   │   └── page.js                 # Home page
   │
   ├── components/
   │   ├── Header/
   │   │   ├── Header.jsx          # Navigation header
   │   │   └── NavIcons.jsx        # Navigation icons
   │   │
   │   ├── Projects/
   │   │   ├── ProjectCard.jsx     # Individual project card
   │   │   └── ProjectsSection.jsx # Projects grid with filters
   │   │
   │   ├── Services/
   │   │   ├── Service.jsx         # Service card component
   │   │   ├── ServicesSection.jsx # Services grid
   │   │   └── TechnologiesIcons.jsx
   │   │
   │   ├── Education/
   │   │   ├── Education.jsx
   │   │   └── EducationSections.jsx
   │   │
   │   ├── Experience/
   │   │   ├── Experience.jsx
   │   │   └── ExperienceSections.jsx
   │   │
   │   ├── AboutSection.jsx
   │   ├── BotpressChat.jsx        # AI chatbot integration
   │   ├── ContactForm.jsx         # Contact form component
   │   ├── ContactSection.jsx      # Contact section layout
   │   ├── DynamicTitle.jsx
   │   ├── ExperienceSection.jsx
   │   ├── Footer.jsx
   │   ├── HeroSection.jsx
   │   ├── Providers.jsx           # Theme & toast providers
   │   └── SectionsTitle.jsx
   │
   ├── context/
   │   └── ThemeContext.jsx        # Dark/light theme context
   │
   ├── data/
   │   └── projects.js             # Projects data
   │
   └── icons/
       ├── AboutIcon.jsx
       ├── ExperienceIcon.jsx
       ├── HomeIcon.jsx
       ├── MailIcon.jsx
       └── ServicesIcon.jsx
   
   ```

### 📸 Screenshots

<div align="center">
<strong>Dark Mode</strong>
   <br/>
   <br/>
<img src="public/images/projects/portfolio.webp" alt="Dark Mode" width="700" />
   <br/>
   <br/>
<strong>Light Mode</strong>
   <br/>
   <br/>
<img src="public/images/projects/portfolio-light.webp" alt="Light Mode" width="700" />
   <br/>
   <br/>
<strong>Mobile View</strong>
   <br/>
   <br/>
<img src="public/images/projects/portfolio-mobile.webp" alt="Mobile View" width="300" /></div>

## 📬 Contact

<div align="center">

**Ali Reza Habibi** — Software Engineer

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/shahreyarhabibi)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ali-reza-habibi)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://ahabibi.vercel.app)

</div>

## Acknowledgments

- [Next.js](https://nextjs.org/) — The React Framework
- [Turso](https://turso.tech/) — Edge Database
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Lucide](https://lucide.dev/) — Beautiful Icons
- [Recharts](https://recharts.org/) — Chart Library

---

## 📝 License

This project is licensed under the **GNU Affero General Public License v3.0** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
⭐ Star this repo if you found it helpful!
<img src="https://img.shields.io/github/stars/shahreyarhabibi/portfolio-next.js?style=social" alt="GitHub Stars" />
<br/>
<br/>
Made with ❤️ and ☕ by Ali Reza Habibi

</div>
