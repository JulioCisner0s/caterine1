import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import useProductById from "../../hooks/useProductById";
import "./ItemDetailContainer.css";

function ItemDetailContainer ({saludo}) {
    const params = useParams();
    const { productId } = params;
    const { loading, product } = useProductById(productId);

    if (loading) {
        return <h1>Cargando...</h1>;
    }

    if (!product) {
        return <h1>Producto no encontrado</h1>;
    }

    return (
        <div className="item--detail_container">
            <h1 style={{
            color: "pink",
            fontSize: "30px",
            }}>{saludo}</h1>
            <ItemDetail item={product}/>
        </div>
    );
}


export default ItemDetailContainer;