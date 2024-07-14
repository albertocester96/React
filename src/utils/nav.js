import { Link } from "react-router-dom"

const Navigation = () => {
    return(
        <nav className="navigation">
            <button> <Link to="/"> Home</Link> </button>
            <button><Link to="/Auth"> Autenticazione </Link></button>
        </nav>
    )
}

export default Navigation;