import "../NavBar/NavBar.css"
import ItemCount from "../ItemCount"

const ItemDetail = ({product}) => {
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
        <ul>hoteles:
            <li>{product.hotel}</li>
            <li>{product.hotel2}</li>
            <li>{product.hotel3}</li>
            <li>{product.hotel4}</li>
        </ul>
        <br/>
        <input type="date"></input>
        <p>
        Precio: {product.price}
        </p>
        </div>
        <ItemCount id="contador" stock={20} initial={1} onAdd={"Se añadio a la canasta"} />
        </div>
        ):(<div>Cargando...</div>)
    }
    </div>)
}


export default ItemDetail