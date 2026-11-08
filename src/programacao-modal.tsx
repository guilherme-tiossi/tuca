import { type FormEvent, useEffect, useState } from 'react'

import { ASSETS_BASE } from './paths'

const assets = ASSETS_BASE
const interests = ['Cursos', 'Peças', 'Shows', 'Dança', 'Exposições']

type ProgramacaoModalProps = {
  isOpen: boolean
  onClose: () => void
}

function CloseIcon() {
  return (
    <span className="programacao-close-icon" aria-hidden="true">
      <img src={`${assets}/50890.svg`} alt="" />
      <img src={`${assets}/6c900.svg`} alt="" />
      <img src={`${assets}/b1b14.svg`} alt="" />
    </span>
  )
}

function BirthDateField() {
  const [isEmpty, setIsEmpty] = useState(true)
  const [focused, setFocused] = useState(false)
  const showPlaceholder = isEmpty && !focused

  return (
    <label>
      <span>Data de Nascimento</span>
      <span className="programacao-date-wrap">
        <input
          type="date"
          name="birthDate"
          autoComplete="bday"
          className={showPlaceholder ? 'is-empty' : undefined}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(event) => setIsEmpty(event.currentTarget.value === '')}
        />
        {showPlaceholder ? <span className="programacao-date-placeholder">dd-mm-aaaa</span> : null}
      </span>
    </label>
  )
}

export function ProgramacaoModal({ isOpen, onClose }: ProgramacaoModalProps) {
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen, onClose])

  const toggleInterest = (interest: string) => {
    setSelected((current) =>
      current.includes(interest) ? current.filter((item) => item !== interest) : [...current, interest],
    )
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="programacao-modal-backdrop" onMouseDown={onClose}>
      <section
        className="programacao-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="registration-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="programacao-close-button" type="button" aria-label="Fechar cadastro" onClick={onClose}>
          <CloseIcon />
        </button>

        <h1 id="registration-title">Cadastro</h1>
        <p className="programacao-modal-intro">Cadastre-se para receber por e-mail novidades do TUCA.</p>

        <form onSubmit={handleSubmit}>
          <div className="programacao-fields-grid">
            <label>
              <span>Nome Completo</span>
              <input type="text" name="name" autoComplete="name" />
            </label>
            <label>
              <span>E-mail</span>
              <input type="email" name="email" autoComplete="email" />
            </label>
            <BirthDateField />
            <label>
              <span>Profissão</span>
              <input type="text" name="profession" autoComplete="organization-title" />
            </label>
          </div>

          <fieldset>
            <legend>Desejo receber informações sobre...</legend>
            <div className="programacao-interest-list">
              {interests.map((interest) => {
                const checked = selected.includes(interest)
                return (
                  <label className="programacao-interest-option" key={interest}>
                    <input type="checkbox" checked={checked} onChange={() => toggleInterest(interest)} />
                    <span className="programacao-checkbox" aria-hidden="true">
                      {checked && <img src={`${assets}/8ea1a.svg`} alt="" />}
                    </span>
                    <span>{interest}</span>
                  </label>
                )
              })}
            </div>
          </fieldset>

          <button className="programacao-submit-button" type="submit">
            ENVIAR
          </button>
        </form>
      </section>
    </div>
  )
}
