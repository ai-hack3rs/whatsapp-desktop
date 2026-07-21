/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MonitorSmartphone, Package, Terminal } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b141a] text-[#e9edef] p-6 md:p-12 flex items-center justify-center" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <div className="max-w-4xl w-full mx-auto bg-[#111b21] rounded-xl shadow-2xl border border-white/5 overflow-hidden flex flex-col">
        {/* Window controls header */}
        <div className="bg-[#202c33] px-4 py-3 flex items-center gap-2 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        
        <div className="p-8 space-y-8 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-[#0b141a]">
          {/* Header */}
          <div className="flex items-center space-x-4 border-b border-white/5 pb-6 bg-[#202c33] p-6 rounded-xl shadow-sm">
            <div className="p-3 bg-[#00a884]/20 rounded-xl">
              <MonitorSmartphone className="w-8 h-8 text-[#00a884]" />
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
                description="Click the AI Studio settings menu (top right) and select 'Export to ZIP', then extract it on your local machine."
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
                   <li>Export the project to GitHub using the AI Studio settings menu.</li>
                   <li>Create a new release tag starting with <code>v</code> (e.g., <code>v1.0.0</code>) and push it.</li>
                   <li>The action will automatically install dependencies, build the package, and attach the <code>.deb</code> installer to the GitHub Release.</li>
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
