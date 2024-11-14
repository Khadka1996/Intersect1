import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Component/Footer"
import Routings from "./Routes/Routings"
import NavBar from './Component/NavBar'
import Aos from 'aos'
import 'aos/dist/aos.css'; // Import AOS styles
Aos.init();
function App() {
  return (
    <>
       <NavBar/>
      <Routings/>
      <Footer/>
    </>
  )
}

export default App
