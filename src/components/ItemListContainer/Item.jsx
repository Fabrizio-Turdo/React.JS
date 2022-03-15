import './Item.css'
import { Link } from 'react-router-dom';


const Item = (props) =>{
    return(
        <>
            <div className="card">
                <img src={props.img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.description}</p>
                  <p className="card-text">{props.stock}</p>
                  <Link to="/item" className="btn btn-primary">{props.detalles}</Link>
                </div>
            </div>
        </>
    )
}
export default Item;

