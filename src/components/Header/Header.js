import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import styles from "./Styles.module.css"

const Header = () => {
  const clases = styles
  const history = useHistory()
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobile = () => setClick(false)

  function toHome() {
    history.push('/home')
  }

  function toNosotros() {
    history.push('/nosotros')
    closeMobile()
  }

  function toMision() {
    history.push('/mision')
    closeMobile()
  }

  function toVision() {
    history.push('/vision')
    closeMobile()
  }

  return (
    <header className={clases.headerContent}>
      <div>
        <h1 className={clases.headerTitle}>Farmasis</h1>
      </div>
      <nav className={click ? clases.active : ""}>
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
      <FaBars className={clases.headerBtn} onClick={handleClick} />
    </header>
  )
}

export default Header;
