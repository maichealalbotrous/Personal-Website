import './App.css';
import Header from './section/Header/Header';
import Navbar from './section/NavBar/Navbar';
import Hero from './section/Hero/Hero';
import Skill from './section/Skill/Skill';
import Poject from './section/Projects/poject';
import Contact from './section/Contact/contact';
import Footer from './section/Footer/Footer';

function App() {

  return (

    
    <div className='App'>
    
    <Navbar/>
    < Hero/>
    < Skill/>
    <Poject/>
    <Contact/>
    <Footer/>
    </div>


  );
}

export default App;
