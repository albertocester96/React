import { useState } from "react";

const InputForm = () => {

const [data, setData] = useState(null)

function handleSubmit(e) {
    
    e.preventDefault();
    

    const form = e.target;
    const formData = new FormData(form)
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        photo: formData.get("photo")
    }
    
    fetch('https://jsonplaceholder.typicode.com/users', { method: form.method, body: JSON.stringify(data)} )
    .then(response => response.json())
    .then((responseData) => {
        console.log(responseData);
        setData(data);
    })
    .catch(error => console.error("Errore durante la richiesta:", error));
    
    
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
        {data && (
            <div>
                <h1>{data.name}</h1>
                <p> {data.email} </p>
            </div>
        )}
        
    </div>

    </>
    )
};

export default InputForm;
