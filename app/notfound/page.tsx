import Link  from "next/link";
import { AlertTriangle, Home, Bug } from "lucide-react";

export default function Page() {

  return (
    <div id="view-404" className={`view-section w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-black`}>
        
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neutral-900 via-black to-black"`}></div>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[100px] rounded-full pointer-events-none opacity-20 bg-white/5"`}></div>

      <div className="relative z-10 text-center px-6">
        <div className={`mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl border shadow-2xl relative $bg-neutral-900 border-white/10"`}>
          <AlertTriangle className={`w-8 h-8 text-neutral-400`} />
          <div className={`absolute inset-0 border rounded-2xl animate-ping opacity-20"border-white/20"`}></div>
        </div>

        <h1 className={`text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-b "from-white to-white/10 mb-2`}>404</h1>
        <h2 className={`text-2xl font-medium mb-4 tracking-tight text-white`}>Page disappeared</h2>
        
        <p className={`max-w-sm mx-auto mb-10 leading-relaxed "text-neutral-500"`}>
          The page you are looking for has been moved, deleted, or possibly never existed in this dimension.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className={`h-10 px-6 rounded-full text-sm font-medium transition-colors flex items-center gap-2 bg-white text-black hover:bg-neutral-200"`}>
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          <Link href="/report" className={`h-10 px-6 rounded-full border text-sm font-medium transition-colors flex items-center gap-2 border-white/10 text-neutral-400 hover:text-white hover:bg-white/5"`}>
            <Bug className="w-4 h-4" />
            Report Issue
          </Link>
        </div>
      </div>

      <div className={`absolute bottom-0 w-full h-32 bg-linear-to-t z-20 from-black to-transparent"`}></div>
      <div className={`absolute bottom-0 w-full h-full grid-bg opacity-20 pointer-events-none transform perspective-[1000px] rotate-x-60 scale-150 origin-bottom`}></div>
    </div>
  );
};