import { useHistory, useRouteMatch } from "react-router-dom"
import { FaEye, FaBroom, FaPlus } from "react-icons/fa"
import styles from "./Styles.module.css"

const Sidebar = () => {
    const clases = styles
    const history = useHistory()
    let match = useRouteMatch()

    function toBelleza() {
      history.push(`${match.path}/belleza`)
    }

    function toLimpieza() {
      history.push(`${match.path}/limpieza`)
    }

    function toMedicamentos() {
      history.push(`${match.path}/medicamentos`)
    }

    return(
        <div className={clases.sideBarContainer}>
          <nav>
            <ul className={clases.sideBar}>
              <li>
                <a href="#" onClick={toBelleza}><FaEye /> Belleza</a>
              </li>
              <li>
                <a href="#" onClick={toLimpieza}><FaBroom /> Limpieza</a>
              </li>
              <li>
                <a href="#" onClick={toMedicamentos}><FaPlus /> Medicamentos</a>
              </li>
            </ul>
          </nav>
        </div>
    )
}

export default Sidebar;
