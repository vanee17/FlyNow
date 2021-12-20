import React from "react";

const itemCart = ({item}) =>{

    return(
        <div>
            <img src={item.product.img} alt="imagen"/>
            <h1>{item.product.name}</h1>
        </div>
    )
}

export default itemCart