/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Package, Terminal } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b141a] text-[#e9edef] p-6 md:p-12 flex items-center justify-center" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <div className="max-w-4xl w-full mx-auto bg-[#111b21] rounded-xl shadow-2xl border border-white/5 overflow-hidden flex flex-col">
        {/* GNOME 50 Headerbar */}
        <div className="bg-[#303030] px-2 py-2 flex items-center justify-between border-b border-black/40 shadow-sm relative z-10 select-none">
          <div className="flex-1"></div>
          <div className="text-[15px] font-bold text-[#ffffff] font-sans tracking-wide">
            WhatsApp
          </div>
          <div className="flex-1 flex items-center justify-end gap-1.5 pr-1">
            <div className="w-[34px] h-[34px] rounded-full hover:bg-white/10 flex items-center justify-center cursor-default transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#e6e6e6]"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </div>
            <div className="w-[34px] h-[34px] rounded-full hover:bg-white/10 flex items-center justify-center cursor-default transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#e6e6e6]"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
            </div>
            <div className="w-[34px] h-[34px] rounded-full hover:bg-[#e01b24] flex items-center justify-center cursor-default transition-colors bg-white/10 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#e6e6e6] group-hover:text-white"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </div>
          </div>
        </div>
        
        <div className="p-8 space-y-8 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-[#0b141a]">
          {/* Header */}
          <div className="flex items-center space-x-4 border-b border-white/5 pb-6 bg-[#202c33] p-6 rounded-xl shadow-sm">
            <div className="p-3 bg-[#00a884]/20 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-[#00a884]" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-medium tracking-tight text-[#e9edef]">WhatsApp Desktop Wrapper</h1>
              <p className="text-[#8696a0] mt-1 text-sm">Electron scaffold generated successfully.</p>
            </div>
          </div>

          {/* Notice */}
          <div className="bg-[#202c33] border border-white/5 rounded-xl p-6 flex gap-4 shadow-sm">
            <Package className="w-6 h-6 text-[#00a884] shrink-0" />
            <div>
              <h3 className="font-medium text-[#e9edef]">Native Application Required</h3>
              <p className="text-[#8696a0] mt-2 text-sm leading-relaxed">
                Because this is a web-based preview environment, we cannot run or compile native <code className="text-[#d1d7db] font-mono bg-[#2a3942] px-1.5 py-0.5 rounded text-xs">.deb</code> desktop applications directly in the browser. 
                However, the complete Electron source code has been generated in the workspace under the <code className="text-[#d1d7db] font-mono bg-[#2a3942] px-1.5 py-0.5 rounded text-xs">/whatsapp-desktop</code> directory. Follow the instructions below to build and install it on your local Linux machine.
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-4 bg-[#111b21] rounded-xl border border-white/5 overflow-hidden">
            <div className="bg-[#202c33] p-4 border-b border-white/5">
              <h2 className="text-lg font-medium text-[#e9edef] flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#8696a0]" />
                Build Instructions
              </h2>
            </div>
            
            <div className="flex flex-col">
              <Step 
                number="1"
                title="Export the Project"
                description="Export or download the project source code, then extract it on your local machine."
              />
              <Step 
                number="2"
                title="Navigate to the Application Directory"
                description="Open your terminal and change into the newly generated Electron folder."
                code="cd path/to/extracted/whatsapp-desktop"
              />
              <Step 
                number="3"
                title="Install Dependencies"
                description="Install the required Node.js packages, including Electron and Electron Forge."
                code="npm install"
              />
              <Step 
                number="4"
                title="Build the .deb Package"
                description="Run the build script. This will generate the .deb installer in the out/make directory."
                code="npm run make"
              />
              <Step 
                number="5"
                title="Install on your System"
                description="Install the generated package using your package manager."
                code="sudo dpkg -i out/make/deb/x64/whatsapp-desktop-1.0.0-amd64.deb"
              />
            </div>
          </div>
          {/* GitHub Actions Notice */}
          <div className="bg-[#111b21] rounded-xl border border-white/5 overflow-hidden mt-8">
            <div className="bg-[#202c33] p-4 border-b border-white/5 flex items-center justify-between">
              <h2 className="text-lg font-medium text-[#e9edef] flex items-center gap-2">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-[#8696a0]"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub Automated Releases
              </h2>
            </div>
            <div className="p-5 flex gap-4">
               <div className="space-y-3">
                 <p className="text-[14px] text-[#8696a0] leading-relaxed">
                   A GitHub Actions workflow has been added. If you push this repository to GitHub, you can automatically build and publish the <code className="text-[#d1d7db] font-mono bg-[#2a3942] px-1 py-0.5 rounded text-xs">.deb</code> package without running it locally.
                 </p>
                 <ul className="list-disc pl-5 text-[14px] text-[#8696a0] space-y-1">
                   <li>Export the project to GitHub.</li>
                   <li>The GitHub Action will automatically run on every push to the main branch.</li>
                   <li>The action will automatically install dependencies, build the package, and attach the <code>.deb</code> installer to a new GitHub Release with an auto-generated version.</li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({ number, title, description, code }: { number: string, title: string, description: string, code?: string }) {
  return (
    <div className="border-b border-white/5 p-4 flex gap-4 hover:bg-[#202c33] transition-colors duration-200 cursor-default last:border-b-0 bg-[#111b21]">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#6a7175] flex items-center justify-center text-lg font-bold text-white shadow-sm">
        {number}
      </div>
      <div className="space-y-1 flex-grow min-w-0 flex flex-col justify-center">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-[16px] font-medium text-[#e9edef] truncate">{title}</h3>
        </div>
        <p className="text-[13px] text-[#8696a0] leading-relaxed">{description}</p>
        {code && (
          <div className="mt-3 bg-[#2a3942] rounded-lg p-3 font-mono text-[13px] text-[#d1d7db] overflow-x-auto shadow-inner border border-white/5">
            {code}
          </div>
        )}
      </div>
    </div>
  );
}
