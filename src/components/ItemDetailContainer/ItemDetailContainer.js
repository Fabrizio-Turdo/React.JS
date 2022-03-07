import {useEffect, useState} from "react";
import customFetch from "./customFetch";
const {products} =require('../ItemListContainer/Item');

const ItemDetailContainer = () => {
    const [Data, setData] = useState({});

    useEffect(() => {
        customFetch(2000, products[2])
            .then(response => setData(response))
            .catch(error => console.log(error))
    }, []);

    return(
        
        <ul>
           
            {
                Data.map(Item => <li key={Item.id}>{Item.description}</li>)
            }
            
        </ul>
        
    );
}
export default ItemDetailContainer;