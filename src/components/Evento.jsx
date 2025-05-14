import Button  from "./evento/Button";

function Evento() {
    function meuEvento() {
        console.log(`Ative o primeiro evento`)
    }

    return (
        <>
            <p>Clique para disparar um evento</p>
            <Button text="Ativar" event={meuEvento} />
            
        </>
    )
} 

export default Evento;