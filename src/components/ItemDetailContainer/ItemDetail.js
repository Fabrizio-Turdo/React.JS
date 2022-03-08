import ItemCount from '../ItemCount/ItemCount'

function ItemDetail ({item}) {
    const onAdd = () =>{
      console.log('Se agrego un producto.')
    }


    return (

        <>
            <h3>ItemDetail</h3>
            <div className="card">
                <img src={item.img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">{item.stock}</p>
                  <a href="inico" className="btn btn-primary">{item.detalles}</a>
                </div>
                 <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </div> 


        </>
    )      
}
export default ItemDetail;