import { useReducer } from 'react';
import Highlights from './Highlights';
import Testimonials from './Testimonials'
import About from './About'
import Reservations from './BookingForm'
import {fetchAPI} from '../api'
export function updateTimes(state, action){
    return fetchAPI(new Date(action));
}
export function initializeTimes(){
    return fetchAPI(new Date(Date.now()))
}
function Main(){
    const [key,toggleKey] = useReducer(updateKey,Math.random())
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
    function updateKey(state,action){
        return Math.random()
    }
    return (
        <> 
            <Reservations key={key} toggleKey={toggleKey} availableTimes={availableTimes} dispatch={dispatch}/>
            <main id='main'>
                <article>
                    <Highlights/>
                    <Testimonials/>
                    <About/>
                </article>
            </main>
        </>
    )
}
export default Main