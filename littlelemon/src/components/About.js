import imga from '../images/Mario and Adrian A.jpg'
import imgb from '../images/Mario and Adrian b.jpg'
export function About(props){
    return(
        <section id='about'>
            <article>
                <section>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className='leadText'>
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
    )
}
export default About;