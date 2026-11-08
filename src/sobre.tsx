import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { ASSETS_BASE } from './paths'

const assets = ASSETS_BASE

const YEARS = ['1961', '1965', '1975', '1984', '1998', '2002', '2026'] as const

type Year = (typeof YEARS)[number]

const SCROLLABLE_YEARS = new Set<Year>(['1961', '1965', '1975', '2002'])

const yearImages: Record<Year, { src: string; alt: string }> = {
  '1961': {
    src: `${assets}/11d5e.png`,
    alt: 'Construção do TUCA em frente ao edifício histórico da PUC-SP',
  },
  '1965': {
    src: `${assets}/historia/2.png`,
    alt: 'Registro histórico do TUCA em 1965',
  },
  '1975': {
    src: `${assets}/historia/3.png`,
    alt: 'Registro histórico do TUCA em 1975',
  },
  '1984': {
    src: `${assets}/historia/4.png`,
    alt: 'Registro histórico do TUCA em 1984',
  },
  '1998': {
    src: `${assets}/historia/5.png`,
    alt: 'Registro histórico do TUCA em 1998',
  },
  '2002': {
    src: `${assets}/historia/6.png`,
    alt: 'Registro histórico do TUCA em 2002',
  },
  '2026': {
    src: `${assets}/historia/7.png`,
    alt: 'Registro histórico do TUCA nos dias atuais',
  },
}

const supportingCompanies = [
  [
    'A6 & Cia S/C Ltda.;',
    'Cortez Editora e Livraria Ltda.;',
    'Engenisa Elétrica Ltda.;',
    'Gialpi Engenharia Indústria e Comércio Ltda.;',
    'Giroflex S.A.;',
    'Macromídia Express Comunicação Visual Ltda.;',
    'Marcenaria Baraúna Ltda.;',
    'Mills do Brasil Estruturas e Serviços Ltda.;',
    'Mutual Construções Ltda.;',
    'Natura Cosméticos Ltda.;',
  ],
  [
    'Nexus Engenharia e Construção Ltda.;',
    'Omega Iluminação Ltda.;',
    'Parquet União V.B.;',
    'Comercial Madereira Ltda.;',
    'Pluripiso Comercial Ltda.;',
    'SDMO do Brasil Ltda.;',
    'Tecnipol Recuperação e Reforço Estrutural Ltda.;',
    'TMV Engenharia e Construções Ltda.',
  ],
]

