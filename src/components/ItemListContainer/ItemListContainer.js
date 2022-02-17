import Elementos from "./itemList";
import ItemCount from "../ItemCount/ItemCount"


const data = [
    {
        id:"1",
        img: "./Images/1.jpg",
        title: "Elemento1",
        description: "Remera",
        detalles: "Mas info",
    },
    {
        id:"2",
        img:  "./Images/2.jpg", 
        title: "Elemento2",
        description: "Buzo",
        detalles: "Mas info",
    }
];
const ItemListContainer =  (props) => {
    const onAdd = () =>{
        console.log('Se agrego un producto.')
    }
    return(
        <> 
            <h1>{props.greeting}</h1>
            {
                data.map(item =>
                    <Elementos 
                    key={item.id}
                    img={item.img} title={item.title} 
                    description={item.description} 
                    detalles={item.detalles}/>
                )
            }
            <ItemCount stock={5} initial={1} onAdd={onAdd} /> {/* Funcion onAdd. Agregar al carrito */}

        </>
    );
}
export default ItemListContainer;
