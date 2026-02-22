
import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onLogout }) => {
  const links = [
    { to: '/', icon: 'fa-layer-group', label: 'Command Center' },
    { to: '/templates', icon: 'fa-envelope-open-text', label: 'Message Logic' },
    { to: '/whatsapp-settings', icon: 'fa-robot', label: 'WhatsApp Bot' },
    { to: '/blocked-numbers', icon: 'fa-user-lock', label: 'Blocked List' },
    { to: '/crm-key', icon: 'fa-shield-halved', label: 'Security Keys' },
  ];

  const sidebarClasses = `
    fixed inset-y-0 left-0 z-50 w-72 bg-[#0d1117] text-white transform transition-transform duration-300 ease-in-out
    md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    border-r border-gray-800 flex flex-col
  `;

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-40 md:hidden backdrop-blur-sm" 
          onClick={onClose}
        ></div>
      )}

      <aside className={sidebarClasses}>
        <div className="p-8 border-b border-gray-800 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/40">
            <i className="fas fa-robot text-xl"></i>
          </div>
          <div>
            <span className="text-xl font-black tracking-tighter block leading-none">AutoMsg</span>
            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest mt-1 block">Automation Hub</span>
          </div>
        </div>

        <nav className="mt-8 flex-1 px-4 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={({ isActive }) => `
                flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm
                ${isActive ? 'bg-blue-600 text-white shadow-xl translate-x-1' : 'text-gray-500 hover:bg-gray-800 hover:text-white'}
              `}
            >
              <i className={`fas ${link.icon} w-5 text-center`}></i>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-6 space-y-4">
          <div className="bg-gray-800/50 p-6 rounded-3xl border border-gray-700/50">
             <div className="flex items-center gap-3 mb-3">
                <i className="fab fa-android text-emerald-500"></i>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Mobile Engine</span>
             </div>
             <p className="text-[10px] text-gray-400 font-bold mb-4 leading-relaxed">Download the APK to enable real call detection.</p>
             <button className="w-full bg-emerald-600/10 text-emerald-500 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all">
                Get APK
             </button>
          </div>

          <button
            onClick={onLogout}
            className="flex items-center gap-4 px-6 py-4 w-full text-left text-red-500 font-bold text-sm hover:bg-red-950/30 rounded-2xl transition-all"
          >
            <i className="fas fa-power-off w-5"></i>
            <span>Logout System</span>
          </button>
        </div>

        <div className="p-6 text-[9px] font-black text-gray-600 border-t border-gray-800 uppercase tracking-widest">
          © 2025 AutoMsg Hub v5.0.0
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
