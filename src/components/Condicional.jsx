import { useState } from "react";

export default function Condicional() {
    const [email, setEmail] = useState("");

    function enviarEmail(e) {
        e.preventDefault();  
        console.log(email);   
    }

    return (
        <div>
            <h2>Cadastre seu email</h2>
            <form onSubmit={enviarEmail}>
                <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
