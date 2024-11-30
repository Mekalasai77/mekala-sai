const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-secondary">
                <div className="footer-left">
                    <div className="footer-name">
                        © 2024 Sái Mekala 
                    </div>
                    <div className="footer-name">
                        • 
                    </div>
                    <div className="footer-name">
                        Colophon
                    </div>
                </div>
            </div>
            <ul className="footer-right-1">
                <li className="footer-heading footer-name">Elsewhere</li>
                <li className="footer-links footer-name">
                    <a href="https://github.com/Mekalasai77">Github</a>
                </li>
                <li className="footer-links footer-name">
                    <a href="#">Posts</a>
                </li>
                <li className="footer-links footer-name">
                    <a href="#">CV</a>
                </li>
                <li className="footer-links footer-name">
                    <a href="https://www.linkedin.com/in/sai-mekala-687133178/">LinkedIn</a>
                </li>
            </ul>
            <ul className="footer-right-2">
                <li className="footer-heading footer-name">Contact</li>
                <li className="footer-links footer-name">
                    <a href="#">Message</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;