import { useHistory } from "react-router-dom"

import styles from "./Styles.module.css"

const Header = () => {
  const clases = styles
  const history = useHistory()

  function toHome() {
    history.push('/home')
  }

  function toNosotros() {
    history.push('/nosotros')
  }

  function toMision() {
    history.push('/mision')
  }

  function toVision() {
    history.push('/Vision')
  }

  return (
    <header className={clases.headerContent}>
      <div>
        <h1 className={clases.headerTitle}>Farmasis</h1>
      </div>
      <nav>
        <ul className={clases.headerNav}>
          <li>
            <a href="#" onClick={toHome}>Inicio</a>
          </li>
          <li>
            <a href="#" onClick={toNosotros}>Sobre nosotros</a>
          </li>
          <li>
            <a href="#" onClick={toMision}>Mision</a>
          </li>
          <li>
            <a href="#" onClick={toVision}>Vision</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;