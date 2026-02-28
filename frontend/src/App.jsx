import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Predict from './pages/Predict';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-white selection:bg-blue-500/30 relative">
        {/* Neural Orbs Background */}
        <div className="neural-orb bg-violet-600/10 top-[-15%] left-[-15%] animate-[float-slow_22s_infinite_linear]" />
        <div className="neural-orb bg-amber-600/5 bottom-[-15%] right-[-15%] animate-[float-medium_28s_infinite_linear]" />

        <Navbar />

        <main className="flex-grow z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
