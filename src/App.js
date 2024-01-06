import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/Navbar';
import { HomePage } from './views/homepage/Homepage';
import { BookingPage } from './views/BookingPage';
function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      
    </div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />}/>
    </Routes>
    </>
  );
}



export default App;
