import {Display} from './providers/ReservationFormHider'
import {useState} from 'react'
import {submitAPI} from '../api'
import BookingConfirmation from './BookingConfirmation'
export function Reservations({availableTimes,dispatch,toggleKey}){
    const {display,toggleDisplay} = Display()
    const [name, setName] = useState('')
    const [partySize, setPartySize] = useState('')
    const [date, setDate] = useState(new Date(Date.now()))
    const [time, setTime] = useState('')
    const [occasion, setOccasion] = useState('')
    const [confirm, setConfirm] = useState('none');
    function clearReservationForm(){
        setName('');
        setPartySize(1);
        setDate(new Date(Date.now()));
        setTime('');
        setOccasion('');
        dispatch(date)
        toggleDisplay()
    }
    function toggleConfirm(){
        setConfirm(confirm==='none'?'flex':'none')
    }
    return(
        <>
            <BookingConfirmation clear={clearReservationForm} toggleKey={toggleKey} confirm={confirm} toggleConfirm={toggleConfirm} name={name} partySize={partySize} date={date} time={time} occasion={occasion}/>
            <section id='reservations' className={display}>
                <article>
                    <section>
                        <h1>Reserve a Table</h1>
                        <button aria-label='Open Reservation Form' onClick={toggleDisplay}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                        </button>
                    </section>
                    <section>
                        <form aria-label='Little Lemon Table Reservation Form' onSubmit={function(e){
                            e.preventDefault();
                            if(name.length&&(partySize>=1&&partySize<=10)&&date!==''&&time!==''&&occasion!==''){
                                const formData = {name, partySize, date, time, occasion}
                                submitAPI(formData)
                                toggleConfirm();
                            }
                        }}>
                            <section>
                                <label htmlFor='name'>Name</label>
                                <input aria-label='Name Input' id='name' name='name' type='text' required value={name}
                                onChange={function(e){
                                    setName(e.target.value)
                                    e.preventDefault()
                                }}/>
                                <p data-testid='ReservationFormNameValidation'>{(name==null||name.length)?'':'*Required'}</p>
                            </section>
                            <section>
                                <label htmlFor='date'>Date</label>
                                <input aria-label='Input Date'id='date' name='date' type='date' value={date} required onChange={function(e){
                                    setDate(e.target.value)
                                    dispatch(e.target.value)
                                    e.preventDefault()
                                }}/>
                                <p data-testid='ReservationFormDateValidation'>{(date!==null&&date.length)?'':'*Required'}</p>
                            </section>
                            <section>
                                <label htmlFor='time'>Time</label>
                                <select aria-label='Time Slot' id='time' name='time' required value={time} onChange={function(e){
                                    setTime(e.target.value)
                                    e.preventDefault()
                                }}>
                                    <option value='' disabled>Select Time</option>
                                    {availableTimes.map((time)=><option key={time} name={time} value={time}>{time}</option>)}
                                 </select>
                                 <p data-testid='ReservationFormTimeValidation'>{(time!=='')?'':'*Required'}</p>
                            </section>
                            <section>
                                <label htmlFor='numberOfGuests'>Number of Guests</label>
                                <input aria-label='Number Of Guests' id='numberOfGuests' name='numberOfGuests' type="number" placeholder='Number of Guests' value={partySize} onChange={
                                    function(e){
                                        setPartySize(e.target.value)
                                        e.preventDefault()
                                    }
                                }/>
                                <p data-testid='ReservationFormPartySizeValidation'>{
                                (partySize)?(partySize>=1)?(partySize<=10)?'':'*Require Maximum Party of 10.':'*Require Minimum Party of 1.':"*Required"
                                }</p>
                            </section>
                            <section>
                                <label htmlFor='occasion'>Occasion</label>
                                <select aria-label='Occasion Type' id='occasion' name='occasion' value={occasion} onChange={function(e){
                                    setOccasion(e.target.value)
                                    e.preventDefault()
                                }}>
                                    <option value='' disabled>Occasion</option>
                                    <option value='birthday'>Birthday</option>
                                    <option value='engagement'>Engagement</option>
                                    <option value='anniversary'>Anniversary</option>
                                </select>
                                <p data-testid='ReservationFormOccasionValidation'>{(occasion==null||occasion.length)?'':'*Required'}</p>
                            </section>
                            <section>
                                <button aria-label='Reservation Submission Button' type='submit'>Reserve</button>
                            </section>
                        </form>
                    </section>
                </article>
            </section>
        </>
    )
}
export default Reservations;