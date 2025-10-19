import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pb-8 border-b-4 border-porto-gold">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Política de Privacidade</h1>
            <p className="text-sm text-gray-600">Última atualização: 27 de Janeiro de 2025</p>
          </div>

          <div className="space-y-12 prose prose-lg max-w-none">
            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-porto-green">
                Introdução
              </h2>
              <p className="text-gray-700 leading-relaxed">
                No ptapostasdesportivas.com, respeitamos a sua privacidade e estamos comprometidos em proteger os seus
                dados pessoais. Esta política de privacidade informá-lo-á sobre como cuidamos dos seus dados pessoais
                quando visita o nosso website e dir-lhe-á sobre os seus direitos de privacidade e como a lei o protege.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-porto-green">
                Os Dados que Recolhemos Sobre Si
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Podemos recolher, usar, armazenar e transferir diferentes tipos de dados pessoais sobre si, que
                agrupámos da seguinte forma:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Dados de Identidade:</strong> incluem primeiro nome, apelido, nome de utilizador ou
                  identificador similar.
                </li>
                <li>
                  <strong>Dados de Contacto:</strong> incluem endereço de email e números de telefone.
                </li>
                <li>
                  <strong>Dados Técnicos:</strong> incluem endereço IP, dados de login, tipo e versão do navegador,
                  definição de fuso horário e localização, tipos e versões de plug-ins do navegador, sistema operativo e
                  plataforma.
                </li>
                <li>
                  <strong>Dados de Uso:</strong> incluem informações sobre como usa o nosso website, produtos e
                  serviços.
                </li>
                <li>
                  <strong>Dados de Marketing:</strong> incluem as suas preferências em receber marketing de nós e as
                  suas preferências de comunicação.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-porto-green">
                Como Usamos os Seus Dados Pessoais
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Só usaremos os seus dados pessoais quando a lei nos permitir. Mais comummente, usaremos os seus dados
                pessoais nas seguintes circunstâncias:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Onde precisamos de executar o contrato que estamos prestes a celebrar ou celebrámos consigo.</li>
                <li>
                  Onde é necessário para os nossos interesses legítimos e os seus interesses e direitos fundamentais não
                  se sobrepõem a esses interesses.
                </li>
                <li>Onde precisamos de cumprir uma obrigação legal ou regulamentar.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-porto-green">
                Propósitos para os Quais Usaremos os Seus Dados
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Definimos abaixo uma descrição de todas as formas como planeamos usar os seus dados pessoais:
              </p>
              <div className="space-y-3">
                <div className="border-l-4 border-porto-gold pl-4 py-1">
                  <p className="text-gray-700">Para o registar como um novo utilizador</p>
                </div>
                <div className="border-l-4 border-porto-gold pl-4 py-1">
                  <p className="text-gray-700">Para gerir a nossa relação consigo</p>
                </div>
                <div className="border-l-4 border-porto-gold pl-4 py-1">
                  <p className="text-gray-700">Para permitir que participe num sorteio, competição ou inquérito</p>
                </div>
                <div className="border-l-4 border-porto-gold pl-4 py-1">
                  <p className="text-gray-700">Para administrar e proteger o nosso negócio e este website</p>
                </div>
                <div className="border-l-4 border-porto-gold pl-4 py-1">
                  <p className="text-gray-700">Para entregar conteúdo relevante do website e anúncios para si</p>
                </div>
                <div className="border-l-4 border-porto-gold pl-4 py-1">
                  <p className="text-gray-700">
                    Para usar análise de dados para melhorar o nosso website, produtos, marketing e experiências
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-porto-green">
                Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Pode definir o seu navegador para recusar todos ou alguns cookies do navegador, ou para alertá-lo quando
                os websites definem ou acedem a cookies. Se desativar ou recusar cookies, note que algumas partes deste
                website podem tornar-se inacessíveis ou não funcionar adequadamente. Para mais informações sobre os
                cookies que usamos, consulte a nossa{" "}
                <a href="/cookie-policy" className="text-porto-green hover:text-porto-gold underline font-semibold">
                  Política de Cookies
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-porto-green">
                Segurança de Dados
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Implementámos medidas de segurança apropriadas para prevenir que os seus dados pessoais sejam
                acidentalmente perdidos, usados ou acedidos de forma não autorizada, alterados ou divulgados. Além
                disso, limitamos o acesso aos seus dados pessoais àqueles funcionários, agentes, contratados e outros
                terceiros que têm uma necessidade comercial de saber. Todos os dados são processados de acordo com o
                Regulamento Geral de Proteção de Dados (RGPD).
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-porto-green">
                Retenção de Dados
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Só reteremos os seus dados pessoais pelo tempo razoavelmente necessário para cumprir os propósitos para
                os quais os recolhemos, incluindo para os propósitos de satisfazer quaisquer requisitos legais,
                regulamentares, fiscais, contabilísticos ou de relatório. Para determinar o período de retenção
                apropriado, consideramos a quantidade, natureza e sensibilidade dos dados pessoais.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-porto-green">
                Os Seus Direitos Legais
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sob certas circunstâncias, tem direitos sob as leis de proteção de dados em relação aos seus dados
                pessoais, incluindo o direito de:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Solicitar acesso aos seus dados pessoais</li>
                <li>Solicitar correção dos seus dados pessoais</li>
                <li>Solicitar eliminação dos seus dados pessoais</li>
                <li>Objetar ao processamento dos seus dados pessoais</li>
                <li>Solicitar restrição do processamento dos seus dados pessoais</li>
                <li>Solicitar transferência dos seus dados pessoais</li>
                <li>Direito de retirar consentimento a qualquer momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-porto-green">
                Links de Terceiros
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Este website pode incluir links para websites de terceiros, plug-ins e aplicações. Clicar nesses links
                ou ativar essas conexões pode permitir que terceiros recolham ou partilhem dados sobre si. Não
                controlamos estes websites de terceiros e não somos responsáveis pelas suas declarações de privacidade.
                Quando sair do nosso website, aconselhamos que leia a política de privacidade de cada website que
                visita.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-porto-green">
                Alterações à Política de Privacidade
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar a nossa política de privacidade de tempos a tempos. Notificá-lo-emos de quaisquer
                alterações publicando a nova política de privacidade nesta página e atualizando a data "Última
                atualização" no topo desta política de privacidade. Recomendamos que reveja esta política periodicamente
                para se manter informado sobre como protegemos os seus dados.
              </p>
            </section>

            <section className="bg-gradient-to-r from-porto-green/5 to-porto-gold/5 rounded-lg p-8 border-l-4 border-porto-gold">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Contacte-nos</h2>
              <p className="text-gray-700 leading-relaxed">
                Se tiver questões sobre esta política de privacidade ou as nossas práticas de privacidade, contacte-nos
                em:{" "}
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
