const allSkills = [
// Frontend Skills
{
  id: 1,
  name: 'React.js',
  category: 'frontend',
  proficiency: 'advanced',
  icon: 'React',
  description: 'Building interactive UIs with React'
}, {
  id: 2,
  name: 'TypeScript',
  category: 'frontend',
  proficiency: 'advanced',
  icon: 'Code',
  description: 'Type-safe JavaScript development'
}, {
  id: 3,
  name: 'Tailwind CSS',
  category: 'frontend',
  proficiency: 'advanced',
  icon: 'Palette',
  description: 'Utility-first CSS framework'
}, {
  id: 4,
  name: 'JavaScript (ES6+)',
  category: 'frontend',
  proficiency: 'advanced',
  icon: 'Code',
  description: 'Modern JavaScript programming'
}, {
  id: 5,
  name: 'HTML5',
  category: 'frontend',
  proficiency: 'expert',
  icon: 'FileCode',
  description: 'Semantic HTML markup'
}, {
  id: 6,
  name: 'CSS3',
  category: 'frontend',
  proficiency: 'advanced',
  icon: 'Palette',
  description: 'Advanced CSS styling and animations'
}, {
  id: 7,
  name: 'Responsive Design',
  category: 'frontend',
  proficiency: 'advanced',
  icon: 'Smartphone',
  description: 'Mobile-first responsive layouts'
}, {
  id: 8,
  name: 'Framer Motion',
  category: 'frontend',
  proficiency: 'intermediate',
  icon: 'Zap',
  description: 'React animation library'
},
// Backend Skills
{
  id: 9,
  name: 'Node.js',
  category: 'backend',
  proficiency: 'intermediate',
  icon: 'Server',
  description: 'JavaScript runtime for backend'
}, {
  id: 10,
  name: 'Express.js',
  category: 'backend',
  proficiency: 'intermediate',
  icon: 'Server',
  description: 'Web framework for Node.js'
}, {
  id: 11,
  name: 'REST API',
  category: 'backend',
  proficiency: 'advanced',
  icon: 'Network',
  description: 'Building RESTful APIs'
},
// Database Skills
{
  id: 12,
  name: 'MongoDB',
  category: 'database',
  proficiency: 'intermediate',
  icon: 'Database',
  description: 'NoSQL database'
}, {
  id: 13,
  name: 'Firebase',
  category: 'database',
  proficiency: 'intermediate',
  icon: 'Database',
  description: 'Backend-as-a-Service platform'
},
// Tools & Others
{
  id: 14,
  name: 'Git & GitHub',
  category: 'tools',
  proficiency: 'advanced',
  icon: 'GitBranch',
  description: 'Version control and collaboration'
}, {
  id: 15,
  name: 'VS Code',
  category: 'tools',
  proficiency: 'advanced',
  icon: 'Code',
  description: 'Code editor and development environment'
}, {
  id: 16,
  name: 'Figma',
  category: 'tools',
  proficiency: 'intermediate',
  icon: 'Palette',
  description: 'UI/UX design tool'
}, {
  id: 17,
  name: 'npm & Yarn',
  category: 'tools',
  proficiency: 'advanced',
  icon: 'Package',
  description: 'Package managers'
}];
export const getSkillsByCategory = () => {
  const categories = ['frontend', 'backend', 'database', 'tools'];
  return categories.map(cat => ({
    name: cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' '),
    category: cat,
    skills: allSkills.filter(s => s.category === cat)
  }));
};
export const getAllSkills = () => allSkills;
export const getSkillsByProficiency = proficiency => allSkills.filter(s => s.proficiency === proficiency);