const historyByYear: Record<Year, { title: string; paragraphs: string[] }> = {
  '1961': {
    title: 'Ideação',
    paragraphs: [
      'A ideia de construção do TUCA ganhou força em 1961, construir um grande auditório somou-se ao objetivo maior de difundir a arte nos meios universitários e nas camadas sociais de baixa renda.',
      'O primeiro passo foi a preparação de um projeto arquitetônico que interagisse harmonicamente com as outras construções da PUC, feitas entre 1920 e 1924. O novo prédio, que teria uma fachada com arcos e janelas neocoloniais, seria assinado por Benedito Calixto de Jesus Neto, prestigiado arquiteto especializado em construções religiosas.',
      'Com fundos arrecadados em campanhas, empréstimos e com a venda de uma fazenda doada à PUC, a construção do Teatro foi iniciada e só acabaria quatro anos depois. A Universidade discutiu, durante este tempo, o destino do prédio, que estava exigindo tantos esforços e recursos. Os alunos queriam que o Tuca fosse utilizado por eles e que a programação atendesse à população de baixa renda que não tinha acesso a teatros.',
    ],
  },
  '1965': {
    title: 'Fundação & Morte e Vida Severina',
    paragraphs: [
      'Filho de uma instituição de longa tradição democrática, nasceu da vontade política da comunidade da Pontifícia Universidade Católica de participar da construção de uma sociedade justa e fraterna. A inauguração do teatro foi marcada pela apresentação da peça Morte e Vida Severina, em 1965.',
      'Em abril de 1965, cartazes espalhados pelo campus da PUC anunciavam: “O TUCA vem aí”. E a ideia de teatro universitário com função conscientizadora foi assumida pelo Departamento Cultural do Diretório Central dos Estudantes, que fez três contratações: Roberto Freire seria o diretor-geral do grupo de teatro, Silnei Siqueira, vindo da Record, seria diretor de atores e José Armando Ferrara responderia pela cenografia.',
      'Depois de um contrato de liberação de verba com a Secretaria de Estado, estava formado o Teatro dos Universitários da Católica. Foram feitos testes para a seleção de atores e o texto “Morte e Vida Severina”, de João Cabral de Melo Neto, foi escolhido. Ele reunia muitas razões a seu favor: seu autor era brasileiro, tratava de um tema da realidade social, ia ao encontro da ideologia estudantil e poderia congregar um grande número de atores.',
      'A montagem da peça envolveu vários setores da universidade. Alunos de Geografia, Direito, Letras e Psicologia, por exemplo, contribuíram substancialmente com seus conhecimentos em cada uma das áreas. O espetáculo foi musicado por Chico Buarque, que na época era estudante da Faculdade de Arquitetura e Urbanismo da USP e participava com frequência dos ensaios do TUCA.',
      'No dia 11 de setembro de 1965, o Auditório Tibiriçá foi inaugurado com a estréia de “Morte e Vida Severina”. Aplaudido de pé durante 10 minutos, reverenciado pelo público e pela crítica especializada, seria o grupo que emprestaria, a partir de então, seu nome ao teatro.',
    ],
  },
  '1975': {
    title: 'Ditadura e Censura',
    paragraphs: [
      'Muitas gerações viveram e construíram a história cultural e política do País ocupando os espaços do TUCA. Durante a Ditadura, o TUCA foi palco de importantes manifestações políticas, desempenhando um papel significativo no contexto histórico brasileiro. Servindo aos interesses culturais, educacionais, artísticos, políticos e sociais dos universitários e da população paulistana, o TUCA contribuiu ativamente no processo de redemocratização.',
      'As idéias de renovação da cultura iriam chocar-se com as barreiras estabelecidas a partir de 1968. Com a declaração do Ato Institucional Nº 5, a repressão atingiu seu patamar mais alto, que se manteria até por volta de 1975.',
      'Entre 1969 e 1974, o espaço voltou-se à apresentação de trabalhos de artistas de alto nível, que contribuíram para a educação e para a abertura de novos caminhos no campo artístico. Espetáculos musicais e teatrais expressivos fizeram parte da programação do Teatro, levando ao palco artistas como Elis Regina, Caetano Veloso, Chico Buarque, Vinicius de Moraes, Gianfrancesco Guarnieri e Fernanda Montenegro, que em muitas ocasiões enfrentaram a censura.',
      'Entre 1977 e 1984, a programação organizada pelo Instituto de Estudos Especiais, fez com que o Teatro fosse lembrado também por seu alto significado político. Era um palco privilegiado para simpósios, encontros, debates e atos públicos. Nele, o debate sempre foi possível, as idéias expressadas claramente, assegurando às palavras sua força de resistência.',
    ],
  },
  '1984': {
    title: 'Incêndios',
    paragraphs: [
      'Em 1984, o TUCA sofreu dois incêndios, em setembro e dezembro, que o destruíram quase completamente. A comunidade universitária uniu-se a empresários, autoridades, artistas e intelectuais em uma grande campanha para a sua reconstrução, da qual participaram diversas empresas e contou com apoio das Secretarias de Cultura Estadual e Municipal.',
      'A iniciativa permitiu que o Teatro fosse recuperado com o projeto do arquiteto Joaquim Guedes, que previa o funcionamento de quatro ambientes em 3.800 m² e três pavimentos. Entretanto, a insuficiência dos recursos doados não permitiu a conclusão da obra, o que levou o espaço a funcionar de forma parcial e precária por muitos anos.',
    ],
  },
  '1998': {
    title: 'Tombado como patrimônio',
    paragraphs: [
      'Após o tombamento do TUCA como Patrimônio Histórico de São Paulo em 1998, iniciou-se nova campanha para reconstrução e restauro.',
      'O TUCA tem sua fachada principal e implantação volumétrica tombadas pelo Patrimônio Histórico do Estado de São Paulo desde 1998. O grande significado de acontecimentos artísticos, atos públicos e cerimônias promovidos no local o transformaram em referência para setores organizados da sociedade que resistiram à ditadura, o que justifica o tombamento do teatro.',
    ],
  },
  '2002': {
    title: 'Fim da Restauração',
    paragraphs: [
      'No final dos anos noventa, procurando se beneficiar das leis de incentivo fiscal, a PUC-SP elaborou um Projeto de Reforma e Restauro do TUCA, preocupada em preservar este importante marco histórico e devolver à cidade um espaço cultural dotado de conforto e segurança.',
      'Graças à aprovação pelo Ministério de Cultura, a PUC-SP pôde captar recursos e buscar parcerias para auxílio no projeto. O Banco Bradesco S.A., que tem como valor empresarial o incentivo à cultura, financiou a obra, que ficou a cargo da Método Engenharia, escolhida pela sua experiência na restauração de teatros no Brasil.',
      'Após o tombamento do TUCA como Patrimônio Histórico de São Paulo em 1998, iniciou-se nova campanha para reconstrução e restauro. Em 2002, com aprovação pelo MINC e patrocínio do Banco Bradesco, o TUCA foi finalmente reconstruído. A reinauguração aconteceu em 22 de agosto de 2003.',
    ],
  },
  '2026': {
    title: 'Hoje em dia',
    paragraphs: [
      'O TUCA consolida-se cada vez mais como um dos mais importantes marcos e patrimônios culturais da cidade de São Paulo e do país. Além de um palco para grandes espetáculos, o teatro atua como um polo vibrante a serviço dos interesses culturais, educacionais, artísticos, políticos e sociais dos estudantes da PUC-SP e de toda a população paulistana.',
      'Carregando o legado histórico de sua resistência inabalável durante os anos de chumbo, o TUCA permanece como um símbolo vivo da luta pela liberdade de expressão e pela democracia, tendo contribuído ativamente para o processo de redemocratização do Brasil. Hoje, o teatro continua a renovar seu compromisso com a vanguarda artística, com o pensamento crítico e com a transformação social, unindo gerações de artistas, intelectuais e defensores da cultura.',
    ],
  },
}

