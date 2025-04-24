import { useState } from "react";

const Contador = () => {

    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>Valor del contador: {contador}</p>
            <button onClick={() => setContador(contador+1)}> Incrementar </button>
            <button onClick={ () => setContador(contador-1)}> Decrementar </button>
        </div>
    )
}

export default Contador;