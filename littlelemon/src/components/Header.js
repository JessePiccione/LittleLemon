import image from '../images/restauranfood.jpg'
function Header(){
    return (
        <header id='head'>
            <article>
                <section>
                    <div>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    </div>
                    <p className='leadText'>
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a
                        modern twist.
                    </p>
                    <button>Reserve a Table</button>
                </section>
                <aside>
                    <img src={image} alt=''/>
                </aside>
            </article>
        </header>
    )
}
export default Header