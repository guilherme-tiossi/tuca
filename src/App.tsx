import { useEffect, useId, useState } from 'react'
import { EspetaculosMain } from './espetaculos'
import { InstalacoesMain } from './instalacoes'
import { ProgramacaoModal } from './programacao-modal'
import { HistoriaMain } from './sobre'
import { MemoriaMain } from './memoria'
import { AcervoMain, isAcervoPath } from './acervo'
import { MostrasMain, MOSTRAS_PATH } from './mostras'
import { ASSETS_BASE, appHref, normalizeAppPath } from './paths'
import { SYMPLA_TUCA_HOME, espetaculoDetailHref } from './sympla'

const assets = ASSETS_BASE
const ticketUrl = SYMPLA_TUCA_HOME

const slides = [
  { src: `${assets}/186b6.png`, alt: 'Dois Papas' },
  { src: `${assets}/carousel-2.png`, alt: 'Todas as Coisas Maravilhosas' },
  { src: `${assets}/carousel-3.png`, alt: 'Prova de Vida' },
]

const shows = [
  {
    title: 'Dois Papas',
    subtitle: 'Em cartaz até 31 de Outubro',
    image: `${assets}/c5302.png`,
    position: '52% center',
    href: espetaculoDetailHref('Dois Papas'),
  },
  {
    title: 'Todas as Coisas Maravilhosas',
    subtitle: 'Em cartaz até 1 de Novembro',
    image: `${assets}/7cba4.png`,
    position: '49% center',
    href: espetaculoDetailHref('Todas as coisas maravilhosas'),
  },
  {
    title: 'Prova de Vida',
    subtitle: 'Em cartaz até 29 de Novembro',
    image: `${assets}/nova-prova-vida.jpeg`,
    position: 'center',
    href: espetaculoDetailHref('Prova de vida'),
  },
]

const navigation = [
  ['ESPETÁCULOS', '/espetaculos'],
  ['COMPRAR', '/comprar'],
  ['INSTALAÇÕES', '/instalacoes'],
  ['LOCALIZAÇÃO', '/localizacao'],
  ['HISTÓRIA', '/historia'],
  ['MEMÓRIA', '/memoria'],
]

