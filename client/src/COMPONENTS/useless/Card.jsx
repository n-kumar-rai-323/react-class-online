import { productsData } from "../DATA/data";
import Products from "./COMPONENTS/Products";
import Cart from "./COMPONENTS/Cart"


function Card() {
    return <>
        <div className="conatiner">
           {productsData.map((product)=>(
               <Cart
               name={product.name}
               description={product.description}
               price={product.price}
               />
           ))}
                
         </div>

    </>
}

export default Card;