import { FormEvent, useEffect, useState } from 'react'

const interests = ['Cursos', 'Peças', 'Shows', 'Dança', 'Exposições']

function CloseIcon() {
  return (
    <span className="close-icon" aria-hidden="true">
      <img src="/assets/50890.svg" alt="" />
      <img src="/assets/6c900.svg" alt="" />
      <img src="/assets/b1b14.svg" alt="" />
    </span>
  )
}

export default function App() {
  const [isOpen, setIsOpen] = useState(true)
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  const toggleInterest = (interest: string) => {
    setSelected((current) =>
      current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest],
    )
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <main className="site-page">
      <header className="site-header">
        <strong>TUCA</strong>
        <button className="open-modal-button" type="button" onClick={() => setIsOpen(true)}>
          CADASTRE-SE
        </button>
      </header>

      {isOpen && (
        <div className="modal-backdrop" onMouseDown={() => setIsOpen(false)}>
          <section
            className="registration-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="registration-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="close-button"
              type="button"
              aria-label="Fechar cadastro"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </button>

            <h1 id="registration-title">Cadastro</h1>
            <p className="modal-intro">
              Cadastre-se para receber por e-mail novidades do TUCA.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="fields-grid">
                <label>
                  <span>Nome Completo</span>
                  <input type="text" name="name" autoComplete="name" />
                </label>
                <label>
                  <span>E-mail</span>
                  <input type="email" name="email" autoComplete="email" />
                </label>
                <label>
                  <span>Data de Nascimento</span>
                  <input type="date" name="birthDate" autoComplete="bday" />
                </label>
                <label>
                  <span>Profissão</span>
                  <input type="text" name="profession" autoComplete="organization-title" />
                </label>
              </div>

              <fieldset>
                <legend>Desejo receber informações sobre...</legend>
                <div className="interest-list">
                  {interests.map((interest) => {
                    const checked = selected.includes(interest)
                    return (
                      <label className="interest-option" key={interest}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleInterest(interest)}
                        />
                        <span className="checkbox" aria-hidden="true">
                          {checked && <img src="/assets/8ea1a.svg" alt="" />}
                        </span>
                        <span>{interest}</span>
                      </label>
                    )
                  })}
                </div>
              </fieldset>

              <button className="submit-button" type="submit">
                ENVIAR
              </button>
            </form>
          </section>
        </div>
      )}
    </main>
  )
}
