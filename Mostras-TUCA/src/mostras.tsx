const assetPath = "/assets";

const menuItems = [
  { label: "ESPETÁCULOS", href: "/espetaculos" },
  { label: "COMPRAR", href: "/comprar" },
  { label: "INSTALAÇÕES", href: "/instalacoes" },
  { label: "LOCALIZAÇÃO", href: "/localizacao" },
  { label: "HISTÓRIA", href: "/historia" },
  { label: "MEMÓRIA", href: "/memoria", active: true },
];

const exhibitions = [
  {
    id: "mostra-50-anos",
    image: "/1-tuca.png",
    imageAlt: "Capa da mostra Especial TUCA 50 anos",
    href: "https://www.teatrotuca.com.br/50anos/",
    description: (
      <>
        A mostra celebra os 50 anos do Teatro TUCA, resgatando momentos marcantes de sua história e
        da trajetória do Grupo TUCA. Por meio de{" "}
        <strong>registros de espetáculos e da imprensa</strong> da época, apresenta a importância do
        teatro em meio à ditadura militar, destacando seu papel na resistência cultural e política e
        sua contribuição para a história do teatro brasileiro.
      </>
    ),
  },
  {
    id: "mostra-em-cartaz",
    image: "/2-tuca.png",
    imageAlt: "Capa da mostra Em cartaz, nos palcos do TUCA",
    href: "https://www.teatrotuca.com.br/em-cartaz-tuca/index.html",
    description: (
      <>
        A mostra apresenta a história viva do Teatro TUCA, destacando os{" "}
        <strong>espetáculos, eventos e manifestações</strong> que construíram sua identidade
        cultural. Resgata momentos importantes de sua trajetória e evidencia a contribuição do Grupo
        TUCA para a fundação do teatro durante a ditadura militar, valorizando a memória, a luta e a
        resistência que marcam sua história.
      </>
    ),
  },
];

