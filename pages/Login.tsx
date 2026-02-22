
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const mockUser = { name: 'Sandeep', phone, isAuthenticated: true };
    localStorage.setItem('user', JSON.stringify(mockUser));
    onLogin(mockUser);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-blue-600 flex flex-col justify-center p-6 sm:p-12">
      <div className="max-w-md w-full mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 sm:p-12 space-y-8">
        <div className="text-center space-y-4">
          <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <i className="fas fa-comment-dots text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tighter">AUTO SMS</h1>
          <p className="text-gray-500 font-medium">Login to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <i className="fas fa-phone-alt text-gray-400 group-focus-within:text-blue-600 transition-colors"></i>
              </div>
              <input 
                type="tel" 
                required
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="block w-full pl-14 pr-6 py-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-blue-600 focus:bg-white outline-none transition-all text-lg font-medium"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <i className="fas fa-lock text-gray-400 group-focus-within:text-blue-600 transition-colors"></i>
              </div>
              <input 
                type="password" 
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-14 pr-16 py-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-blue-600 focus:bg-white outline-none transition-all text-lg font-medium"
              />
              <div className="absolute inset-y-0 right-0 pr-6 flex items-center">
                <i className="fas fa-eye text-gray-400 hover:text-gray-600 cursor-pointer"></i>
              </div>
            </div>
          </div>

          <div className="text-right">
            <a href="#" className="text-blue-600 font-bold hover:underline">Forgot Password?</a>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 active:scale-95 transition-all uppercase tracking-widest"
          >
            LOGIN
          </button>
        </form>

        <div className="text-center space-y-4 pt-4">
          <p className="text-gray-500 font-medium">Don't have an account?</p>
          <Link to="/register" className="block text-blue-600 font-black text-xl hover:underline">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