function Timeline({
  selectedYear,
  onSelect,
}: {
  selectedYear: Year
  onSelect: (year: Year) => void
}) {
  const navRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<Partial<Record<Year, HTMLButtonElement>>>({})
  const [dotTop, setDotTop] = useState(0)

  useLayoutEffect(() => {
    const updateDot = () => {
      const nav = navRef.current
      const button = itemRefs.current[selectedYear]
      if (!nav || !button) return

      const navRect = nav.getBoundingClientRect()
      const buttonRect = button.getBoundingClientRect()
      setDotTop(buttonRect.top - navRect.top + buttonRect.height / 2 - 7.5)
    }

    updateDot()
    window.addEventListener('resize', updateDot)
    return () => window.removeEventListener('resize', updateDot)
  }, [selectedYear])

  return (
    <nav ref={navRef} className="historia-timeline" aria-label="Linha do tempo da história do TUCA">
      <div className="historia-timeline-line" aria-hidden="true" />
      <div
        className="historia-timeline-dot"
        aria-hidden="true"
        style={{ transform: `translateY(${dotTop}px)` }}
      />
      <ol className="historia-timeline-years">
        {YEARS.map((year) => {
          const isSelected = year === selectedYear
          return (
            <li key={year}>
              <button
                ref={(element) => {
                  if (element) itemRefs.current[year] = element
                  else delete itemRefs.current[year]
                }}
                type="button"
                aria-current={isSelected ? 'date' : undefined}
                className={isSelected ? 'historia-timeline-year is-active' : 'historia-timeline-year'}
                onClick={() => onSelect(year)}
              >
                {year}
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

function CompaniesModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[2100] flex items-center justify-center bg-black/25 p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="companies-modal-title"
        className="historia-companies-modal relative max-h-[calc(100dvh-40px)] min-h-[367px] w-[819px] max-w-[calc(100vw-40px)] overflow-y-auto rounded-[7px] bg-[#e8e8e8] px-8 pt-[46px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
      >
        <p
          id="companies-modal-title"
          className="mx-auto w-full max-w-[329px] text-center font-['Urbanist:SemiBold'] text-[22px] font-semibold leading-[26px] text-[#c4080c]"
        >
          Outras empresas que apoiaram na reconstrução do TUCA
        </p>

        <button
          type="button"
          aria-label="Fechar"
          onClick={onClose}
          className="sobre-popup-close group absolute right-[28px] top-[25px] flex size-8 cursor-pointer items-center justify-center border-0 bg-transparent p-0"
        >
          <img src={`${assets}/ba46d.svg`} alt="" className="sobre-popup-close-default rotate-45" />
          <img src={`${assets}/4204d.svg`} alt="" className="sobre-popup-close-hover hidden rotate-45" />
          <img src={`${assets}/b1b14.svg`} alt="" className="sobre-popup-close-pressed hidden rotate-45" />
        </button>

        <div className="historia-companies-columns mt-8 grid gap-5 font-['Urbanist:Regular'] text-[16px] font-normal leading-[19px] text-black md:grid-cols-2 md:gap-[59px] md:px-[5px]">
          {supportingCompanies.map((column, index) => (
            <ul key={index} className="list-disc pl-6">
              {column.map((company) => (
                <li key={company}>{company}</li>
              ))}
            </ul>
          ))}
        </div>

        <div className="historia-companies-divider" aria-hidden="true" />
      </div>
    </div>
  )
}

export function HistoriaMain() {
  const [selectedYear, setSelectedYear] = useState<Year>('1961')
  const [isCompaniesModalOpen, setIsCompaniesModalOpen] = useState(false)
  const content = historyByYear[selectedYear]
  const image = yearImages[selectedYear]

  return (
    <div className="historia-page">
      <section className="historia-layout" aria-labelledby="history-title">
        <Timeline selectedYear={selectedYear} onSelect={setSelectedYear} />

        <div className="historia-body">
          <div key={selectedYear} className="historia-panel historia-split">
            <article
              className={
                SCROLLABLE_YEARS.has(selectedYear) ? 'historia-text-col is-scrollable' : 'historia-text-col'
              }
            >
              <h2 id="history-title" className="historia-title">
                {selectedYear === '1965' ? (
                  <>
                    Fundação &amp; Morte
                    <br />
                    e Vida Severina
                  </>
                ) : (
                  content.title
                )}
              </h2>
              <div className="historia-text-body">
                {content.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <div
              className={
                selectedYear === '1965' ? 'historia-media-col is-1965' : 'historia-media-col'
              }
            >
              <img src={image.src} alt={image.alt} className="historia-figure-image" />
              {selectedYear === '2002' && (
                <button
                  type="button"
                  onClick={() => setIsCompaniesModalOpen(true)}
                  className="historia-companies-button"
                >
                  Empresas que apoiaram o TUCA
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      {isCompaniesModalOpen && <CompaniesModal onClose={() => setIsCompaniesModalOpen(false)} />}
    </div>
  )
}

/** @deprecated Use HistoriaMain */
export const SobreMain = HistoriaMain
