import { useId, useState } from "react"

type Tab = "general" | "synopsis" | "credits"

type Credit = {
  label: string
  names: string
}

type Show = {
  title: string
  poster: string
  posterClass?: string
  genre: string
  season: string
  schedule: string
  duration: string
  venue: string
  rating: string
  synopsis: string[]
  credits: Credit[][]
}

const shows: Show[] = [
  {
    title: "Todas as coisas maravilhosas",
    poster: "/assets/86f1b.png",
    posterClass: "poster-all",
    genre: "Comédia Dramática",
    season: "16 de outubro a 13 de dezembro de 2026",
    schedule: "Sextas e sábados às 20h, domingos às 18h",
    duration: "70 minutos",
    venue: "TUCARENA",
    rating: "12 anos",
    synopsis: [
      'Vencedora do Prêmio APCA 2024 (Associação Paulista de Críticos de Arte) na categoria de Melhor Espetáculo, a peça conta história de um menio que, aos sete anos de idade, descobre que sua mãe sofre de depressão. A partir daí, ele começa a escrever listas de todas as coisas maravilhosas que podem fazê-la recuperar a vontade de viver e as deixa em locais estratégicos, para que ela encontre e redescubra "motivos" para continuar viva.',
      "“Todas as Coisas Maravilhosas”, vista nesta montagem por mais de 20.000 pessoas, é um elogio à vida e à redescoberta das pequenas alegrias que podem redesenhar a existência.",
    ],
    credits: [
      [{ label: "Elenco:", names: "Kiko Mascarenhas" }],
      [
        { label: "Autor:", names: "Duncan Macmillan e Joe Donahue" },
        { label: "Tradução e adaptação:", names: "Diego Teza" },
      ],
      [{ label: "Direção:", names: "Fernando Philbert" }],
      [{ label: "Preparação de Ator:", names: "Ana Luiza Folly" }],
      [
        { label: "Direção de Arte:", names: "Luciane Nicolino" },
        { label: "Figurinista:", names: "Tereza Nabuco" },
      ],
      [
        { label: "Direção de Produção:", names: "Cristiana Lara Resende" },
        { label: "Assistente de Produção:", names: "Cintia Duque" },
      ],
      [
        {
          label: "Operador luz / som / direção de palco:",
          names: "Daniel Marques",
        },
        { label: "Iluminador:", names: "Vilmar Olos" },
      ],
      [
        { label: "Produção e Realização:", names: "KM ProCult" },
        { label: "Coprodução:", names: "Ufa! Produções Artísticas Ltda" },
      ],
    ],
  },
  {
    title: "Prova de vida",
    poster: "/assets/546bb.png",
    genre: "Comédia",
    season: "7 a 29 de Novembro de 2026",
    schedule: "Sextas e Sábados às 20h30 e domingos às 17h00",
    duration: "65 minutos",
    venue: "TUCA",
    rating: "12 anos",
    synopsis: [
      "Vera Lúcia, uma idosa de 91 anos, precisa ir até o banco provar que está viva para continuar recebendo a sua aposentadoria. A aposentada teve seu benefício suspenso por não realizar a prova de vida e decide resolver pessoalmente o problema.",
      "Do outro lado do balcão está Miguel, um funcionário frustrado, preso a uma rotina burocrática e a uma vida muito diferente daquela que um dia imaginou para si.",
      "O encontro entre os dois, inicialmente marcado por impaciência, desconfiança e situações absurdas, aos poucos se transforma em uma conversa inesperada sobre escolhas, autonomia, sonhos e o tempo que ainda temos pela frente.",
      "Com humor e afeto, “Prova de Vida” é uma comédia leve e amorosa sobre confiança e sobre a coragem de estar verdadeiramente vivo.",
    ],
    credits: [
      [{ label: "Elenco:", names: "Miriam Mehler e Rafael Primot" }],
      [
        { label: "Texto:", names: "Gustavo Pinheiro" },
        { label: "Direção:", names: "Marco Antônio Pâmio" },
      ],
      [{ label: "Direção de Produção:", names: "Fabio Camara" }],
      [
        { label: "Figurinos:", names: "Fábio Namatame" },
        { label: "Cenários:", names: "Marco Lima" },
        { label: "Desenho de luz:", names: "Sarah Salgado" },
      ],
      [{ label: "Trilha Sonora:", names: "Chico Beltrão" }],
      [
        {
          label: "Produção Executiva e idealização:",
          names: "ENKAPOTHADO ARTES",
        },
      ],
      [
        { label: "Fotos:", names: "Kim Leekyung" },
        { label: "Arte gráfica:", names: "Haroldo Miklos" },
        { label: "Assessoria de Imprensa:", names: "Pombo Correio" },
      ],
      [
        { label: "Co-produção:", names: "Lugibi, Muk e Musa Produções" },
        { label: "Arte gráfica:", names: "Haroldo Miklos" },
      ],
    ],
  },
  {
    title: "Dois Papas",
    poster: "/assets/f4dd0.png",
    genre: "Drama",
    season: "31 de julho a 31 de Outubro de 2026",
    schedule: "Sábados às 20h00",
    duration: "110 minutos",
    venue: "TUCA",
    rating: "14 anos",
    synopsis: [
      "Sucesso de público e crítica, Dois Papas reestreia em São Paulo no TUCA. Com direção original de Munir Kanaan, a peça leva aos palcos o encontro entre dois líderes com visões de mundo opostas: o conservador Papa Bento XVI e o progressista argentino Cardeal Jorge Bergoglio - futuro Papa Francisco.",
      "A história parte do momento em que Bergoglio viaja à Roma decidido a pedir sua aposentadoria. Para sua surpresa, é convocado a uma conversa pessoal com Bento XVI, que considera renunciar ao cargo diante das pressões enfrentadas pela Igreja. O que se segue é um diálogo carregado de tensão, respeito e humor, no qual visões antagônicas encontram espaço para escuta, conflito e transformação.",
      "Vista por mais de 30 mil pessoas, sucesso em diversas capitais brasileiras, Dois Papas volta para uma nova temporada em São Paulo. O espetáculo foi vencedor de Melhor Drama 2025 pelo Prêmio Arcanjo de Cultura e rendeu indicações ao Prêmio APCA de Melhor Ator aos seus protagonistas.",
    ],
    credits: [
      [
        {
          label: "Elenco:",
          names:
            "Norival Rizzo, Zécarlos Machado, Carol Godoy e Eliana Guttman.",
        },
      ],
      [
        { label: "Direção:", names: "Munir Kanaan" },
        { label: "Tradução:", names: "Rui Xavier" },
        { label: "Diretor Assistente:", names: "Gustavo Trestini" },
      ],
      [
        { label: "Trilha sonora:", names: "Dan Maia" },
        { label: "Cenário:", names: "Eric Lenate" },
        { label: "Figurino:", names: "Carol Roz" },
      ],
      [
        { label: "Videomapping:", names: "André Grynwask e Pri Argoud" },
        { label: "Iluminação:", names: "Beto Bruel" },
      ],
      [
        {
          label: "Idealização:",
          names: "Munir Kanaan e Rafa Steinhauser",
        },
      ],
      [
        {
          label: "Produção:",
          names: "Gengibre Multimídia e Zug Produções",
        },
      ],
      [
        {
          label: "Assessoria de imprensa:",
          names: "Adriana Balsanelli e Renato Fernandessum",
        },
      ],
      [
        {
          label: "Patrocínio:",
          names: "La Serenissima e 2S Inovações",
        },
      ],
    ],
  },
]

