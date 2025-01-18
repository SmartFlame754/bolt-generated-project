import { Routes, Route } from 'react-router-dom';
    import Home from './pages/Home';
    import About from './pages/About';
    import Contact from './pages/Contact';
    import Services from './pages/Services';
    import Navbar from './components/Navbar';
    import Footer from './components/Footer';
    import './App.css';

    function App() {
      return (
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:service" element={<Services />} />
          </Routes>
          <Footer />
        </div>
      );
    }

    export default App;
