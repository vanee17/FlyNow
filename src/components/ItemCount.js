import { useState } from "react"

function ItemCount  ({stock, initial,onAdd}) {
    
    const [count, setCount]= useState(initial)
    const [aviso]=useState(onAdd)
    
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
    const letrero = () =>{
        
            alert(aviso);
        
    }
    return <div className="count">
                <h1>{count}</h1>
                <button onClick={quitar}>-</button>
                <button onClick={agregar}>+</button>
                <br/>
                <button onClick={letrero}>Agregar a mi bolsa</button>
            </div>
}

export default ItemCount