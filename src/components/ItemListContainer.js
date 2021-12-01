import {useEffect, useState} from "react"
/*import ItemCount from "./ItemCount"*/
import ItemList from "./ItemList"
import { getProducts } from "./products"


const ItemListContainer = () => {
    const[products, setProducts] = useState([])

    useEffect(() => {
        const list = getProducts()

        list.then((list) => {
            setProducts(list)
        })
    })
    return(
            <ItemList product={products}/>
    )
}

/*function ItemListContainer({greeting}){
    return<>
    <h1>{greeting}</h1>
    <ItemCount stock={20} initial={1} onAdd={"Se añadio a la canasta"} />
    </>
}*/

export default ItemListContainer