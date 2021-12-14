const products =[
    {id: 1, category:"america", name: "NEW YORK", price: "$800.000", img: "https://dam.ngenespanol.com/wp-content/uploads/2021/05/cuanto-cuesta-viajar-a-nueva-york.jpg", info:"La ciudad de Roma es la capital de Italia, está ubicada entre Los Apeninos y el Mar Tirreno y es conocida también como la Ciudad Eterna. Es una ciudad plagada de monumentos y donde se puede respirar el arte, donde lo antiguo se mezcla con lo moderno.", hotel: "Hotel Imperio", hotel2: "Exe International Palace", hotel3: "The Hive Hotel", hotel4: "Hotel Milton Roma"},
    {id: 2, category: "america", name: "CIUDAD DE MEXICO", price: "$700.000", img: "https://d36tnp772eyphs.cloudfront.net/blogs/2/2019/01/Palacio-de-Bellas-Artes-CDMX-shutterstock_1058054480.jpg", info:"La ciudad de Roma es la capital de Italia, está ubicada entre Los Apeninos y el Mar Tirreno y es conocida también como la Ciudad Eterna. Es una ciudad plagada de monumentos y donde se puede respirar el arte, donde lo antiguo se mezcla con lo moderno.", hotel: "Hotel Imperio", hotel2: "Exe International Palace", hotel3: "The Hive Hotel", hotel4: "Hotel Milton Roma"},
    {id: 3, category: "america", name: "BOGOTÁ", price: "980.000", img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Bogot%C3%A1_Colpatria_Night.jpg", info:"La ciudad de Roma es la capital de Italia, está ubicada entre Los Apeninos y el Mar Tirreno y es conocida también como la Ciudad Eterna. Es una ciudad plagada de monumentos y donde se puede respirar el arte, donde lo antiguo se mezcla con lo moderno.", hotel: "Hotel Imperio", hotel2: "Exe International Palace", hotel3: "The Hive Hotel", hotel4: "Hotel Milton Roma"},
    {id: 4, category: "america", name:  "RÍO DE JANEÍRO", price: "$950.000", img: "https://www.rutaschile.com/configurador/Foto_Destinos/Grande_19112015075919.jpg", info:"La ciudad de Roma es la capital de Italia, está ubicada entre Los Apeninos y el Mar Tirreno y es conocida también como la Ciudad Eterna. Es una ciudad plagada de monumentos y donde se puede respirar el arte, donde lo antiguo se mezcla con lo moderno.", hotel: "Hotel Imperio", hotel2: "Exe International Palace", hotel3: "The Hive Hotel", hotel4: "Hotel Milton Roma"},
    {id: 5, category:"asia", name: "TOKIO", price: "$800.000", img: "https://porlavision.com/wp-content/uploads/2020/05/Visita-a-Tokio-desde-la-casa.png", info:"La ciudad de Roma es la capital de Italia, está ubicada entre Los Apeninos y el Mar Tirreno y es conocida también como la Ciudad Eterna. Es una ciudad plagada de monumentos y donde se puede respirar el arte, donde lo antiguo se mezcla con lo moderno.", hotel: "Hotel Imperio", hotel2: "Exe International Palace", hotel3: "The Hive Hotel", hotel4: "Hotel Milton Roma"},
    {id: 6, category: "asia", name: "HONG KONG", price: "$700.000", img: "https://invervisas.com/wp-content/uploads/2021/06/hongkong.jpg", info:"La ciudad de Roma es la capital de Italia, está ubicada entre Los Apeninos y el Mar Tirreno y es conocida también como la Ciudad Eterna. Es una ciudad plagada de monumentos y donde se puede respirar el arte, donde lo antiguo se mezcla con lo moderno.", hotel: "Hotel Imperio", hotel2: "Exe International Palace", hotel3: "The Hive Hotel", hotel4: "Hotel Milton Roma"},
    {id: 7, category: "asia", name: "PEKÍN", price: "980.000", img: "https://astelus.com/wp-content/viajes/pekin-la-gran-capital-de-china.jpg", info:"La ciudad de Roma es la capital de Italia, está ubicada entre Los Apeninos y el Mar Tirreno y es conocida también como la Ciudad Eterna. Es una ciudad plagada de monumentos y donde se puede respirar el arte, donde lo antiguo se mezcla con lo moderno.", hotel: "Hotel Imperio", hotel2: "Exe International Palace", hotel3: "The Hive Hotel", hotel4: "Hotel Milton Roma"},
    {id: 8, category: "asia", name:  "SEÚL", price: "$950.000", img: "https://content.r9cdn.net/rimg/dimg/ff/d2/794e703d-city-35982-1620c5d9650.jpg?width=1750&height=1000&xhint=2242&yhint=1445&crop=true", info:"La ciudad de Roma es la capital de Italia, está ubicada entre Los Apeninos y el Mar Tirreno y es conocida también como la Ciudad Eterna. Es una ciudad plagada de monumentos y donde se puede respirar el arte, donde lo antiguo se mezcla con lo moderno.", hotel: "Hotel Imperio", hotel2: "Exe International Palace", hotel3: "The Hive Hotel", hotel4: "Hotel Milton Roma"},
    {id: 9, category:"australia", name: "SÍDNEY", price: "$800.000", img: "https://phantom-expansion.unidadeditorial.es/4eaf3f61c2d264a3a2d8f4ef45c12acc/crop/0x0/2036x1358/resize/414/f/jpg/assets/multimedia/imagenes/2021/11/02/16358455755572.jpg", info:"La ciudad de Roma es la capital de Italia, está ubicada entre Los Apeninos y el Mar Tirreno y es conocida también como la Ciudad Eterna. Es una ciudad plagada de monumentos y donde se puede respirar el arte, donde lo antiguo se mezcla con lo moderno.", hotel: "Hotel Imperio", hotel2: "Exe International Palace", hotel3: "The Hive Hotel", hotel4: "Hotel Milton Roma"},
    {id: 10, category: "australia", name: "BRISBANE", price: "$700.000", img: "https://wp-growpro.s3-eu-west-1.amazonaws.com/media/2018/06/Que%CC%81-ver-en-Brisbane-10-Lugares-imprescindibles.jpg", info:"La ciudad de Roma es la capital de Italia, está ubicada entre Los Apeninos y el Mar Tirreno y es conocida también como la Ciudad Eterna. Es una ciudad plagada de monumentos y donde se puede respirar el arte, donde lo antiguo se mezcla con lo moderno.", hotel: "Hotel Imperio", hotel2: "Exe International Palace", hotel3: "The Hive Hotel", hotel4: "Hotel Milton Roma"},
    {id: 11, category: "australia", name: "MELBOUME", price: "980.000", img: "https://gostudyaus.es/wp-content/uploads/2018/10/MEL_header_2-1.jpg", info:"La ciudad de Roma es la capital de Italia, está ubicada entre Los Apeninos y el Mar Tirreno y es conocida también como la Ciudad Eterna. Es una ciudad plagada de monumentos y donde se puede respirar el arte, donde lo antiguo se mezcla con lo moderno.", hotel: "Hotel Imperio", hotel2: "Exe International Palace", hotel3: "The Hive Hotel", hotel4: "Hotel Milton Roma"},
    {id: 12, category: "australia", name:  "PERTH", price: "$950.000", img: "https://www.mochiadictos.com/wp-content/uploads/Perth-con-ni%C3%B1os-1.jpg", info:"La ciudad de Roma es la capital de Italia, está ubicada entre Los Apeninos y el Mar Tirreno y es conocida también como la Ciudad Eterna. Es una ciudad plagada de monumentos y donde se puede respirar el arte, donde lo antiguo se mezcla con lo moderno.", hotel: "Hotel Imperio", hotel2: "Exe International Palace", hotel3: "The Hive Hotel", hotel4: "Hotel Milton Roma"},
    {id: 13, category:"europa", name: "PARÍS", price: "$800.000", img: "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900", info:"La ciudad de Roma es la capital de Italia, está ubicada entre Los Apeninos y el Mar Tirreno y es conocida también como la Ciudad Eterna. Es una ciudad plagada de monumentos y donde se puede respirar el arte, donde lo antiguo se mezcla con lo moderno.", hotel: "Hotel Imperio", hotel2: "Exe International Palace", hotel3: "The Hive Hotel", hotel4: "Hotel Milton Roma"},
    {id: 14, category: "europa", name: "ROMA", price: "$700.000", img: "https://img.bekiaviajes.com/ciudades/portada/0000/6-h.jpg", info:"La ciudad de Roma es la capital de Italia, está ubicada entre Los Apeninos y el Mar Tirreno y es conocida también como la Ciudad Eterna. Es una ciudad plagada de monumentos y donde se puede respirar el arte, donde lo antiguo se mezcla con lo moderno.", hotel: "Hotel Imperio", hotel2: "Exe International Palace", hotel3: "The Hive Hotel", hotel4: "Hotel Milton Roma"},
    {id: 15, category: "europa", name: "ÁMSTERDAM", price: "980.000", img: "https://img.bekiaviajes.com/ciudades/portada/0000/7-h.jpg", info:"La ciudad de Roma es la capital de Italia, está ubicada entre Los Apeninos y el Mar Tirreno y es conocida también como la Ciudad Eterna. Es una ciudad plagada de monumentos y donde se puede respirar el arte, donde lo antiguo se mezcla con lo moderno.", hotel: "Hotel Imperio", hotel2: "Exe International Palace", hotel3: "The Hive Hotel", hotel4: "Hotel Milton Roma"},
    {id: 16, category: "europa", name:  "PRAGA", price: "$950.000", img: "https://www.elnacional.cat/uploads/s1/15/91/39/43/pragagrande.jpeg", info:"La ciudad de Roma es la capital de Italia, está ubicada entre Los Apeninos y el Mar Tirreno y es conocida también como la Ciudad Eterna. Es una ciudad plagada de monumentos y donde se puede respirar el arte, donde lo antiguo se mezcla con lo moderno.", hotel: "Hotel Imperio", hotel2: "Exe International Palace", hotel3: "The Hive Hotel", hotel4: "Hotel Milton Roma"},

]

const categories = [
    {id:"america", description: "AMERICA"},
    {id:"asia", description: "ASIA"},
    {id:"australia", description: "AUSTRALIA"},
    {id:"europa", description : "EUROPA"},
]
export const getCategories = () => {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)
    })
}

export const getProducts = (category) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
        category ?resolve(products.filter(product => product.category === category)) : resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {

    return new Promise((resolve) =>{
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 1000 )
    })
}

export default products
