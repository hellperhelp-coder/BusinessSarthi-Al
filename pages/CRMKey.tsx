
import React, { useState } from 'react';

const CRMKey: React.FC = () => {
  const [key, setKey] = useState("");

  return (
    <div className="max-w-2xl mx-auto space-y-6 h-full flex flex-col justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center space-y-6">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto text-3xl">
          <i className="fas fa-key"></i>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-800">CRM App Key</h2>
          <p className="text-gray-500 mt-2">Paste the App Key generated in your CRM dashboard to sync contacts.</p>
        </div>

        <div className="relative">
          <input 
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Enter App Key"
            className="w-full p-6 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none text-center font-mono text-lg transition-all"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 active:scale-95 transition-all">
          Save Key
        </button>
      </div>
    </div>
  );
};

export default CRMKey;
