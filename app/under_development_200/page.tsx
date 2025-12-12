import Link from "next/link";
import { AlertTriangle, Home, Bug } from "lucide-react";

export default function Page() {
  return (
    <div 
      id="view-404" 
      className="view-section w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-white"
    >
      
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neutral-100 via-white to-white"
      ></div>
      
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[100px] rounded-full pointer-events-none opacity-40 bg-black/5"
      ></div>

      <div className="relative z-10 text-center px-6">
        
        <div 
          className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl border shadow-xl relative bg-white border-neutral-200"
        >
          <AlertTriangle className="w-8 h-8 text-orange-500" />
          <div className="absolute inset-0 border rounded-2xl animate-ping opacity-20 border-neutral-300"></div>
        </div>

        <h1 
          className="text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-neutral-900 to-neutral-600 mb-2"
        >
          404
        </h1>
        
        <h2 
          className="text-2xl font-medium mb-4 tracking-tight text-neutral-900"
        >
          Page is under development
        </h2>
        
        <p 
          className="max-w-sm mx-auto mb-10 leading-relaxed text-neutral-600"
        >
          The page you are looking for is in the phase testing in this dimension.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link 
            href="/" 
            className="h-10 px-6 rounded-full text-sm font-medium transition-colors flex items-center gap-2 bg-neutral-900 text-white hover:bg-neutral-800 shadow-md"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          
          <Link 
            href="/report" 
            className="h-10 px-6 rounded-full border text-sm font-medium transition-colors flex items-center gap-2 border-neutral-300 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 shadow-sm"
          >
            <Bug className="w-4 h-4" />
            Report Issue
          </Link>
        </div>
      </div>

      <div 
        className="absolute bottom-0 w-full h-32 bg-linear-to-t z-20 from-white to-transparent"
      ></div>
      
      <div className="absolute bottom-0 w-full h-full opacity-10 pointer-events-none transform perspective-[1000px] rotate-x-60 scale-150 origin-bottom bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-size-[25px_25px]"></div>
    </div>
  );
}