import "./CategoryList.css";
import { Link } from "react-router-dom";

function CategoryList () {
    return (
        <ul className="category_list">
            <li>
                <Link to={"/category/bodysuits"}>Bodysuits</Link>
            </li>
            <li>
                <Link to={"/category/sets"}>Set/Conjuntos</Link>
            </li>
            <li>
                <Link to={"/category/curvy"}>Plus size</Link>
            </li>
            <li>
                <Link to={"/category/accesorios"}>Accesorios</Link>
            </li>
        </ul>
    )
}

export default CategoryList;