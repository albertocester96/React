import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useState } from "react";

const SignUp = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    function handleSignUp(e) {

        e.preventDefault();

        if (password !== confirmPassword) {
            console.log("Password non corrispondenti")
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Utente registrato:", userCredential.user)
        })

    }


    return (
        <form onSubmit={handleSignUp}>
            <label> 
                Come ti chiami? <input
                        type="name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Nome"
                        required
                    />
            </label>
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
            <label> 
                Password <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Conferma password"
                    />
            </label>
            <button type="submit"> Registrati </button>
        </form>
    )
}

export default SignUp;