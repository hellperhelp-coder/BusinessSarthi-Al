
import React, { useState } from 'react';

const Templates: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sms' | 'whatsapp'>('whatsapp');
  const [texts, setTexts] = useState({
    incoming: "Namaste! Aapka call receive nahi ho paya. Business Details ke liye niche link par click karein: https://automsg.in",
    missed: "Abhi hum busy hain. Hum aapko thodi der mein call back karenge. Tab tak hamari services yahan dekhein: https://automsg.in",
  });
  const [attachments, setAttachments] = useState<{ [key: string]: string | null }>({
    incoming: null,
    missed: null
  });

  const saveTemplates = () => {
    alert("Configurations synced to Cloud Engine! ✅");
  };

  const handleFileChange = (type: string) => {
    // Mock file picker
    alert("Image Selected: business_card.png (MOCK)");
    setAttachments({ ...attachments, [type]: "business_card.png" });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-24 animate-fadeIn">
      {/* Platform Toggle */}
      <div className="flex bg-white p-2 rounded-[32px] shadow-sm border border-gray-100 max-w-sm mx-auto">
        <button 
          onClick={() => setActiveTab('whatsapp')}
          className={`flex-1 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${activeTab === 'whatsapp' ? 'bg-green-500 text-white shadow-lg' : 'text-gray-400'}`}
        >
          <i className="fab fa-whatsapp text-lg"></i> WhatsApp
        </button>
        <button 
          onClick={() => setActiveTab('sms')}
          className={`flex-1 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${activeTab === 'sms' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400'}`}
        >
          <i className="fas fa-comment-alt text-sm"></i> SMS
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Template Block */}
        {[
          { key: 'incoming', label: 'Incoming Call', icon: 'fa-phone-alt', color: 'blue' },
          { key: 'missed', label: 'Missed Call', icon: 'fa-phone-slash', color: 'red' }
        ].map((block) => (
          <div key={block.key} className="bg-white p-10 rounded-[48px] shadow-sm border border-gray-100 flex flex-col space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-gray-900 tracking-tighter">{block.label}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Response Message</p>
              </div>
              <div className={`w-14 h-14 bg-${block.color}-50 text-${block.color}-600 rounded-3xl flex items-center justify-center text-xl`}>
                <i className={`fas ${block.icon}`}></i>
              </div>
            </div>

            <textarea 
              value={(texts as any)[block.key]}
              onChange={(e) => setTexts({...texts, [block.key]: e.target.value})}
              className="w-full bg-gray-50 border-4 border-transparent focus:border-blue-600/10 p-8 rounded-[32px] outline-none font-bold text-gray-700 text-sm min-h-[180px] resize-none transition-all"
              placeholder="Type your auto-reply here..."
            />

            {/* Media Attachment Section (WhatsApp Only) */}
            {activeTab === 'whatsapp' && (
              <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => handleFileChange(block.key)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-black text-[9px] uppercase tracking-widest transition-all ${attachments[block.key] ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                  >
                    <i className="fas fa-paperclip"></i>
                    {attachments[block.key] ? 'Image Attached' : 'Attach Details/Card'}
                  </button>
                  {attachments[block.key] && (
                    <button onClick={() => setAttachments({...attachments, [block.key]: null})} className="text-red-400 text-xs">
                      <i className="fas fa-times-circle"></i>
                    </button>
                  )}
                </div>
                <div className="text-[10px] font-black text-gray-300 uppercase">Chars: {(texts as any)[block.key].length}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Deploy Button */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] max-w-xl z-30">
        <button 
          onClick={saveTemplates}
          className="w-full bg-[#121212] text-white py-7 rounded-[36px] font-black text-xs uppercase tracking-[0.5em] shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-4 border-b-8 border-blue-600 group"
        >
          <i className="fas fa-satellite-dish animate-pulse"></i> Deploy Configuration
        </button>
      </div>
    </div>
  );
};

export default Templates;
