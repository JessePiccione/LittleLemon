import {Display} from './providers/ReservationFormHider'
export function Reservations(){
    const {display,toggleDisplay} = Display()
    return(
        <section id='reservations' className={display}>
            <article>
                <section>
                    <h1>Reserve a Table</h1>
                    <button onClick={toggleDisplay}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                    </button>
                </section>
                <section>
                    <form>
                        <section>
                            <label htmlFor='name'>Name</label>
                            <input name='name' type='text'/>
                            <p>Some validation message...</p>
                        </section>
                        <section>
                            <label htmlFor='partySize'>Party Size</label>
                            <input name='partySize' type="number"/>
                            <p>Some validation message...</p>
                        </section>
                        <section>
                            <label htmlFor='dateTime'>Date/Time</label>
                            <input name='dateTime' type='datetime-local' />
                            <p>Some Validation Message...</p>
                        </section>
                        <section>
                            <label htmlFor='occasion'>Occasion</label>
                            <select name='occasion' defaultValue='occasion'>
                                <option value='occasion' disabled>Occasion</option>
                                <option value='birthday'>Birthday</option>
                                <option value='engagement'>Engagement</option>
                                <option value='anniversary'>Anniversary</option>
                            </select>
                            <p>Some Validation Message...</p>
                        </section>
                        <section>
                            <label htmlFor='notes'>Notes</label>
                            <textarea name='notes'></textarea>
                            <p>Some Validation Message...</p>
                        </section>
                        <section>
                            <button type='submit'>Submit</button>
                        </section>
                    </form>
                </section>
            </article>
        </section>
    )
}
export default Reservations;