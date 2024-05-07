import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import "./NavBar.css";

function NavBar () {
    return (
        <div className="navbar_wrapper">
            <CategoryList />
            <CartWidget />
        </div>
    )
}

export default NavBar;