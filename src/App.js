

import './App.css';
import { Header } from './components/Header';
import { Routes,Route,BrowserRouter } from "react-router-dom"

import {HomePage, Login, About, OrderOnline, Menu, Reservations
  } from "./pages"
import { Footer } from './components/Footer';


function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    
  
    <main >
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/menu" element={ <Menu/> } />
        <Route path="/order-online" element={ <OrderOnline/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/reservations" element={ <Reservations/> } />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
