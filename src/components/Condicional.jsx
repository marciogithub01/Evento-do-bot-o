import { useState } from "react";
import App from "../App";

export default function Condicional() {
    const [email, setEmail] = useState("");

    function enviarEmail(e) {
        e.preventDefault();  
        console.log(email);   
    }

    function limparEmail() {
        setEmail("");
    }

    return (
        <div>
            <h2>Cadastre seu Email</h2>
            <form onSubmit={enviarEmail}>
                <input
                    type="email"
                    placeholder="Digite seu Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <button type="submit">Enviar-Email</button>
                      {email && (
                <div>
                    <p>O email {email} foi cadastrado com sucesso!</p>
                    <button onClick={limparEmail}>Limpar</button>
                </div>
            )}
            </form>
      
        </div>
    );
}

// import { useState } from "react";