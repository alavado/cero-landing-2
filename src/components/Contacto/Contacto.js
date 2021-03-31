import { useRef, useEffect } from 'react'
import axios from 'axios'
import './Contacto.css'

const Contacto = () => {

  const refPrimerCampo = useRef()

  useEffect(() => {
    refPrimerCampo.current.focus()
  }, [])

  const contactar = e => {
    e.preventDefault()
    axios.post('/',
      {
        hola: 1,
        'form-name': 'contactoCero'
      },
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }
    ).then(() => console.log('ok'))
  }
  
  return (
    <div className="Contacto">
      <h1 className="Contacto__mensaje_principal">Contáctanos</h1>
      <p className="Contacto__bajada">
        Hablemos sobre los desafíos de comunicación de tu empresa.<br />
        Agenda una Demo con nuestro equipo de especialistas.
      </p>
      <form netlify="true" className="Contacto__formulario" onSubmit={contactar}>
        <div className="Contacto__seccion_formulario">
          <h2 className="Contacto__titulo_seccion_formulario">
            Datos personales
          </h2>
          <div className="Contacto__contenedor_campos">
            <label htmlFor="nombre">
              Nombre
              <input id="nombre" ref={refPrimerCampo} />
            </label>
            <label htmlFor="telefono">
              Teléfono
              <input id="telefono" />
            </label>
            <label htmlFor="email">
              E-mail de trabajo
              <input type="email" id="email" />
            </label>
          </div>
        </div>
        <div className="Contacto__seccion_formulario">
          <h2 className="Contacto__titulo_seccion_formulario">
            Datos de tu organización
          </h2>
          <div className="Contacto__contenedor_campos">
            <label htmlFor="nombre_organizacion">
              Nombre organización
              <input id="nombre_organizacion" />
            </label>
            <label htmlFor="tipo_organizacion">
              Tipo de organización
              <input id="tipo_organizacion" />
            </label>
            <label htmlFor="software_gestion">
              Software de gestión
              <input id="software_gestion" />
            </label>
          </div>
        </div>
        <div className="Contacto__seccion_formulario">
          <h2 className="Contacto__titulo_seccion_formulario">
            ¿Con qué desafío de comunicación<br />te podemos ayudar?
          </h2>
          <div className="Contacto__contenedor_campos">
            <textarea className="Contato__area_desafio" id="desafio"></textarea>
            <button type="submit" className="Contacto__boton_enviar">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contacto
