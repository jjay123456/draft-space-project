\# Unified Project Documentation

\#\# Project Requirements Document

\#\#\# Project Overview

iHear is a responsive web application designed to make online learning accessible for hearing-impaired students. It offers captioned and transcribed courses, live Zoom sessions with one-click join, and a familiar CodeHS-style interface. The platform supports three user roles—STUDENT, TUTOR, and ADMIN—each with tailored dashboards and permissions. Accessibility is central to the design, meeting WCAG 2.2 AA standards through features like keyboard navigation, visible focus indicators, high-contrast mode, and always-on captions.

The key objectives are to deliver a smooth enrollment and lesson experience, ensure live teaching is easy to join, and empower administrators to create new courses quickly. Success is measured by compliance with accessibility guidelines, reliable Zoom integration, and an intuitive UI that works on desktops and mobile devices. This MVP lays the groundwork for future features like graded assignments and chat, while the seeded demo content allows immediate exploration.

\#\#\# In-Scope vs. Out-of-Scope

\*\*In-Scope\*\*

\*   Role-based authentication: STUDENT, TUTOR, ADMIN  
\*   Sign-up/sign-in with email/password and Google OAuth  
\*   Course catalog with search, filters, and accessibility badges  
\*   Course detail pages showing syllabus, instructors, and Zoom sessions  
\*   Enrollment flow and student dashboard with progress tracking  
\*   Lesson viewer with captioned video, transcript panel, text controls, and keyboard navigation  
\*   Live session integration via Zoom (recurring sessions, tutor-supplied credentials, join links)  
\*   Calendar view (list/month), time-zone awareness, and ICS export  
\*   Admin console with blank-template course creation and transcript upload  
\*   Seed data: 1 comprehensive English course, 6 modules, 3–8 lessons per module, 2 upcoming Zoom sessions  
\*   Language toggle for English and Chinese UI  
\*   Email notifications for session reminders and announcements  
\*   High-contrast mode, visible focus, large touch targets, reduced motion support

\*\*Out-of-Scope\*\*

\*   Graded quizzes or assignments  
\*   Real-time chat or discussion forums  
\*   Payment processing or subscriptions  
\*   Advanced analytics or tracking beyond attendance reminders  
\*   Mobile apps (native) or offline support

\#\#\# User Flow

A new user lands on the public site and sees clear options to explore the English course or sign in. They can register with their email and a secure password or use Google OAuth. After verifying their account, the system recognizes their role and sends them to the appropriate dashboard. Students arrive at the course modules, tutors see session management tools, and admins access the course builder.

Once inside, a student browses the available modules using search, then starts a module with a single click. They use the left sidebar to navigate modules and lessons, view captioned videos in the main area, and track progress in the right rail. Live sessions appear on both the dashboard and calendar. Admins create new course content from a blank template, upload transcripts, and schedule Zoom sessions. Throughout, users switch languages, adjust contrast, and navigate entirely by keyboard if needed.

\#\#\# Core Features

\*   \*\*Role-Based Authentication\*\*: Secure sign-up/sign-in via NextAuth, with STUDENT, TUTOR, and ADMIN roles enforcing access controls.  
\*   \*\*Accessible Responsive UI\*\*: CodeHS-style layout with top bar (logo, search, language toggle, profile), left sidebar (course tree), main content area, and right rail (progress, Zoom info), fully WCAG 2.2 AA compliant.  
\*   \*\*Course Catalog & Details\*\*: Browse captioned/transcribed courses, filter by accessibility badges, read syllabus and instructor info, and view upcoming Zoom sessions before enrolling.  
\*   \*\*Lesson Viewer\*\*: Watch captioned video or recording with a transcript panel, adjustable font size and contrast, keyboard navigation, and sticky controls.  
\*   \*\*Live Session & Calendar\*\*: Schedule recurring Zoom sessions (tutor-supplied credentials), display join links in dashboard and calendar, convert to local time zones, and export to Google Calendar/Outlook.  
\*   \*\*Dashboards\*\*: Student dashboard shows “Continue Learning,” upcoming sessions, and announcements; tutor dashboard lists teaching schedule; admin console manages users, content, and sessions.  
\*   \*\*Admin Course Builder\*\*: Blank-template form for creating courses, modules, and lessons, including transcript uploads and Zoom session details.  
\*   \*\*Localization & Notifications\*\*: Toggle UI between English and Chinese; automatic email reminders for sessions and announcements.  
\*   \*\*Seed Data\*\*: Preloaded demo courses, modules, lessons, and sessions for immediate testing and demonstration.

