import Home from './Home.js'
import Service from './Service.js'
import About from './About.js'
import Book from './Book.js'
import Faq from './Faq.js'
import Contect from './Contect.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer.js'
import ImageGallery from './ImageGallary.js'
function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Service' element={<Service />} />
            <Route path='/About' element={<About />} />
            <Route path='/Faq' element={<Faq />} />
            <Route path='/Book' element={<Book />} />
            <Route path='/Contact' element={<Contect />} />
            <Route path='/Gallary' element={<ImageGallery />}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </>
  );
}

export default App;
// ek kam kar patrh no project lai le title change kari le.5%? nai.