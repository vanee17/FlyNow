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

    return <div className="count">
                <h4>Cuantos dias te quedaras</h4>
                <h2>{count}</h2>
                <button onClick={quitar}>-</button>
                <button onClick={agregar}>+</button>
                <br/>
                <button onClick={ ()=>onAdd()}>Agregar a mi bolsa</button>
            </div>
}

export default ItemCount