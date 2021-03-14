import { useHistory } from "react-router-dom"
import styles from "./Styles.module.css"

function Login() {
    const clases = styles
    let history = useHistory()

    function toHome(e) {
        e.preventDefault()
    	history.push("/home")    
    }

    function toRegister() {
        history.push("/register")
    }

    return (
	    <div className={clases.formContainer}>
            <form className={clases.form}>
            	<h1>Farmasis</h1>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <input type="submit" value="Aceptar" onClick={toHome} />
                <a href="#" onClick={toRegister}>Registrar</a>
            </form>
        </div>
    )
}

export default Login;