import Item from './item'
const ItemList = ({data}) => {

    return(
        <div>
            {
                data.map(item =>
                    <Item 
                    key={item.id}
                    img={item.img} 
                    title={item.title} 
                    description={item.description} 
                    detalles={item.detalles}
                    stock={item.stock}/>
                    
                )
            }

        </div>
    );
}
export default ItemList;