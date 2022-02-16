import './CartWidget.css';
const CartWidget = (props) =>{
    return(
        <>
            <button type="button" className="btn btn-primary">
                <img  className="Cart" src={props.imagen} alt="Carrito" ></img>
                <span className="badge badge-light">4</span>
            </button>
        </>

    );
}
export default CartWidget;

