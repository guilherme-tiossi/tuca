import type { ReactNode } from 'react'

import { ASSETS_BASE, appHref } from './paths'

const assets = ASSETS_BASE

const cards: { title: string; text: ReactNode; emphasis: string }[] = [
  {
    title: 'Atendimento à pesquisa',
    text: (
      <>
        Para realizar sua pesquisa, entre em contato conosco somente através do nosso e-mail, informando qual
        o tema da pesquisa e/ou qual fundo ou coleção pretende consultar. O CDM Tuca responderá o mais breve
        possível, marcando a data e horário para o atendimento.
      </>
    ),
    emphasis: 'A consulta ao acervo é previamente agendada.',
  },
  {
    title: 'Visitação técnica',
    text: (
      <>
        Para solicitar uma visita, entre em contato conosco através do nosso e-mail e ou telefone. O CDM Tuca
        responderá o mais breve possível, marcando a data e horário para a realização da visitação às
        dependências do Centro.
      </>
    ),
    emphasis: 'A visitação técnica é previamente agendada.',
  },
  {
    title: 'Ampliação do acervo: recebimento de doações',
    text: (
      <>
        Para doar material pertinente ao Teatro TUCA, entre em contato conosco através do nosso e-mail e ou
        telefone. O CDM Tuca poderá visitar o local onde se encontra o acervo a ser doado, verificar a
        pertinência e produzir termo de doação para a efetivação da transferência.
      </>
    ),
    emphasis: 'As doações serão avaliadas pelo CDM TUCA.',
  },
]

export function MemoriaMain() {
  return (
    <div className="memoria-page">
      <section className="memoria-hero" aria-labelledby="memoria-hero-title">
        <div className="memoria-hero-inner">
          <div>
            <h1 id="memoria-hero-title" className="memoria-hero-title">
              Centro de Documentação e Memória do TUCA
            </h1>
            <p className="memoria-hero-lead">
              Preocupado em preservar, valorizar e compartilhar parte de sua história, o TUCA - Teatro da
              Universidade Católica (PUC-SP) criou em 2005 o Centro de Documentação e Memória. Desde o início de
              suas atividades, o Centro adota procedimentos sistemáticos de guarda, tratamento e difusão de seu
              acervo documental, que inclui vasto material sobre espetáculos consagrados apresentados nos palcos
              deste Teatro.
            </p>
            <p className="memoria-hero-highlight">Conheça nosso acervo com documentos a respeito do teatro.</p>
            <div className="memoria-hero-actions">
              <a className="memoria-red-button" href={appHref('/memoria/acervo')}>
                CONHECER ACERVO
              </a>
              <a className="memoria-red-button" href={appHref('/memoria/mostras')}>
                CONHECER MOSTRAS
              </a>
            </div>
          </div>
          <div className="memoria-hero-media">
            <img src={`${assets}/memoria-hero.png`} alt="Plateia lotada no Teatro TUCA" />
          </div>
        </div>
      </section>

      <div className="memoria-content">
        <section className="memoria-about-row" aria-labelledby="memoria-o-que-somos">
          <div>
            <h2 id="memoria-o-que-somos" className="memoria-section-title">
              O QUE SOMOS?
            </h2>
            <div className="memoria-copy-block">
              <p>
                Em 2010, com o apoio da Lei Federal de Incentivo à Cultura e o patrocínio do Banco Safra, o CDM
                TUCA sofreu adequações físicas para receber mobiliário, equipamentos e materiais adequados à
                conservação de documentos de importância social. Ainda em 2011, uma parceria com a Imprensa
                Oficial do Estado de São Paulo possibilitou o desenvolvimento do projeto de digitalização de parte
                substancial do acervo, aumentando as possibilidades de preservação e difusão de séries expressivas de
                cartazes teatrais, fotografias e, sobretudo, dos processos administrativos que permeiam a execução
                dos espetáculos nos palcos do Teatro.
              </p>
              <p>
                O acesso aos arquivos do Tuca permite a revelação de conteúdos e tendências culturais e sociais,
                por meio da análise da natureza e perfil dos espetáculos musicais e teatrais, dos eventos
                científicos e políticos, dos atos e manifestações que aqui o Teatro serviu de espaço.
              </p>
            </div>
          </div>
          <img
            className="memoria-side-image"
            src={`${assets}/40b61.png`}
            alt="Manifestação histórica em frente à PUC-SP"
          />
        </section>

        <section className="memoria-about-row memoria-about-row-reverse" aria-labelledby="memoria-o-que-queremos">
          <img
            className="memoria-side-image"
            src={`${assets}/fd908.png`}
            alt="Palco do TUCA durante apresentação histórica"
          />
          <div>
            <h2 id="memoria-o-que-queremos" className="memoria-section-title">
              O QUE QUEREMOS?
            </h2>
            <ul className="memoria-list">
              <li>Gerenciamento do arquivo corrente, intermediário e permanente da Instituição;</li>
              <li>Difusão do acervo de fase histórica e de interesse público;</li>
              <li>
                Aquisição de novos acervos – arquivístico ou biblioteconômico – complementares e similares ao do
                Teatro, com o cuidado de não misturá-los com o principal acervo do Centro – o Fundo TUCA;
              </li>
              <li>Desenvolvimento de projetos de história oral;</li>
              <li>Participação e promoção de eventos em suas áreas de atuação.</li>
            </ul>
          </div>
        </section>

        <section className="memoria-cards-section" id="o-que-fazemos" aria-labelledby="memoria-o-que-fazemos">
          <h2 id="memoria-o-que-fazemos" className="memoria-section-title">
            O QUE FAZEMOS?
          </h2>
          <div className="memoria-cards">
            {cards.map((card) => (
              <article key={card.title} className="memoria-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <p className="memoria-card-emphasis">{card.emphasis}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="memoria-partners" aria-labelledby="memoria-parceiros">
          <h2 id="memoria-parceiros" className="memoria-section-title">
            PARCEIROS
          </h2>
          <div className="memoria-partners-logos">
            <img src={`${assets}/d878a.png`} alt="Lei de Incentivo à Cultura — Lei Rouanet" />
            <div className="memoria-partner-minc">
              <img src={`${assets}/673b9.png`} alt="Ministério da Cultura e Governo Federal — Brasil União e Reconstrução" />
            </div>
            <img src={`${assets}/a171d.png`} alt="Imprensa Oficial — Governo do Estado de São Paulo" />
          </div>
        </section>
      </div>

      <section className="memoria-contact" aria-labelledby="memoria-equipe">
        <div className="memoria-contact-inner">
          <h2 id="memoria-equipe" className="memoria-contact-heading">
            EQUIPE E CONTATO
          </h2>
          <div className="memoria-contact-grid">
            <div>
              <h3>Supervisão técnica</h3>
              <p>
                Simone Silva Fernandes
                <br />
                Documentalista do CEDIC/PUC-SP
              </p>
            </div>
            <div>
              <h3>Apoio</h3>
              <p>
                CEDIC - Centro de Documentação e Informação Científica
                <br />
                <a href="https://www.pucsp.br/cedic" target="_blank" rel="noreferrer">
                  https://www.pucsp.br/cedic
                </a>
              </p>
            </div>
            <div>
              <h3>Contato</h3>
              <address>
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
    </div>
  )
}
