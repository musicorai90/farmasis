import { useHistory } from "react-router-dom"
import styles from "./Styles.module.css"

const Register = () => {
    const clases = styles
    let history = useHistory()

    function toHome(e) {
        e.preventDefault()
    	history.push("/home")    
    }

    return (
        <div className={clases.formContainer}>
            <form className={clases.form}>
            	<h1>Registrate</h1>
                <input type="mail" placeholder="Correo" />
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <input type="submit" value="Aceptar" onClick={toHome} />
            </form>
        </div>
    )
}

export default Register;