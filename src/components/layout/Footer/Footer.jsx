import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className={styles.containerFooter}>
            <div className={styles.containerIcons}>
                <Link to="www.instagram.com">
                    <FaFacebook></FaFacebook>
                </Link>
                <Link to="https://web.facebook.com/">
                    <FaInstagram></FaInstagram>
                </Link>
                <Link to="https://www.linkedin.com/">
                    <FaLinkedin></FaLinkedin>
                </Link>
            </div>
            <p><span>Costs</span> &copy; 2024</p>
        </footer>
    )
}

export default Footer;
