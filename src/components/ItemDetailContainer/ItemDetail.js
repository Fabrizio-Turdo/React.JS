import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemListContainer/ItemList';
import Data from '../Api/Data'

function ItemDetail ({item}) {
    const onAdd = () =>{
      console.log('Se agrego un producto.')
    }


  return (
    <>

      <ItemList item={Data.id}/>

      
      <ItemCount stock={5} initial={1} onAdd={onAdd} />

    </>
  )
 
}


export default ItemDetail;


