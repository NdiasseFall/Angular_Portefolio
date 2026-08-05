# Portfolio Project - Claude Code Documentation & Assistant Guidelines

## Project Overview
Personal portfolio website built with Angular 21.2.0, showcasing the skills, experience, projects, and education of Ndiasse Fall, a web and mobile application developer. The project uses Tailwind CSS v4.1.12 for styling, standalone components, and features a dark/light theme toggle.

---

## Skill Integration: UI/UX Pro Max Intelligence

When performing UI/UX tasks (designing, building, reviewing, fixing, or enhancing components), always leverage the **UI/UX Pro Max** skill workflows and CLI script.

### CLI Search Quick Commands
Check Python availability (`python3 --version` / `python --version`) and execute search queries via the project's local skill script:

```bash
# 1. Generate a complete Design System (Always start here for new features/redesigns)
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "developer portfolio tech minimal dark" --design-system -p "Ndiasse Fall Portfolio"

# 2. Query detailed guidelines by domain
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "animation accessibility" --domain ux
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "glassmorphism dark" --domain style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "modern tech sans" --domain typography

# 3. Stack-specific recommendations (Default to html-tailwind)
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "responsive navbar form" --stack html-tailwind


Mandatory UI/UX Standards
No Emoji Icons: Always use SVG icons (Heroicons, Lucide, or Angular material icons) instead of emojis (e.g. 🎨 🚀 ⚙️).

Interactive States: Ensure cursor-pointer is applied on all clickable elements, cards, and custom controls with smooth transitions (transition-colors duration-200).

Contrast & Light Mode:

Light mode body text: #0F172A (slate-900).

Light mode glass cards: bg-white/80 or higher opacity (never bg-white/10).

Minimum contrast ratio 4.5:1 for body text.

Touch & Accessibility:

Minimum touch target: 44x44px.

Visible focus rings (focus-visible:ring-2) on interactive controls.

Descriptive alt tags and aria-label for icon-only buttons.

Layout & Floating Elements:

Prevent layout shifts on hover (avoid scale transforms that alter container flow).

Account for fixed navigation offset to prevent content overlap.

Project Structure
src/
├── app/
│   ├── Components/          # Angular standalone components
│   │   ├── about/          # About me section
│   │   ├── contact/        # Contact form with mailto integration
│   │   ├── experience/     # Work experience timeline
│   │   ├── formation/      # Education/training timeline
│   │   ├── header/         # Header with navigation & theme toggle
│   │   ├── hero/           # Hero/intro section with statistics
│   │   ├── projet/         # Projects showcase
│   │   ├── skills/         # Categorized skills display
│   │   └── footer/         # Footer section
│   ├── services/           # Angular services
│   │   ├── portfolio.ts    # Central data service (RxJS BehaviorSubject)
│   │   └── theme.service.ts# Theme management using Angular Signals
│   ├── models.ts           # TypeScript interfaces for data structures
│   ├── app.ts              # Root application component
│   ├── app.html            # Main template (single-page anchor architecture)
│   ├── app.routes.ts       # Routing configuration
│   └── app.config.ts       # Application configuration
├── styles.css              # Global styles & Tailwind CSS v4 directives
└── index.html              # Main HTML entry point
Key Features & Component Responsibilities
Components
Header (header/): Anchor navigation, mobile menu with keyboard/click-outside dismissal, theme toggle.

Hero (hero/): Introduction, animated text entry, stats grid, primary actions (Contact, View CV), profile image.

About (about/): Professional overview and bio.

Formation (formation/): Chronological education and certification history.

Experience (experience/): Timeline of roles, responsibilities, and technologies.

Projet (projet/): Project gallery with filters, GitHub/live links, and tech badges.

Skills (skills/): Categorized technical and soft skills with proficiency indicators.

Contact (contact/): Validated contact form producing mailto: links with subject/body encoding.

Footer (footer/): Copyright notice and social links.

Services & State
PortfolioService (services/portfolio.ts): Central state container holding Experience, Projet, Formation, Skill, Language, and SoftSkill items using BehaviorSubject.

ThemeService (services/theme.service.ts): Uses Angular Signals for reactive theme toggling, persisting preference in localStorage and syncing with system prefers-color-scheme.

Code Standards & Development Rules
Angular & TypeScript Practices
Standalone Components Only: Do not introduce NgModules.

Control Flow Syntax: Strictly use Angular built-in control flow (@if, @for, @switch).

Reactivity: Prefer Signals for local UI state and simple store variables; use RxJS for asynchronous data streams.

Selector Conventions: Follow app-[feature] pattern (e.g., app-contact).

Strict Typing: Ensure all structures match interfaces defined in src/app/models.ts.

Styling & Tailwind CSS
Use Tailwind CSS v4.1.12 utility classes.

Primary Accent: orange-500 (e.g., hover:text-orange-500, bg-orange-500).

Dark Mode Support: Use Tailwind dark: variant extensively across all custom components.

Responsive Breakpoints: Mobile-first approach (sm:, md:, lg:, xl:).

Development Workflow
Prerequisites & Setup
Node.js (compatible with Angular 21)

Angular CLI 21.2.0

Standard Commands
Bash
# Install dependencies
npm install

# Start local server (http://localhost:4200)
ng serve

# Production build
ng build

# Execute unit tests (Vitest)
ng test

# Execute e2e tests
ng e2e
UI/UX Pre-Delivery Checklist
Before submitting code changes for UI components, verify:

[ ] UI/UX Pro Max rules checked via CLI or reference table.

[ ] No emojis used as UI icons (SVGs verified).

[ ] Clickable elements include cursor-pointer and interactive feedback.

[ ] Contrast meets accessibility standards in both dark and light themes.

[ ] Layout verified at 375px, 768px, 1024px, and 1440px viewports without horizontal scrolling.

[ ] Responsive images include appropriate alt attributes.