import React,{ useEffect, useState } from "react";
import ItemList from "./ItemList";
import{useParams} from "react-router-dom";
import {collection,getDocs, query,where} from 'firebase/firestore';
import{db} from '../../services/firebase/firebase'

function ItemListContainer  ({greeting}) {

    const [product, setProduct] = useState([]);
    const {categoryId} = useParams()
        useEffect(() => {
            if (!categoryId) {
                getDocs(collection(db,'products')).then((querySnapshot)=>{
                    console.log(querySnapshot);
                    const products=querySnapshot.docs.map(doc=>{
                        console.log(doc);
                        return{
                            id:doc.id,...doc.data()
                        }
                    })
                    setProduct(products)
                }).catch((error)=>{
                    console.log('error base de datos',error );
                })
            }else{
                getDocs(query(collection(db,'products'),where('category','==',categoryId))).then((querySnapshot)=>{
                    console.log(querySnapshot);
                    const products=querySnapshot.docs.map(doc=>{
                        console.log(doc);
                        return{
            id:doc.id,...doc.data()}
                    })
                    setProduct(products)
                }).catch((error)=>{
                    console.log('error base de datos',error );
                })
            }

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