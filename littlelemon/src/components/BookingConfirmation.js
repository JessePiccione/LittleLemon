export function BookingConfirmation({name, date, time, occasion, partySize, toggleConfirm, confirm, clear, toggleKey}){
    return(
        <section style={{'display':confirm}} data-testid="BookingConfirmation" id='BookingConfirmation'>
            <article>
                <section>
                    <h1>Reservation Confirmed!</h1>
                    <button onClick={function(e){
                        e.preventDefault();
                        toggleConfirm()
                        clear();
                        toggleKey();
                    }}>
                        <svg height='18px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                    </button>
                </section>
                <p>
                    Hey {name}, Thank you for reserving a table at Little Lemon
                    <br/>
                    Here is your reservation information:
                    <br/>
                    {`Name: ${name}`}
                    <br/>
                    {`Date: ${date}`}
                    <br/>
                    {`Time: ${time}`}
                    <br/>
                    {`Number of Guests: ${partySize}`}
                    <br/>
                    {`Occasion: ${occasion}`}
                </p>
            </article>
        </section>
    )
}
export default BookingConfirmation;