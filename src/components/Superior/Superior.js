import './Superior.css'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { InlineIcon } from '@iconify/react'
import iconoExplora from '@iconify-icons/mdi/arrow-left'
import logoSanasalud from '../../assets/logos/logo_sanasalud.svg'
import logoRedsalud from '../../assets/logos/logo_redsalud.svg'
import logoVitasalud from '../../assets/logos/logo_vitasalud.svg'
import logoNorden from '../../assets/logos/logo_norden.svg'

const Superior = () => {

  const header = useRef()
  const explora = useRef()

  useEffect(() => {
    gsap.to(header.current, {
      scrollTrigger: {
        trigger: header.current,
        start: 'bottom center',
        scrub: true
      },
      y: 100,
      opacity: 0,
      duration: 2
    })
    gsap.from(explora.current, {
      scrollTrigger: {
        trigger: explora.current,
        start: 'top center',
        scrub: true
      },
      y: -50,
      opacity: 0,
      duration: 1
    })
    gsap.from('.Superior__logo', {
      scrollTrigger: {
        trigger: '.Superior__logos',
        start: 'top center',
        toggleActions: 'play none none reset'
      },
      y: 50,
      opacity: 0,
      stagger: .1
    })
  }, [header, explora])

  return (
    <section className="Superior">
      <p className="Superior__mensaje_principal" ref={header}>
        Mejora tu comunicación sumando cero
      </p>
      <div className="Superior__bajada">
        <p className="Superior__instruccion" ref={explora}>
          <InlineIcon icon={iconoExplora} /> Explora
        </p>
        <div className="Superior__contenedor_texto">
          <p className="Superior__texto">
            Conecta con tus usuarios usando
            nuestra herramienta de comunicación
            escrita automatizada, empática y
            efectiva.
          </p>
          <button className="Superior__cta">Comencemos</button>
        </div>
      </div>
      <div className="Superior__logos">
        <p className="Superior__texto_logos">
          Usado por equipos de<br />
          marketing y servicio al cliente en:
        </p>
        <div className="Superior__contenedor_logos">
          <img className="Superior__logo" alt="Logo Sanasalud" src={logoSanasalud} />
          <img className="Superior__logo" alt="Logo Redsalud" src={logoRedsalud} />
          <img className="Superior__logo" alt="Logo Vitasalud" src={logoVitasalud} />
          <img className="Superior__logo" alt="Logo Clínica Norden" src={logoNorden} />
        </div>
      </div>
    </section>
  )
}

export default Superior
