import {fireEvent, render, screen} from "@testing-library/react"
import '@testing-library/jest-dom';
import App from '../App.js'
import {initializeTimes, updateTimes} from './Main'

test("Renders the BookingForm heading", ()=>{
    render(<App/>);
    const BookingForm = screen.getByText("Reserve a Table");
    expect(BookingForm).toBeInTheDocument()
})
test("Testing init callback initializeTimes", ()=>{
    const times = initializeTimes()
    expect(times).toBe(times)
})
test("Testing init callback for updateTimes", ()=>{
    const times = updateTimes(initializeTimes())
    expect(times).toBe(times)
})
describe("Form Validation",()=>{
    beforeEach(()=>{
        render(<App/>)
    })
    //valid input and submission
    test("Valid Name Input" ,()=>{
        const nameInput = screen.getByLabelText(/Name/)
        const nameMessage = screen.getByTestId("ReservationFormNameValidation")
        fireEvent.change(nameInput,{target:{value:"Jesse"}})
        expect(nameInput).toHaveValue('Jesse')
        expect(nameMessage.firstChild).toBe(null)
    })
    test("Valid Date Input", ()=>{
        const dateInput = screen.getByLabelText('Date')
        const dateMessage = screen.getByTestId("ReservationFormDateValidation")
        fireEvent.change(dateInput,{target:{value:"2025-01-01"}})
        expect(dateInput).toHaveValue('2025-01-01')
        expect(dateMessage.firstChild).toBe(null)
    })
    test('Valid Time Input', ()=>{
        const timeInput = screen.getByLabelText(/Time/)
        const testTime = timeInput.lastChild.value
        const timeMessage = screen.getByTestId('ReservationFormTimeValidation')
        fireEvent.change(timeInput,{target:{value:testTime}})
        expect(timeInput).toHaveValue(testTime)
        expect(timeMessage.firstChild).toBe(null)
    })
    test('Valid Party Size Input', ()=>{
        const partySizeInput = screen.getByLabelText(/Number of Guests/)
        const partySizeMessage = screen.getByTestId('ReservationFormPartySizeValidation')
        const testPartySize = 4;
        fireEvent.change(partySizeInput,{target:{value:testPartySize}})
        expect(partySizeInput).toHaveValue(testPartySize)
        expect(partySizeMessage.lastChild).toBe(null)
    })
    test('Valid Occasion Input', ()=>{
        const occasionInput = screen.getByLabelText(/Occasion/)
        const occasionMessage = screen.getByTestId('ReservationFormOccasionValidation')
        const testOccasion = occasionInput.lastChild.value
        fireEvent.change(occasionInput, {target:{value: testOccasion}})
        expect(occasionInput).toHaveValue(testOccasion)
        expect(occasionMessage.lastChild).toBe(null)
    })
    //invalid input and submission
    test("Invalid Name Input" ,()=>{
        const nameInput = screen.getByLabelText(/Name/)
        const nameMessage = screen.getByTestId("ReservationFormNameValidation")
        fireEvent.change(nameInput,{target:{value:""}})
        expect(nameInput).toHaveValue('')
        expect(nameMessage.firstChild.textContent).toBe('*Required')
    })
    test("Invalid Date Input", ()=>{
        const dateInput = screen.getByLabelText('Date')
        const dateMessage = screen.getByTestId("ReservationFormDateValidation")
        fireEvent.change(dateInput,{target:{value:""}})
        expect(dateInput).toHaveValue('')
        expect(dateMessage.firstChild.textContent).toBe("*Required")
    })
    test('Invalid Time Input', ()=>{
        const timeInput = screen.getByLabelText(/Time/)
        const testTime = timeInput.firstChild.value
        const timeMessage = screen.getByTestId('ReservationFormTimeValidation')
        fireEvent.change(timeInput,{target:{value:testTime}})
        expect(timeInput).toHaveValue(testTime)
        expect(timeMessage.firstChild.textContent).toBe('*Required')
    })
    test('Invalid Party Size Input', ()=>{
        const partySizeInput = screen.getByLabelText(/Number of Guests/)
        const partySizeMessage = screen.getByTestId('ReservationFormPartySizeValidation')
        const testPartySize = -1;
        fireEvent.change(partySizeInput,{target:{value:testPartySize}})
        expect(partySizeInput).toHaveValue(testPartySize)
        expect(partySizeMessage.lastChild.textContent).toBe("*Require Minimum Party of 1.")
    })
    test('Invalid Party Size Input', ()=>{
        const partySizeInput = screen.getByLabelText(/Number of Guests/)
        const partySizeMessage = screen.getByTestId('ReservationFormPartySizeValidation')
        const testPartySize = 11;
        fireEvent.change(partySizeInput,{target:{value:testPartySize}})
        expect(partySizeInput).toHaveValue(testPartySize)
        expect(partySizeMessage.lastChild.textContent).toBe("*Require Maximum Party of 10.")
    })
    test('Invalid Occasion Input', ()=>{
        const occasionInput = screen.getByLabelText(/Occasion/)
        const occasionMessage = screen.getByTestId('ReservationFormOccasionValidation')
        const testOccasion = occasionInput.firstChild.value
        fireEvent.change(occasionInput, {target:{value:testOccasion}})
        expect(occasionInput).toHaveValue(testOccasion)
        expect(occasionMessage.lastChild.textContent).toBe('*Required')
    })
})
describe('Form Submission', ()=>{
    beforeEach(()=>{
        render(<App/>)
    })
    test('Valid Input Data Will Submit', ()=>{
        const nameInput = screen.getByLabelText('Name')
        const dateInput = screen.getByLabelText('Date')
        const timeInput = screen.getByLabelText(/Time/)
        const partySizeInput = screen.getByLabelText('Number of Guests')
        const occasionInput = screen.getByLabelText('Occasion')
        const formButton = screen.getByLabelText('Reservation Submission Button')
        const testName = 'Jesse'
        const testDate = '2025-01-01'
        const testPartySize = 7
        const testOccasion = occasionInput.lastChild.value
        fireEvent.change(nameInput,{target:{value:testName}})
        expect(nameInput).toHaveValue(testName)
        fireEvent.change(dateInput,{target:{value:testDate}})
        expect(dateInput).toHaveValue(testDate)
        const testTime = timeInput.lastChild.value
        fireEvent.change(timeInput,{target:{value:testTime}})
        expect(timeInput).toHaveValue(testTime)
        fireEvent.change(partySizeInput,{target:{value:testPartySize}})
        expect(partySizeInput).toHaveValue(testPartySize)
        fireEvent.change(occasionInput,{target:{value:testOccasion}})
        expect(occasionInput).toHaveValue(testOccasion)
        fireEvent.click(formButton)
        const bookingConfirmation = screen.getByTestId('BookingConfirmation')
        expect(bookingConfirmation.style.display).toBe('flex')
    })
    test('Invalid Name Input Data Will Not Submit', ()=>{
        const nameInput = screen.getByLabelText('Name')
        const dateInput = screen.getByLabelText('Date')
        const timeInput = screen.getByLabelText(/Time/)
        const partySizeInput = screen.getByLabelText('Number of Guests')
        const occasionInput = screen.getByLabelText('Occasion')
        const formButton = screen.getByLabelText('Reservation Submission Button')
        const testName = ''
        const testDate = '2025-01-01'
        const testPartySize = 7
        const testOccasion = occasionInput.lastChild.value
        fireEvent.change(nameInput,{target:{value:testName}})
        expect(nameInput).toHaveValue(testName)
        fireEvent.change(dateInput,{target:{value:testDate}})
        expect(dateInput).toHaveValue(testDate)
        const testTime = timeInput.lastChild.value
        fireEvent.change(timeInput,{target:{value:testTime}})
        expect(timeInput).toHaveValue(testTime)
        fireEvent.change(partySizeInput,{target:{value:testPartySize}})
        expect(partySizeInput).toHaveValue(testPartySize)
        fireEvent.change(occasionInput,{target:{value:testOccasion}})
        expect(occasionInput).toHaveValue(testOccasion)
        fireEvent.click(formButton)
        const bookingConfirmation = screen.getByTestId('BookingConfirmation')
        expect(bookingConfirmation.style.display).toBe('none')
    })
    test('Invalid Date Input Data Will Not Submit', ()=>{
        const nameInput = screen.getByLabelText('Name')
        const dateInput = screen.getByLabelText('Date')
        const timeInput = screen.getByLabelText(/Time/)
        const partySizeInput = screen.getByLabelText('Number of Guests')
        const occasionInput = screen.getByLabelText('Occasion')
        const formButton = screen.getByLabelText('Reservation Submission Button')
        const testName = 'Jesse'
        const testDate = ''
        const testPartySize = 7
        const testOccasion = occasionInput.lastChild.value
        fireEvent.change(nameInput,{target:{value:testName}})
        expect(nameInput).toHaveValue(testName)
        fireEvent.change(dateInput,{target:{value:testDate}})
        expect(dateInput).toHaveValue(testDate)
        const testTime = timeInput.lastChild.value
        fireEvent.change(timeInput,{target:{value:testTime}})
        expect(timeInput).toHaveValue(testTime)
        fireEvent.change(partySizeInput,{target:{value:testPartySize}})
        expect(partySizeInput).toHaveValue(testPartySize)
        fireEvent.change(occasionInput,{target:{value:testOccasion}})
        expect(occasionInput).toHaveValue(testOccasion)
        fireEvent.click(formButton)
        const bookingConfirmation = screen.getByTestId('BookingConfirmation')
        expect(bookingConfirmation.style.display).toBe('none')
    })
    test('Invalid PartySize Input Data Will Not Submit', ()=>{
        const nameInput = screen.getByLabelText('Name')
        const dateInput = screen.getByLabelText('Date')
        const timeInput = screen.getByLabelText(/Time/)
        const partySizeInput = screen.getByLabelText('Number of Guests')
        const occasionInput = screen.getByLabelText('Occasion')
        const formButton = screen.getByLabelText('Reservation Submission Button')
        const testName = 'Jesse'
        const testDate = '2025-01-01'
        const testPartySize = 0
        const testOccasion = occasionInput.lastChild.value
        fireEvent.change(nameInput,{target:{value:testName}})
        expect(nameInput).toHaveValue(testName)
        fireEvent.change(dateInput,{target:{value:testDate}})
        expect(dateInput).toHaveValue(testDate)
        const testTime = timeInput.lastChild.value
        fireEvent.change(timeInput,{target:{value:testTime}})
        expect(timeInput).toHaveValue(testTime)
        fireEvent.change(partySizeInput,{target:{value:testPartySize}})
        expect(partySizeInput).toHaveValue(testPartySize)
        fireEvent.change(occasionInput,{target:{value:testOccasion}})
        expect(occasionInput).toHaveValue(testOccasion)
        fireEvent.click(formButton)
        const bookingConfirmation = screen.getByTestId('BookingConfirmation')
        expect(bookingConfirmation.style.display).toBe('none')
    })
    test('Invalid Occasion Input Data Will Not Submit', ()=>{
        const nameInput = screen.getByLabelText('Name')
        const dateInput = screen.getByLabelText('Date')
        const timeInput = screen.getByLabelText(/Time/)
        const partySizeInput = screen.getByLabelText('Number of Guests')
        const occasionInput = screen.getByLabelText('Occasion')
        const formButton = screen.getByLabelText('Reservation Submission Button')
        const testName = 'Jesse'
        const testDate = '2025-01-01'
        const testPartySize = 7
        const testOccasion = occasionInput.firstChild.value
        fireEvent.change(nameInput,{target:{value:testName}})
        expect(nameInput).toHaveValue(testName)
        fireEvent.change(dateInput,{target:{value:testDate}})
        expect(dateInput).toHaveValue(testDate)
        const testTime = timeInput.lastChild.value
        fireEvent.change(timeInput,{target:{value:testTime}})
        expect(timeInput).toHaveValue(testTime)
        fireEvent.change(partySizeInput,{target:{value:testPartySize}})
        expect(partySizeInput).toHaveValue(testPartySize)
        fireEvent.change(occasionInput,{target:{value:testOccasion}})
        expect(occasionInput).toHaveValue(testOccasion)
        fireEvent.click(formButton)
        const bookingConfirmation = screen.getByTestId('BookingConfirmation')
        expect(bookingConfirmation.style.display).toBe('none')
    })
    test('Invalid Time Input Data Will Not Submit', ()=>{
        const nameInput = screen.getByLabelText('Name')
        const dateInput = screen.getByLabelText('Date')
        const timeInput = screen.getByLabelText(/Time/)
        const partySizeInput = screen.getByLabelText('Number of Guests')
        const occasionInput = screen.getByLabelText('Occasion')
        const formButton = screen.getByLabelText('Reservation Submission Button')
        const testName = 'Jesse'
        const testDate = '2025-01-01'
        const testPartySize = 7
        const testOccasion = occasionInput.lastChild.value
        fireEvent.change(nameInput,{target:{value:testName}})
        expect(nameInput).toHaveValue(testName)
        fireEvent.change(dateInput,{target:{value:testDate}})
        expect(dateInput).toHaveValue(testDate)
        const testTime = timeInput.firstChild.value
        fireEvent.change(timeInput,{target:{value:testTime}})
        expect(timeInput).toHaveValue(testTime)
        fireEvent.change(partySizeInput,{target:{value:testPartySize}})
        expect(partySizeInput).toHaveValue(testPartySize)
        fireEvent.change(occasionInput,{target:{value:testOccasion}})
        expect(occasionInput).toHaveValue(testOccasion)
        fireEvent.click(formButton)
        const bookingConfirmation = screen.getByTestId('BookingConfirmation')
        expect(bookingConfirmation.style.display).toBe('none')
    })
})