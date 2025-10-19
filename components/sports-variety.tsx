export function SportsVariety() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <header className="mb-12 pb-8 border-b border-gray-300">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 font-serif">
            Modalidades Desportivas Disponíveis
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Cobertura abrangente dos principais eventos desportivos mundiais
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Os melhores sites de apostas oferecem uma vasta seleção de modalidades desportivas, desde os desportos mais
            populares até opções de nicho. A variedade de mercados e a profundidade da cobertura são fatores essenciais
            na nossa avaliação.
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">Futebol</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                A modalidade mais popular entre os apostadores portugueses. Cobertura completa desde ligas locais até
                competições internacionais de elite.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>Liga dos Campeões UEFA</li>
                <li>Premier League, La Liga, Serie A</li>
                <li>Primeira Liga Portuguesa</li>
                <li>Mundial e Europeu FIFA</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">Ténis</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                Ampla cobertura dos circuitos ATP e WTA, com mercados detalhados para cada partida e torneio.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>Grand Slams (Australian Open, Roland Garros, Wimbledon, US Open)</li>
                <li>Masters 1000 e WTA 1000</li>
                <li>ATP Finals e WTA Finals</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">Basquetebol</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                Foco especial na NBA, mas também com boa cobertura das ligas europeias e competições internacionais.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>NBA e playoffs</li>
                <li>EuroLeague e EuroCup</li>
                <li>Mundial FIBA</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">Desportos Motorizados</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                Cobertura completa de Fórmula 1 e MotoGP, com mercados especiais para qualificações e corridas.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>Fórmula 1 World Championship</li>
                <li>MotoGP, Moto2, Moto3</li>
                <li>NASCAR e IndyCar</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">Desportos de Combate</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                UFC e boxe profissional com análises detalhadas e mercados variados para cada evento.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>UFC e Bellator MMA</li>
                <li>Boxe profissional e títulos mundiais</li>
                <li>ONE Championship</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">Outras Modalidades</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                Hóquei no gelo (NHL, KHL), voleibol, andebol, rugby, cricket, golfe, ciclismo e esports também
                disponíveis.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-300">
            <p className="text-base text-gray-600 leading-relaxed">
              A disponibilidade de modalidades varia entre plataformas. Nas nossas análises individuais, detalhamos a
              oferta específica de cada site para ajudá-lo a encontrar a plataforma ideal para os seus desportos
              favoritos.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
