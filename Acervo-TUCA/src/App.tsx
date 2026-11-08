const asset = (name: string) => `/assets/${name}`;

const menuItems = [
  { label: "ESPETÁCULOS", href: "/espetaculos" },
  { label: "COMPRAR", href: "/comprar" },
  { label: "INSTALAÇÕES", href: "/instalacoes" },
  { label: "LOCALIZAÇÃO", href: "/localizacao" },
  { label: "HISTÓRIA", href: "/historia" },
  { label: "MEMÓRIA", href: "/memoria", current: true },
];

const collections = [
  {
    title: "Fundo Grupo TUCA",
    description:
      "Documentos sobre a história e a trajetória do Grupo TUCA e sua importância para o teatro brasileiro.",
    href: "/memoria/fundo-grupo-tuca",
  },
  {
    title: "Coleção de Depoimentos: História Oral,\nArte e Espaço do TUCA",
    description:
      "Preservação de relatos e memórias sobre a história do teatro, suas experiências e seu significado cultural.",
    href: "/memoria/depoimentos",
  },
  {
    title: "Coleção Espetáculos Artísticos:\nArte e Crítica",
    description:
      "Registro de espetáculos e suas repercussões críticas no cenário artístico e teatral",
    href: "/memoria/arte-e-critica",
  },
  {
    title: "Coleção Espetáculos Artísticos:\nArte e Política",
    description: "Relação entre produções teatrais, contexto político e resistência cultural.",
    href: "/memoria/arte-e-politica",
  },
];

