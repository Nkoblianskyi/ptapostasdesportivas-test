"use client"

import { useState } from "react"
import { AdvertiserInfoModal } from "./advertiser-info-modal"
import { Trophy, Shield, Star, TrendingUp } from "./icons"
import Image from "next/image"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative pt-16 md:pt-24 pb-3 md:pb-8 bg-gradient-to-b from-porto-cream to-porto-white md:bg-gradient-to-b md:from-porto-cream md:to-porto-white max-h-[250px] md:max-h-[350px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/mobile-hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-white/65 md:hidden" />

      <div className="absolute top-12 md:top-20 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-porto-gold to-transparent" />

      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] h-full flex flex-col justify-center relative z-10">

        <div className="text-center mb-1 md:mb-3">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-black mb-1 md:mb-2 leading-tight text-balance">
            <span className="text-porto-green">Melhores Sites de Apostas</span>{" "}
            <span className="text-porto-gold">Portugal 2025</span>
          </h1>

          <p className="text-xs md:text-base text-porto-navy font-bold mb-1 md:mb-3 leading-snug">
            Rankings verificados • Bónus exclusivos • 100% Legal SRIJ
          </p>

          <div className="flex items-center justify-center gap-1.5 md:gap-2 mb-1 md:mb-2">
            <div className="h-0.5 w-6 md:w-12 bg-porto-green" />
            <p className="text-[9px] md:text-xs text-porto-grey font-bold uppercase tracking-wider">
              Atualizado {new Date().toLocaleDateString("pt-PT", { month: "long", year: "numeric" })}
            </p>
            <div className="h-0.5 w-6 md:w-12 bg-porto-gold" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-2 mb-1 md:mb-3">
          <div className=" bg-porto-white border-2 border-porto-green/20 rounded-lg p-1.5 md:p-3 text-center hover:border-porto-green hover:shadow-lg transition-all group">
            <Image src="/srij.svg" alt="SRIJ" width={24} height={24} className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-0.5 md:mb-1" />
            <p className="text-[9px] md:text-xs font-black text-porto-navy">100% Legal</p>
          </div>

          <div className="bg-porto-white border-2 border-porto-gold/20 rounded-lg p-1.5 md:p-1.5 text-center hover:border-porto-gold hover:shadow-lg transition-all group">
            <Star className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-0.5 md:mb-1 text-porto-gold group-hover:scale-110 transition-transform" />
            <p className="text-[9px] md:text-xs font-black text-porto-navy">Bónus Exclusivos</p>
          </div>

          <div className="hidden md:block bg-porto-white border-2 border-porto-green/20 rounded-lg p-2 md:p-3 text-center hover:border-porto-green hover:shadow-lg transition-all group">
            <TrendingUp className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-1 text-porto-green group-hover:scale-110 transition-transform" />
            <p className="text-[10px] md:text-xs font-black text-porto-navy">Melhores Odds</p>
          </div>

          <div className="hidden md:block bg-porto-white border-2 border-porto-gold/20 rounded-lg p-2 md:p-3 text-center hover:border-porto-gold hover:shadow-lg transition-all group">
            <Trophy className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-1 text-porto-gold group-hover:scale-110 transition-transform" />
            <p className="text-[10px] md:text-xs font-black text-porto-navy">Sites Confiáveis</p>
          </div>
        </div>

        <div className="text-center pt-1 md:pt-2 border-t border-porto-grey-light">
          <div className="flex items-center justify-center gap-1.5 md:gap-2 flex-wrap">
            <div className="bg-red-50 border-l-2 border-red-500 rounded-r px-1.5 md:px-2 py-0.5">
              <p className="text-[9px] md:text-xs text-red-700 font-black">+18 | Jogue com Responsabilidade</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-[9px] md:text-xs text-porto-green hover:text-porto-green-dark font-bold underline decoration-1 decoration-porto-gold hover:decoration-porto-green transition-colors"
            >
              Info Publicitária
            </button>
          </div>
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