const tabs: { id: Tab label: string }[] = [
  { id: "general", label: "Informações gerais" },
  { id: "synopsis", label: "Sinopse" },
  { id: "credits", label: "Ficha técnica" },
]

function GeneralInformation({ show }: { show: Show }) {
  return (
    <div className="show-details">
      <p>
        <strong>Gênero:</strong> {show.genre}
      </p>
      <p>
        <strong>Temporada:</strong> {show.season}
      </p>
      <p>
        <strong>Dias e horários:</strong> {show.schedule}
      </p>
      <p>
        <strong>Duração:</strong> {show.duration}
      </p>
      <p>
        <strong>Local:</strong> {show.venue}
      </p>
      <p>Indicado para maiores de {show.rating}</p>
    </div>
  )
}

function Synopsis({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="synopsis">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  )
}

function TechnicalCredits({ lines }: { lines: Credit[][] }) {
  return (
    <div className="technical-credits">
      {lines.map((line, lineIndex) => (
        <p key={lineIndex}>
          {line.map((credit, creditIndex) => (
            <span key={`${credit.label}-${credit.names}`}>
              {creditIndex > 0 ? " | " : null}
              <strong>{credit.label}</strong> {credit.names}
            </span>
          ))}
        </p>
      ))}
    </div>
  )
}

