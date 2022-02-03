import './CartWidget.css';
const CartWidget = (props) =>{
    return(
        <>
            <img  className="Cart" src={props.imagen} alt="Carrito"></img>
        </>

    );
}

// const Cartwidget = () =>{
//     return (
//         <img alt="Carrito"></img>
//     );
// }
export default CartWidget;

