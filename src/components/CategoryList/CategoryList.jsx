import "./CategoryList.css";
import { Link } from "react-router-dom";

function CategoryList () {
    return (
        <ul className="category_list">
            <li>
                <Link to={"/bodysuits"}>Bodysuits</Link>
            </li>
            <li>
                <Link to={"/sets"}>Set/Conjuntos</Link>
            </li>
            <li>
                <Link to={"/curvy"}>Plus size</Link>
            </li>
            <li>
                <Link to={"/accesorios"}>Accesorios</Link>
            </li>
        </ul>
    )
}

export default CategoryList;