import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/Header'
import ReservationFormHider from './components/providers/ReservationFormHider'
function App() {
  return (
    <>
      <Nav/>
      <ReservationFormHider>
        <Header/>
        <Main/>
      </ReservationFormHider>
      <Footer/>
    </>
  );
}
export default App;