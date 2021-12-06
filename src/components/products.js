
const products =[
    {id: 1,name: "Moscu", price: "$800.000", img: "https://en3dias.net/wp-content/uploads/2019/06/cuantos-dias-para-ver-moscu.jpg"},
    {id: 2, name: "Tokio", price: "$700.000", img: "https://porlavision.com/wp-content/uploads/2020/05/Visita-a-Tokio-desde-la-casa.png"},
    {id: 3, name: "Berlin", price: "980.000", img: "https://www.losviajesdegrimes.com/wp-content/uploads/2020/02/catedral-berlin.jpg"},
    {id: 4, name: "Ámsterdam", price: "$950.000", img: "https://cdn-images.welcometothejungle.com/Fl88V8bG5oMNutOwPco_mIGV3t4iwSi6PgTqz4-_Mn4/rs:auto:1500::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9hcnRpY2xlL2ltYWdlLzY0MDYvMTU1MzI3L0Ftc3RlcmRhbS0yLmpwZw"},
    {id: 5, name: "Roma", price: "980.000", img: "https://img.bekiaviajes.com/ciudades/portada/0000/6-h.jpg", info:"La ciudad de Roma es la capital de Italia, está ubicada entre Los Apeninos y el Mar Tirreno y es conocida también como la Ciudad Eterna. Es una ciudad plagada de monumentos y donde se puede respirar el arte, donde lo antiguo se mezcla con lo moderno.", hotel: "Hotel Imperio", hotel2: "Exe International Palace", hotel3: "The Hive Hotel", hotel4: "Hotel Milton Roma"}
]


export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export default products
