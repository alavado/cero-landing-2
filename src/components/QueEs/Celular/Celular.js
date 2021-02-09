import Icon, { InlineIcon } from '@iconify/react'
import iconoWifi from '@iconify-icons/mdi/wifi'
import iconoBateria from '@iconify-icons/mdi/battery-std'
import iconoVolver from '@iconify-icons/mdi/chevron-left'
import iconoCamara from '@iconify-icons/mdi/camera-outline'
import iconoLlamada from '@iconify-icons/mdi/phone-outline'
import './Celular.css'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

const Celular = () => {

  const elemEstado = useRef()
  const elemMsg1 = useRef()
  const elemMsg2 = useRef()
  const elemMsg3 = useRef()
  const elemMsg4 = useRef()
  const elemMsg5 = useRef()
  const elemMsg6 = useRef()

  useEffect(() => {
    const tl = gsap.timeline()
      // .to(elemEstado.current, { text: 'en línea' })
      .from(elemMsg1.current, { opacity: 0, scale: 0 }).addLabel('msg1')
      // .to(elemEstado.current, { text: 'escribiendo...' })
      // .to(elemEstado.current, { text: 'en línea' })
      .from(elemMsg2.current, { opacity: 0, scale: 0 }).addLabel('msg2')
      .from(elemMsg3.current, { opacity: 0, scale: 0 }).addLabel('msg3')
      .from(elemMsg4.current, { opacity: 0, scale: 0 }).addLabel('msg4')
      .from(elemMsg5.current, { opacity: 0, scale: 0 }).addLabel('msg5')
      .from(elemMsg6.current, { opacity: 0, scale: 0 }).addLabel('msg6')
    ScrollTrigger.create({
      animation: tl,
      trigger: '.QueEs',
      start: 'top top',
      pin: true,
      scrub: true,
      snap: {
        snapTo: 'labels',
        duration: { min: .2, max: .5 },
        delay: 0.2,
        ease: "power1.inOut", 
      }
    })
  }, [])

  return (
    <div className="Celular">
      <div className="Celular__solapa"></div>
      <div className="Celular__barra_estado">
        <p>3:43</p>
        <p className="Celular__barra_estado_iconos">
          <InlineIcon icon={iconoWifi} />
          <InlineIcon icon={iconoBateria} style={{ transform: 'rotate(90deg)' }} />
        </p>
      </div>
      <div className="Celular__barra_app">
        <div className="Celular__informacion_contacto">
          <Icon className="Celular__icono_volver" icon={iconoVolver} />
          <div className="Celular__avatar" />
          <div className="Celular__contacto">
            <p className="Celular__nombre_contacto">RedSalud</p>
            <p ref={elemEstado} className="Celular__estado_contacto">en línea</p>
          </div>
        </div>
        <div className="Celular__iconos_barra_app">
          <Icon icon={iconoCamara} />
          <Icon icon={iconoLlamada} />
        </div>
      </div>
      <div className="Celular__pantalla">
        <div ref={elemMsg1} className="Celular__mensaje Celular__mensaje--entrante">
          Hola María Isabel. Tiene una hora reservada para un <strong>importante examen de salud</strong> el próximo martes en nuestro centro médico. ¿Asistirá?
        </div>
        <div ref={elemMsg2} className="Celular__mensaje Celular__mensaje--saliente">
          Hola. Tengo que asistir sí o sí a otro compromiso, está difícil.
        </div>
        <div ref={elemMsg3} className="Celular__mensaje Celular__mensaje--entrante">
          Entiendo, no se preocupe. ¿Le gustaría cambiar su hora para otro día?
        </div>
        <div ref={elemMsg4} className="Celular__mensaje Celular__mensaje--saliente">
          Eso sería ideal.
        </div>
        <div ref={elemMsg5} className="Celular__mensaje Celular__mensaje--entrante">
          ¡Perfecto! Nos comunicaremos con Ud. para coordinar el reagendamiento de su hora 🕖.
        </div>
        <div ref={elemMsg6} className="Celular__mensaje Celular__mensaje--saliente">
          Muchas gracias! Que buena atención 👩‍🦰 💯
        </div>
      </div>
    </div>
  )
}

export default Celular
