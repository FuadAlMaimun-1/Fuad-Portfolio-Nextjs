import React from 'react';
import NavLink from './NavLink';
export const MobileMenu = ({
  isOpen,
  onClose,
  activeSection,
  navItems
}) => {
  return <>
      {/* Backdrop - menu এর পিছনে dark overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={onClose} aria-hidden="true" />}

      {/* Menu */}
      <div className={`
          fixed top-16 left-0 right-0 bg-dark-card border-b border-dark-border
          transform transition-all duration-300 ease-out z-50 lg:hidden
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        `}>
        <nav className="container-safe py-6 flex flex-col gap-2">
          {navItems.map(item => <div key={item.id} onClick={onClose} className="block px-4 py-3 hover:bg-dark-bg rounded-lg">
              <NavLink href={`#${item.id}`} label={item.label} isActive={activeSection === item.id} />
            </div>)}

          {/* CTA Button in mobile menu */}
          <div className="pt-4 border-t border-dark-border mt-4">
            <button className="w-full btn-primary text-center">
              Download CV
            </button>
          </div>
        </nav>
      </div>
    </>;
};
export default MobileMenu;