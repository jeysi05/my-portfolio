export const projects = [
  {
    slug: "github-finder",
    title: "GitHub User Finder",
    description: "An app that uses the GitHub API to search for users and display their profile stats.",
    fullDescription: "I built this application to practice fetching data from third-party APIs. It uses the GitHub REST API to retrieve user information in real-time.",
    tech: ["Astro", "JavaScript", "Tailwind CSS", "GitHub API"],
    github: "https://github.com/jeysi05/my-portfolio",
    // This one is internal, so we keep it as a slash
    demo: "/github-search", 
  },
  {
    slug: "ecommerce-dashboard",
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing products, orders, and analytics.",
    fullDescription: "This project is a full-stack admin dashboard built to help business owners manage their inventory. It features real-time data updates and chart visualization.",
    tech: ["React", "Next.js", "Supabase"],
    github: "https://github.com/jeysi05/ecommerce-dash",
    demo: "https://ecommerce-dash-seven.vercel.app/", 
  },
  {
    slug: "task-management-api",
    title: "Task Management API",
    description: "A robust RESTful API with authentication, rate limiting, and automated testing.",
    fullDescription: "Designed for high performance, this API handles thousands of requests per second. Since this is a backend-only project, there is no visual demo.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/jeysi05/task-api",
    // No demo for API
    demo: null, 
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio v1",
    description: "My previous personal site built to learn static site generation concepts.",
    fullDescription: "This was my first attempt at building a portfolio. It uses vanilla HTML/CSS and taught me the fundamentals of responsive design.",
    tech: ["HTML/CSS", "JavaScript"],
    github: "https://github.com/jeysi05/portfolio-v1",
    demo: "https://portfolio-v1-amber-nine.vercel.app/", 
  },
];