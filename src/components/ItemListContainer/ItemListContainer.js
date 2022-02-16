import Elementos from "./itemList";
import img from "./Images/1.jpg"
import img2 from "./Images/2.jpg"

const ItemListContainer =  () => {

    return(
        <>

            <div className="Elementos">
                <Elementos img={img} title="Elemento1" 
                description="remera estilo degrade" 
                Detalles="Mas info"/>
                <hr/>
                <Elementos img={img2} title="Elemento2" 
                description="buzo negro" 
                Detalles="Mas info"/>
            </div>
        </>
    );
}
export default ItemListContainer;
