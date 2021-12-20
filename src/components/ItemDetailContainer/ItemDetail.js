import "../NavBar/NavBar.css"

const ItemDetail = ({product}) => {


    return(
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
    </div>)
}


export default ItemDetail