const assets = "/assets";

const cards = [
  {
    title: "Atendimento à pesquisa",
    text: (
      <>
        Para realizar sua pesquisa, entre em contato conosco somente através do nosso e-mail,
        informando qual o tema da pesquisa e/ou qual fundo ou coleção pretende consultar. O CDM Tuca
        responderá o mais breve possível, marcando a data e horário para o atendimento.
      </>
    ),
    emphasis: "A consulta ao acervo é previamente agendada.",
  },
  {
    title: "Visitação técnica",
    text: (
      <>
        Para solicitar uma visita, entre em contato conosco através do nosso e-mail e ou telefone. O
        CDM Tuca responderá o mais breve possível, marcando a data e horário para a realização da
        visitação às dependências do Centro.
      </>
    ),
    emphasis: "A visitação técnica é previamente agendada.",
  },
  {
    title: "Ampliação do acervo: recebimento de doações",
    text: (
      <>
        Para doar material pertinente ao Teatro TUCA, entre em contato conosco através do nosso
        e-mail e ou telefone. O CDM Tuca poderá visitar o local onde se encontra o acervo a ser
        doado, verificar a pertinência e produzir termo de doação para a efetivação da
        transferência.
      </>
    ),
    emphasis: "As doações serão avaliadas pelo CDM TUCA.",
  },
];

