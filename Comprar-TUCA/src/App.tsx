const assets = {
  hero: "/assets/6a7da.png",
  sympla: "/assets/75c35.png",
  crest: "/assets/9d425.png",
  headerLogo: "/assets/ecd8c.png",
  socialCircle: "/assets/b5505.svg",
  instagram: "/assets/ec53b.png",
  facebook: "/assets/e74e7.png",
  twitter: "/assets/f641a.png",
}

const menuItems = [
  "ESPETÁCULOS",
  "COMPRAR",
  "INSTALAÇÕES",
  "LOCALIZAÇÃO",
  "SOBRE",
  "MEMÓRIA",
]

type SocialLinkProps = {
  href: string
  icon: string
  label: string
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      className="social-link"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <img className="social-circle" src={assets.socialCircle} alt="" />
      <img className="social-icon" src={icon} alt="" />
    </a>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="header-logo" href="#" aria-label="Teatro TUCA - início">
        <img src={assets.headerLogo} alt="TUCA" />
      </a>
      <nav className="main-nav" aria-label="Navegação principal">
        {menuItems.map((item) => (
          <a
            key={item}
            className={item === "COMPRAR" ? "active" : undefined}
            href={item === "COMPRAR" ? "#comprar" : "#"}
            aria-current={item === "COMPRAR" ? "page" : undefined}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="comprar">
      <div className="hero-content">
        <h1>
          Escolha o espetáculo e faça a compra de seus ingressos através da
          plataforma Sympla!
        </h1>
        <p>
          Com a Sympla, está garantida uma compra segura e você pode ter seus
          ingressos disponíveis digitalmente assim que pagar.
        </p>
        <a
          className="buy-button"
          href="https://www.sympla.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          COMPRAR INGRESSOS
        </a>
      </div>

      <div className="hero-media">
        <div className="hero-image">
          <img
            src={assets.hero}
            alt="Pessoa comprando ingressos para o TUCA pela plataforma Sympla"
          />
        </div>
        <img className="sympla-logo" src={assets.sympla} alt="Sympla" />
      </div>
    </section>
  )
}

function BoxOffice() {
  return (
    <section className="box-office" aria-labelledby="box-office-title">
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
          <p>
            Dinheiro, PIX, débito e crédito (Mastercard, Visa, Elo, American
            Express e Hipercard){" "}
          </p>
        </article>
        <article>
          <h3>Preço Especial PUC-SP</h3>
          <p>
            Para descontos de funcionários e alunos da PUC-SP, a compra deve ser
            realizada presencialmente pela bilheteria.
          </p>
        </article>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <img
          className="puc-crest"
          src={assets.crest}
          alt="Pontifícia Universidade Católica de São Paulo"
        />

        <div className="footer-block phone-block">
          <h3>Telefone</h3>
          <p>Administração: (11) 3670-8470</p>
          <p>Secretaria: (11) 3670-8458</p>
          <p>Locações: (11) 3670-8460</p>
          <p>Comunicação: (11) 3670-8462</p>
        </div>

        <div className="footer-center">
          <div className="footer-block">
            <h3>Endereço</h3>
            <p>R. Monte Alegre, 1024 - Perdizes, São Paulo - SP, 05014-001</p>
          </div>
          <div className="socials">
            <h3>Redes sociais</h3>
            <div className="social-list">
              <SocialLink
                href="https://www.instagram.com/"
                icon={assets.instagram}
                label="Instagram"
              />
              <SocialLink
                href="https://www.facebook.com/"
                icon={assets.facebook}
                label="Facebook"
              />
              <SocialLink
                href="https://x.com/"
                icon={assets.twitter}
                label="X"
              />
            </div>
          </div>
        </div>

        <div className="footer-block box-office-block">
          <h3>Bilheteria</h3>
          <p>
            Terça a Sábado das 14h às 20h
            <br />
            Domingo das 14h às 17h
          </p>
          <p>
            (11) 3670-8455
            <br />
            tayna.mello@sympla.com.br
          </p>
        </div>
      </div>

      <div className="footer-credits">
        <p>© Copyright - 2026 - Teatro Tuca - PUC-SP</p>
        <p>Desenvolvido por Pedro Marin e Raquel Menah - TCC D07</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BoxOffice />
      </main>
      <Footer />
    </>
  )
}
