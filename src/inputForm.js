import { useState } from "react";

const InputForm = () => {

function handleSubmit(e) {
    
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form)
    
    fetch('https://jsonplaceholder.typicode.com/users', { method: form.method, body: formData} )
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Errore durante la richiesta:", error));
    
    
};

    return (
    <form method="POST" onSubmit={handleSubmit}>
        <div className="input-form">
            <label>
                Nome <input type="text" autoFocus={true} placeholder=" Inserisci il tuo nome" />
            </label>
            <label>
                Email <input type="email" autoFocus={true} placeholder=" Inserisci la tua email" />
            </label>
            <label>
                Foto <input type="file" autoFocus={true} placeholder=" Inserisci la tua foto" />
            </label>
            <button type="submit">
                Registra
            </button>
        </div>
    </form>
    )
};

export default InputForm;
