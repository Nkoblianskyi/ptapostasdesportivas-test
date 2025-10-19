export function RatingMethodology() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <header className="mb-12 pb-8 border-b border-gray-200">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 font-serif">Metodologia de Avaliação</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Como classificamos e comparamos as plataformas de apostas
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            O nosso sistema de classificação baseia-se numa análise objetiva e abrangente de múltiplos critérios. Cada
            plataforma é avaliada numa escala de 0 a 10, refletindo a experiência real dos apostadores e a qualidade
            geral do serviço oferecido.
          </p>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Critérios de Avaliação</h3>

            <div className="space-y-8">
              <div className="pb-6 border-b border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">1. Variedade de Mercados (20%)</h4>
                <p className="text-base text-gray-700 leading-relaxed">
                  Avaliamos a amplitude de desportos cobertos, o número de ligas disponíveis e a diversidade de tipos de
                  apostas. Plataformas com maior variedade e mercados especializados recebem pontuações mais elevadas.
                </p>
              </div>

              <div className="pb-6 border-b border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">2. Competitividade das Odds (25%)</h4>
                <p className="text-base text-gray-700 leading-relaxed">
                  Comparamos as odds oferecidas nos principais mercados desportivos. Margens mais baixas e odds mais
                  generosas resultam em pontuações superiores. Este é o critério com maior peso na avaliação final.
                </p>
              </div>

              <div className="pb-6 border-b border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">3. Funcionalidades da Plataforma (20%)</h4>
                <p className="text-base text-gray-700 leading-relaxed">
                  Analisamos apostas ao vivo, opções de cash out, streaming de eventos, qualidade das aplicações móveis,
                  velocidade de carregamento e estabilidade da plataforma durante eventos importantes.
                </p>
              </div>

              <div className="pb-6 border-b border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">4. Bónus e Promoções (15%)</h4>
                <p className="text-base text-gray-700 leading-relaxed">
                  Avaliamos o valor dos bónus de boas-vindas, a frequência de promoções regulares e, crucialmente, a
                  transparência e justiça dos termos e condições associados.
                </p>
              </div>

              <div className="pb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">5. Segurança e Suporte (20%)</h4>
                <p className="text-base text-gray-700 leading-relaxed">
                  Verificamos o licenciamento legal, a variedade de métodos de pagamento seguros, a velocidade dos
                  levantamentos e a qualidade do apoio ao cliente (disponibilidade, tempo de resposta e eficácia).
                </p>
              </div>
            </div>
          </div>

          <div className="my-10 p-8 bg-gray-50 border-l-4 border-gray-300">
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif">Escala de Classificação</h3>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-900">9.0 - 10.0:</span>
                <span className="text-gray-700 ml-2">
                  Excelência em todas as categorias. Serviço superior e experiência excecional.
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">7.5 - 8.9:</span>
                <span className="text-gray-700 ml-2">Muito bom. Qualidade elevada com pequenas áreas de melhoria.</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">6.0 - 7.4:</span>
                <span className="text-gray-700 ml-2">
                  Bom. Opções sólidas e confiáveis para a maioria dos utilizadores.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-base text-gray-600 leading-relaxed">
              As classificações são revistas mensalmente para refletir alterações nas plataformas, novos recursos e
              mudanças nas condições de mercado. Mantemos registos detalhados de todas as avaliações para garantir
              consistência e transparência.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
