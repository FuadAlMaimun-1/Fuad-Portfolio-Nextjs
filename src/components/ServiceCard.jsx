import React, { useState } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
export const ServiceCard = ({
  service,
  isExpanded = false,
  onToggle
}) => {
  const [isHovered, setIsHovered] = useState(false);


  // Dynamic Lucide Icon Loader
  const renderIcon = iconName => {
    const IconComponent = LucideIcons[iconName];
    if (!IconComponent) return null;
    return <IconComponent size={28} className="text-purple-400 group-hover:text-purple-300 transition-colors" />;
  };
  return <div className={`
        relative rounded-2xl overflow-hidden transition-all duration-500 font-preahvihear select-none
        ${isExpanded ? 'md:col-span-2 lg:col-span-2' : ''}
      `} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
    {/* Dynamic Purple Background Glow */}
    <div className={`
          absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-900/10 to-transparent
          transition-opacity duration-500 pointer-events-none
          ${isHovered || isExpanded ? 'opacity-100' : 'opacity-40'}
        `} />

    {/* Main Card Container */}
    <div onClick={onToggle} className={`
          relative p-8 rounded-2xl border bg-[#0C061A]/80 backdrop-blur-md
          transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full
          ${isHovered || isExpanded ? 'border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.2)] -translate-y-1' : 'border-purple-900/30'}
        `}>
      <div>
        {/* Header Icon & Title */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-xl bg-[#170C30] border border-purple-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-400 transition-all duration-300 shadow-md">
            {renderIcon(service.icon)}
          </div>

          <span className="text-xs text-purple-300/80 bg-purple-900/40 border border-purple-500/20 px-3 py-1 rounded-full">
            {service.title.split(' ')[0]}
          </span>
        </div>

        <h3 className="text-2xl font-normal text-white mb-3 group-hover:text-purple-300 transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed font-normal">
          {service.description}
        </p>
      </div>

      {/* Expandable Content Container */}
      {isExpanded && <div className="mt-6 pt-6 border-t border-purple-900/40 animate-fadeIn">
        <p className="text-sm text-gray-300 leading-relaxed mb-6 font-normal">
          {service.longDescription}
        </p>

        {/* Features List */}
        {service.features && service.features.length > 0 && <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-3">
            Key Features
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feature, idx) => <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 leading-snug">
              <Check size={16} className="text-purple-400 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>)}
          </ul>
        </div>}
      </div>}

      {/* Card Footer Toggle Button */}
      <div className="mt-8 pt-4 border-t border-purple-900/20 flex items-center justify-between text-xs text-purple-400 font-medium">
        <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
        <div className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
          <ChevronRight size={16} className={`transition-transform duration-300 ${isExpanded ? 'rotate-90 text-purple-300' : 'text-purple-400'}`} />
        </div>
      </div>
    </div>
  </div>;
};
export default ServiceCard;