const menuItems = ["ESPETÁCULOS", "COMPRAR", "INSTALAÇÕES", "LOCALIZAÇÃO", "HISTÓRIA", "MEMÓRIA"];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#121010]">
      <header className="relative z-10 bg-white shadow-[0_4px_2.5px_rgba(0,0,0,0.22)]">
        <div className="mx-auto flex min-h-20 max-w-[1152px] flex-col items-center justify-between gap-1 px-5 py-3 md:flex-row md:px-8 md:py-0 xl:px-0">
          <img
            src={`${assets}/ecd8c.png`}
            alt="TUCA"
            className="h-[29px] w-[104px] shrink-0 object-contain"
          />
          <nav
            aria-label="Navegação principal"
            className="flex max-w-full items-center gap-1 overflow-x-auto pb-1 md:gap-3 md:pb-0"
          >
            {menuItems.map((item) => (
              <span
                key={item}
                aria-current={item === "MEMÓRIA" ? "page" : undefined}
                className={`shrink-0 px-2.5 py-2 text-sm leading-normal md:px-3 lg:px-5 lg:py-4 lg:text-base ${
                  item === "MEMÓRIA"
                    ? "font-['Urbanist:ExtraBold'] font-extrabold text-[#c4080c]"
                    : "font-['Urbanist:SemiBold'] font-semibold text-[#121010]"
                }`}
              >
                {item}
              </span>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-[#121010] text-white">
          <div className="mx-auto grid max-w-[1152px] items-center gap-9 px-5 py-12 md:px-8 lg:min-h-[430px] lg:grid-cols-[532px_1fr] lg:gap-14 xl:px-0">
            <div>
              <h1 className="font-['Urbanist:Bold'] text-[22px] leading-normal font-bold">
                Centro de Documentação e Memória do TUCA
              </h1>
              <p className="mt-5 font-['Urbanist:Regular'] text-base leading-normal font-normal">
                Preocupado em preservar, valorizar e compartilhar parte de sua história, o TUCA -
                Teatro da Universidade Católica (PUC-SP) criou em 2005 o Centro de Documentação e
                Memória. Desde o início de suas atividades, o Centro adota procedimentos
                sistemáticos de guarda, tratamento e difusão de seu acervo documental, que inclui
                vasto material sobre espetáculos consagrados apresentados nos palcos deste Teatro.
              </p>
              <p className="mt-8 font-['Urbanist:SemiBold'] text-lg leading-normal font-semibold">
                Conheça nosso acervo com documentos a respeito do teatro.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="rounded-full bg-[#c4080c] px-[18px] py-2 font-['Urbanist:Bold'] text-[22px] leading-normal font-bold text-white transition-colors hover:bg-[#e60105] active:bg-[#f70004]"
                >
                  CONHECER ACERVO
                </button>
                <button
                  type="button"
                  className="rounded-full bg-[#c4080c] px-[18px] py-2 font-['Urbanist:Bold'] text-[22px] leading-normal font-bold text-white transition-colors hover:bg-[#e60105] active:bg-[#f70004]"
                >
                  CONHECER MOSTRAS
                </button>
              </div>
            </div>
            <div className="h-[260px] overflow-hidden rounded-[7px] sm:h-[333px]">
              <img
                src={`${assets}/memoria-hero.png`}
                alt="Plateia lotada no Teatro TUCA"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1152px] px-5 py-12 md:px-8 lg:py-16 xl:px-0">
          <section className="grid items-center gap-9 lg:grid-cols-[1fr_392px] lg:gap-[98px]">
            <div>
              <h2 className="section-title">O QUE SOMOS?</h2>
              <div className="mt-6 space-y-4 font-['Urbanist:Regular'] text-base leading-normal font-normal">
                <p>
                  Em 2010, com o apoio da Lei Federal de Incentivo à Cultura e o patrocínio do Banco
                  Safra, o CDM TUCA sofreu adequações físicas para receber mobiliário, equipamentos
                  e materiais adequados à conservação de documentos de importância social. Ainda em
                  2011, uma parceria com a Imprensa Oficial do Estado de São Paulo possibilitou o
                  desenvolvimento do projeto de digitalização de parte substancial do acervo,
                  aumentando as possibilidades de preservação e difusão de séries expressivas de
                  cartazes teatrais, fotografias e, sobretudo, dos processos administrativos que
                  permeiam a execução dos espetáculos nos palcos do Teatro.
                </p>
                <p>
                  O acesso aos arquivos do Tuca permite a revelação de conteúdos e tendências
                  culturais e sociais, por meio da análise da natureza e perfil dos espetáculos
                  musicais e teatrais, dos eventos científicos e políticos, dos atos e manifestações
                  que aqui o Teatro serviu de espaço.
                </p>
              </div>
            </div>
            <img
              src={`${assets}/40b61.png`}
              alt="Manifestação histórica em frente à PUC-SP"
              className="h-[254px] w-full rounded-[7px] object-cover lg:w-[392px]"
            />
          </section>

          <section className="mt-16 grid items-center gap-9 lg:mt-20 lg:grid-cols-[392px_1fr] lg:gap-[98px]">
            <img
              src={`${assets}/fd908.png`}
              alt="Palco do TUCA durante apresentação histórica"
              className="order-2 h-[254px] w-full rounded-[7px] object-cover lg:order-1 lg:w-[392px]"
            />
            <div className="order-1 lg:order-2">
              <h2 className="section-title">O QUE QUEREMOS?</h2>
              <ul className="mt-6 list-disc space-y-4 pl-6 font-['Urbanist:Regular'] text-base leading-normal font-normal">
                <li>
                  Gerenciamento do arquivo corrente, intermediário e permanente da Instituição;
                </li>
                <li>Difusão do acervo de fase histórica e de interesse público;</li>
                <li>
                  Aquisição de novos acervos – arquivístico ou biblioteconômico – complementares e
                  similares ao do Teatro, com o cuidado de não misturá-los com o principal acervo do
                  Centro – o Fundo TUCA;
                </li>
                <li>Desenvolvimento de projetos de história oral;</li>
                <li>Participação e promoção de eventos em suas áreas de atuação.</li>
              </ul>
            </div>
          </section>

          <section id="o-que-fazemos" className="mt-16 lg:mt-20">
            <h2 className="section-title">O QUE FAZEMOS?</h2>
            <div className="mt-7 grid gap-6 md:grid-cols-3">
              {cards.map((card) => (
                <article
                  key={card.title}
                  className="flex min-h-[352px] flex-col items-center justify-center rounded-[7px] bg-[#e8e8e8] px-8 py-10 text-center"
                >
                  <h3 className="font-['Urbanist:Bold'] text-lg leading-normal font-bold text-[#c4080c]">
                    {card.title}
                  </h3>
                  <p className="mt-5 font-['Urbanist:Regular'] text-base leading-normal font-normal">
                    {card.text}
                  </p>
                  <p className="mt-4 font-['Urbanist:Bold'] text-base leading-normal font-bold">
                    {card.emphasis}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 lg:mt-20">
            <h2 className="section-title">PARCEIROS</h2>
            <div className="mt-8 grid items-center justify-items-center gap-10 sm:grid-cols-3 lg:mt-10">
              <img
                src={`${assets}/d878a.png`}
                alt="Lei de Incentivo à Cultura — Lei Rouanet"
                className="h-[110px] w-[172px] object-contain"
              />
              <div className="relative h-[85px] w-[295px] max-w-full overflow-hidden">
                <img
                  src={`${assets}/673b9.png`}
                  alt="Ministério da Cultura e Governo Federal — Brasil União e Reconstrução"
                  className="absolute top-[-143%] left-[-8%] h-[391%] w-[112%] max-w-none"
                />
              </div>
              <img
                src={`${assets}/a171d.png`}
                alt="Imprensa Oficial — Governo do Estado de São Paulo"
                className="h-[74px] w-[247px] object-contain"
              />
            </div>
          </section>
        </div>

        <section className="bg-[#121010] text-white">
          <div className="mx-auto max-w-[1152px] px-5 py-10 md:px-8 lg:min-h-[307px] xl:px-0">
            <h2 className="font-['Urbanist:Bold'] text-[28px] leading-normal font-bold">
              EQUIPE E CONTATO
            </h2>
            <div className="mt-9 grid gap-10 md:grid-cols-3 md:gap-12">
              <div>
                <h3 className="contact-title">Supervisão técnica</h3>
                <p className="contact-copy mt-5">
                  Simone Silva Fernandes
                  <br />
                  Documentalista do CEDIC/PUC-SP
                </p>
              </div>
              <div>
                <h3 className="contact-title">Apoio</h3>
                <p className="contact-copy mt-5">
                  CEDIC - Centro de Documentação e Informação Científica
                  <br />
                  <a href="https://www.pucsp.br/cedic">https://www.pucsp.br/cedic</a>
                </p>
              </div>
              <div>
                <h3 className="contact-title">Contato</h3>
                <address className="contact-copy mt-5 not-italic">
                  Rua Monte Alegre, 1024 - Perdizes
                  <br />
                  Segunda a sexta: 14h - 18h
                  <br />
                  E-mail: <a href="mailto:tucamemoria@pucsp.br">tucamemoria@pucsp.br</a>
                  <br />
                  Telefone: <a href="tel:+551136708468">(11) 3670-8468</a>
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white">
        <div className="mx-auto max-w-[1152px] px-5 py-9 md:px-8 xl:px-0">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[156px_1fr_1fr_1fr]">
            <img
              src={`${assets}/9d425.png`}
              alt="PUC-SP"
              className="h-[188px] w-[117px] object-contain"
            />
            <div>
              <h3 className="footer-title">Telefone</h3>
              <div className="footer-copy mt-6 space-y-3">
                <p>Administração: (11) 3670-8470</p>
                <p>Secretaria: (11) 3670-8458</p>
                <p>Locações: (11) 3670-8460</p>
                <p>Comunicação: (11) 3670-8462</p>
              </div>
            </div>
            <div>
              <h3 className="footer-title">Endereço</h3>
              <address className="footer-copy mt-6 not-italic">
                R. Monte Alegre, 1024 - Perdizes, São Paulo - SP, 05014-001
              </address>
              <h3 className="footer-title mt-8">Redes sociais</h3>
              <div className="mt-5 flex gap-4" aria-label="Redes sociais do TUCA">
                {[
                  ["ec53b.png", "Instagram"],
                  ["e74e7.png", "Facebook"],
                  ["f641a.png", "X"],
                ].map(([icon, label]) => (
                  <span
                    key={label}
                    title={label}
                    className="flex size-10 items-center justify-center rounded-full bg-white"
                  >
                    <img
                      src={`${assets}/${icon}`}
                      alt={label}
                      className="size-[23px] object-contain"
                    />
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="footer-title">Bilheteria</h3>
              <div className="footer-copy mt-6">
                <p>
                  Terça a Sábado das 14h às 20h
                  <br />
                  Domingo das 14h às 17h
                </p>
                <p className="mt-4">
                  (11) 3670-8455
                  <br />
                  tayna.mello@sympla.com.br
                </p>
              </div>
            </div>
          </div>
          <div className="mt-9 text-center font-['Urbanist:Regular'] text-sm leading-normal font-normal">
            <p>© Copyright - 2026 - Teatro Tuca - PUC-SP</p>
            <p className="mt-3">Desenvolvido por Pedro Marin e Raquel Menah - TCC D07</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
