import {useState, useContext, createContext} from 'react'
const ReservationFormDisplayContext = createContext();
export function ReservationFormHider({children}){
    const [display, setDisplay] = useState('closed')
    const toggleDisplay = () =>{
        setDisplay((display!=='show')?'show':'close')
    }
    return (
        <ReservationFormDisplayContext.Provider value={{display, toggleDisplay}}>
            {children}
        </ReservationFormDisplayContext.Provider>
    )
}
export const Display = () => useContext(ReservationFormDisplayContext)
export default ReservationFormHider;