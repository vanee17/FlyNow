import React, { useContext, useState, useEffect } from 'react';
//estilos de lista de compra
import './dashBoardContainer.scss';
import { Link } from 'react-router-dom';

import UserContext from '../../../context/UserContext';
import { getFirebase } from '../../../service/firebase/productService';
import ItemsDashBoard from './itemsDashBoard/ItemsDashBoard';
import Loader from '../../loader/Loader';

const DashBoardContainer = () => {
    const { values } = useContext(UserContext);
    const [listProduct, setListProduct] = useState([]);
    const [list, setList] = useState(false);

    useEffect(() => {
        getFirebase('orders')
            .then((res) => {
                setListProduct(res.filter((item) => item.buyer.email === values.email));
                if (res.length === 0) {
                    setList(false);
                } else {
                    setList(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [values.email]);

    return (
        <div className="dashBoardContainer">
            {values.email !== '' ? (
                <div>
                    {list ? (
                        <div>
                            <h1 className="title1">Tu Lista de Compras</h1>
                            <ItemsDashBoard products={listProduct} />
                        </div>
                    ) : (
                        <Loader />
                    )}
                    <Link to="/">
                        <button className="boton">Volver a la tienda</button>
                    </Link>
                </div>
            ) : (
                <div>
                    <Link to="/">
                        <button className="buttonCart">Volver a la tienda</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default DashBoardContainer;
