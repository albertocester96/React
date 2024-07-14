import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import SignUp from "../components/signup";
import Login from "../components/login";
import '../index.css';


const Auth = () => {
    return (
        <div className="auth-container">
            <nav>
                <Link to="../components/signup"> SignUp </Link>
                <Link to="../components/login"> Login </Link>
            </nav>

            <Routes>
                <Route path="signup" element={<SignUp />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </div>

    )
}

export default Auth;