function Header() {
  return (
    <header className="relative z-10 h-20 bg-white shadow-[0_4px_2.5px_rgba(0,0,0,0.22)]">
      <div className="mx-auto flex h-full max-w-[1152px] items-center justify-between px-5 xl:px-0">
        <a
          href="/"
          aria-label="Página inicial do Teatro TUCA"
          className="flex h-[49px] w-[118px] shrink-0 items-center justify-center p-2.5"
        >
          <img
            src={`${assetPath}/ecd8c.png`}
            alt="TUCA"
            className="h-[29px] w-[104px] object-contain"
          />
        </a>

        <nav
          aria-label="Navegação principal"
          className="ml-4 flex min-w-0 items-center gap-0 overflow-x-auto md:gap-3"
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={`shrink-0 px-3 py-4 text-[12px] leading-normal font-semibold transition-colors md:px-4 md:text-[14px] lg:px-5 lg:text-[16px] ${
                item.active
                  ? "font-extrabold text-[#c4080c]"
                  : "text-[#121010] hover:text-[#c4080c]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function ExhibitionRow({ exhibition }: { exhibition: (typeof exhibitions)[number] }) {
  return (
    <article
      id={exhibition.id}
      className="flex w-full flex-col items-center gap-3 md:flex-row md:items-stretch md:justify-center md:gap-[clamp(32px,4vw,56px)]"
    >
      <img
        src={exhibition.image}
        alt={exhibition.imageAlt}
        className="aspect-square w-full max-w-[240px] shrink-0 rounded-[10px] object-cover md:aspect-auto md:max-w-[299px] md:self-stretch"
      />

      <div className="flex min-h-[299px] w-full max-w-[568px] flex-col items-center justify-center rounded-[10px] bg-white px-5 py-8 text-center text-black sm:px-10 md:px-[58px]">
        <h2 className="font-urbanist-bold text-[22px] leading-normal text-[#c4080c]">
          Descrição da Mostra
        </h2>
        <p className="font-urbanist-regular mt-[18px] text-[16px] leading-normal">
          {exhibition.description}
        </p>
        <a
          href={exhibition.href}
          className="exhibition-button font-urbanist-bold mt-[28px] rounded-[33px] bg-[#c4080c] px-[18px] py-2 text-[22px] leading-normal whitespace-nowrap text-white"
        >
          ACESSAR MOSTRA
        </a>
      </div>
    </article>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-full bg-white transition-transform hover:scale-105"
    >
      <img src={icon} alt="" className="size-[23px] object-contain" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-[1152px] gap-10 px-6 pt-11 pb-8 sm:grid-cols-2 lg:grid-cols-[117px_208px_1fr_192px] lg:gap-x-[79px] xl:px-0">
        <img
          src={`${assetPath}/9d425.png`}
          alt="Brasão da PUC-SP"
          className="h-[188px] w-[117px] object-contain"
        />

        <section>
          <h2 className="font-urbanist-semibold text-[16px] leading-normal">Telefone</h2>
          <div className="font-urbanist-regular mt-[18px] space-y-[13px] text-[14px] leading-normal">
            <p>Administração: (11) 3670-8470</p>
            <p>Secretaria: (11) 3670-8458</p>
            <p>Locações: (11) 3670-8460</p>
            <p>Comunicação: (11) 3670-8462</p>
          </div>
        </section>

        <div className="space-y-7">
          <section>
            <h2 className="font-urbanist-semibold text-[16px] leading-normal">Endereço</h2>
            <p className="font-urbanist-regular mt-[18px] max-w-[197px] text-[14px] leading-normal">
              R. Monte Alegre, 1024 - Perdizes, São Paulo - SP, 05014-001
            </p>
          </section>

          <section>
            <h2 className="font-urbanist-semibold text-[16px] leading-normal">Redes sociais</h2>
            <div className="mt-[18px] flex gap-[18px]">
              <SocialLink
                href="https://www.instagram.com/teatrotuca/"
                label="Instagram do Teatro TUCA"
                icon={`${assetPath}/ec53b.png`}
              />
              <SocialLink
                href="https://www.facebook.com/teatrotuca"
                label="Facebook do Teatro TUCA"
                icon={`${assetPath}/e74e7.png`}
              />
              <SocialLink
                href="https://x.com/teatrotuca"
                label="X do Teatro TUCA"
                icon={`${assetPath}/f641a.png`}
              />
            </div>
          </section>
        </div>

        <section>
          <h2 className="font-urbanist-semibold text-[16px] leading-normal">Bilheteria</h2>
          <div className="font-urbanist-regular mt-[18px] text-[14px] leading-normal">
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
        </section>

        <div className="font-urbanist-regular text-center text-[14px] leading-normal sm:col-span-2 lg:col-span-4">
          <p>© Copyright - 2026 - Teatro Tuca - PUC-SP</p>
          <p className="mt-[13px]">Desenvolvido por Pedro Marin e Raquel Menah - TCC D07</p>
        </div>
      </div>
    </footer>
  );
}

export default function Mostras() {
  return (
    <div data-name="mostras" className="min-h-dvh bg-[#121010] font-urbanist-regular">
      <Header />

      <main className="mx-auto max-w-[1152px] px-5 pt-10 pb-[90px] xl:px-0">
        <div className="relative flex min-h-[45px] items-center justify-center">
          <a
            href="/memoria"
            aria-label="Voltar para a tela Memória"
            className="memory-arrow absolute left-0 size-[38px] rounded-full"
          >
            <img
              src={`${assetPath}/acbdb.png`}
              alt=""
              className="absolute top-[10px] left-[8px] h-[19px] w-[19px] -scale-x-100 object-contain"
            />
          </a>
          <h1 className="font-urbanist-semibold px-12 text-center text-[30px] leading-normal text-[#c4080c] sm:text-[36px]">
            MOSTRAS VIRTUAIS
          </h1>
        </div>

        <div className="mt-[68px] flex flex-col gap-12 md:gap-[78px]">
          {exhibitions.map((exhibition) => (
            <ExhibitionRow key={exhibition.id} exhibition={exhibition} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
