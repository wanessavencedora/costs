import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "../../img/costs_logo.png";
function NavBar() {
    return (
        <nav className={styles.containerNav}>

            <Link to="/">
                <img src={logo} alt="Costs" />
            </Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projetos">Projetos</Link>
                </li>
                <li>
                    <Link to="/empresa">Empresa</Link>
                </li>
                <li>
                    <Link to="/contatos">Contatos</Link>
                </li>


            </ul>

        </nav>
    )




}

export default NavBar;

