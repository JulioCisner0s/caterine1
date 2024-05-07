import { Link } from "react-router-dom";


function Brand() {
    return (
        <Link to={"/"}>
        <h1
            style={{
            color: "pink",
            fontSize: "40px",
            textDecoration: 'none',
            }}
        >
        CATERINE
        </h1>
    </Link>
    );
}

export default Brand;