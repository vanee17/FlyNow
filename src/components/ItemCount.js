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
        setCount(0)
}
    }
    const add = () => {
        onAdd(count)
    }

    return <div className="count">
                <h4>Cuantos dias te quedaras</h4>
                <h2>{count}</h2>
                <button onClick={quitar}>-</button>
                <button onClick={agregar}>+</button>
                <br/>
                <button onClick={add}>Agregar a mi bolsa</button>
            </div>
}

export default ItemCount