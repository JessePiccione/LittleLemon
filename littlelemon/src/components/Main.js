import imga from '../images/Mario and Adrian A.jpg'
import imgb from '../images/Mario and Adrian b.jpg'
function Main(){
    return (
        <main id='main'>
            <article>
                <section id='highlights'>
                    <article>
                        <section>
                            <h1>This Week's Specials</h1>
                            <button>Our Menu</button>
                        </section>
                        <section>
                            
                        </section>
                    </article>
                </section>
                <section id='testimonials'>
                    <article>
                        <section>
                            <h1>Testimonials</h1>
                        </section>
                    </article>
                </section>
                <section id='about'>
                    <article>
                        <section>
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p class='leadText'>
                                Little Lemon is a charming neighboorhood
                                bistro that serves simple food and classic
                                cocktails in a lively but casual environment.
                                The restaurant features a locally-sourced menu
                                with daily specials. Meet our owner and chef duo,
                                Mario and Adrian.
                            </p>
                        </section>
                        <aside>
                            <img src={imga} alt='A - the Owners of the little lemon restaurant mario and adrian.'/>
                            <img src={imgb} alt='B - the Owners of the little lemon restaurant mario and adrian.'/>
                        </aside>
                    </article>
                </section>
            </article>
        </main>
    )
}
export default Main