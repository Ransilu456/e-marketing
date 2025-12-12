import Link from "next/link";


export default function Footer() {
  return (
    <footer className="py-16 bg-zinc-900 text-zinc-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2.5 mb-4 md:mb-0">
          <div className="w-9 h-9 bg-(--color-primary) rounded-lg flex items-center justify-center text-white shadow-lg">
            <span className="font-serif italic font-bold text-xl leading-none pt-1 pr-0.5">E</span>
          </div>
          <span className="font-semibold tracking-tight text-white">Marketing Paradice</span>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="#" className="hover:text-white transition">About Us</Link>
          <Link href="#" className="hover:text-white transition">Portfolio</Link>
          <Link href="#" className="hover:text-white transition">Contact</Link>
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-light order-3 md:border-none mt-6 md:mt-0">&copy; 2025 Marketing Paradice. <br /> All rights reserved.</span>
          <span className="text-[10px] font-light order-3 md:border-none mt-6 md:mt-0">Developed by E Marketing Paradice Design Lab</span>
        </div>
      </div>
    </footer>
  );
}