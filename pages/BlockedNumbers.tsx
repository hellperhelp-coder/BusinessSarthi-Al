
import React, { useState } from 'react';

const BlockedNumbers: React.FC = () => {
  const [numbers, setNumbers] = useState<string[]>(['+91 9876543210', '+91 8888888888']);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input && !numbers.includes(input)) {
      setNumbers([...numbers, input]);
      setInput("");
    }
  };

  const removeNumber = (num: string) => {
    setNumbers(numbers.filter(n => n !== num));
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Blocked Numbers</h2>
        <div className="flex gap-2 mb-8">
          <input 
            type="tel"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter number to block"
            className="flex-1 p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-red-500 focus:bg-white outline-none transition-all"
          />
          <button 
            onClick={handleAdd}
            className="bg-red-500 text-white px-6 rounded-2xl hover:bg-red-600 transition-colors"
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>

        <div className="space-y-3">
          {numbers.length > 0 ? numbers.map((num, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <i className="fas fa-user-slash text-gray-400"></i>
                <span className="font-medium text-gray-700">{num}</span>
              </div>
              <button 
                onClick={() => removeNumber(num)}
                className="text-red-400 hover:text-red-600 p-2"
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          )) : (
            <div className="text-center py-12 text-gray-400">
              <i className="fas fa-check-circle text-4xl mb-2 opacity-20"></i>
              <p>No numbers blocked yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlockedNumbers;