const fundoHistory = [
  <>
    O grupo TUCA foi idealizado por Antônio Mercado Neto, membro da diretoria do Centro Acadêmico
    “22 de Agosto” em 1963, contudo apenas depois do golpe de 1964 a ideia de um teatro
    universitário ganhou forças. Neto junto de Antônio da Costa Ciampa, estudante de Psicologia e
    presidente do DCE (Diretório Central dos Estudantes) da PUC receberam apoio financeiro de Nagid
    Elchmer diretor geral da Comissão Estadual de Teatro para realizarem cursos e montagens
    teatrais. Contrataram Roberto Freire para a direção geral do grupo, Silnei Siqueira para a
    direção de atores e José Armando Ferrara para cuidar da cenografia.
  </>,
  <>
    Paralelamente aos cursos oferecidos pelo DCE, começaram as inscrições para testes visando à
    montagem da primeira peça, que tinha como texto o poema de João Cabral de Melo Neto, Morte e
    Vida Severina. A peça estreou no dia 11 de setembro de 1965 e foi ovacionada pelo público que
    lotou o Auditório Tibiriçá. No ano seguinte o grupo participou do 4º Festival Internacional de
    Teatro Universitário em Nancy, França levando o primeiro lugar no evento. Com a popularidade
    outros convites apareceram e o grupo Tuca se apresentou no Teatro das Nações em Paris e em
    diversos lugares da Europa.
  </>,
  <>
    A segunda montagem do grupo Tuca foi O &amp; A, que contava com trinta atores, quinze rapazes e
    quinze moças divididos em dois blocos, a peça não tinha texto e os atores pronunciavam apenas o
    som “O” e “A”. A peça apresentava a maneira como a mentalidade e posições retrógradas agiam para
    sufocar aqueles que buscavam a liberdade sem pressões e violências, o que ia de encontro com a
    ditadura civil-militar. Com dificuldades de vetar a peça por falta de texto, a Censura Federal
    começou a prender os atores antes de cada apresentação e liberá-los depois do espetáculo, com
    essa atitude foi cada vez mais difícil continuar com as apresentações e posteriormente o grupo
    começou a se dispersar. Com outra direção, as duas últimas peças montadas pelo grupo foram
    “Comala”, extraída do livro de Juan Rulfo, que representou o Brasil no Festival Universitário
    Latino-Americano de Manizales, na Colômbia, que recebeu menção honrosa, e o “Terceiro Demônio”
    uma criação coletiva que ficou na terceira colocação do mesmo Festival de Manizales, em 1970.
    Devido ao contexto da época e por questões internas o grupo rompeu com PUC-SP e deslocou suas
    atividades para o Equipe Vestibulares, que a partir de então, cedeu-lhes verbas e as
    dependências.
  </>,
  <>Em meados de 1970 o auditório Tibiriçá recebeu o nome do grupo devido ao seu grande sucesso.</>,
];

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="TUCA — página inicial">
          <img src={asset("ecd8c.png")} alt="TUCA" />
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          {menuItems.map((item) => (
            <a
              key={item.label}
              className={item.current ? "is-current" : undefined}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function CollectionCard({ title, description, href }: (typeof collections)[number]) {
  return (
    <article className="collection-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a className="access-button" href={href}>
        ACESSAR
      </a>
    </article>
  );
}

function SocialLink({
  href,
  icon,
  label,
  className,
}: {
  href: string;
  icon: string;
  label: string;
  className?: string;
}) {
  return (
    <a className="social-link" href={href} aria-label={label} target="_blank" rel="noreferrer">
      <img className="social-circle" src={asset("1b452.svg")} alt="" />
      <img className={`social-icon ${className ?? ""}`} src={asset(icon)} alt="" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <img className="puc-logo" src={asset("9d425.png")} alt="Brasão da PUC-SP" />

        <section className="footer-block">
          <h2>Telefone</h2>
          <p>Administração: (11) 3670-8470</p>
          <p>Secretaria: (11) 3670-8458</p>
          <p>Locações: (11) 3670-8460</p>
          <p>Comunicação: (11) 3670-8462</p>
        </section>

        <div className="footer-center">
          <section className="footer-block">
            <h2>Endereço</h2>
            <p>R. Monte Alegre, 1024 - Perdizes,</p>
            <p>São Paulo - SP, 05014-001</p>
          </section>

          <section className="footer-block social-block">
            <h2>Redes sociais</h2>
            <div className="social-list">
              <SocialLink
                href="https://www.instagram.com/teatrotuca/"
                icon="ec53b.png"
                label="Instagram do TUCA"
              />
              <SocialLink
                href="https://www.facebook.com/teatrotuca"
                icon="e74e7.png"
                label="Facebook do TUCA"
              />
              <SocialLink
                href="https://x.com/teatrotuca"
                icon="f641a.png"
                label="X do TUCA"
                className="x-icon"
              />
            </div>
          </section>
        </div>

        <section className="footer-block">
          <h2>Bilheteria</h2>
          <p>Terça a Sábado das 14h às 20h</p>
          <p>Domingo das 14h às 17h</p>
          <br />
          <p>(11) 3670-8455</p>
          <p>tayna.mello@sympla.com.br</p>
        </section>
      </div>

      <div className="copyright">
        <p>© Copyright - 2026 - Teatro Tuca - PUC-SP</p>
        <p>Desenvolvido por Pedro Marin e Raquel Menah - TCC D07</p>
      </div>
    </footer>
  );
}

function ArchivePage() {
  return (
    <main className="archive">
      <div className="archive-inner">
        <div className="archive-heading">
          <span className="back-to-memory" aria-hidden="true">
            <img src={asset("acbdb.png")} alt="" />
          </span>
          <h1>ACERVO</h1>
        </div>

        <div className="collection-grid">
          {collections.map((collection) => (
            <CollectionCard key={collection.title} {...collection} />
          ))}
        </div>
      </div>
    </main>
  );
}

function FundoContent() {
  return (
    <>
      <section className="document-section">
        <h2>Identificação</h2>
        <div className="identification">
          <p>
            <strong>Denominação:</strong> Grupo de Teatro dos Universitários da Católica
          </p>
          <p>
            <strong>Sigla:</strong> GTUCA
          </p>
          <p>
            <strong>Natureza do Conjunto:</strong> Fundo.
          </p>
          <p>
            <strong>Datas-limite:</strong> 1965 – 1973 (?)
          </p>
          <p>
            <strong>Quantidade:</strong> 3 pastas.
          </p>
        </div>
      </section>

      <section className="document-section">
        <h2>Contextualização</h2>
        <strong>História Administ./Biografia:</strong>
        {fundoHistory.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <p>
          Bibliografia
          <br />
          Rodrigues, Marly. TUCA: 20 anos / Marly Rodrigues, Roberta Sundfeld, Solange Peirão. São
          Paulo: IMESP, 1986.
        </p>
        <p>Hist. Arquivística/ Procedência:</p>
        <p>
          Os documentos que compõem o Fundo Grupo TUCA foram acumulados em decorrência das montagens
          das peças teatrais feitas pelo grupo no período de sua existência dentro das dependências
          da PUC-SP e foram encontrados misturados à massa documental do próprio Teatro, enquanto
          instituição. Somente em 2011, em virtude do avanço do processamento técnico esta
          documentação foi separada e reunida.
        </p>
      </section>

      <section className="document-section">
        <h2>Conteúdo e Estrutura</h2>
        <strong>Âmbito e Conteúdo:</strong>
        <p>
          O Fundo é composto de documentos divididos em dossiês das peças, sendo elas: Morte e Vida
          Severina, O&amp;A, Comala e 3º Demônio. Os documentos que os formam são clippings, pedidos
          de ensaios, folders, cartazes, borderôs, textos teatrais, aprovação da censura, parecer do
          capelão e convites; relatórios, correspondência, promoção de evento, pedidos de utilização
          do espaço, correspondência interinstitucional, autos de infração ao grupo, telegramas,
          folders e clippings do grupo em outros espaços cênicos.
        </p>
        <strong>Condições de Acesso:</strong>
        <p>Não há restrições à consulta.</p>
      </section>
    </>
  );
}

function OralHistoryContent() {
  return (
    <>
      <section className="document-section">
        <h2>Identificação</h2>
        <div className="identification">
          <p>
            <strong>Denominação:</strong> História Oral: Arte e Espaço do Tuca
          </p>
          <p>
            <strong>Sigla:</strong> HIST ORAL AEATUCA
          </p>
          <p>
            <strong>Natureza do Conjunto:</strong> Coleção
          </p>
          <p>
            <strong>Datas-limite:</strong> 2006-2011
          </p>
        </div>
      </section>

      <section className="document-section">
        <h2>Contextualização</h2>
        <strong>História Administ./Biografia:</strong>
        <p>
          Lançado em 2006 com a exposição de cartazes dos espetáculos do TUCA, realizada no saguão
          do Tuca Arena, o projeto Suas Memórias Nossa, História visa à ampliação do acervo
          arquivístico, por meio de captação de novos conjuntos documentais – como os de depoimentos
          orais. O intuito foi de formar uma coleção de depoimentos daqueles que, de alguma forma,
          passaram pelo Teatro.
        </p>
        <p>
          Para isso, foi feita uma seleção de possíveis entrevistados no interesse em traçar a
          transformação do espaço edificado e estático, em algo que ganha movimento e conhecimento.
          Foi adotado para guiar as entrevistas um prévio roteiro de perguntas, elaborado a partir
          de pesquisas realizadas anteriormente na documentação já organizada e armazenada do
          Centro, além de ser levada em conta a estrutura do teatro, como a coxia, a boca de cena, o
          palco e o auditório, a fim de descobrir os meandros pouco explorados e possibilitar a
          complementação de olhares sobre o teatro, que apenas com a documentação administrativa não
          seria possível.
        </p>
        <p>
          <strong>Hist. Arquivístico/ Procedência:</strong>
        </p>
        <p>
          As entrevistas foram elaboradas pelo Centro de Documentação e Memória - TUCA, que contou
          com apoio técnico da TV-PUC, setor responsável pela coleta e produção de produtos
          midiáticos, que forneceram equipamentos de captação de imagem e som.
        </p>
      </section>

      <section className="document-section">
        <h2>Conteúdo e Estrutura</h2>
        <strong>Âmbito e Conteúdo:</strong>
        <p>
          A coleção é composta por seis DVDs de aproximadamente uma hora e cassetes de áudio que
          contêm entrevistas de diversas personalidades que viveram e fizeram parte da história do
          Teatro. Exemplos disso foram os atores Hélio Cícero, Sandra Corveloni e Denise Fraga, que
          contaram suas experiências tanto pedagógicas, quanto artísticas no TUCA; rememoraram
          questões da reforma, da realização de montagens teatrais, das amizades que estabeleceram
          nesse espaço com diretores, colegas de profissão e da importância tanto profissional,
          quanto pessoal de terem passado pelo palco deste teatro.
        </p>
        <p>
          Christine Greiner, assistente-doutora da PUC-SP e membro de corpo editorial da
          Telondefondo, revista de teoria y crítica teatral, e Kathya Godoy doutora pela PUC-SP,
          bailarina e coreógrafa, ambas relembram as atividades referentes à dança no Tuca, contaram
          suas longas trajetórias e projetos realizados em parceria com a direção do Teatro.
        </p>
        <p>
          Pablo Moreira, psicólogo, pedagogo e diretor teatral, coordena a Escola de Atores do TUCA.
          Pablo comentou a criação do curso de teatro no final da década de 1980, as montagens e
          direções de peças apresentadas pelos estudantes do curso, e como as atividades dentro do
          espaço foram se modificando ao longo do tempo. Pablo Moreira, também se lembrou do tempo
          da reforma do Tuca e do convite que recebeu para reerguer a vida cultural e teatral que o
          TUCA havia conquistado anteriormente. Recordou sobre o Festival Universitário de Blumenau
          e os diversos prêmios que a peça, Lusíadas or not Lusíadas recebeu.
        </p>
        <p>
          Fred Rossi empresário, produtor e diretor de shows e eventos culturais comentou sobre sua
          carreira, os diversos cantores e cantoras que ele trouxe ao palco do Tuca, como Vinicius
          de Moraes, Ney Matogrosso e Mercedes Sosa, e como isso contribuiu para o circuito
          universitário e para a história do teatro. Marly Rodrigues, historiada e doutora pela
          Unicamp, redigiu em 1986, o livro Tuca 20 anos. Em entrevista Marly relembrou suas
          experiências nesse espaço, desde o final dos anos de 1960, como as reuniões do movimento
          estudantil que aconteciam no antigo tuquinha e da pesquisa realizada para a constituição
          da relação do Tuca com a sociedade que se tornou livro.
        </p>
        <p>
          Francisco Guedes, arquiteto, urbanista e músico, filho do Joaquim Guedes, falecido
          arquiteto responsável pelo projeto de reconstrução do TUCA, fez parte da reconstrução do
          Teatro, tanto na parte de angariação de verba tocando com Arrigo Barnabé, quanto dentro do
          projeto arquitetônico de reconstrução criado por seu pai. Guedes falou sobre as mudanças
          físicas que o teatro sofreu e como foi para ele coordenar as atividades no dia-a-dia da
          obra.
        </p>
        <p>
          Renato Ganhito, diretor de projetos lembrou a época de estudante de história da PUC-SP e
          do convite feito pelo Padre Enzo Guzzo para a participação na comissão de reconstrução do
          TUCA, falou sobre os espetáculos que aconteciam no Tuca na época e o quanto ele os
          considerava direcionados para o público empresarial e não para o universitário, rememorou
          o período em que foi diretor do teatro e da produção artística que o espaço assumiu
          posteriormente.
        </p>
        <p>
          Jorge Eugênio Alves, ex-funcionário do Teatro TUCA relembrou coisas relacionadas à sua
          carreira no teatro e como era preparar o palco para receber os espetáculos; ademais, Jorge
          comentou como o Grupo Tuca se utilizava do espaço e da escolta que acompanhou Caetano
          Veloso após ter sido vaiado durante o III Festival Internacional da Canção.
        </p>
        <strong>Condição de Acesso:</strong>
        <p>Não há restrições à consulta.</p>
      </section>
    </>
  );
}

function ArtAndCriticismContent() {
  return (
    <>
      <section className="document-section">
        <h2>Identificação</h2>
        <div className="identification">
          <p>
            <strong>Denominação:</strong> Espetáculos Artísticos: Arte e Crítica
          </p>
          <p>
            <strong>Sigla:</strong> COL EAAC
          </p>
          <p>
            <strong>Natureza do Conjunto:</strong> Coleção
          </p>
          <p>
            <strong>Datas-limite:</strong> 1960-2001
          </p>
          <p>
            <strong>Quantidade:</strong> 7 caixas Arquivo
          </p>
        </div>
      </section>

      <section className="document-section">
        <h2>Contextualização</h2>
        <strong>Hist Administ./Biografia:</strong>
        <p>
          Idéo Bava, decorador e artista plástico, nascido em Santos em 1933, foi dono da Galeria
          Tenda, na Alameda Jaú, São Paulo, até os anos de 1986. Sempre se preocupou como galerista
          em expor objetos de qualidade e em lançar artistas novos e desconhecidos do grande
          público. Nunca expôs suas próprias obras, a não ser a convite da Prefeitura de Jundiaí, em
          1988, naquela localidade.
        </p>
        <p>
          Foi o primeiro presidente da ABD - Associação Brasileira de Decoradores. Colecionou
          durante mais de 40 anos, artigos e recortes de jornais da grande imprensa, referentes
          críticas sobre arte e espetáculos, que aconteceram na cena cultural brasileira, como
          também alguns folders de concertos, danças e teatro devido ao seu interesse profissional.
        </p>
        <p>
          Em 2013, mudou-se para um apartamento, onde não foi possível manter consigo esse material,
          razão pela qual os doou para instituições, como o Centro de Documentação e Memória - TUCA,
          Estação Pinacoteca, Centro Cultural São Paulo e IEB - Instituto de Estudos Brasileiros, da
          USP.
        </p>
        <p>
          <strong>Hist. Arquivística/ Procedência:</strong>
        </p>
        <p>
          Os documentos foram doados pela Vera Wolff Bava Moreira, filha de Idéo Bava, no ano de
          2013.
        </p>
      </section>

      <section className="document-section">
        <h2>Conteúdo e Estrutura</h2>
        <strong>Âmbito e Conteúdo:</strong>
        <p>
          A coleção é composta por recortes de artigos de jornais, revistas, programas, folders,
          releases e ingressos originais dos espetáculos de dança, música e teatro que aconteceram
          por mais de 40 anos na cena cultural brasileira.
        </p>
        <strong>Condição de Acesso:</strong>
        <p>Não há restrições à consulta.</p>
      </section>
    </>
  );
}

function ArtAndPoliticsContent() {
  return (
    <>
      <section className="document-section">
        <h2>Identificação</h2>
        <div className="identification">
          <p>
            <strong>Denominação:</strong> Coleção Espetáculos Artísticos: Arte e Política
          </p>
          <p>
            <strong>Sigla:</strong> COL EAAP
          </p>
          <p>
            <strong>Natureza do Conjunto:</strong> Coleção
          </p>
          <p>
            <strong>Datas-limite:</strong> 1967-1997
          </p>
          <p>
            <strong>Quantidade:</strong> 6 caixas Arquivo
          </p>
        </div>
      </section>

      <section className="document-section">
        <h2>Contextualização</h2>
        <strong>História Administ./Biografia:</strong>
        <p>
          Vera Lucia Chaia é livre-docente pela Pontifícia Universidade Católica de São Paulo
          (PUC-SP), professora-associada, coordenadora e pesquisadora do NEAMP – Núcleo de Estudos
          em Arte, Mídia e Política do Programa de Estudos Pós- graduados em Ciências Sociais da
          PUC-SP e do CNPq.
        </p>
        <p>
          Colecionou durantes anos materiais relacionados à música, dança e teatro por apreciar
          esses modos de expressões e os doou a fim de que pesquisadores e interessados em geral
          tivessem acesso a esses documentos, os quais abrangem espetáculos de dança, música e
          teatro que expressavam questões de cunho social e político do contexto brasileiro.
        </p>
        <p>
          <strong>Hist. Arquivística/ Procedência:</strong>
        </p>
        <p>
          Os documentos foram doados primeiramente ao CEDIC (Centro de Documentação e Informação
          Científica) da PUC-SP em 1998, pela livre-docente Vera Chaia, e transferidos
          posteriormente ao CDM- TUCA no final do ano de 2013.
        </p>
      </section>

      <section className="document-section">
        <h2>Conteúdo e Estrutura</h2>
        <strong>Âmbito e Conteúdo:</strong>
        <p>
          A coleção é composta por trezentos e trinta e cinco documentos dentre eles, periódicos de
          imprensa especializada, programas e folhetos originais de espetáculos de música, dança,
          teatro e um ganzá.
        </p>
        <strong>Condição de Acesso:</strong>
        <p>Não há restrições à consulta.</p>
      </section>
    </>
  );
}

function CollectionDocumentContent({ collectionIndex }: { collectionIndex: number }) {
  if (collectionIndex === 0) return <FundoContent />;
  if (collectionIndex === 1) return <OralHistoryContent />;
  if (collectionIndex === 2) return <ArtAndCriticismContent />;
  return <ArtAndPoliticsContent />;
}

function downloadDocument(title: string) {
  const pageText =
    document
      .querySelector<HTMLElement>(".document-card")
      ?.innerText.replace("BAIXAR DOCUMENTO", "")
      .trim() ?? title;
  const content = pageText;
  const url = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `${title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}.txt`;
  link.click();
  URL.revokeObjectURL(url);
}

function DocumentPage({ collectionIndex }: { collectionIndex: number }) {
  const collection = collections[collectionIndex];

  return (
    <main className="document-page">
      <div className="document-shell">
        <a className="back-to-archive" href="/" aria-label="Voltar para ACERVO">
          <img src={asset("acbdb.png")} alt="" />
        </a>

        <article className="document-card">
          <h1>
            {collectionIndex === 1 ? (
              <>
                Coleção de Depoimentos: História Oral,
                <br />
                Arte e Espaço do TUCA
              </>
            ) : (
              collection.title.replace("\n", " ")
            )}
          </h1>
          <CollectionDocumentContent collectionIndex={collectionIndex} />
          <button
            className="download-button"
            type="button"
            onClick={() => downloadDocument(collection.title)}
          >
            BAIXAR DOCUMENTO
          </button>
        </article>
      </div>
    </main>
  );
}

export default function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const collectionIndex = collections.findIndex((collection) => collection.href === currentPath);

  return (
    <div className="app">
      <Header />
      {collectionIndex >= 0 ? <DocumentPage collectionIndex={collectionIndex} /> : <ArchivePage />}
      <Footer />
    </div>
  );
}
