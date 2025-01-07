import MenuItemList from "./partials/MenuItem"
export function Highlights(props){
    return(
        <section id='highlights'>
            <article id='menu'>
                <section>
                    <h1>This Week's Specials</h1>
                    <button>Our Menu</button>
                </section>
                <section>
                    <MenuItemList/>
                </section>
            </article>
        </section>
    )
}
export default Highlights;