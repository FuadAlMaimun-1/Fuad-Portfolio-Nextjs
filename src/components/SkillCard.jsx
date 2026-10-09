import React from 'react';
export const SkillCard = ({
  skill
}) => {
  // Proficiency level er upor base kore color highlight
  const getProficiencyStyle = level => {
    switch (level) {
      case 'beginner':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'intermediate':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'advanced':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'expert':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  // Progress bar percentage
  const getProgressWidth = level => {
    switch (level) {
      case 'beginner':
        return 'w-1/3';
      case 'intermediate':
        return 'w-3/5';
      case 'advanced':
        return 'w-4/5';
      case 'expert':
        return 'w-full';
      default:
        return 'w-1/2';
    }
  };
  return <div className="group relative p-6 rounded-2xl bg-[#120B2E]/60 border border-purple-900/40 backdrop-blur-md hover:border-purple-500/50 hover:bg-[#180E3D]/80 transition-all duration-300 shadow-xl">
      {/* Dynamic Glow Effect on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500 -z-10" />

      {/* Top Section: Icon & Category */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:border-purple-400 group-hover:text-white transition-all duration-300">
          <span className="text-base font-bold">
            {skill.name.slice(0, 2).toUpperCase()}
          </span>
        </div>

        <span className={`px-3 py-1 rounded-full text-xs font-medium border capitalize ${getProficiencyStyle(skill.proficiency)}`}>
          {skill.proficiency}
        </span>
      </div>

      {/* Skill Name */}
      <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors mb-2">
        {skill.name}
      </h3>

      {/* Description */}
      {skill.description && <p className="text-sm text-gray-400 line-clamp-2 mb-4">
          {skill.description}
        </p>}

      {/* Visual Progress Bar */}
      <div className="w-full bg-purple-950/50 h-1.5 rounded-full overflow-hidden border border-purple-900/30">
        <div className={`h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full transition-all duration-500 ${getProgressWidth(skill.proficiency)}`} />
      </div>
    </div>;
};
export default SkillCard;