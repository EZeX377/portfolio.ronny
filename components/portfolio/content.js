export const email = "iamronnydas@gmail.com";
export const linkedinUrl = "https://www.linkedin.com/in/iamronnydas/";

export const navItems = [
  { label: "About Me", href: "#about" },
  { label: "Selected Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export const projects = [
  {
    slug: "mutual-transfer-portal",
    title: "Mutual Transfer Portal",
    description:
      "The Mutual Transfer Portal is a statewide digital platform designed to streamline and automate the mutual transfer process for Grade III & IV government employees across departments in Assam. It replaces manual, fragmented workflows with a centralized, role-driven system that improves transparency, coordination, and operational efficiency.",
    tags: ["Government Systems", "Workflow Design", "Project Delivery"],
    caseStudy: {
      duration: ["Jan – June 2025", "Feb - Mar 2026"],
      role: "Project Lead (UI/UX & Delivery)",
      type: "State-Level Government System",
      stack: "HTML, CSS, jQuery, Laravel, Tailwind CSS, MySQL",
      usersAndProblem: {
        users: ["Employees", "Verifying Officers", "HODs", "Admins"],
        paragraphs: [
          "The legacy process relied heavily on paperwork, multi-layer approvals, and offline coordination between departments. This resulted in delays, inconsistent workflows, and lack of visibility into application status.",
          "Employees had limited clarity on approval stages, while administrative users struggled with coordination and tracking due to the absence of a unified system. A centralized solution was required to standardize workflows, enforce approval hierarchies, and provide real-time tracking across departments."
        ]
      },
      approach: {
        intro: "As Project Lead, I was responsible for end-to-end UI/UX delivery and overall coordination of the system.",
        strategicDelivery: [
          "Gathered requirements through stakeholder meetings across departments",
          "Designed role-based workflows and developed UI using HTML/Tailwind",
          "Led iterative releases and UI refinements across multiple cycles",
          "Supported deployment, including server setup via SSH and DB updates"
        ],
        designFramework: [
          "Mapped complete workflow: Employee → Verifier → HOD → Admin",
          "Established structured relationships for designation-to-department mapping",
          "Designed intuitive user flows for request submission and tracking",
          "Ensured responsive, accessible UI across all government devices"
        ]
      },
      solution: {
        points: [
          "Centralized portal supporting multiple government departments",
          "Structured multi-level approval workflow with role-specific UI",
          "Real-time status tracking dashboard and monitoring panel",
          "Role-based access control ensuring data visibility and security"
        ],
        designStrategy: [
          "The final system delivered a clean, structured, and role-driven interface tailored to different user types. Each role was provided with a focused dashboard, minimizing complexity while ensuring access to relevant actions and data.",
          "The design emphasized clarity in workflows, ensuring users could easily understand their responsibilities and current status through consistent UI patterns and simplified navigation."
        ]
      }
    }
  },
  {
    slug: "eap-mis",
    title: "EAP MIS",
    description:
      "Dashboard-driven MIS web application for reporting project and financial progress across enterprise and government programmes.",
    tags: ["Dashboard Systems", "MIS", "Web Applications"]
  },
  {
    slug: "counselling-portals",
    title: "CEE / PAT Counselling Portals",
    description:
      "High-traffic counselling portals designed around deadline-based journeys, clear information hierarchy, and reliable multi-step interactions.",
    tags: ["High-Traffic Systems", "UI/UX", "Structured Workflows"]
  },
  {
    slug: "asamis",
    title: "ASAMIS",
    description:
      "End-to-end system delivery with database coordination, interface design, and ongoing support for a live operational government platform.",
    tags: ["System Delivery", "Database Coordination", "Government Systems"]
  },
  {
    slug: "biometric-verification",
    title: "Biometric Verification App",
    description:
      "Mobile UI planning in Figma for a biometric verification workflow where field usability, clarity, and speed were critical to adoption.",
    tags: ["Mobile UI", "Figma", "Verification Flow"]
  }
];

export const skillGroups = [
  {
    title: "UI Development",
    items: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript"]
  },
  {
    title: "Design Tools",
    items: ["Figma", "Photoshop"]
  },
  {
    title: "Project & Delivery",
    items: ["Requirement Gathering", "Client Communication", "Team Leadership"]
  },
  {
    title: "Deployment",
    items: ["SSH", "Server Setup", "Database Maintenance"]
  }
];

export const contactMethods = [
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`
  },
  // {
  //   label: "LinkedIn",
  //   value: "linkedin.com/in/iamronnydas",
  //   href: linkedinUrl
  // }
];