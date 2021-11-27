import ItemCount from "./ItemCount"

function ItemListContainer({greeting}){
    return<>
    <h1>{greeting}</h1>
    <ItemCount stock={20} initial={1} onAdd={"Se añadio a la canasta"} />
    </>
}


export default ItemListContainer