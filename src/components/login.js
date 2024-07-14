import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp(e) {

        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Utente registrato:", userCredential.user)
        })

    }


    return (
        <form onSubmit={handleSignUp}>
            <label> 
                Email <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
            </label>
            <label> 
                Password <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
            </label>
            <button type="submit"> Login </button>
        </form>
    )
}

export default Login;