import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//componentes
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hobbies from './components/Hobbies';
import Home from './components/Home';
import NotFound from './components/NotFound';
//datos
import proyectos from './data/proyectos';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home proyectos={proyectos}/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/hobbies" element={<Hobbies/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
