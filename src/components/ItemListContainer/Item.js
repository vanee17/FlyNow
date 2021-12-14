import "../NavBar/NavBar.css"
import { Link } from "react-router-dom"

const Item = ({product}) => {
    return(
    <div className="tarjetas">
        <img className="imagen"src={product.img} alt={product.name}/>
        <div>
            <h2>
                {product.name}
            </h2>
        </div>
        <p>
        Precio: {product.price}
        </p>
        <Link className="boton" to={`/detail/${product.id}`}>Ver detalle</Link>
        </div>
)}

export default Item