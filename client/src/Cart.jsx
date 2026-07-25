import { useState } from "react"
import "./Cart.css"
const ShoppingCart = () => {
    const [cart, setCart] = useState([])
    function addToCart(product) {
        setCart([...cart, product])
    }

    function remove(product){
          cart.pop(product)
    }

    function clear(){
        setCart([])
    }
    const products = [
        {
            "id": 1,
            "name": "Wireless Noise-Canceling Headphones",
            "price": 299.99
        },
        {
            "id": 2,
            "name": "Ergonomic Office Chair",
            "price": 189.50
        },
        {
            "id": 3,
            "name": "Mechanical Keyboard",
            "price": 129.00
        },
        {
            "id": 4,
            "name": "USB-C Hub Multiport Adapter",
            "price": 45.99
        },
        {
            "id": 5,
            "name": "10000mAh Power Bank",
            "price": 29.99
        }
    ]
    return (
        <>
            <h1>Shopping Cart</h1>
            <h2>Products</h2>
            <div className="component">
                {products.map((product) => (
                    <div className="cart" key={product.id}>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                        <hr />
                    </div>

                ))}
            </div>
            <h2 className="head">Cart({cart.length}) 
                <button onClick={clear}>Clear</button>
            </h2>
            <div className="main">
                {cart.map((item, index) => (
                <div className="product" key={index}>
                    <p>{item.name}</p>
                    <p>Rs.{item.price}</p>
                    <button onClick={remove}>Remove</button>
                </div>
            ))}
            </div>
            
        </>
    )
}

export default ShoppingCart;