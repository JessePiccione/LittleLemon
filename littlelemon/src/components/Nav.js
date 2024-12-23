import Logo from '../images/Logo.svg'
function Nav(){
    return (
        <nav>
            <img alt='Little Lemon Nav Logo' src={Logo}/>
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
    )
}
export default Nav