import ItemList from "../ItemList/ItemList"
import useProducts from "../../hooks/useProducts";

function ItemListContainer({saludo}) {
    const { isLoading: productsLoading, products } = useProducts();
    if (productsLoading) return <h1>Cargando...</h1>;

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