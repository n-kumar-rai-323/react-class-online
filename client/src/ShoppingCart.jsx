import { useState } from "react"

const ShoppingCart = () => {
    const [cart, setCart] = useState([])
    function addToCart(product) {
        setCart([...cart, product])
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
            {products.map((product) => (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                    <hr />
                </div>

            ))}
            <h2>Cart({cart.length})</h2>
            {cart.map((item, index) => (
                <div key={index}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </>
    )
}

export default ShoppingCart