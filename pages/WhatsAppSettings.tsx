
import React, { useState } from 'react';

const WhatsAppSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'link' | 'plans' | 'logic'>('plans');

  const plans = [
    { title: "Standard", price: "750", validity: "3 Months", features: ["Auto SMS Reply", "Auto WhatsApp Reply", "Unlimited Calls", "Priority Support"] },
    { title: "Premium", price: "2000", validity: "1 Year", features: ["Everything in Standard", "Image/Details Send", "CRM Integration", "Custom Branding", "Save ₹1000+"] }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-24 animate-fadeIn">
      {/* Dynamic Header */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-5xl font-black text-gray-900 tracking-tighter">Bot Management</h1>
        <p className="text-gray-500 font-medium max-w-lg mx-auto">Apne automation engine ko scale karein aur powerful features unlock karein.</p>
      </div>

      {/* Modern Tabs */}
      <div className="flex bg-white p-2 rounded-[32px] shadow-sm border border-gray-100 max-w-2xl mx-auto">
        {[
          { id: 'plans', label: 'Subscription Plans', icon: 'fa-crown' },
          { id: 'link', label: 'Connection Status', icon: 'fa-link' },
          { id: 'logic', label: 'Developer Engine', icon: 'fa-code' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 flex flex-col items-center py-4 rounded-2xl transition-all ${
              activeTab === tab.id ? 'bg-blue-600 text-white shadow-xl translate-y-[-4px]' : 'text-gray-400 hover:bg-gray-50'
            }`}
          >
            <i className={`fas ${tab.icon} mb-2 text-sm`}></i>
            <span className="font-black text-[9px] uppercase tracking-[0.2em]">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="min-h-[600px]">
        {activeTab === 'plans' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slideDown">
            {plans.map((plan, i) => (
              <div key={i} className={`p-12 rounded-[56px] border-4 flex flex-col justify-between ${i === 1 ? 'bg-gray-900 text-white border-blue-500 shadow-2xl scale-105' : 'bg-white text-gray-900 border-gray-100 shadow-sm'}`}>
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h3 className="text-3xl font-black tracking-tighter">{plan.title}</h3>
                      <p className={`text-xs font-black uppercase tracking-widest ${i === 1 ? 'text-blue-400' : 'text-gray-400'}`}>{plan.validity}</p>
                    </div>
                    {i === 1 && <span className="bg-blue-600 text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest animate-pulse">Most Popular</span>}
                  </div>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tighter">₹{plan.price}</span>
                    <span className="text-gray-500 font-bold text-sm">/period</span>
                  </div>

                  <div className="space-y-4">
                    {plan.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-4">
                        <i className={`fas fa-check-circle ${i === 1 ? 'text-blue-400' : 'text-emerald-500'}`}></i>
                        <span className="text-sm font-bold opacity-80">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className={`w-full py-6 rounded-[28px] font-black text-xs uppercase tracking-[0.4em] mt-12 transition-all active:scale-95 ${i === 1 ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'bg-gray-900 text-white shadow-xl shadow-gray-900/10'}`}>
                  Activate Plan
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'link' && (
          <div className="bg-white p-20 rounded-[56px] shadow-sm border border-gray-100 text-center space-y-10 animate-slideDown">
            <div className="relative inline-block">
               <div className="w-40 h-40 bg-green-50 text-green-600 rounded-[50px] flex items-center justify-center text-6xl shadow-inner mx-auto">
                  <i className="fab fa-whatsapp"></i>
               </div>
               <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white border-4 border-white animate-bounce">
                  <i className="fas fa-bolt"></i>
               </div>
            </div>
            <div className="max-w-md mx-auto space-y-4">
               <h2 className="text-4xl font-black text-gray-900 tracking-tighter leading-none">WhatsApp Engine Ready</h2>
               <p className="text-gray-500 font-medium leading-relaxed px-8">Aapka mobile engine dashboard se synced hai. Ab har call par automated messages fire honge.</p>
            </div>
            <div className="flex gap-4 justify-center">
               <div className="bg-gray-50 px-8 py-4 rounded-3xl border border-gray-100">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Status</p>
                  <p className="text-emerald-600 font-black">Connected</p>
               </div>
               <div className="bg-gray-50 px-8 py-4 rounded-3xl border border-gray-100">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Queue</p>
                  <p className="text-blue-600 font-black">0 Pending</p>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'logic' && (
          <div className="bg-gray-900 rounded-[56px] shadow-2xl p-12 border-4 border-[#1c2128] space-y-8 animate-slideDown">
             <div className="flex items-center justify-between border-b border-white/5 pb-8">
                <div>
                   <h2 className="text-2xl font-black text-white tracking-tight">Android Kernel Logic</h2>
                   <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Version 5.0 Stable / Kotlin Runtime</p>
                </div>
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
             </div>

             <div className="bg-[#0b141a] rounded-[32px] p-10 font-mono text-[13px] text-blue-400 overflow-x-auto shadow-inner leading-relaxed">
                <p className="text-gray-600 italic mb-4">// Listener triggered when phone rings</p>
                <p className="mb-2"><span className="text-purple-400">class</span> <span className="text-yellow-400">CallListener</span> : PhoneStateListener() &#123;</p>
                <p className="ml-6 mb-2">override <span className="text-purple-400">fun</span> <span className="text-yellow-400">onCallStateChanged</span>(state: Int, number: String?) &#123;</p>
                <p className="ml-12 mb-2">if (state == <span className="text-white">TelephonyManager.CALL_STATE_RINGING</span>) &#123;</p>
                <p className="ml-18 text-emerald-400 font-bold">// Fetch Template from GitHub Dashboard API</p>
                <p className="ml-18">val msg = <span className="text-white">ApiService.getReplyTemplate(number)</span></p>
                <p className="ml-18 text-gray-600">// Trigger WhatsApp via AccessibilityService</p>
                <p className="ml-18"><span className="text-white">WhatsAppAutomator.send(number, msg)</span></p>
                <p className="ml-12">&#125;</p>
                <p className="ml-6">&#125;</p>
                <p className="">&#125;</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Accessibility", desc: "Background mein auto-send handle karta hai." },
                  { title: "Broadcast", desc: "Android System intents listen karta hai." },
                  { title: "Persistence", desc: "App band hone par bhi service chalti rahegi." }
                ].map((d, k) => (
                  <div key={k} className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                     <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">{d.title}</h4>
                     <p className="text-[11px] text-gray-500 leading-relaxed font-bold">{d.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppSettings;
