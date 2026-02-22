
import React from 'react';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const location = useLocation();
  
  const getTitle = () => {
    switch(location.pathname) {
      case '/': return 'Home';
      case '/templates': return 'Templates';
      case '/whatsapp-settings': return 'WhatsApp API Settings';
      case '/crm-key': return 'CRM App Key';
      case '/blocked-numbers': return 'Blocked Numbers';
      default: return 'AutoMsg Hub';
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex items-center justify-between shadow-md md:hidden sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="p-1">
          <i className="fas fa-bars text-xl"></i>
        </button>
        <h1 className="text-lg font-semibold">{getTitle()}</h1>
      </div>
      <div className="flex items-center gap-4">
        <i className="fas fa-bell text-xl"></i>
        <i className="fas fa-ellipsis-v text-xl"></i>
      </div>
    </header>
  );
};

export default Header;
