
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Templates from './pages/Templates';
import WhatsAppSettings from './pages/WhatsAppSettings';
import CRMKey from './pages/CRMKey';
import BlockedNumbers from './pages/BlockedNumbers';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Simple auth check simulation
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Failed to parse user from localStorage", e);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsSidebarOpen(false);
  };

  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
        {user && (
          <Sidebar 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)} 
            onLogout={handleLogout}
          />
        )}
        
        <div className="flex-1 flex flex-col">
          {user && (
            <Header onMenuClick={() => setIsSidebarOpen(true)} />
          )}
          
          <main className="flex-1 p-4 md:p-8 overflow-y-auto">
            <Routes>
              <Route path="/login" element={!user ? <Login onLogin={setUser} /> : <Navigate to="/" />} />
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
              
              <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
              <Route path="/templates" element={user ? <Templates /> : <Navigate to="/login" />} />
              <Route path="/whatsapp-settings" element={user ? <WhatsAppSettings /> : <Navigate to="/login" />} />
              <Route path="/crm-key" element={user ? <CRMKey /> : <Navigate to="/login" />} />
              <Route path="/blocked-numbers" element={user ? <BlockedNumbers /> : <Navigate to="/login" />} />
              
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>

        {/* Floating WhatsApp Action Button */}
        <a 
          href="https://wa.me/919817000245" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all z-50 animate-bounce"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
        </a>
      </div>
    </HashRouter>
  );
};

export default App;
