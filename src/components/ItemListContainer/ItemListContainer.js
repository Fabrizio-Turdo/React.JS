// import ItemCount from "../ItemCount/ItemCount"
import Data from "../Api/Data"
import customFetch from '../Api/customFetch'
import {useEffect, useState} from "react";
import ItemList from './ItemList'




const ItemListContainer =  (props) => {
    // const onAdd = () =>{
    //     console.log('Se agrego un producto.')
    // }
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, Data)
            .then(response => setDatos(response))
            .catch(error => console.log(error))
    }, []);

    console.log(datos);

    return(
        <> 
            <h1>{props.greeting}</h1>
            <ItemList data={datos}/>

            {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> Funcion onAdd. Agregar al carrito */}


        </>
    );
}
export default ItemListContainer;
