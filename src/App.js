import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/checkout/Checkout';
import Flights from './components/flights/Flights';
import Hotels from './components/hotels/Hotels';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Notfound from './components/noPageFound/Notfound';
import Trains from './components/trains/Trains';

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Flights />} />
          <Route path='/flights' element={<Flights />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/trains' element={<Trains />} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<Notfound />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
