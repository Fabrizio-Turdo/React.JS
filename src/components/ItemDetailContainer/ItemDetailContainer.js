import {useEffect, useState} from "react";
import customFetch from "../Api/customFetch";
import Data from "../Api/Data";
import ItemDetail from './ItemDetail';
const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(2000, Data[2])
            .then(response => setDato(response))
            .catch(error => console.log(error))
    }, []);

    return(
        <ItemDetail item={dato}/>
        
    );
}
export default ItemDetailContainer;