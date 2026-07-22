import Products from "./Products";
import "./Cart.css"
function Cart({name,description,price}){
 return <>
 <div className="cart">
    <h1>{name}</h1>
    <Products
    description={description}
    price={price} />
 </div>
 </>
}


export default Cart;