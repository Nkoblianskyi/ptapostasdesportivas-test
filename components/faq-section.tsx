export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <header className="mb-12 pb-8 border-b border-gray-300">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 font-serif">Perguntas Frequentes</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Respostas às questões mais comuns sobre apostas desportivas
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="space-y-10">
            <div className="pb-8 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Como escolher o melhor site de apostas para as minhas necessidades?
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                A escolha depende das suas prioridades. Se valoriza odds competitivas, compare as margens oferecidas. Se
                prefere apostas ao vivo, procure plataformas com streaming e cash out. Para iniciantes, recomendamos
                sites com interfaces intuitivas e bom suporte ao cliente. Verifique sempre o licenciamento e a reputação
                antes de se registar.
              </p>
            </div>

            <div className="pb-8 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Os sites recomendados são seguros e legais?</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Sim. Todos os sites no nosso ranking possuem licenças oficiais de autoridades reguladoras reconhecidas
                internacionalmente, como Curaçao eGaming, Malta Gaming Authority ou UK Gambling Commission. Verificamos
                pessoalmente a validade das licenças e a reputação de cada plataforma antes de a recomendar.
              </p>
            </div>

            <div className="pb-8 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Que tipos de bónus posso esperar?</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Os bónus mais comuns incluem bónus de boas-vindas (geralmente até 100% do primeiro depósito), apostas
                grátis, cashback semanal e programas de fidelidade. É fundamental ler os termos e condições,
                especialmente os requisitos de apostas, antes de aceitar qualquer bónus.
              </p>
            </div>

            <div className="pb-8 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Qual é o tempo médio para levantamentos?</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                O tempo varia conforme o método escolhido. Carteiras eletrónicas (Skrill, Neteller) são geralmente as
                mais rápidas, processando levantamentos em minutos a algumas horas. Transferências bancárias podem
                demorar 1-5 dias úteis. Cartões de crédito/débito situam-se entre estes dois extremos.
              </p>
            </div>

            <div className="pb-8 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Existem aplicações móveis disponíveis?</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Sim. Todas as plataformas principais oferecem aplicações nativas para iOS e Android, além de versões
                móveis otimizadas dos seus sites. As apps geralmente incluem todas as funcionalidades da versão desktop,
                com a vantagem da conveniência e notificações em tempo real.
              </p>
            </div>

            <div className="pb-8 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Com que frequência atualizam as vossas análises?
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Revemos o nosso ranking mensalmente e atualizamos as análises sempre que há mudanças significativas nas
                plataformas, como novos bónus, alterações nas odds ou mudanças nas condições de serviço. Monitorizamos
                continuamente todas as plataformas recomendadas.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Como garantem a independência das vossas avaliações?
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Mantemos independência editorial rigorosa. Embora possamos ter parcerias comerciais com algumas
                plataformas, estas não influenciam as nossas classificações ou análises. Testamos pessoalmente cada
                site, realizando depósitos, apostas e levantamentos reais para garantir avaliações baseadas em
                experiência genuína.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-300 text-center">
            <p className="text-base text-gray-600 leading-relaxed">
              Não encontrou resposta à sua pergunta? Consulte as análises detalhadas de cada plataforma no nosso ranking
              para informações mais específicas.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
