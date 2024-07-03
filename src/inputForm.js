import { useState } from "react";

const InputForm = () => {

function handleSubmit(e) {
    
    e.preventDefault();

    const form = e.targer;
    const formData = new FormData(form) 

    
    
};

    return (
    <form method="post" onSubmit={handleSubmit}>
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
