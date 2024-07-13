import { useState } from 'react';
import { ref as dbRef, push, set } from 'firebase/database';
import { db, storage } from './services/firebase';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const InputForm = () => {

const [userData, setData] = useState(null)

function handleSubmit(e) {
    
    e.preventDefault();
    

    const form = e.target;
    const formData = new FormData(form)
    const photo = formData.get("photo");

    if (photo) {
        const photoRef = storageRef(storage, 'photos/' + photo.name);
        uploadBytes(photoRef, photo).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                const userData = {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    photoURL: downloadURL    
            };
        
            const newUserRef = push (dbRef(db, 'users'));
            set(newUserRef, userData)
            .then(() => {
                console.log("Dati salvati con successo");
                setData(userData);
            })       
            .catch((error) => {
                console.error("Errore nel salvataggio dei dati:", error)
            });
        });
    });
    } else {
        console.log("Nessuna foto caricata")
    }
    
    
};

    return (
    <>
    <form method="POST" onSubmit={handleSubmit}>
        <div className="input-form">
            <label>
                Nome <input type="text" name="name" autoFocus={true} placeholder=" Inserisci il tuo nome" />
            </label>
            <label>
                Email <input type="email" name="email" placeholder=" Inserisci la tua email" />
            </label>
            <label>
                Foto <input type="file" name="photo" placeholder=" Inserisci la tua foto" />
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
                {userData.photoURL && <img src={userData.photoURL} alt="User uploaded" />}
            </div>
        )}
        
    </div>

    </>
    )
};

export default InputForm;
