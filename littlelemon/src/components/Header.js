import image from '../images/restauranfood.jpg'
import {Display} from './providers/ReservationFormHider'
function Header(){
    const {toggleDisplay} = Display()
    return (
        <header id='head'>
            <article>
                <section>
                    <section>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    </section>
                    <p className='leadText'>
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a
                        modern twist.
                    </p>
                    <button onClick={toggleDisplay}>Reserve a Table</button>
                </section>
                <aside>
                    <img src={image} alt=''/>
                </aside>
            </article>
        </header>
    )
}
export default Header