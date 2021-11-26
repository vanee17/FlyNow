import { useState } from "react"

function ItemCount  ({stock, initial, onAdd}) {
    
    const [count, setCount]= useState(initial)

     const agregar =() =>{
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const quitar =() =>{
        if (count > stock){
            setCount(count - 1)
        }
    }
    return <div className="count">
                <button>-</button>
                <h1>1</h1>
                <button>+</button>
            </div>
}

export default ItemCount