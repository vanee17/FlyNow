import React,{ useEffect, useState } from "react";
import ItemList from "./ItemList";
import {getProducts}  from "./products";
import{useParams} from "react-router-dom"

function ItemListContainer  ({greeting}) {

    const [product, setProduct] = useState([]);
    const {categoryId} = useParams()
        useEffect(() => {
            getProducts(categoryId).then((item) => {
                setProduct(item);
            })
            return(() =>{
                setProduct([])
            })
            },[categoryId]
            );
    return (
    <>
    <h1>{greeting}</h1>
    <ItemList product={product} />

    </>
);
};

export default ItemListContainer;