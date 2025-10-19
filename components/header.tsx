"use client"
import { Logo } from "./logo"

export function Header() {
  return (
    <header className="bg-porto-white fixed top-0 left-0 right-0 z-50 border-b-[6px] border-black shadow-xl">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-porto-green via-porto-gold to-porto-green" />

        <div className="flex items-center justify-center h-16 md:h-16">
          <div className="flex items-center gap-3 md:gap-4">
            <Logo size="sm" className="md:text-base lg:text-lg" />
            <p className="text-sm md:text-lg lg:text-xl font-bold uppercase tracking-wide">
              <span className="text-[#FF0000]">pt</span>
              <span className="text-[#006633]">apostas</span>
              <span className="text-[#FF0000]">desportivas</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
