import { useState } from 'react';
import { ref, push, set } from 'firebase/database';
import { db } from './firebase';

const InputForm = () => {

const [userData, setData] = useState(null)

function handleSubmit(e) {
    
    e.preventDefault();
    

    const form = e.target;
    const formData = new FormData(form)
    const userData = {
        name: formData.get("name"),
        email: formData.get("email"),
        photo: formData.get("photo")
    }
    
    const newUserRef = push (ref(db, 'users'));
    set(newUserRef, userData)
    .then(() => {
        console.log("Dati salvati con successo");
        setData(userData);
    })       
    .catch((error) => {
        console.error("Errore nel salvataggio dei dati:", error)
    });
    
    
};

    return (
    <>
    <form method="POST" onSubmit={handleSubmit}>
        <div className="input-form">
            <label>
                Nome <input type="text" name="name" autoFocus={true} placeholder=" Inserisci il tuo nome" />
            </label>
            <label>
                Email <input type="email" name="email" autoFocus={true} placeholder=" Inserisci la tua email" />
            </label>
            <label>
                Foto <input type="file" name="photo" autoFocus={true} placeholder=" Inserisci la tua foto" />
            </label>
            <button type="submit">
                Registra
            </button>
        </div>
    </form>

    <div> 
        {userData && (
            <div>
                <h1>{userData.name}</h1>
                <p> {userData.email} </p>
            </div>
        )}
        
    </div>

    </>
    )
};

export default InputForm;
