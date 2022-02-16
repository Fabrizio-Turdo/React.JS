import Elementos from "./itemList";
import img from "./Images/1.jpg"
import img2 from "./Images/2.jpg"

const data = [
    {
        img: {img},
        title: "Elemento1",
        description: "Remera",
        detalles: "Mas info",
    },
    {
        img: {img2}, //problema con la ruta de las IMG 
        title: "Elemento2",
        description: "Buzo",
        detalles: "Mas info",
    }
];
const ItemListContainer =  () => {

    return(
        <> 
            {
                data.map(item =>
                    <Elementos img={item.img} title={item.title} 
                    description={item.description} 
                    detalles={item.detalles}/>
                )
            }

        </>
    );
}
export default ItemListContainer;
