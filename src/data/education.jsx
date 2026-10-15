export const educationData = [
  {
    id: 1,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Board of Intermediate & Secondary Education, Dhaka",
    period: "Completed",
    type: "Academic Education",
    icon: "GraduationCap",
    grade: "Completed",
    location: "Dhaka, Bangladesh",
    description:
      "Successfully completed the Higher Secondary academic curriculum with a solid grounding in science and mathematics. Developed strong analytical thinking, disciplined problem-solving methodologies, and perseverance that propelled my passion for computer software development.",
    skills: ["Analytical Reasoning", "Mathematics", "Science", "Logical Problem Solving"],
  },
  {
    id: 2,
    degree: "Full Stack Web Development Bootcamp",
    institution: "Comprehensive Software Development Training",
    period: "2023 - 2024",
    type: "Professional Certification",
    icon: "Award",
    grade: "Graduated with Distinction",
    location: "Online / Practical Lab",
    description:
      "Intensive, project-driven software development program focused on full-stack web engineering. Mastered frontend fundamentals, state management, backend API creation, database design, and real-world deployment workflows.",
    skills: [
      "HTML5 / CSS3 / JavaScript (ES6+)",
      "React.js & Hooks Architecture",
      "Node.js & Express.js REST APIs",
      "MongoDB & Mongoose ODM",
      "Git, GitHub & Team Collaboration",
    ],
  },
  {
    id: 3,
    degree: "Advanced Next.js, React & TypeScript Specialization",
    institution: "Continuous Engineering & Self-Directed Mastery",
    period: "2024 - Present",
    type: "Advanced Technical Track",
    icon: "BookOpen",
    grade: "Active / Ongoing",
    location: "Continuous Learning",
    description:
      "Specialized deep dive into modern production-grade web technologies. Focused on Next.js App Router, TypeScript type systems, Server-Side Rendering (SSR), secure authentication architectures (JWT, Better Auth), and responsive design systems.",
    skills: [
      "Next.js App Router & Server Components",
      "TypeScript Type Safety & Generics",
      "Tailwind CSS & Design Systems",
      "Authentication & Security (JWT, Better Auth)",
      "Performance Optimization & SEO",
    ],
  },
];

export const getEducationList = () => educationData;