function InformationCard({ show }: { show: Show }) {
  const [activeTab, setActiveTab] = useState<Tab>("general")
  const id = useId()

  const selectAdjacentTab = (direction: number) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab)
    const nextIndex = (currentIndex + direction + tabs.length) % tabs.length
    setActiveTab(tabs[nextIndex].id)
    document.getElementById(`${id}-${tabs[nextIndex].id}`)?.focus()
  }

  return (
    <div className="information-card">
      <div
        className="tab-list"
        role="tablist"
        aria-label={`Informações sobre ${show.title}`}
      >
        {tabs.map((tab) => (
          <button
            aria-controls={`${id}-panel`}
            aria-selected={activeTab === tab.id}
            className={activeTab === tab.id ? "tab active" : "tab"}
            id={`${id}-${tab.id}`}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") selectAdjacentTab(1)
              if (event.key === "ArrowLeft") selectAdjacentTab(-1)
            }}
            role="tab"
            tabIndex={activeTab === tab.id ? 0 : -1}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        aria-labelledby={`${id}-${activeTab}`}
        className="tab-panel"
        id={`${id}-panel`}
        role="tabpanel"
      >
        {activeTab === "general" ? <GeneralInformation show={show} /> : null}
        {activeTab === "synopsis" ? (
          <Synopsis paragraphs={show.synopsis} />
        ) : null}
        {activeTab === "credits" ? (
          <TechnicalCredits lines={show.credits} />
        ) : null}
      </div>
    </div>
  )
}

function ShowSection({ show }: { show: Show }) {
  return (
    <section className="show-section" aria-label={show.title}>
      <div className="show-layout">
        <div className="poster-column">
          <div className="poster-frame">
            <img
              alt={`Cartaz do espetáculo ${show.title}`}
              className={show.posterClass}
              src={show.poster}
            />
          </div>
          <a className="ticket-button" href="#bilheteria">
            COMPRAR INGRESSOS
          </a>
        </div>
        <InformationCard show={show} />
      </div>
      <img className="section-divider" src="/assets/a05d0.svg" alt="" />
    </section>
  )
}

function Header() {
  const menu = [
    "ESPETÁCULOS",
    "COMPRAR",
    "INSTALAÇÕES",
    "LOCALIZAÇÃO",
    "SOBRE",
    "MEMÓRIA",
  ]

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#" aria-label="TUCA - Página inicial">
          <img src="/assets/ecd8c.png" alt="TUCA" />
        </a>
        <nav aria-label="Navegação principal">
          <ul className="main-nav">
            {menu.map((item, index) => (
              <li key={item}>
                <a
                  className={index === 0 ? "current" : ""}
                  href={index === 1 ? "#bilheteria" : "#"}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: string
  label: string
}) {
  return (
    <a className="social-link" href={href} aria-label={label}>
      <img className="social-circle" src="/assets/ec08a.svg" alt="" />
      <img className="social-icon" src={icon} alt="" />
    </a>
  )
}

function Footer() {
  return (
    <footer className="site-footer" id="bilheteria">
      <div className="footer-grid">
        <img
          className="puc-logo"
          src="/assets/9d425.png"
          alt="Brasão da Pontifícia Universidade Católica de São Paulo"
        />
        <div className="footer-block phone-block">
          <h2>Telefone</h2>
          <p>Administração: (11) 3670-8470</p>
          <p>Secretaria: (11) 3670-8458</p>
          <p>Locações: (11) 3670-8460</p>
          <p>Comunicação: (11) 3670-8462</p>
        </div>
        <div className="footer-center">
          <div className="footer-block">
            <h2>Endereço</h2>
            <p>R. Monte Alegre, 1024 - Perdizes, São Paulo - SP, 05014-001</p>
          </div>
          <div className="footer-block social-block">
            <h2>Redes sociais</h2>
            <div className="social-list">
              <SocialLink href="#" icon="/assets/ec53b.png" label="Instagram" />
              <SocialLink href="#" icon="/assets/e74e7.png" label="Facebook" />
              <SocialLink href="#" icon="/assets/f641a.png" label="X" />
            </div>
          </div>
        </div>
        <div className="footer-block box-office">
          <h2>Bilheteria</h2>
          <p>
            Terça a Sábado das 14h às 20h
            <br />
            Domingo das 14h às 17h
          </p>
          <p className="box-office-contact">
            (11) 3670-8455
            <br />
            tayna.mello@sympla.com.br
          </p>
        </div>
      </div>
      <div className="copyright">
        <p>© Copyright - 2026 - Teatro Tuca - PUC-SP</p>
        <p>Desenvolvido por Pedro Marin e Raquel Menah - TCC D07</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        {shows.map((show) => (
          <ShowSection key={show.title} show={show} />
        ))}
      </main>
      <Footer />
    </div>
  )
}
