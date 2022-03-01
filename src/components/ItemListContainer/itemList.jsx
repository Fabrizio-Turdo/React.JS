import './ItemList.css'

const Items = (props) =>{
    return(
        <>
            <div className="card">
                <img src={props.img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.description}</p>
                  <p className="card-text">{props.stock}</p>
                  <a href="inico" className="btn btn-primary">{props.detalles}</a>
                </div>
            </div>
        </>
    )
}
export default Items;

