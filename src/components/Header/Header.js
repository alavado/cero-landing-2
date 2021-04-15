import './Header.css'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import logo from '../../assets/logos/logo.svg'
import classNames from 'classnames'
import iconoMenu from '@iconify-icons/mdi/menu'
import { InlineIcon } from '@iconify/react'
import { useState } from 'react'
import MenuFlotante from './MenuFlotante'

const Header = () => {

  const history = useHistory()
  const [menuActivo, setMenuActivo] = useState(false)
  
  const { path } = useRouteMatch()
  const oscuro = path === '/contacto'

  return (
    <>
      <MenuFlotante
        menuActivo={menuActivo}
        setMenuActivo={setMenuActivo}
      />
      <div className="Header">
        <Link to="/">
          <img
            className={classNames({
              'Header__logo': true,
              'Header__logo--oscuro': oscuro
            })}
            src={logo}
            alt="Logo de Cero"
          />
        </Link>
        <nav className="Header__navegacion">
          <Link
            to="/sobre"
            className={classNames({
              'Header__link': true,
              'Header__link--oscuro': oscuro
            })}
          >
            Sobre Cero
          </Link>
          <Link
            to="/contacto"
            className={classNames({
              'Header__link': true,
              'Header__link--oscuro': oscuro
            })}
          >
            Contáctanos
          </Link>
          <button
            onClick={() => history.push('/contacto')}
            className={classNames({
              'Header__cta': true,
              'Header__cta--oscuro': oscuro
            })}
          >
            Empieza ya
          </button>
        </nav>
        <button
          onClick={() => setMenuActivo(true)}
          className={classNames({
            'Header__boton_menu': true,
            'Header__boton_menu--oscuro': oscuro
          })}
        >
          <InlineIcon icon={iconoMenu} />
        </button>
      </div>
    </>
  )
}

export default Header
