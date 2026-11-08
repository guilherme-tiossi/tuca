export default function App() {
  const mapUrl =
    "https://www.google.com/maps?q=TUCA%20Teatro%20da%20PUC-SP%2C%20Rua%20Monte%20Alegre%2C%201024%2C%20Perdizes%2C%20S%C3%A3o%20Paulo%20-%20SP&z=17&output=embed";

  return (
    <main className="min-h-screen bg-white">
      <section
        className="mx-auto grid w-full max-w-[1216px] grid-cols-1 gap-6 px-5 py-12 md:px-8 lg:grid-cols-[minmax(0,368px)_minmax(0,760px)] lg:pt-[114px] lg:pb-[34px]"
        aria-label="Localização dos teatros TUCA e TUCARENA"
      >
        <div className="grid gap-6">
          <article className="flex min-h-[189px] flex-col justify-center rounded-[7px] bg-[#e8e8e8] px-7 py-8 md:px-9 lg:px-[43px]">
            <h2 className="font-urbanist-bold text-[28px] leading-normal text-[#c4080c]">
              TUCA
            </h2>
            <address className="font-urbanist-regular mt-1.5 text-[18px] leading-normal not-italic text-black">
              <span className="block">Rua Monte Alegre, 1024</span>
              <span className="block">
                Perdizes - São Paulo - SP, 05014-001
              </span>
            </address>
          </article>

          <article className="flex min-h-[189px] flex-col justify-center rounded-[7px] bg-[#e8e8e8] px-7 py-8 md:px-9">
            <h2 className="font-urbanist-bold text-[28px] leading-normal text-[#c4080c]">
              TUCARENA
            </h2>
            <address className="font-urbanist-regular mt-1.5 text-[18px] leading-normal not-italic text-black">
              <span className="block">Rua Bartira, 347</span>
              <span className="block">
                Perdizes - São Paulo - SP, 05009-000
              </span>
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
          <h2
            id="acessos"
            className="font-urbanist-bold text-[28px] leading-normal"
          >
            ACESSOS
          </h2>

          <div className="mt-[30px] grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:grid-cols-[350px_354px_280px] lg:gap-x-[84px]">
            <article className="font-urbanist-regular text-[18px] leading-normal">
              <h3>MJS Serviços / Valet</h3>
              <div className="mt-[22px]">
                <p>Valor: R$50,00</p>
                <p>Serviço de manobristas no Tuca e Tucarena.</p>
                <p>Sexta a domingo</p>
              </div>
            </article>

            <article className="font-urbanist-regular text-[18px] leading-normal">
              <h3>Multipark PUC Perdizes</h3>
              <div className="mt-[22px]">
                <p>Valor: R$42,00</p>
                <p>Rua Cardozo de Almeida, 990.</p>
                <p>Telefone: (11) 3177-5555</p>
                <p>
                  Segunda a sexta: 7h - 22h | Sábado: 9h - 20h
                </p>
              </div>
            </article>

            <article className="font-urbanist-regular text-[18px] leading-normal">
              <h3>Estações de metrô próximas</h3>
              <div className="mt-[22px]">
                <p>Estação Perdizes (Linha 6-Laranja)</p>
                <p>Estação Marechal Deodoro (Linha 3-Vermelha)</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
