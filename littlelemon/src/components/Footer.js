import Logo from '../images/littleLemonfooterLogo.png'
function Footer(){
    return (
        <footer id='footer'>
            <article>
                <section>
                    <img src={Logo} alt='Little Lemon Footer Logo'/>
                </section>
                <section>
                    <nav>
                        <h3>NAVIGATION</h3>
                        <ul>
                            <li>
                                <a href='#home'>Home</a>
                            </li>
                            <li>
                                <a href='#about'>About</a>
                            </li>
                            <li>
                                <a href='#menu'>Menu</a>
                            </li>
                            <li>
                                <a href='#reservations'>Reservations</a>
                            </li>
                            <li>
                                <a href='#orderOnline'>Order Online</a>
                            </li>
                            <li>
                                <a href='#login'>Login</a>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section>
                    <nav>
                        <h3>CONTACT US</h3>
                        <ul>
                            <li>
                                <a href='#address'>Address</a>
                            </li>
                            <li>
                                <a href='#email'>Email</a>
                            </li>
                            <li>
                                <a href='#phone'>Phone</a>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section>
                    <nav>
                        <h3>SOCIAL MEDIA</h3>
                        <ul>
                            <li>
                                <a href='https://linkedin.com'>LinkedIn</a>
                            </li>
                            <li>
                                <a href='https://facebook.com'>Facebook</a>
                            </li>
                            <li>
                                <a href='https://google.com'>Google</a>
                            </li>
                            <li>
                                <a href='https://yelp.com'>Yelp</a>
                            </li>
                        </ul>
                    </nav>
                </section>
            </article>
        </footer>
    )
}
export default Footer;