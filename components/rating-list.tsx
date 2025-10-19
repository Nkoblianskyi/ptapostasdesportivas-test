"use client"
import Image from "next/image"
import { Star, ExternalLink, Award } from "./icons"
import type { BettingSite } from "@/types"

interface RatingListProps {
  sites: BettingSite[]
}

export function RatingList({ sites }: RatingListProps) {
  const renderStars = (rating: number) => {
    const starElements = []
    const maxStars = 5
    const starValue = rating / 2

    for (let i = 0; i < maxStars; i++) {
      const fillPercentage = Math.min(Math.max((starValue - i) * 100, 0), 100)

      if (fillPercentage === 100) {
        starElements.push(<Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-[#FFD700] text-[#FFD700]" />)
      } else if (fillPercentage === 0) {
        starElements.push(<Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-gray-300" />)
      } else {
        starElements.push(
          <div key={i} className="relative h-4 w-4 md:h-5 md:w-5">
            <Star className="absolute h-4 w-4 md:h-5 md:w-5 text-gray-300" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="h-4 w-4 md:h-5 md:w-5 fill-[#FFD700] text-[#FFD700]" />
            </div>
          </div>,
        )
      }
    }

    return starElements
  }

  const DisclaimerBadge = () => (
    <div className="bg-amber-50 border border-amber-300 rounded px-3 py-1.5 flex items-center gap-2 text-xs">
      <span className="font-black text-amber-900">18+</span>
      <span className="text-amber-800">Jogue com responsabilidade</span>
      <span className="text-amber-700">•</span>
      <span className="text-amber-800 flex items-center gap-1">
        Sair do site <ExternalLink className="w-3 h-3" />
      </span>
    </div>
  )

  return (
    <section className="py-4 md:py-4">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        <div className="mb-8 md:mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-porto-green" />
            <Award className="w-6 h-6 text-porto-gold" />
            <div className="h-1 w-12 bg-porto-gold" />
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-porto-navy mb-2">RANKING OFICIAL 2025</h2>
          <p className="text-sm md:text-base text-porto-grey font-semibold">
            Análise completa e imparcial dos melhores sites de apostas
          </p>
        </div>

        <div className="grid gap-4 md:gap-6">
          {sites.map((site, index) => {
            const isFirstPlace = index === 0
            const showBadge = index < 3 && site.badges.length > 0
            const rankNumber = index + 1

            return (
              <a
                key={site.id}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative overflow-visible group transition-all duration-300 ${
                  isFirstPlace
                    ? "bg-gradient-to-br from-green-50 via-emerald-50 to-yellow-50 border-2 border-[#FFD700] shadow-xl rounded-lg hover:shadow-2xl"
                    : "bg-white border-2 border-[#006633] rounded-lg shadow-lg hover:shadow-xl hover:border-[#006633]/80"
                }`}
              >
                {isFirstPlace && (
                  <>
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-porto-green">
                        <circle cx="80" cy="20" r="30" fill="currentColor" />
                        <circle cx="60" cy="40" r="20" fill="currentColor" opacity="0.5" />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10 pointer-events-none">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-porto-gold">
                        <circle cx="20" cy="80" r="30" fill="currentColor" />
                        <circle cx="40" cy="60" r="20" fill="currentColor" opacity="0.5" />
                      </svg>
                    </div>
                    {/* Subtle stripe pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none rounded-lg overflow-hidden">
                      <div
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-porto-green/20 to-transparent"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 102, 51, 0.05) 10px, rgba(0, 102, 51, 0.05) 20px)",
                        }}
                      />
                    </div>
                  </>
                )}

                <div
                  className={`absolute top-3 left-3 z-20 ${
                    isFirstPlace ? "bg-[#FFD700]" : "bg-[#006633]"
                  } text-white font-bold text-base md:text-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg shadow-md`}
                >
                  {rankNumber}
                </div>

                {showBadge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div
                      className={`${
                        isFirstPlace ? "bg-[#FFD700]" : "bg-[#006633]"
                      } text-white text-xs md:text-sm font-black px-4 md:px-6 py-2 uppercase tracking-wider shadow-lg rounded-md border-2 border-white`}
                    >
                      {site.badges[0]}
                    </div>
                  </div>
                )}

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-[280px_1fr_240px_220px] items-center gap-6 p-8">
                    <div className="relative pl-8">
                      <div
                        className={`flex items-center justify-center bg-black rounded-lg p-6 h-[140px] border-2 shadow-md transition-all ${
                          isFirstPlace
                            ? "border-[#FFD700] group-hover:border-[#FFD700]/80"
                            : "border-gray-200 group-hover:border-[#006633]"
                        }`}
                      >
                        <div className="relative h-20 w-full">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-6 border-l-2 border-r-2 border-gray-200">
                      <p
                        className={`text-xs font-black mb-2 uppercase tracking-widest ${
                          isFirstPlace ? "text-[#FFD700]" : "text-[#006633]"
                        }`}
                      >
                        BÓNUS BOAS-VINDAS
                      </p>
                      <h3 className="text-gray-900 text-2xl md:text-3xl font-black leading-tight">{site.bonus}</h3>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-6 border-r-2 border-gray-200">
                      <p
                        className={`text-xs font-black mb-2 uppercase tracking-widest ${
                          isFirstPlace ? "text-[#FFD700]" : "text-[#006633]"
                        }`}
                      >
                        PONTUAÇÃO
                      </p>
                      <div className="relative mb-3">
                        <div
                          className={`text-5xl md:text-6xl font-black ${
                            isFirstPlace ? "text-black" : "text-[#006633]"
                          }`}
                        >
                          {site.rating.toFixed(1)}
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-1 mb-2">{renderStars(site.rating)}</div>
                      <p className="text-gray-600 text-xs font-bold">({site.reviews.toLocaleString()} avaliações)</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3 px-6">
                      <div
                        className={`w-full transition-all duration-300 text-white font-black py-5 px-6 rounded-lg text-center text-sm uppercase tracking-wider transform group-hover:scale-105 shadow-lg ${
                          isFirstPlace ? "bg-[#FFD700] hover:bg-[#FFC700]" : "bg-[#006633] hover:bg-[#005522]"
                        }`}
                      >
                        Registar Agora
                      </div>
                      <p
                        className={`font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors ${
                          isFirstPlace
                            ? "text-[#FFD700] group-hover:text-[#FFC700]"
                            : "text-[#006633] group-hover:text-[#005522]"
                        }`}
                      >
                        Visitar Site <ExternalLink className="w-4 h-4" />
                      </p>
                    </div>
                  </div>
                  <div className="px-8 pb-6 flex justify-center">
                    <DisclaimerBadge />
                  </div>
                </div>

                {/* Tablet Layout */}
                <div className="hidden md:block lg:hidden">
                  <div className="p-6">
                    <div className="grid grid-cols-[180px_1fr_180px] gap-4 items-center mb-4">
                      {/* Logo */}
                      <div className="relative pl-6">
                        <div
                          className={`flex items-center justify-center bg-black rounded-lg p-4 h-[100px] border-2 shadow-md transition-all ${
                            isFirstPlace
                              ? "border-[#FFD700] group-hover:border-[#FFD700]/80"
                              : "border-gray-200 group-hover:border-[#006633]"
                          }`}
                        >
                          <div className="relative h-16 w-full">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Bonus */}
                      <div className="flex flex-col items-center justify-center text-center px-4 border-l-2 border-r-2 border-gray-200">
                        <p
                          className={`text-xs font-black mb-2 uppercase tracking-widest ${
                            isFirstPlace ? "text-[#FFD700]" : "text-[#006633]"
                          }`}
                        >
                          BÓNUS BOAS-VINDAS
                        </p>
                        <h3 className="text-gray-900 text-lg font-black leading-tight">{site.bonus}</h3>
                      </div>

                      {/* Rating */}
                      <div className="flex flex-col items-center justify-center text-center px-4">
                        <p
                          className={`text-xs font-black mb-1 uppercase tracking-widest ${
                            isFirstPlace ? "text-[#FFD700]" : "text-[#006633]"
                          }`}
                        >
                          PONTUAÇÃO
                        </p>
                        <div
                          className={`text-4xl font-black mb-2 ${isFirstPlace ? "text-[#FFD700]" : "text-[#006633]"}`}
                        >
                          {site.rating.toFixed(1)}
                        </div>
                        <div className="flex items-center justify-center gap-1 mb-1">{renderStars(site.rating)}</div>
                        <p className="text-gray-600 font-bold text-[10px]">
                          ({site.reviews.toLocaleString()} avaliações)
                        </p>
                      </div>
                    </div>

                    {/* Button Row */}
                    <div className="flex flex-col items-center justify-center gap-2 pt-4 border-t-2 border-gray-200">
                      <div
                        className={`w-full max-w-xs transition-all duration-300 text-white font-black py-4 px-6 rounded-lg text-center text-sm uppercase tracking-wider transform group-hover:scale-105 shadow-lg ${
                          isFirstPlace ? "bg-[#FFD700] hover:bg-[#FFC700]" : "bg-[#006633] hover:bg-[#005522]"
                        }`}
                      >
                        Registar Agora
                      </div>
                      <p
                        className={`font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors ${
                          isFirstPlace
                            ? "text-[#FFD700] group-hover:text-[#FFC700]"
                            : "text-[#006633] group-hover:text-[#005522]"
                        }`}
                      >
                        Visitar Site <ExternalLink className="w-4 h-4" />
                      </p>
                    </div>

                    {/* Disclaimer */}
                    <div className="pt-4 mt-4 border-t-2 border-gray-200 flex justify-center">
                      <DisclaimerBadge />
                    </div>
                  </div>
                </div>

                <div className="md:hidden">
                  <div className="p-4 pt-12">
                    {/* Logo and Bonus Row */}
                    <div className="grid grid-cols-2 gap-3 items-stretch mb-4">
                      {/* Logo */}
                      <div className="flex justify-center items-center">
                        <div
                          className={`bg-black p-3 w-full h-24 flex items-center justify-center border-2 rounded-lg ${
                            isFirstPlace ? "border-[#FFD700]" : "border-gray-200"
                          }`}
                        >
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            width={120}
                            height={60}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Bonus */}
                      <div className="text-center flex flex-col justify-center items-center px-2 py-3 bg-gray-100 rounded-lg">
                        <div
                          className={`uppercase font-black mb-1.5 text-xs ${isFirstPlace ? "text-[#FFD700]" : "text-[#006633]"}`}
                        >
                          BÓNUS
                        </div>
                        <div className="font-black text-black text-sm leading-tight">{site.bonus}</div>
                      </div>
                    </div>

                    {/* Rating Row - 3 columns: Rating | Stars+Reviews | Button */}
                    <div className="grid grid-cols-3 items-center gap-2 py-3 border-t-2 border-gray-200">
                      {/* Column 1: Rating */}
                      <div className="text-center">
                        <p
                          className={`text-xs font-black mb-1 uppercase ${isFirstPlace ? "text-[#FFD700]" : "text-[#006633]"}`}
                        >
                          NOTA
                        </p>
                        <div className={`text-3xl font-black ${isFirstPlace ? "text-[#FFD700]" : "text-[#006633]"}`}>
                          {site.rating.toFixed(1)}
                        </div>
                      </div>

                      {/* Column 2: Stars and Reviews */}
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex justify-center gap-0.5 mb-1">{renderStars(site.rating)}</div>
                        <div className="text-gray-600 font-bold text-[10px] text-center">
                          ({site.reviews.toLocaleString()})
                        </div>
                      </div>

                      {/* Column 3: Button */}
                      <div className="flex justify-center">
                        <div
                          className={`text-white text-xs px-3 py-2 font-black rounded-lg uppercase whitespace-nowrap shadow-md ${
                            isFirstPlace ? "bg-[#FFD700]" : "bg-[#006633]"
                          }`}
                        >
                          OBTER
                        </div>
                      </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="pt-3 mt-3 border-t-2 border-gray-200 flex justify-center">
                      <DisclaimerBadge />
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
