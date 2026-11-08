import { useEffect, useState, type ReactNode } from 'react'

type SpaceId = 'tuca' | 'tucarena' | 'paulo-freire' | 'ensaio' | 'saguao'

type FeatureBlock = {
  title: string
  images: string[]
  imageLabel: string
  reverse?: boolean
  body: ReactNode
}

type SpaceContent = {
  label: string
  features: FeatureBlock[]
}

function instalacaoImage(slug: string, index: number) {
  return `/images/instalacoes/${slug}-${index}.png`
}

function instalacaoGallery(slug: string) {
  return [1, 2, 3].map((index) => instalacaoImage(slug, index))
}

const spacesById: Record<SpaceId, SpaceContent> = {
  tuca: {
    label: 'TUCA',
    features: [
      {
        title: 'Tuca - Teatro Principal',
        images: instalacaoGallery('tuca-teatro-principal'),
        imageLabel: 'Teatro Principal',
        body: (
          <>
            <p>
              <strong>Quantidade de lugares:</strong> 672 poltronas com pranchetas, com área para cadeiras de rodas e
              assentos especiais para obesos.
            </p>
            <p>
              <strong>Profundidade do palco:</strong> 14,11 m.
            </p>
            <p>
              <strong>Boca de cena:</strong> 13,10 m.
            </p>
            <p>Telão com 6 metros de altura e 8 metros de largura.</p>
            <p>6 camarins.</p>
            <p>Iluminação cênica.</p>
          </>
        ),
      },
      {
        title: 'Saguão do Tuca',
        images: instalacaoGallery('saguao-do-tuca'),
        imageLabel: 'Saguão do Tuca',
        reverse: true,
        body: (
          <>
            <p>
              <strong>Área total:</strong> 292,32 m².
            </p>
            <p>
              <strong>Função principal:</strong> área de recepção, credenciamento, convivência e circulação de público
              do Teatro Principal.
            </p>
            <p>
              <strong>Infraestrutura de apoio:</strong> acesso direto à bilheteria, aos sanitários e às entradas
              principais da plateia do TUCA.
            </p>
          </>
        ),
      },
    ],
  },
  tucarena: {
    label: 'TUCARENA',
    features: [
      {
        title: 'TUCArena',
        images: instalacaoGallery('tucarena-tucarena'),
        imageLabel: 'TUCArena',
        body: (
          <>
            <p>
              <strong>Quantidade de lugares:</strong> 300 lugares (arena inteira).
            </p>
            <p>
              <strong>Diâmetro do palco:</strong> 8 m.
            </p>
            <p>3 camarins.</p>
            <p>Iluminação cênica.</p>
          </>
        ),
      },
      {
        title: 'Saguão do TUCArena',
        images: instalacaoGallery('tucarena-saguao'),
        imageLabel: 'Saguão do TUCArena',
        reverse: true,
        body: (
          <>
            <p>
              <strong>Área total:</strong> 404 m².
            </p>
            <p>
              <strong>Função principal:</strong> área de recepção, credenciamento, convivência e circulação de público
              do Teatro Tucarena.
            </p>
            <p>
              <strong>Infraestrutura de apoio:</strong> galeria para exposições com iluminação adequada e 110,88 m² de
              área.
            </p>
          </>
        ),
      },
    ],
  },
  'paulo-freire': {
    label: 'Sala Paulo Freire',
    features: [
      {
        title: 'Sala Paulo Freire',
        images: instalacaoGallery('sala-paulo-freire'),
        imageLabel: 'Sala Paulo Freire',
        body: (
          <>
            <p>
              <strong>Quantidade de lugares:</strong> 82 lugares.
            </p>
            <p>
              <strong>Área total:</strong> 115 m².
            </p>
            <p>
              <strong>Área de palco:</strong> 17 m².
            </p>
            <p>Datashow e sistema de som.</p>
            <p>Cabine para tradução simultânea.</p>
            <p>Iluminação básica.</p>
          </>
        ),
      },
    ],
  },
  ensaio: {
    label: 'Sala de Ensaio',
    features: [
      {
        title: 'Sala de Ensaio',
        images: instalacaoGallery('sala-de-ensaio'),
        imageLabel: 'Sala de Ensaio',
        reverse: true,
        body: (
          <>
            <p>
              <strong>Área total:</strong> 115 m².
            </p>
            <p>Sistema de som.</p>
            <p>Iluminação básica.</p>
            <p>
              <strong>Função principal:</strong> espaço dinâmico dedicado à preparação artística, aulas, oficinas e
              ensaios técnicos ou de elenco.
            </p>
          </>
        ),
      },
    ],
  },
  saguao: {
    label: 'Saguão Superior',
    features: [
      {
        title: 'Saguão Superior',
        images: instalacaoGallery('saguao-superior'),
        imageLabel: 'Saguão Superior',
        body: (
          <>
            <p>
              <strong>Área total:</strong> 198 m².
            </p>
            <p>Local multiuso para eventos.</p>
            <p>
              <strong>Função principal:</strong> área elevada de recepção, apoio e convivência, ideal para dar suporte
              a eventos realizados nos pisos superiores e à expansão do fluxo da plateia.
            </p>
          </>
        ),
      },
    ],
  },
}

