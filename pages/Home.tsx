
import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [syncToken, setSyncToken] = useState("");
  const [deviceConnected, setDeviceConnected] = useState(false);
  const [logs, setLogs] = useState<any[]>([]);

  const generateToken = () => {
    const token = 'AM-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    setSyncToken(token);
    addLog("System", "Initializing secure gateway...");
    
    setTimeout(() => {
      setDeviceConnected(true);
      addLog("System", "Android Node detected: Samsung Galaxy S23 (v14.0)");
    }, 4000);
  };

  const addLog = (type: string, msg: string) => {
    setLogs(prev => [{ 
      id: Date.now(), 
      time: new Date().toLocaleTimeString(), 
      type, 
      msg,
      status: type === 'System' ? 'info' : 'success'
    }, ...prev].slice(0, 8));
  };

  const simulateTrigger = (callType: string) => {
    if (!deviceConnected) return alert("Pehle device link karein!");
    addLog("Call", `Inbound ${callType} from +91 91234 56789`);
    setTimeout(() => {
      addLog("Bot", `Replied via WhatsApp + SMS successfully.`);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20 animate-fadeIn">
      {/* Dynamic Status Header */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 bg-gradient-to-br from-[#1a1c2e] to-[#121212] rounded-[40px] p-10 text-white shadow-2xl relative border border-white/5">
          <div className="relative z-10 space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">Dashboard Live</span>
              </div>
              <div className="text-[10px] font-mono opacity-40">v5.0.0-PRO</div>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-5xl font-black tracking-tighter leading-none">Command <span className="text-blue-500">Center</span></h1>
              <p className="text-gray-400 font-medium">Link your Android device to start real-time automation.</p>
            </div>

            <div className="flex flex-wrap gap-4">
              {!syncToken ? (
                <button 
                  onClick={generateToken}
                  className="bg-blue-600 text-white px-10 py-5 rounded-3xl font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-blue-600/20 hover:bg-blue-500 transition-all flex items-center gap-3"
                >
                  Start Sync Engine <i className="fas fa-plug text-sm"></i>
                </button>
              ) : (
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-[24px] border border-white/10 flex items-center gap-10">
                  <div>
                    <p className="text-[9px] font-black uppercase opacity-40 mb-1 tracking-widest">Your Sync Key</p>
                    <p className="text-3xl font-mono font-black text-blue-500 tracking-widest">{syncToken}</p>
                  </div>
                  <button className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <i className="fas fa-copy opacity-40"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
          <i className="fas fa-satellite-dish absolute -bottom-10 -right-10 text-[220px] opacity-5 -rotate-12"></i>
        </div>

        <div className="lg:w-80 bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-xl font-black text-gray-900 tracking-tighter">Readiness</h3>
            <div className="space-y-4">
              {[
                { label: 'Web Server', ok: true },
                { label: 'Database', ok: true },
                { label: 'APK Socket', ok: deviceConnected },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500">{item.label}</span>
                  <i className={`fas ${item.ok ? 'fa-check-circle text-emerald-500' : 'fa-circle-notch animate-spin text-gray-200'}`}></i>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-8 border-t border-gray-50">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Device Info</p>
            <div className="flex items-center gap-3 text-xs font-bold">
              <i className="fab fa-android text-lg"></i>
              <span>{deviceConnected ? 'SAMSUNG-G23-X' : 'Disconnected'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Monitor Console */}
        <div className="lg:col-span-3 bg-[#0a0c10] rounded-[48px] shadow-2xl overflow-hidden border-8 border-[#1a1c24] flex flex-col min-h-[500px]">
          <div className="bg-[#1a1c24] px-10 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-4">Automation_Console_Live</span>
            </div>
            <div className="flex gap-4">
              <button onClick={() => simulateTrigger('Inbound')} className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">Test Inbound</button>
              <button onClick={() => simulateTrigger('Missed')} className="bg-red-500/10 hover:bg-red-500/20 text-red-500 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">Test Missed</button>
            </div>
          </div>
          
          <div className="flex-1 p-10 font-mono text-[13px] overflow-y-auto custom-scrollbar">
            {logs.length > 0 ? (
              <div className="space-y-3">
                {logs.map(log => (
                  <div key={log.id} className="flex gap-6 animate-fadeIn">
                    <span className="text-gray-600 shrink-0">{log.time}</span>
                    <span className={`font-black shrink-0 ${log.type === 'System' ? 'text-blue-400' : log.type === 'Call' ? 'text-yellow-400' : 'text-emerald-400'}`}>
                      [{log.type.toUpperCase()}]
                    </span>
                    <span className="text-gray-300 leading-relaxed">{log.msg}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center opacity-10">
                <i className="fas fa-terminal text-9xl mb-6"></i>
                <p className="text-2xl font-black uppercase tracking-[0.4em]">Listening...</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Help Card */}
        <div className="bg-white p-10 rounded-[48px] shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="space-y-8">
            <h3 className="text-xl font-black text-gray-900 tracking-tighter">Instructions</h3>
            <div className="space-y-6">
              {[
                { icon: 'fa-cloud-download-alt', label: 'Download APK', desc: 'Get the mobile listener app.' },
                { icon: 'fa-qrcode', label: 'Sync Device', desc: 'Enter the key to pair.' },
                { icon: 'fa-shield-check', label: 'Allow Access', desc: 'Enable accessibility service.' }
              ].map((step, sidx) => (
                <div key={sidx} className="flex gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[11px] font-black text-gray-900 uppercase tracking-tight">{step.label}</p>
                    <p className="text-[10px] font-bold text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="w-full bg-gray-900 text-white py-5 rounded-[24px] font-black text-[10px] uppercase tracking-widest shadow-xl">
            View Tutorials
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
