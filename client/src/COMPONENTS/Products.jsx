import "./Products.css" 

function Products({image,description,price}){
    return <>
    <div className="products">
        <div className="img">Image</div>
        <h2>{description}</h2>
        <p>Rs.{price}</p>
        <button className="btn" onClick={click}>Buy Now</button>
    </div>
    </>
}

function click(event){
     alert("Successfully added to cart!!")
}


export default Products;