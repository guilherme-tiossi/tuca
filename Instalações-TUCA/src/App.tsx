import { useEffect, useState } from 'react';

type SpaceId = 'tuca' | 'tucarena' | 'paulo-freire' | 'ensaio' | 'saguao';

const tabs: { id: SpaceId; label: string }[] = [
  { id: 'tuca', label: 'Tuca' },
  { id: 'tucarena', label: 'Tucarena' },
  { id: 'paulo-freire', label: 'Sala Paulo Freire' },
  { id: 'ensaio', label: 'Sala de Ensaio' },
  { id: 'saguao', label: 'Saguão Superior' },
];

const auditorium = ['/images/auditorio-1.jpg', '/images/auditorio-2.jpg', '/images/auditorio-3.jpg'];
const spaces = ['/images/espaco-1.jpg', '/images/espaco-2.jpg', '/images/espaco-3.jpg'];

function Carousel({ images, label }: { images: string[]; label: string }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="carousel" aria-label={`Galeria: ${label}`}>
      <div className="carousel-frame">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${label} — vista ${index + 1}`}
            className={index === current ? 'visible' : ''}
          />
        ))}
      </div>
      <div className="dots" role="group" aria-label="Selecionar imagem">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === current ? 'active' : ''}
            onClick={() => setCurrent(index)}
            aria-label={`Ver imagem ${index + 1}`}
            aria-pressed={index === current}
          />
        ))}
      </div>
    </div>
  );
}

function InfoCard({ children }: { children: React.ReactNode }) {
  return <div className="info-card">{children}</div>;
}

function Feature({
  title,
  images,
  imageLabel,
  reverse = false,
  children,
}: {
  title: string;
  images: string[];
  imageLabel: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <article className={`feature ${reverse ? 'reverse' : ''}`}>
      <div className="visual">
        <h2>{title}</h2>
        <Carousel images={images} label={imageLabel} />
      </div>
      <InfoCard>{children}</InfoCard>
    </article>
  );
}

function PlaceholderFeature({ title, reverse = false }: { title: string; reverse?: boolean }) {
  const placeholders = [
    '/images/placeholder-1.svg',
    '/images/placeholder-2.svg',
    '/images/placeholder-3.svg',
  ];
  return (
    <Feature title={title} images={placeholders} imageLabel={title} reverse={reverse}>
      <p><strong>Informações técnicas:</strong> conteúdo em preparação.</p>
      <p><strong>Capacidade:</strong> dados disponíveis em breve.</p>
      <p><strong>Infraestrutura:</strong> espaço reservado para a descrição completa das instalações.</p>
    </Feature>
  );
}

export default function App() {
  const [active, setActive] = useState<SpaceId>('tuca');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as SpaceId);
      },
      { rootMargin: '-155px 0px -55% 0px', threshold: [0.05, 0.2, 0.5] },
    );
    tabs.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const goTo = (id: SpaceId) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className="site-header">
        <a className="logo" href="#tuca" aria-label="TUCA — início">TUC<span>A</span></a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#espetaculos">Espetáculos</a>
          <a href="#comprar">Comprar</a>
          <a className="current" href="#tuca">Instalações</a>
          <a href="#localizacao">Localização</a>
          <a href="#historia">História</a>
          <a href="#memoria">Memória</a>
        </nav>
      </header>

      <div className="subnav-shell">
        <nav className="subnav" aria-label="Espaços do TUCA">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={active === tab.id ? 'active' : ''}
              onClick={() => goTo(tab.id)}
              aria-current={active === tab.id ? 'page' : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <main>
        <section id="tuca" className="space-section first">
          <Feature title="Tuca - Teatro Principal" images={auditorium} imageLabel="Teatro Principal">
            <p><strong>Quantidade de lugares:</strong> 672 poltronas com pranchetas, com área para cadeiras de rodas e assentos especiais para obesos.</p>
            <p><strong>Profundidade do palco:</strong> 14,11 m.</p>
            <p><strong>Boca de cena:</strong> 13,10 m.</p>
            <p>Telão com 6 metros de altura e 8 metros de largura.</p>
            <p>6 camarins.</p>
            <p>Iluminação cênica.</p>
          </Feature>
          <div className="separator" />
          <Feature title="Saguão do Tuca" images={spaces} imageLabel="Saguão do Tuca" reverse>
            <p><strong>Área total:</strong> 292,32 m².</p>
            <p><strong>Função principal:</strong> área de recepção, credenciamento, convivência e circulação de público do Teatro Principal.</p>
            <p><strong>Infraestrutura de apoio:</strong> acesso direto à bilheteria, aos sanitários e às entradas principais da plateia do TUCA.</p>
          </Feature>
        </section>

        <section id="tucarena" className="space-section">
          <Feature title="Tucarena - Teatro de Arena" images={spaces} imageLabel="Tucarena">
            <p><strong>Configuração:</strong> espaço cênico versátil em formato de arena, próximo ao público.</p>
            <p><strong>Uso:</strong> espetáculos, encontros, palestras e produções experimentais.</p>
            <p><strong>Infraestrutura:</strong> iluminação cênica, camarins e acesso independente.</p>
          </Feature>
          <div className="separator" />
          <Feature title="Foyer do Tucarena" images={auditorium} imageLabel="Foyer do Tucarena" reverse>
            <p><strong>Função principal:</strong> recepção e circulação do público do Tucarena.</p>
            <p><strong>Características:</strong> ambiente integrado, acessível e preparado para acolhimento antes e após as apresentações.</p>
          </Feature>
        </section>

        <section id="paulo-freire" className="space-section single">
          <PlaceholderFeature title="Sala Paulo Freire" />
        </section>
        <section id="ensaio" className="space-section single">
          <PlaceholderFeature title="Sala de Ensaio" reverse />
        </section>
        <section id="saguao" className="space-section single">
          <PlaceholderFeature title="Saguão Superior" />
        </section>
      </main>

      <footer>
        <div className="footer-grid">
          <div className="seal"><strong>PUC-SP</strong><span>Pontifícia Universidade Católica</span></div>
          <div><h3>Telefone</h3><p>Administração: (11) 3670-8470</p><p>Secretaria: (11) 3670-8458</p><p>Locações: (11) 3670-8460</p></div>
          <div><h3>Endereço</h3><p>R. Monte Alegre, 1024 - Perdizes,<br />São Paulo - SP, 05014-001</p><h3>Redes sociais</h3><div className="socials"><span>in</span><span>f</span><span>X</span></div></div>
          <div><h3>Bilheteria</h3><p>Terça a sábado das 14h às 20h<br />Domingo das 14h às 17h</p><p>(11) 3670-8455<br />tayna.mello@sympla.com.br</p></div>
        </div>
        <p className="copyright">© Copyright - 2026 - Teatro Tuca - PUC-SP</p>
      </footer>
    </>
  );
}
