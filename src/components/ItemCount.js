import { useState } from "react"

function ItemCount  ({stock, initial, onAdd}) {
    
    const [count, setCount]= useState(initial)

    const agregar = () =>{
        if (count < stock) {
            setCount(count + 1)
        }
    }   
    const quitar = ()=>{
        if (count > 1){
            setCount(count - 1)
        }else{
    setCount(1)
}
    }
    const añadido = () =>{
        if (stock >= count){
            alert("Se ha añadido al carrito");
        }
    }
    return <div className="count">
                <button onClick={(()=>{quitar()})}>-</button>
                <h1>{count}</h1>
                <button  onClick={(()=>{agregar()})}>+</button>
                <br/>
                <button  onClick={(()=>{añadido()})}>Añadir al carrito</button>
            </div>
}

export default ItemCount