\#\#\# Tech Stack & Tools

\*   \*\*Frontend\*\*: Next.js 14 (App Router), React, TypeScript, Tailwind CSS with CSS variables (theme tokens), shadcn/ui, lucide-react  
\*   \*\*Backend\*\*: Prisma ORM with PostgreSQL (SQLite in development), Next.js API routes  
\*   \*\*Authentication\*\*: NextAuth (Email/Password and Google OAuth; roles: STUDENT, TUTOR, ADMIN)  
\*   \*\*Forms & Validation\*\*: React Hook Form, Zod  
\*   \*\*Linting & Formatting\*\*: ESLint, Prettier  
\*   \*\*Environment\*\*: \`.env.example\` listing DATABASE\_URL, NEXTAUTH\_SECRET, GOOGLE\_CLIENT\_ID, GOOGLE\_CLIENT\_SECRET, NEXT\_PUBLIC\_APP\_URL  
\*   \*\*Hosting & Infrastructure\*\*: Vercel for frontend, Supabase or Railway for PostgreSQL  
\*   \*\*Integrations\*\*: Zoom API for session scheduling and attendance, SendGrid (or similar) for email  
\*   \*\*AI & Productivity\*\*: lovable.dev for rapid prototyping and code generation

\#\#\# Non-Functional Requirements

\*   \*\*Accessibility\*\*: Full WCAG 2.2 AA compliance (keyboard navigation, focus indicators, color contrast, reduced motion)  
\*   \*\*Performance\*\*: Page load under 2 seconds on standard broadband; lazy loading of videos and heavy assets  
\*   \*\*Security\*\*: HTTPS everywhere, secure cookies, CSRF protection, input validation, role-based access control  
\*   \*\*Scalability\*\*: Support up to 1,000 concurrent users for live sessions; database connection pooling  
\*   \*\*Reliability\*\*: 99.9% uptime SLA; automatic retries for Zoom API and email failures

\#\#\# Constraints & Assumptions

\*   Administrators manually upload lesson transcripts; no automated caption generation.  
\*   Tutors provide their own Zoom credentials; platform does not manage shared accounts.  
\*   Course structure is predefined by seeded data and admin console templates; no external authoring tools.  
\*   The database is managed separately (Supabase/Railway) and is always reachable by the frontend.  
\*   UI content localization only applies to interface text, not course materials.

\#\#\# Known Issues & Potential Pitfalls

\*   Zoom API rate limits may disrupt session creation; mitigate by batching requests and handling retries gracefully.  
\*   Time-zone conversions can lead to confusion; use a reliable library (e.g., \`luxon\`) and display both local and UTC times.  
\*   Accessibility oversights can slip through; integrate automated audits (axe-core) and manual testing with screen readers.  
\*   Email deliverability issues; use a trusted SMTP provider and implement monitoring of bounce rates.  
\*   Large video assets can slow initial loads; implement adaptive streaming or previews to reduce bandwidth.

\#\# App Flow Document

\#\#\# Onboarding and Sign-In/Sign-Up

When a new user visits iHear, they land on the homepage where they see clear options to explore courses, sign up, or log in. To create an account, they choose email/password or click “Sign in with Google.” After entering details, they receive a verification email. Once verified, they select their role (STUDENT, TUTOR, or ADMIN) and are redirected to the appropriate dashboard. If a user forgets their password, they click “Forgot Password,” enter their email, and follow the link sent to them to reset it. Signing out is as simple as clicking the profile menu and choosing “Log Out.”

\#\#\# Main Dashboard or Home Page

After logging in, students see the English course modules by default, while tutors and admins land on their respective dashboards. The layout features a top bar with the logo, search box, language toggle, notifications bell, and profile menu. On the left is a collapsible sidebar showing course modules and lessons, and on the right is an optional rail displaying current progress or upcoming Zoom sessions. The main content area changes based on the selected page—modules, lesson viewer, calendar, or admin console. Users click sidebar items or use the top search to navigate between pages.

\#\#\# Detailed Feature Flows and Page Transitions

A student browsing the catalog clicks a course card to open its detail page, which shows the syllabus, instructor bios, and a list of upcoming Zoom sessions with join buttons. Hitting “Enroll” updates their dashboard and sidebar. When they select a lesson, the lesson viewer loads with a captioned video at the top and a transcript panel below, along with controls for font size, contrast, and keyboard shortcuts. Tutors schedule new Zoom sessions in their dashboard by clicking “New Session,” filling out the form, and saving—these sessions propagate to all enrolled students’ dashboards and calendars. Admins access the “Course Builder” via the admin menu, fill out a blank template form to add modules and lessons, upload transcripts, and set recurring Zoom sessions. After saving, the new course appears on the public catalog.

\#\#\# Settings and Account Management

Users open their profile menu to edit personal information like name and email, change their password, or switch UI language between English and Chinese. They can opt in or out of email reminders and adjust their timezone preference. Admins see additional settings for managing other user accounts. After saving changes, the app returns them to their previous page, preserving any unsaved work in forms.

\#\#\# Error States and Alternate Paths

If a user submits invalid data—like an improperly formatted email or missing transcript—they see an inline error message explaining the issue and guiding correction. In case of lost internet connectivity, a banner appears stating “You are offline,” and forms are disabled until reconnection. Role-restricted pages show a friendly “Access Denied” screen with a link to return home. If Zoom integration fails, the session card displays “Connection Error” and offers to retry.

\#\#\# Conclusion and Overall App Journey

From landing on the public site and creating an account to starting modules, joining live sessions, and managing content, the user moves seamlessly through the iHear platform. The clear layout, keyboard accessibility, and consistent feedback ensure that students, tutors, and admins can accomplish their goals without friction or confusion.

\#\# Tech Stack Document

\#\#\# Frontend Technologies

\*   \*\*Next.js 14 (App Router)\*\*: Enables server-side rendering, static optimization, and file-based routing for fast, SEO-friendly pages.  
\*   \*\*React & TypeScript\*\*: Provides a robust component model with type safety, improving code reliability and developer experience.  
\*   \*\*Tailwind CSS & CSS Variables\*\*: Offers utility-first styling and theme tokens for rapid UI development and easy theming (light, dark, high-contrast).  
\*   \*\*shadcn/ui & lucide-react\*\*: Supplies accessible, prebuilt components and icons that adhere to design and accessibility standards.

\#\#\# Backend Technologies

\*   \*\*Prisma ORM\*\*: Simplifies database interactions with a type-safe query builder, migrations, and seeding.  
\*   \*\*PostgreSQL (Production) & SQLite (Development)\*\*: Provides a scalable, relational database in production and a lightweight local DB for development.  
\*   \*\*Next.js API Routes\*\*: Hosts serverless functions for authentication, Zoom integration, and email sending without a separate backend server.

\#\#\# Infrastructure and Deployment

\*   \*\*Vercel\*\*: Hosts the Next.js app with automatic deployments on push, preview environments, and built-in CDN for fast global performance.  
\*   \*\*Supabase or Railway (Database Hosting)\*\*: Manages PostgreSQL with built-in backups, monitoring, and scaling.  
\*   \*\*GitHub & CI/CD\*\*: Uses GitHub for version control and Vercel’s CI pipeline for linting, tests, and production deployments.

\#\#\# Third-Party Integrations

\*   \*\*Zoom API\*\*: Schedules, lists, and joins live sessions; tracks attendance.  
\*   \*\*Google OAuth\*\*: Offers one-click sign-in via Google accounts.  
\*   \*\*Email Service (e.g., SendGrid)\*\*: Delivers session reminders and announcements via transactional email.  
\*   \*\*Calendar Export (ICS)\*\*: Lets users export events to Google Calendar, Outlook, or other calendar apps.

\#\#\# Security and Performance Considerations

\*   \*\*Authentication & Authorization\*\*: NextAuth with secure cookies and JWT tokens; role checks on both client and server.  
\*   \*\*Data Protection\*\*: Environment variables for secrets; input validation with Zod; HTTPS enforced.  
\*   \*\*Performance\*\*: Code splitting, dynamic imports for heavy components, and image optimization with \`next/image\`.  
\*   \*\*Monitoring & Logging\*\*: Basic error tracking (e.g., Sentry) and logging of API errors for quick debugging.

\#\#\# Conclusion and Overall Tech Stack Summary

This stack combines Next.js, React, and TypeScript for a modern, scalable frontend, while Prisma and PostgreSQL deliver a reliable data layer. Vercel and Supabase/Railway handle hosting and deployment with minimal ops overhead. Integrated services like Zoom and SendGrid meet live teaching and notification needs, and the chosen tools ensure maintainability, performance, and accessibility.

\#\# Frontend Guidelines Document

\#\#\# Frontend Architecture

We use Next.js 14’s App Router to structure our app into server and client components. Pages live in the \`app/\` folder, each with its own layout. Shared UI elements (sidebar, top bar, right rail) sit in the root layout, ensuring consistent navigation. Server components fetch data (courses, sessions), while client components handle interactivity (theme toggle, video controls). This separation improves performance, keeps bundle size small, and makes components easier to reason about.

\#\#\# Design Principles

We prioritize usability and accessibility. Every interactive element is keyboard-focusable with visible indicators. The UI is fully responsive, adapting from mobile to desktop seamlessly. High-contrast mode and reduced-motion settings respect user preferences. Consistency in spacing, typography, and color usage creates a predictable experience. We follow WCAG 2.2 AA guidelines for color contrast, text size, and semantic markup.

\#\#\# Styling and Theming

Tailwind CSS powers our styling with utility classes, while CSS variables define theme tokens for colors (primary, secondary, high-contrast), font sizes, and spacing. We support light, dark, and high-contrast themes toggled in the top bar. Our color palette uses accessible combinations (e.g., dark blue on white, white on black). We use a clean sans-serif font for legibility and adjust sizes responsively.

\#\#\# Component Structure

We follow an atomic design approach: atoms (buttons, inputs, icons), molecules (search bar, lesson card), and organisms (sidebar, lesson viewer). Each component lives in its own folder with \`.tsx\`, \`.module.css\` (if needed), and tests. This encourages reusability and easier maintenance. We leverage shadcn/ui for base components and extend them as needed.

\#\#\# State Management

Local UI state lives in React components. Global state for authentication and theme uses React Context. Form state and validation rely on React Hook Form and Zod, ensuring consistent error handling and minimal re-renders. This keeps our state management simple and avoids heavyweight libraries.

\#\#\# Routing and Navigation

Next.js App Router handles file-based routing. Dynamic routes represent courses, modules, lessons (\`/learn/\[courseId\]/\[moduleId\]/\[lessonId\]\`). The sidebar uses client-side navigation (\`next/link\`) for instant transitions. Protected routes wrap pages in an auth check to redirect unauthorized users.

\#\#\# Performance Optimization

We lazy-load heavy components like the transcript panel and calendar views. Videos use adaptive streaming (if available) or thumbnails on load. We use \`next/image\` for optimized images and prefetch key routes to speed navigation. Code splitting ensures users only download what they need.

\#\#\# Testing and Quality Assurance

Unit tests with Jest and React Testing Library cover components and hooks. Integration tests ensure forms and navigation flows work correctly. End-to-end tests with Cypress simulate user journeys like sign-up, enrollment, and lesson viewing. We run automated accessibility checks with axe-core on critical pages.

\#\#\# Conclusion and Overall Frontend Summary

Our frontend is built on Next.js with clear separation of server and client concerns, a utility-first styling approach, and a component library that emphasizes accessibility. The architecture scales as we add features, and the design principles ensure every user—regardless of hearing ability or device—can learn effectively.

\#\# Implementation Plan

1\.  Initialize the repository with Next.js 14, TypeScript, Tailwind CSS, ESLint, and Prettier. Commit the \`.env.example\` file.  
2\.  Configure CI/CD pipeline on Vercel and link environment variables for production and preview.  
3\.  Set up Prisma schema for users, roles, courses, modules, lessons, and sessions. Run migrations and seed demo data.  
4\.  Implement NextAuth for authentication and role management; add email/password and Google OAuth providers.  
5\.  Build the global layout with top bar, sidebar, and right rail components. Integrate theme and language toggles.  
6\.  Create public pages: landing, English course modules, about, accessibility, help, and auth (login/register/reset).  
7\.  Develop course module views with progress tracking, search, and accessibility badges.
8\.  Implement student dashboard, calendar page with list/month view, and ICS export functionality.  
9\.  Build lesson viewer with captioned video, transcript panel, text and contrast controls, and keyboard navigation.  
10\. Integrate Zoom API: allow tutors to create recurring sessions and students to join with one click.  
11\. Create admin console: blank-template course builder form with React Hook Form and Zod validation, including transcript uploads.  
12\. Add localization support for English and Chinese UI text using i18n library (e.g., next-i18next).  
13\. Implement email notifications via SendGrid (session reminders, announcements).  
14\. Conduct unit, integration, and end-to-end tests; run automated accessibility audits and resolve issues.  
15\. Optimize performance: set up code splitting, lazy loading, image optimization, and caching strategies.  
16\. Final review and user acceptance testing; deploy to production on Vercel and configure database on Supabase/Railway.  
17\. Monitor logs and performance metrics; iterate on any post-launch issues or feedback.

