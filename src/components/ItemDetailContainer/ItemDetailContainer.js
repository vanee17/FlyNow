import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import  CartContext  from '../context/CartContext'
import ItemCount from '../ItemCount'
import {getProductById} from '../ItemListContainer/products'
import ItemDetail from './ItemDetail'


function ItemDetailContainer() {
    const[product, setProduct] = useState([])
    const{addItem, addQuantity, isInCart} = useContext(CartContext)
    const [add,setAdd] = useState(false)
    const [purchase, setPurchase] = useState(false)
    const {paramId} = useParams()

    const onAdd = (quantity) => {
        if (quantity > 0) {
            if (!isInCart(product.id)) {
                setAdd(true)
                addItem({product, quantity})
                addQuantity(quantity)
            }else{
                console.log('no hay')
            }
        }else{
            alert("no ingresaste una cantidad")
        }
    }
        useEffect (() =>{
            getProductById(paramId).then((Item) => {
            setProduct(Item)
            setPurchase(true)
    })
    return(() =>{
        setProduct()
        })
    },[paramId])

    return (
        <div>
            {purchase? ( 
                <div>
            <h1>ItemDetailContainer</h1>
            <ItemDetail  product={product}/>
            {!add ? ( 
                <ItemCount Item ={product} stock={20} initial={0} onAdd={onAdd} />
            ) : (
                <Link to={'/cart'}>Finalizar compra</Link>
            )}
            </div>
            ) : ( 
                <div>cargando...</div>
            )}
        </div>
    )
}

export default ItemDetailContainer
