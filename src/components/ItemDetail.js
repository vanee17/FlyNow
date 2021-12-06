import "./NavBar.css"
const ItemDetail = ({product}) => {
    return(
    <div>{
        product?.length !==0?(
            <div id="card">
            <h2>
                {product.name}
            </h2>
        
        <img className="imagen"src={product.img} alt={product.name}/>
        <p>
        Precio: {product.price}
        </p>
        <p>
        Caracteristicas: {product.info}
        </p>
        <ul>hoteles:
            <li>{product.hotel}</li>
            <li>{product.hotel2}</li>
            <li>{product.hotel3}</li>
            <li>{product.hotel4}</li>
        </ul>
        <input type="date"></input>
        <br/>
        <button>Cotizar Reservacion</button>
        </div>
        ):(<div>Cargando...</div>)
    }
    </div>)
}


export default ItemDetail