import styles from "./Footer.module.css";
import { useNavigate, useLocation } from "react-router-dom"; 
import links from "@/Routes/links";

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const footerPages = [ "/", "/ourteam"]

    if (footerPages.includes(currentPath)) {
        return (
            <footer className={styles.footer}>
                <div className={styles.copyright}>
                    © {new Date().getFullYear()} Naghz. All rights reserved.
                </div>
                <div className={styles.navigation}>
                    <ul className={styles.ul}> 
                        <li onClick={() => navigate(links.client.contactUs)}>Contact Us</li>
                        <li onClick={() => navigate(links.client.feedBack)}>Give FeedBack</li>
                    </ul>
                </div>
            </footer>
        )
    } else {
        return null;
    }
}

export default Footer;