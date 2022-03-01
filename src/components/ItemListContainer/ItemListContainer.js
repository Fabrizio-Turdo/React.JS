import Items from "./itemList";
import ItemCount from "../ItemCount/ItemCount"
import Data from "./Item"



const ItemListContainer =  (props) => {
    const onAdd = () =>{
        console.log('Se agrego un producto.')
    }
    return(
        <> 
            <h1>{props.greeting}</h1>
            {
                Data.map(item =>
                    <Items 
                    key={item.id}
                    img={item.img} 
                    title={item.title} 
                    description={item.description} 
                    detalles={item.detalles}
                    stock={item.stock}/>
                    
                )
            }
            <ItemCount stock={5} initial={1} onAdd={onAdd} /> {/* Funcion onAdd. Agregar al carrito */}

        </>
    );
}
export default ItemListContainer;
