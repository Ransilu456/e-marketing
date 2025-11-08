import Image from "next/image";

export default function Hero() {
  return (
<main
  className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-white bg-[#06091A] bg-[url('/hero-bg.svg')] bg-cover bg-center bg-no-repeat"
>

      {/* --- GLASS OVERLAY --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#06091A]/90 to-[#06091A] z-0 backdrop-blur-[2px]" />

      {/* --- MAIN CONTENT --- */}
      <section className="relative z-10 text-center max-w-6xl mt-32">
        {/* Tagline */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 rounded-full backdrop-blur-md bg-white/5 px-5 py-2 border border-white/10 shadow-inner">
            <span className="text-sm text-gray-300 tracking-wide uppercase">
              Unlimited & Maximum
            </span>
            <span className="rounded-full border border-[#3A55D2]/40 bg-[#1C3ED2]/20 px-3 py-1 text-sm text-white/80">
              Results
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-10 font-poppins text-balance text-[clamp(32px,6vw,64px)] leading-tight font-normal">
          Your Entire{" "}
          <span className="bg-gradient-to-r from-[#1C3ED2] to-[#978BF2] bg-clip-text text-transparent font-semibold">
            Marketing Team
          </span>
          <br />
          All in One{" "}
          <span className="block font-pristina text-[clamp(72px,12vw,128px)] leading-[1.1]">
            Solution
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-5 text-sm text-gray-300 tracking-wide text-balance">
          Not Only Marketing — Also Web Design & Mobile Application Development
        </p>

        {/* Diagram Image */}
        <div className="relative w-full h-[300px] mt-10">
          <Image
            src="/di.png"
            alt="Diagram background"
            fill
            className="object-contain pointer-events-none select-none"
            priority
          />
        </div>
      </section>
    </main>
  );
}
