// import ItemCount from "../ItemCount/ItemCount"
import Data from "../Api/Data"
import customFetch from '../Api/customFetch'
import {useEffect, useState} from "react";
import ItemList from './ItemList'




const ItemListContainer =  (props) => {
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



        </>
    );
}
export default ItemListContainer;