function Header() {
  const [open, setOpen] = useState(false)
  const currentPath = normalizeAppPath()

  return (
    <header className="site-header">
      <a className="site-logo-link" href={appHref('/')} aria-label="TUCA - início">
        <img className="site-logo" src={`${assets}/logo.png`} alt="TUCA" />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="main-navigation"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav id="main-navigation" className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
        {navigation.map(([label, href]) => (
          <a
            key={label}
            className={
              (label === 'ESPETÁCULOS' && currentPath === '/espetaculos') ||
              (label === 'COMPRAR' && currentPath === '/comprar') ||
              (label === 'INSTALAÇÕES' && currentPath === '/instalacoes') ||
              (label === 'LOCALIZAÇÃO' && currentPath === '/localizacao') ||
              (label === 'HISTÓRIA' && currentPath === '/historia') ||
              (label === 'MEMÓRIA' &&
                (currentPath === '/memoria' || currentPath.startsWith('/memoria/')))
                ? 'active'
                : undefined
            }
            href={appHref(href)}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Carousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((value) => (value + 1) % slides.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [])

  const select = (index: number) => setCurrent((index + slides.length) % slides.length)

  return (
    <section className="carousel" aria-roledescription="carrossel" aria-label="Destaques em cartaz">
      <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={slide.src} aria-hidden={current !== index}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
      <button className="carousel-arrow previous" type="button" onClick={() => select(current - 1)} aria-label="Slide anterior">
        <span aria-hidden="true" />
      </button>
      <button className="carousel-arrow next" type="button" onClick={() => select(current + 1)} aria-label="Próximo slide">
        <span aria-hidden="true" />
      </button>
      <div className="carousel-dots" aria-label="Selecionar slide">
        {slides.map((slide, index) => (
          <button
            key={slide.alt}
            type="button"
            className={current === index ? 'is-active' : ''}
            aria-label={`Exibir slide ${index + 1}: ${slide.alt}`}
            aria-current={current === index ? 'true' : undefined}
            onClick={() => select(index)}
          />
        ))}
      </div>
    </section>
  )
}

function ShowCard({ show }: { show: (typeof shows)[number] }) {
  return (
    <a className="show-card" href={show.href} aria-label={`${show.title}. ${show.subtitle}`}>
      <img src={show.image} alt="" style={{ objectPosition: show.position }} />
      <span className="show-overlay" />
      <span className="show-copy">
        <strong>{show.title}</strong>
        <span>{show.subtitle}</span>
      </span>
    </a>
  )
}

type AccordionProps = {
  title: string
  children: React.ReactNode
}

function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false)
  const contentId = useId()

  return (
    <div className={open ? 'accordion is-open' : 'accordion'}>
      <button type="button" aria-expanded={open} aria-controls={contentId} onClick={() => setOpen((value) => !value)}>
        <span className="accordion-label">
          <span>{title}</span>
        </span>
        <span className="accordion-icon" aria-hidden="true" />
      </button>
      <div id={contentId} className="accordion-content" hidden={!open}>
        <span className="accordion-divider" aria-hidden="true" />
        {children}
      </div>
    </div>
  )
}

function PurchaseHero() {
  return (
    <section className="purchase-hero">
      <div className="purchase-hero-content">
        <h1>Escolha o espetáculo e faça a compra de seus ingressos através da plataforma Sympla!</h1>
        <p>Com a Sympla, está garantida uma compra segura e você pode ter seus ingressos disponíveis digitalmente assim que pagar.</p>
        <a className="red-button" href={ticketUrl} target="_blank" rel="noreferrer">
          COMPRAR INGRESSOS
        </a>
      </div>
      <div className="purchase-hero-media">
        <img src={`${assets}/6a7da.png`} alt="Pessoa comprando ingressos para o TUCA pela plataforma Sympla" />
        <img className="sympla-logo" src={`${assets}/75c35.png`} alt="Sympla" />
      </div>
    </section>
  )
}

function BoxOffice() {
  return (
    <section className="box-office" id="bilheteria" aria-labelledby="box-office-title">
      <h2 id="box-office-title">BILHETERIA</h2>
      <div className="box-office-grid">
        <article>
          <h3>Horário de atendimento</h3>
          <p>
            Terça a Sábado: 14h - 20h
            <br />
            Domingo: 14h - 17h
          </p>
        </article>
        <article>
          <h3>Formas de pagamento</h3>
          <p>Dinheiro, PIX, débito e crédito (Mastercard, Visa, Elo, American Express e Hipercard).</p>
        </article>
        <article>
          <h3>Preço Especial PUC-SP</h3>
          <p>Para descontos de funcionários e alunos da PUC-SP, a compra deve ser realizada presencialmente pela bilheteria.</p>
        </article>
      </div>
    </section>
  )
}

function LocationPage() {
  const mapUrl =
    'https://www.google.com/maps?q=TUCA%20Teatro%20da%20PUC-SP%2C%20Rua%20Monte%20Alegre%2C%201024%2C%20Perdizes%2C%20S%C3%A3o%20Paulo%20-%20SP&z=17&output=embed'

  return (
    <div id="localizacao">
      <Header />
      <main>
        <section
          className="mx-auto grid w-full max-w-[1216px] grid-cols-1 gap-6 px-5 py-12 md:px-8 lg:grid-cols-[minmax(0,368px)_minmax(0,760px)] lg:pt-[48px] lg:pb-[34px]"
          aria-label="Localização dos teatros TUCA e TUCARENA"
        >
          <div className="grid gap-6">
            <article className="flex min-h-[189px] flex-col justify-center rounded-[7px] bg-[#e8e8e8] px-7 py-8 md:px-9 lg:px-[43px]">
              <h2 className="font-urbanist-bold text-[28px] font-bold leading-normal text-[#c4080c]">TUCA</h2>
              <address className="font-urbanist-regular mt-1.5 text-[18px] leading-normal not-italic text-black">
                <span className="block">Rua Monte Alegre, 1024</span>
                <span className="block">Perdizes - São Paulo - SP, 05014-001</span>
              </address>
            </article>
            <article className="flex min-h-[189px] flex-col justify-center rounded-[7px] bg-[#e8e8e8] px-7 py-8 md:px-9">
              <h2 className="font-urbanist-bold text-[28px] font-bold leading-normal text-[#c4080c]">TUCARENA</h2>
              <address className="font-urbanist-regular mt-1.5 text-[18px] leading-normal not-italic text-black">
                <span className="block">Rua Bartira, 347</span>
                <span className="block">Perdizes - São Paulo - SP, 05009-000</span>
              </address>
            </article>
          </div>
          <div className="h-[360px] overflow-hidden rounded-2xl sm:h-[402px] lg:h-full lg:min-h-[402px]">
            <iframe
              className="h-full w-full border-0"
              src={mapUrl}
              title="Mapa interativo do TUCA — Teatro da PUC-SP"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
        <section className="bg-[#121010] text-white" aria-labelledby="acessos">
          <div className="mx-auto w-full max-w-[1216px] px-5 py-12 md:px-8 lg:min-h-[322px] lg:pt-[61px] lg:pb-10">
            <h2 id="acessos" className="font-urbanist-bold text-[28px] font-bold leading-normal">
              ACESSOS
            </h2>
            <div className="mt-[30px] grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:grid-cols-[350px_354px_280px] lg:gap-x-[84px]">
              <article className="font-urbanist-semibold text-[18px] leading-normal">
                <h3 className="font-urbanist-bold text-[22px] font-bold">MJS Serviços / Valet</h3>
                <div className="mt-[22px]">
                  <p>Valor: R$50,00</p>
                  <p>Serviço de manobristas no Tuca e Tucarena.</p>
                  <p>Sexta a domingo</p>
                </div>
              </article>
              <article className="font-urbanist-semibold text-[18px] leading-normal">
                <h3 className="font-urbanist-bold text-[22px] font-bold">Multipark PUC Perdizes</h3>
                <div className="mt-[22px]">
                  <p>Valor: R$42,00</p>
                  <p>Rua Cardozo de Almeida, 990.</p>
                  <p>Telefone: (11) 3177-5555</p>
                  <p>Segunda a sexta: 7h - 22h | Sábado: 9h - 20h</p>
                </div>
              </article>
              <article className="font-urbanist-semibold text-[18px] leading-normal">
                <h3 className="font-urbanist-bold text-[22px] font-bold">Estações de metrô próximas</h3>
                <div className="mt-[22px]">
                  <p>Estação Perdizes (Linha 6-Laranja)</p>
                  <p>Estação Marechal Deodoro (Linha 3-Vermelha)</p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function PurchasePage() {
  return (
    <div id="comprar">
      <Header />
      <main>
        <PurchaseHero />
        <BoxOffice />
      </main>
      <Footer />
    </div>
  )
}

function EspetaculosPage() {
  useEffect(() => {
    const { hash } = window.location
    if (!hash) return
    const target = document.querySelector(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <div id="espetaculos" className="espetaculos-page">
      <Header />
      <main>
        <EspetaculosMain />
      </main>
      <Footer />
    </div>
  )
}

function InstalacoesPage() {
  return (
    <div id="instalacoes" className="instalacoes-page">
      <Header />
      <InstalacoesMain />
      <Footer />
    </div>
  )
}

function HistoriaPage() {
  return (
    <div id="historia">
      <Header />
      <HistoriaMain />
      <Footer />
    </div>
  )
}

function MemoriaPage() {
  return (
    <div id="memoria">
      <Header />
      <MemoriaMain />
      <Footer />
    </div>
  )
}

function AcervoSitePage() {
  return (
    <div id="acervo" className="acervo-app">
      <Header />
      <AcervoMain />
      <Footer />
    </div>
  )
}

function MostrasSitePage() {
  return (
    <div id="mostras" className="mostras-page">
      <Header />
      <MostrasMain />
      <Footer />
    </div>
  )
}

function Footer() {
  const socials = [
    ['Instagram', 'https://www.instagram.com/tuca.pucsp/', `${assets}/ec53b.png`],
    ['Facebook', 'https://www.facebook.com/teatrotuca/', `${assets}/e74e7.png`],
    ['X', 'https://x.com/teatrotuca', `${assets}/f641a.png`],
  ]

  return (
    <footer className="footer">
      <div className="footer-grid">
        <img className="puc-logo" src={`${assets}/9d425.png`} alt="PUC-SP" />
        <div className="footer-block">
          <h3>Telefone</h3>
          <p>Administração: (11) 3670-8470</p>
          <p>Secretaria: (11) 3670-8458</p>
          <p>Locações: (11) 3670-8460</p>
          <p>Comunicação: (11) 3670-8462</p>
        </div>
        <div className="footer-block">
          <h3>Endereço</h3>
          <p>R. Monte Alegre, 1024 - Perdizes, São Paulo - SP, 05014-001</p>
          <h3 className="social-title">Redes sociais</h3>
          <div className="socials">
            {socials.map(([label, href, icon]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <img src={icon} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-block">
          <h3>Bilheteria</h3>
          <p>Terça a Sábado das 14h às 20h</p>
          <p>Domingo das 14h às 17h</p>
          <br />
          <p>(11) 3670-8455</p>
          <a href="mailto:tayna.mello@sympla.com.br">tayna.mello@sympla.com.br</a>
        </div>
      </div>
      <div className="credits">
        <p>© Copyright - 2026 - Teatro Tuca - PUC-SP</p>
        <p>Desenvolvido por Pedro Marin e Raquel Menah - TCC D07</p>
      </div>
    </footer>
  )
}

export default function App() {
  const [programacaoOpen, setProgramacaoOpen] = useState(false)
  const path = normalizeAppPath()

  if (path === '/comprar') {
    return <PurchasePage />
  }
  if (path === '/localizacao') {
    return <LocationPage />
  }
  if (path === '/espetaculos') {
    return <EspetaculosPage />
  }
  if (path === '/instalacoes') {
    return <InstalacoesPage />
  }
  if (path === '/historia' || path === '/sobre') {
    return <HistoriaPage />
  }
  if (isAcervoPath(path)) {
    return <AcervoSitePage />
  }
  if (path === MOSTRAS_PATH) {
    return <MostrasSitePage />
  }
  if (path === '/memoria') {
    return <MemoriaPage />
  }

  return (
    <div id="inicio">
      <Header />
      <main>
        <Carousel />

        <section className="intro" id="ingressos">
          <h1>Obtenha seus ingressos pelo Sympla ou compre presencialmente.</h1>
          <p>
            <strong>Horário de funcionamento da bilheteria:</strong>
            <br />
            Terça a Sábado das 14h às 20h
            <br />
            Domingo das 14h às 17h
          </p>
          <div className="button-row">
            <a className="red-button" href={ticketUrl} target="_blank" rel="noreferrer">
              COMPRAR INGRESSOS
            </a>
            <button className="red-button" type="button" onClick={() => setProgramacaoOpen(true)}>
              RECEBER PROGRAMAÇÃO
            </button>
          </div>
        </section>

        <section className="shows" id="programacao" aria-label="Programação em cartaz">
          {shows.map((show) => (
            <ShowCard key={show.title} show={show} />
          ))}
        </section>

        <section className="about" id="sobre">
          <div className="about-image">
            <img src={`${assets}/02cbe.png`} alt="Fachada iluminada do Teatro TUCA" />
          </div>
          <div className="about-copy">
            <h2>SOBRE O TUCA</h2>
            <p>Conheça o Teatro da Pontifícia Universidade Católica da São Paulo (PUC-SP).</p>
            <p>Patrimônio Histórico do Estado de São Paulo, é responsável por diversas manifestações políticas, culturais e artísticas.</p>
            <a className="red-button" href={appHref('/historia')}>
              SAIBA MAIS
            </a>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="contact-inner">
            <h2>CONTATO</h2>
            <div className="accordions">
              <Accordion title="Agenda e Locações">
                <p>Locações: (11) 3670-8460</p>
                <p>R. Monte Alegre, 1024 - Perdizes, São Paulo - SP.</p>
              </Accordion>
              <Accordion title="Administração">
                <p>Administração: (11) 3670-8470</p>
                <p>Secretaria: (11) 3670-8458</p>
              </Accordion>
              <Accordion title="Bilheteria">
                <p>Terça a Sábado das 14h às 20h. Domingo das 14h às 17h.</p>
                <p>(11) 3670-8455</p>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ProgramacaoModal isOpen={programacaoOpen} onClose={() => setProgramacaoOpen(false)} />
    </div>
  )
}
