import React,{useContext} from "react";
import  CartContext  from "./CartContext";
import Cart from "./Cart";

const CartViewContainer = () =>{
    const clearItem=()=>{
        clearItems([])
    }
    const {values,clearItems} = useContext(CartContext)
    return(
        <div>
            
                <div>
            <Cart items={values.items}/>
            <p>{values.quantity}</p>
            {/*<p>${values.total}</p>*/}
            <button onClick={clearItem}>VACIAR BOLSA</button>
            </div>
            
        </div>
    )
}
export default CartViewContainer