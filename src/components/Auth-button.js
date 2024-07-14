
import { Link } from "react-router-dom";

const AuthButton = () => {
    return(
        <nav className="auth-navigation">
            <button> <Link to="/"> Home</Link> </button>
            <button><Link to="/Auth"> Autenticazione </Link></button>
        </nav>
    )
}

export default AuthButton;