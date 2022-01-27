import { useState } from 'react';

const ItemCount = ({ getStock, getInitial, onAdd }) => {
    const [stock] = useState(getStock);
    const [count, setCount] = useState(getInitial);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleRemove = () => {
        if (count > getInitial) {
            setCount(count - 1);
        }
    };
    const add = () => {onAdd(count)};
    return (
        <div className="count">
                <div>
                    <div>
                    <h4>Cuantos dias te quedaras</h4>
                        <button onClick={handleRemove}>-</button>
                        <h2>{count}</h2>
                        <button onClick={handleAdd}>+</button>
                    </div>
                    <button onClick={add}>Agregar al Carrito</button>
                </div>
        </div>
    );
};

export default ItemCount;
