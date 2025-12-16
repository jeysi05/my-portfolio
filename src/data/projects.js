export const projects = [
  {
    slug: "github-finder",
    title: "GitHub User Finder",
    description: "An app that uses the GitHub API to search for users and display their profile stats.",
    fullDescription: "I built this application to practice fetching data from third-party APIs. It uses the GitHub REST API to retrieve user information in real-time.",
    // New detailed section
    details: "The main challenge in this project was handling asynchronous data and API errors. If a user typed a name that didn't exist, the app would crash. I solved this by implementing try-catch blocks and conditional rendering, ensuring the user gets a helpful 'Not Found' message instead of a blank screen.",
    tech: ["Astro", "JavaScript", "Tailwind CSS", "GitHub API"],
    github: "https://github.com/jeysi05/my-portfolio",
    demo: "/github-search", 
  },
  {
    slug: "ecommerce-dashboard",
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing products, orders, and analytics.",
    fullDescription: "This project is a full-stack admin dashboard built to help business owners manage their inventory. It features real-time data updates and chart visualization.",
    // New detailed section
    details: "A key challenge was managing the state of the application. I wanted the 'Delete' and 'Add' buttons to feel instant without reloading the page. I solved this by using React's useState hook to optimistically update the UI, making the dashboard feel snappy and responsive like a native app.",
    tech: ["React", "Next.js", "Supabase"],
    github: "https://github.com/jeysi05/ecommerce-dash",
    demo: "https://ecommerce-dash-seven.vercel.app/", 
  },
  {
    slug: "task-management-api",
    title: "Task Management API",
    description: "A robust RESTful API with authentication, rate limiting, and automated testing.",
    fullDescription: "Designed for high performance, this API handles thousands of requests per second. Since this is a backend-only project, there is no visual demo.",
    // New detailed section
    details: "The biggest hurdle was understanding how to structure RESTful endpoints correctly. I had to ensure that the API returned the correct HTTP status codes (like 201 for Created or 404 for Not Found). I solved this by creating a standardized error-handling middleware that intercepts issues and formats them consistently.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/jeysi05/task-api",
    demo: null, 
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio v1",
    description: "My previous personal site built to learn static site generation concepts.",
    fullDescription: "This was my first attempt at building a portfolio. It uses vanilla HTML/CSS and taught me the fundamentals of responsive design.",
    // New detailed section
    details: "Building without a framework like Bootstrap or Tailwind was difficult but necessary. The challenge was getting the layout to look good on mobile phones. I solved this by deeply learning CSS Flexbox and Media Queries, manually calculating breakpoints to ensure the site was fully responsive.",
    tech: ["HTML/CSS", "JavaScript"],
    github: "https://github.com/jeysi05/portfolio-v1",
    demo: "https://portfolio-v1-amber-nine.vercel.app/", 
  },
];