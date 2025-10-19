import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pb-8 border-b-4 border-porto-gold">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Política de Cookies</h1>
            <p className="text-sm text-gray-600">Última atualização: 27 de Janeiro de 2025</p>
          </div>

          <div className="space-y-12 prose prose-lg max-w-none">
            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-porto-green">
                O que são Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Os cookies são pequenos ficheiros de texto que são colocados no seu computador ou dispositivo móvel
                quando visita um website. São amplamente utilizados para fazer os websites funcionarem de forma mais
                eficiente e fornecer informações aos proprietários do site. Os cookies melhoram a experiência do
                utilizador ao lembrar as suas preferências e ativar certas funcionalidades.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-porto-green">
                Como Usamos Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                O ptapostasdesportivas.com usa cookies por várias razões, incluindo para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Fazer o nosso website funcionar como esperaria</li>
                <li>Lembrar as suas definições durante e entre visitas</li>
                <li>Melhorar a velocidade e segurança do site</li>
                <li>Permitir que partilhe páginas com redes sociais</li>
                <li>Melhorar continuamente o nosso website para si</li>
                <li>Tornar o nosso marketing mais eficiente e relevante</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-porto-green">
                Tipos de Cookies que Usamos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Usamos os seguintes tipos de cookies no nosso website:
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-porto-gold pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-2 text-porto-green">Cookies Essenciais</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Estes cookies são necessários para o website funcionar adequadamente. Permitem funcionalidades
                    principais como segurança, gestão de rede e acesso à conta. Pode desativar estes cookies alterando
                    as definições do seu navegador, mas isto pode afetar como o website funciona.
                  </p>
                </div>

                <div className="border-l-4 border-porto-gold pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-2 text-porto-green">Cookies de Desempenho</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Estes cookies ajudam-nos a entender como os visitantes interagem com o nosso website recolhendo e
                    reportando informações anonimamente. Permitem-nos reconhecer e contar o número de visitantes e ver
                    como os visitantes se movem pelo nosso website quando o estão a usar.
                  </p>
                </div>

                <div className="border-l-4 border-porto-gold pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-2 text-porto-green">Cookies de Funcionalidade</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Estes cookies permitem ao website fornecer funcionalidade melhorada e personalização. Podem ser
                    definidos por nós ou por fornecedores terceiros cujos serviços adicionámos às nossas páginas.
                  </p>
                </div>

                <div className="border-l-4 border-porto-gold pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-2 text-porto-green">Cookies de Segmentação</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Estes cookies registam a sua visita ao nosso website, as páginas que visitou e os links que seguiu.
                    Usaremos esta informação para tornar o nosso website e a publicidade exibida nele mais relevante
                    para os seus interesses.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-porto-green">
                Cookies de Terceiros
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Em alguns casos especiais, também usamos cookies fornecidos por terceiros de confiança. A seguinte
                secção detalha quais cookies de terceiros pode encontrar através deste site:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis na
                  web para nos ajudar a entender como usa o site e formas de melhorarmos a sua experiência.
                </li>
                <li>
                  Também usamos botões de redes sociais e/ou plug-ins neste site que lhe permitem conectar-se com a sua
                  rede social de várias formas. Para que funcionem, os sites de redes sociais definirão cookies através
                  do nosso site que podem ser usados para melhorar o seu perfil no site deles ou contribuir para os
                  dados que detêm.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-porto-green">
                Gerir Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A maioria dos navegadores web permite algum controlo da maioria dos cookies através das definições do
                navegador. Para saber mais sobre cookies, incluindo como ver que cookies foram definidos, visite
                www.aboutcookies.org ou www.allaboutcookies.org.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Para optar por não ser rastreado pelo Google Analytics em todos os websites, visite
                https://tools.google.com/dlpage/gaoptout.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-porto-green">
                Alterações à Nossa Política de Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar a nossa Política de Cookies de tempos a tempos. Notificá-lo-emos de quaisquer
                alterações publicando a nova Política de Cookies nesta página e atualizando a data "Última atualização"
                no topo desta política.
              </p>
            </section>

            <section className="bg-gradient-to-r from-porto-green/5 to-porto-gold/5 rounded-lg p-8 border-l-4 border-porto-gold">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Contacte-nos</h2>
              <p className="text-gray-700 leading-relaxed">
                Se tiver questões sobre a nossa Política de Cookies, contacte-nos em:{" "}
                <a
                  href="mailto:privacidade@ptapostasdesportivas.com"
                  className="text-porto-green hover:text-porto-gold font-semibold underline transition-colors"
                >
                  privacidade@ptapostasdesportivas.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
