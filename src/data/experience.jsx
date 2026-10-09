export const experiences = [{
  id: 1,
  title: 'Learning React & TypeScript',
  description: 'Deep diving into modern React with TypeScript',
  date: '2024 - Present',
  type: 'learning',
  icon: 'BookOpen',
  details: ['Advanced React patterns and hooks', 'TypeScript type system mastery', 'State management solutions', 'Performance optimization'],
  tags: ['React', 'TypeScript', 'Advanced']
}, {
  id: 2,
  title: 'Frontend Development Bootcamp',
  description: 'Comprehensive frontend development training',
  date: '2023 - 2024',
  type: 'education',
  icon: 'GraduationCap',
  details: ['HTML5, CSS3, JavaScript foundations', 'React fundamentals and advanced concepts', 'Responsive design principles', 'Building real-world projects'],
  tags: ['Frontend', 'Web Development']
}, {
  id: 3,
  title: 'Full Stack Development Journey',
  description: 'Expanding skills to include backend development',
  date: '2023 - Present',
  type: 'learning',
  icon: 'Code',
  details: ['Node.js and Express.js basics', 'Database design and management', 'API development', 'Deployment and DevOps fundamentals'],
  tags: ['Full Stack', 'Backend', 'Databases']
}, {
  id: 4,
  title: 'UI/UX Design Exploration',
  description: 'Learning design principles and tools',
  date: '2023 - 2024',
  type: 'learning',
  icon: 'Palette',
  details: ['Design fundamentals and principles', 'Figma and prototyping', 'User experience research', 'Accessibility standards (a11y)'],
  tags: ['Design', 'UX', 'Figma']
}];
export const getExperienceByType = type => experiences.filter(e => e.type === type);
export const getTimeline = () => experiences;