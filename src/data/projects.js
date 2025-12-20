export const projects = [
  {
    slug: "github-finder",
    title: "GitHub User Finder",
    description: "An app that uses the GitHub API to search for users and display their profile stats.",
    fullDescription: "I built this application to practice fetching data from third-party APIs. It uses the GitHub REST API to retrieve user information in real-time.",
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
    details: "A key challenge was managing the state of the application. I wanted the 'Delete' and 'Add' buttons to feel instant without reloading the page. I solved this by using React's useState hook to optimistically update the UI, making the dashboard feel snappy and responsive like a native app.",
    tech: ["React", "Next.js", "Supabase"],
    github: "https://github.com/jeysi05/ecommerce-dash",
    demo: "https://ecommerce-dash-seven.vercel.app/", 
  },
  {
    slug: "lajoya-hoa",
    title: "La Joya HOA Portal",
    description: "A centralized community portal for residents to view announcements and manage HOA dues.",
    fullDescription: "I built this platform to digitize the La Joya Homeowners Association's operations. It serves as a central hub where residents can stay updated on community news, access important documents, and handle billing transparency.",
    // I wrote a 'details' section focusing on UI/UX and Data presentation
    details: "One major challenge was designing a user-friendly interface for a diverse age group, including older residents. I prioritized accessibility and clear navigation. Technically, rendering the layout consistently across mobile and desktop devices required a mobile-first approach using Tailwind CSS grid systems.",
    tech: ["Next.js", "React", "Tailwind CSS"], 
    github: "https://github.com/jeysi05/lajoya-hoa", // CHECK THIS LINK
    demo: "https://lajoya-hoa.vercel.app/", 
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio v1",
    description: "My previous personal site built to learn static site generation concepts.",
    fullDescription: "This was my first attempt at building a portfolio. It uses vanilla HTML/CSS and taught me the fundamentals of responsive design.",
    details: "Building without a framework like Bootstrap or Tailwind was difficult but necessary. The challenge was getting the layout to look good on mobile phones. I solved this by deeply learning CSS Flexbox and Media Queries, manually calculating breakpoints to ensure the site was fully responsive.",
    tech: ["HTML/CSS", "JavaScript"],
    github: "https://github.com/jeysi05/portfolio-v1",
    demo: "https://portfolio-v1-amber-nine.vercel.app/", 
  },
];