const spaceTabs: { id: SpaceId; label: string }[] = [
  { id: 'tuca', label: 'TUCA' },
  { id: 'tucarena', label: 'TUCARENA' },
  { id: 'paulo-freire', label: 'Sala Paulo Freire' },
  { id: 'ensaio', label: 'Sala de Ensaio' },
  { id: 'saguao', label: 'Saguão Superior' },
]

function InstalacaoCarousel({ images: slides, label }: { images: string[]; label: string }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    setCurrent(0)
  }, [slides])

  const select = (index: number) => setCurrent((index + slides.length) % slides.length)

  return (
    <div className="inst-carousel" aria-label={`Galeria: ${label}`}>
      <div className="inst-carousel-frame">
        {slides.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${label} — vista ${index + 1}`}
            className={index === current ? 'visible' : undefined}
            decoding="async"
          />
        ))}
        <button
          type="button"
          className="carousel-arrow previous inst-carousel-arrow"
          onClick={() => select(current - 1)}
          aria-label="Imagem anterior"
        >
          <span aria-hidden="true" />
        </button>
        <button
          type="button"
          className="carousel-arrow next inst-carousel-arrow"
          onClick={() => select(current + 1)}
          aria-label="Próxima imagem"
        >
          <span aria-hidden="true" />
        </button>
      </div>
      <div className="inst-dots" role="group" aria-label="Selecionar imagem">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === current ? 'active' : undefined}
            onClick={() => setCurrent(index)}
            aria-label={`Ver imagem ${index + 1}`}
            aria-pressed={index === current}
          />
        ))}
      </div>
    </div>
  )
}

function InstalacaoFeature({ block }: { block: FeatureBlock }) {
  return (
    <article className={block.reverse ? 'inst-feature reverse' : 'inst-feature'}>
      <div className="inst-visual">
        <h2>{block.title}</h2>
        <InstalacaoCarousel images={block.images} label={block.imageLabel} />
      </div>
      <div className="inst-info-card">{block.body}</div>
    </article>
  )
}

export function InstalacoesMain() {
  const [active, setActive] = useState<SpaceId>('tuca')
  const space = spacesById[active]

  return (
    <>
      <div className="inst-subnav-shell">
        <nav className="inst-subnav" aria-label="Espaços do TUCA">
          {spaceTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={active === tab.id ? 'active' : undefined}
              onClick={() => setActive(tab.id)}
              aria-current={active === tab.id ? 'true' : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <main className="instalacoes-main">
        <section key={active} className="inst-space-section" aria-label={space.label}>
          {space.features.map((feature, index) => (
            <div key={feature.title}>
              {index > 0 ? <hr className="inst-separator" aria-hidden="true" /> : null}
              <InstalacaoFeature block={feature} />
            </div>
          ))}
        </section>
      </main>
    </>
  )
}
