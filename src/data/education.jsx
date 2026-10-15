
export const educationData = [
  {
    id: 1,
    degree: "Secondary School Certificate (SSC) / Dakhil",
    institution: "Gausia Rahmania Hosainia Alim Madrasah",
    period: "2025–2026",
    type: "Academic Education",
    icon: "GraduationCap",
    grade: "GPA 4.31",
    location: "Bangladesh",
    description:
      "Completed the SSC-equivalent Dakhil examination in the 2025–2026 academic period. Developed foundational knowledge, discipline, and an interest in technology and software development.",
    skills: [
      "Academic Fundamentals",
      "Logical Thinking",
      "Problem Solving",
      "Self-Learning",
    ],
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC) / Alim",
    institution: "Currently Studying",
    period: "Running",
    type: "Academic Education",
    icon: "GraduationCap",
    grade: "In Progress",
    location: "Bangladesh",
    description:
      "Currently pursuing higher secondary education (HSC / Alim) while continuing to develop programming skills and practical experience in web development.",
    skills: [
      "Higher Secondary Studies",
      "Programming",
      "Web Development",
      "Continuous Learning",
    ],
  },
  {
    id: 3,
    degree: "Full Stack Web Development Bootcamp",
    institution: "Programming Hero",
    period: "2026",
    type: "Professional Training",
    icon: "Award",
    grade: "In Progress",
    location: "Online",
    description:
      "Learning web development through hands-on projects, covering frontend technologies, React, Next.js, and the fundamentals of backend development.",
    skills: [
      "HTML5 / CSS3 / JavaScript (ES6+) / TypeScript / Tailwind CSS",
      "React.js & Hooks",
      "Next.js",
      "Node.js, MongoDB & Express.js",
      "Git & GitHub",
    ],
  },
];

export const getEducationList = () => educationData;