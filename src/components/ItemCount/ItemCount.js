import { useState } from "react"
const ItemCount =(props) =>{
    const [stock, setStock] = useState(0); //HOOKs para crear estados de mis componentes
    const increment = () =>{
        setStock(stock+1);
        console.log(stock);
    }
    const decrease = () =>{
        setStock(stock-1);
        console.log(stock);
    }
    return(
        <>
            <button onClick={increment}>Sumar al Carrito</button>
            <button onClick={decrease}>Eliminar del Carrito</button>
        </>
        )
}
export default ItemCount;