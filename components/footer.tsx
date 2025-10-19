import Link from "next/link"
import Image from "next/image"



export function Footer() {
  return (
    <footer className="bg-white border-t-4 border-porto-green">
      <div className="container mx-auto px-4 max-w-[1280px] py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Column 1: Logo and About */}
          <div className="lg:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-3 md:gap-4">
                <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
                <p className="text-sm md:text-lg font-bold uppercase tracking-wide">
                  <span className="text-[#FF0000]">pt</span>
                  <span className="text-[#006633]">apostas</span>
                  <span className="text-[#FF0000]">desportivas</span>
                </p>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              A sua fonte confiável para comparações independentes de sites de apostas desportivas em Portugal.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 border-b-2 border-porto-green pb-2 inline-block">
              Links Rápidos
            </h3>
            <ul className="space-y-3 mt-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-porto-green transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-porto-green rounded-full group-hover:scale-150 transition-transform"></span>
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-porto-green transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-porto-green rounded-full group-hover:scale-150 transition-transform"></span>
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 border-b-2 border-porto-green pb-2 inline-block">
              Legal
            </h3>
            <ul className="space-y-3 mt-4">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-porto-green transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-porto-green rounded-full group-hover:scale-150 transition-transform"></span>
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-600 hover:text-porto-green transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-porto-green rounded-full group-hover:scale-150 transition-transform"></span>
                  Política de Cookies
                </Link>
              </li>

            </ul>
          </div>

          {/* Column 4: Disclaimer */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 border-b-2 border-porto-green pb-2 inline-block">
              Aviso Legal
            </h3>
            <div className="mt-4 space-y-3">
              <p className="text-xs text-gray-600 leading-relaxed">
                Apenas para maiores de 18 anos. Jogue com responsabilidade.
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Divulgação de Afiliados:</strong> Este é um site de comparação e análise independente. Podemos
                receber comissões de marcas em destaque, o que pode influenciar as classificações.
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Aviso:</strong> Este site não opera apostas desportivas. Fornecemos apenas informações e
                análises sobre operadores licenciados em Portugal.
              </p>
              <div className="bg-porto-green/10 border-l-4 border-porto-green p-3 rounded">
                <p className="text-xs text-gray-700 font-semibold">
                  Se precisa de ajuda, contacte a linha de apoio ao jogador.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="text-center text-lg font-bold mb-6 text-gray-900">
            Parceiros de <span className="text-porto-green">Jogo Responsável</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <Link
              href="https://www.jogoresponsavel.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-porto-green/10 p-4 rounded-lg border border-gray-200 hover:border-porto-green transition-all duration-200 group"
            >
              <div className="relative w-[80px] h-[32px]">
                <Image src="/jogo2.png" alt="Jogo Responsável" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.sicad.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 hover:bg-porto-green/10 p-4 rounded-lg border border-gray-200 hover:border-porto-green transition-all duration-200 group"
            >
              <div className="relative w-[80px] h-[32px]">
                <Image src="/icad.png" alt="ICAD" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.srij.turismodeportugal.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 hover:bg-porto-green/10 p-4 rounded-lg border border-gray-200 hover:border-porto-green transition-all duration-200 group"
            >
              <div className="relative w-[80px] h-[32px]">
                <Image src="/srij.svg" alt="SRIJ" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 hover:bg-porto-green/10 p-4 rounded-lg border border-gray-200 hover:border-porto-green transition-all duration-200 group"
            >
              <div className="relative w-[80px] h-[32px]">
                <Image src="/gamecare.svg" alt="GamCare" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 hover:bg-porto-green/10 p-4 rounded-lg border border-gray-200 hover:border-porto-green transition-all duration-200 group"
            >
              <div className="relative w-[80px] h-[32px]">
                <Image src="/gamble.webp" alt="GambleAware" fill className="object-contain" />
              </div>
            </Link>

          </div>
        </div>

        <div className="border-t-2 border-porto-green/30 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">
              <span className="text-[#FF0000]">pt</span>
              <span className="text-[#006633]">apostas</span>
              <span className="text-[#FF0000]">desportivas</span>
              <span className="text-gray-600">.com</span>
            </span>
            . Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
