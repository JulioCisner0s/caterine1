import ItemList from "../ItemList/ItemList"
import useProduct from "../../hooks/useProduct";

function ItemListContainer2({saludo}) {
    const { isLoading: product4Loading, product } = useProduct();
    if (product4Loading) return <h1>Cargando...</h1>;

    return (
        <div>
            <h1 style={{
            color: "pink",
            fontSize: "30px",
            }}>{saludo}</h1>
            <ItemList product={product}/>
        </div>
    );
}

export default  ItemListContainer2;