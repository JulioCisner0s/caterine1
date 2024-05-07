import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/Navbar";
import "./Layout.css";

export default function Layout({ children }) {
    return (
    <div className="layout--container">
        <div className="header__wrapper">
        <Brand />
        <NavBar />
        </div>
        <main className="main--container">{children}</main>
        <Footer />
    </div>
    );
}