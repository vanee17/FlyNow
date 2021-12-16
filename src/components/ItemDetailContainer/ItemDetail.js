import "../NavBar/NavBar.css"
import ItemCount from "../ItemCount"
import { useState } from "react"
import {Link} from "react-router-dom"

const ItemDetail = ({product}) => {
    const[add, setAdd] =  useState(false)
    const onAdd = () =>{
        setAdd(!add)
    }

    return(
    <div>{
        product?.length !==0?(
        <div id="card">
            <img className="imagen1"src={product.img} alt={product.name}/>
            <h2>
                {product.name}
            </h2>
            <div>
            <h5>
        Caracteristicas: {product.info}
        </h5>
        <h6>Elije tu hotel</h6>
            <select className="hotel">
                <option>{product.hotel}</option>
                <option>{product.hotel2}</option>
                <option>{product.hotel3}</option>
                <option>{product.hotel4}</option>
            </select>
        <br/>
        <input type="date"></input>
        <p>
        Precio: {product.price}
        </p>
        </div>
        {
            add? <div className="añadido">Añadido!!</div>:
            <ItemCount id="contador" stock={20} initial={1} onAdd={onAdd} />
        }
        <Link className="Fcompra" to = "/cart">Finalizar Compra</Link>
        </div>
        ):(<div>Cargando...</div>)
    }
    </div>)
}


export default ItemDetail