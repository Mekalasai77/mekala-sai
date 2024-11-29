import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./components/About";
import Contact from './components/Contact';
import Projects from './components/Projects';
function App() {
  return (
<>
    <Navigation></Navigation>
 
  <Routes>
    <Route path='home' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='Projects' element={<Projects/>}/>
  </Routes>
 
  </>
  );
}

export default App;
