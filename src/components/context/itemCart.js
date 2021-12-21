import React, { useContext } from "react";
import  CartContext  from "./CartContext";

const ItemCart = ({item,quantity}) =>{
    const{removeItem}= useContext(CartContext)
    const removeItems=()=>{
        removeItem(item.id,quantity)
    }
    

    return(
        <>
        <div >
            <img src={item.img} alt="imagen" width="600vw"/>
            <h1>{item.name}</h1>
            <p>{quantity}</p>
            <button onClick={removeItems}>Eliminar Destino</button>
            
        </div>
        
        </>    
    )
}

export default ItemCart