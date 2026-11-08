import type { ReactNode } from 'react'

import { ASSETS_BASE, appHref } from './paths'

const assets = `${ASSETS_BASE}/mostras`

type Exhibition = {
  id: string
  image: string
  imageAlt: string
  href: string
  description: ReactNode
}

const exhibitions: Exhibition[] = [
  {
    id: 'mostra-50-anos',
    image: `${assets}/1-tuca.png`,
    imageAlt: 'Capa da mostra Especial TUCA 50 anos',
    href: 'https://www.teatrotuca.com.br/50anos/',
    description: (
      <>
        A mostra celebra os 50 anos do Teatro TUCA, resgatando momentos marcantes de sua história e da
        trajetória do Grupo TUCA. Por meio de <strong>registros de espetáculos e da imprensa</strong>{' '}
        da época, apresenta a importância do teatro em meio à ditadura militar, destacando seu papel na
        resistência cultural e política e sua contribuição para a história do teatro brasileiro.
      </>
    ),
  },
  {
    id: 'mostra-em-cartaz',
    image: `${assets}/2-tuca.png`,
    imageAlt: 'Capa da mostra Em cartaz, nos palcos do TUCA',
    href: 'https://www.teatrotuca.com.br/em-cartaz-tuca/index.html',
    description: (
      <>
        A mostra apresenta a história viva do Teatro TUCA, destacando os{' '}
        <strong>espetáculos, eventos e manifestações</strong> que construíram sua identidade cultural.
        Resgata momentos importantes de sua trajetória e evidencia a contribuição do Grupo TUCA para a
        fundação do teatro durante a ditadura militar, valorizando a memória, a luta e a resistência que
        marcam sua história.
      </>
    ),
  },
]

export const MOSTRAS_PATH = '/memoria/mostras'

function ExhibitionRow({ exhibition }: { exhibition: Exhibition }) {
  return (
    <article id={exhibition.id} className="mostras-row">
      <img className="mostras-cover" src={exhibition.image} alt={exhibition.imageAlt} />
      <div className="mostras-card">
        <h2 className="mostras-card-title">Descrição da Mostra</h2>
        <p className="mostras-card-text">{exhibition.description}</p>
        <a
          className="mostras-access-button"
          href={exhibition.href}
          target="_blank"
          rel="noreferrer"
        >
          ACESSAR MOSTRA
        </a>
      </div>
    </article>
  )
}

export function MostrasMain() {
  return (
    <main className="mostras-main">
      <div className="mostras-inner">
        <div className="mostras-heading">
          <a className="mostras-back" href={appHref('/memoria')} aria-label="Voltar para a tela Memória">
            <img src={`${ASSETS_BASE}/acbdb.png`} alt="" width={19} height={19} />
          </a>
          <h1 className="mostras-title">MOSTRAS VIRTUAIS</h1>
        </div>

        <div className="mostras-list">
          {exhibitions.map((exhibition) => (
            <ExhibitionRow key={exhibition.id} exhibition={exhibition} />
          ))}
        </div>
      </div>
    </main>
  )
}
