import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/Header'
import Reservations from './components/Revervations'
import ReservationFormHider from './components/providers/ReservationFormHider'
function App() {
  return (
    <>
      <Nav/>
      <ReservationFormHider>
        <Header/>
        <Reservations/>
      </ReservationFormHider>
      <Main/>
      <Footer/>
    </>
  );
}
export default App;