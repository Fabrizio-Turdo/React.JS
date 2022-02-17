import { useState } from "react"
const ItemCount =(props) =>{
    const [conter, setConter] = useState(props.initial); //HOOKs para crear estados de mis componentes

        //ciclo para maximo 5
    const increment =()=>{
        setConter(conter+1);
        console.log(conter);
        if(conter>4){
            setConter(conter+0)
            console.log('xD')
        }
    }
    const decrease = () =>{
        setConter(conter-1);
        console.log(conter);
        if (conter<2){
            setConter(conter-0)
            console.log('no sumar')
        }
    }
   
    return(
        <>
            <p>{conter}</p>
            <button onClick={increment}>Sumar al Carrito</button>
            <button onClick={decrease}>Eliminar del Carrito</button>
            <button onClick={props.onAdd}>Agregar al carrito</button>
        </>
        )
}
export default ItemCount;