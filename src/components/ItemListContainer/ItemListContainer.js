import Elementos from "./itemList";

const data = [
    {
        img: "./Images/1.jpg",
        title: "Elemento1",
        description: "Remera",
        detalles: "Mas info",
    },
    {
        img:  "./Images/2.jpg", 
        title: "Elemento2",
        description: "Buzo",
        detalles: "Mas info",
    }
];
const ItemListContainer =  (props) => {

    return(
        <> 
            <h1>{props.greeting}</h1>
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
