import { Link } from 'react-router-dom';
import '../style.css';

const Item = ({ product }) => {
    return (
        <div className="tarjetas">
            <img src={product.img} alt="Imagen" className='imagen' />
            <h2> {product.name} </h2>
            <p>${product.price}</p>
            {product.stock > 0 ? (
                <Link to={`/item/${product.id}`} className="boton">
                    ver mas
                </Link>
            ) : (
                <h2>No Disponible</h2>
            )}
        </div>
    );
};
export default Item;
