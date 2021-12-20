import React,{useContext} from "react";
import  CartContext  from "./cartContext";
import Cart from "./Cart";
import itemCart from "./itemCart";

const CartView = () =>{
    const {items} = useContext(CartContext)
    return(
        <div>
            <Cart items={itemCart}/>
        </div>
    )

}
export default CartView