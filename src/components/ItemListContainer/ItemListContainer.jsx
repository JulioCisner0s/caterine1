import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from 'react';
import { getProducts, getProductByCategory } from "../../mock/asyncMock";
import { useParams } from "react-router-dom";
function ItemListContainer({saludo}) {
    
    const[products, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        if (params.categoryName) {
            getProductByCategory(params.categoryName).then((data)=> {    setProducts(data);
            }).finally(() => {
                setLoading(false);
            })
        } else {
            getProducts().then((data) => {
                setProducts(data);
            }).finally(() => {
                setLoading(false);
            });
        }
    }, [params.categoryName]);

    if (loading) return <h1>Cargando...</h1>

    return (
        <div>
            <h1 style={{
            color: "pink",
            fontSize: "30px",
            }}>{saludo}</h1>
            <ItemList products={products}/>
        </div>
    );
}

export default  ItemListContainer;