
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate verification step
    alert("OTP sent to your phone number!");
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-blue-600 flex flex-col justify-center p-6 sm:p-12">
      <div className="max-w-md w-full mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 sm:p-12 space-y-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-blue-100 p-4 rounded-2xl">
            <i className="fas fa-user-plus text-blue-600 text-2xl"></i>
          </div>
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tighter">Create your account</h1>
            <p className="text-gray-500 font-medium text-sm">Register to start using Auto SMS.</p>
          </div>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-4">
            <div className="relative">
              <label className="absolute -top-2 left-4 bg-white px-1 text-xs font-bold text-gray-400">Name</label>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="fas fa-user text-gray-300"></i>
              </div>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="block w-full pl-12 pr-6 py-4 bg-white border-2 border-gray-100 rounded-2xl focus:border-blue-600 outline-none transition-all font-medium"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-4 bg-white px-1 text-xs font-bold text-gray-400">Phone</label>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="fas fa-phone-alt text-gray-300"></i>
              </div>
              <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="block w-full pl-12 pr-6 py-4 bg-white border-2 border-gray-100 rounded-2xl focus:border-blue-600 outline-none transition-all font-medium"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-4 bg-white px-1 text-xs font-bold text-gray-400">Password</label>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="fas fa-lock text-gray-300"></i>
              </div>
              <input 
                type="password" 
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="block w-full pl-12 pr-12 py-4 bg-white border-2 border-gray-100 rounded-2xl focus:border-blue-600 outline-none transition-all font-medium"
              />
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                <i className="fas fa-eye text-gray-300"></i>
              </div>
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-4 bg-white px-1 text-xs font-bold text-gray-400">Confirm Password</label>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="fas fa-lock text-gray-300"></i>
              </div>
              <input 
                type="password" 
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                className="block w-full pl-12 pr-12 py-4 bg-white border-2 border-gray-100 rounded-2xl focus:border-blue-600 outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 py-2">
            <input type="checkbox" id="terms" required className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <label htmlFor="terms" className="text-sm font-bold text-gray-600">I accept the Terms & Conditions</label>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 active:scale-95 transition-all"
          >
            REGISTER
          </button>
        </form>

        <p className="text-center text-gray-400 font-medium text-sm px-8 leading-tight">
          After registration, you will verify OTP.
        </p>

        <div className="text-center pt-2">
          <Link to="/login" className="text-blue-600 font-bold hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
