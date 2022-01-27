import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import NavBarCategory from './cartWidget/NavBarCategory';
import CartWidget from './cartWidget/CartWidget';
import '../../body/itemListContainer/style.css'

const NavBarList = ({ categories }) => {
    const [state, setState] = useState(false);
    const [clase, setClase] = useState('navContainer')
    const menuButton = () => {
        if (!state) {
            setClase('navContainer displayNav');
            setState(true);
        }
        else {
            setClase('navContainer');
            setState(false);
        }
    };
    return (
        <div className="navContainer">
            <Link to={'/'} className="title">
                FlyNow
            </Link>
            <ul className={clase}>
                {categories.map((category) => (
                    <NavBarCategory key={category.id} category={category} />
                ))}
            </ul>
            <CartWidget />
            <i onClick={menuButton}></i>
        </div>
    );
};

export default NavBarList;
