import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import  CartContext  from '../context/CartContext'
import ItemCount from '../ItemCount'
import ItemDetail from './ItemDetail'
import {getDoc,doc} from 'firebase/firestore'
import{db} from '../../services/firebase/firebase'


function ItemDetailContainer() {
    const[product, setProduct] = useState([])
    const{addItem, addQuantity, isInCart} = useContext(CartContext)
    const [add,setAdd] = useState(false)
    const [purchase,setPurchase] = useState(true)
    const {paramId} = useParams()

    const onAdd = (quantity) => {
        if (quantity > 0) {
            let productoRecibido = isInCart(product.id)
            if (!productoRecibido) {
                setAdd(true)
                addItem({product, quantity})
                addQuantity(quantity)
                window.alert(`¡Agregaste la cantidad de ${quantity} de ${product.name} a tu bolsa!`);
                addQuantity(quantity);
                setPurchase(true);
            }else{
                console.log('no hay')
            }
        }else{
            alert("no ingresaste una cantidad")
        }
    }
        useEffect (() =>{
            getDoc(doc(db,'products',paramId)).then((querySnapshot)=>{
                console.log(querySnapshot);
                const product={  id:querySnapshot.id,...querySnapshot.data()}
                setProduct(product)
            }).catch((error)=>{
                console.log('error base de datos',error );
            })
            return () => {
                setProduct();
            };
    },[paramId])

    return (
        <div>
            
                <div>
            <h1>ItemDetailContainer</h1>
            <ItemDetail  product={product}/>
            {!add ? ( 
                <ItemCount Item ={product} stock={20} initial={0} onAdd={onAdd} />
            ) : (
                <Link to={'/cart'}>Finalizar compra</Link>
            )}
            </div>
            
        </div>
    )
}

export default ItemDetailContainer
