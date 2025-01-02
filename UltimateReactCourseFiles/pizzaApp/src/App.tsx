
import React from 'react';
import './index.css';
import pizzaData from './pizzaData';
export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza & Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
    </main>
  );
}

function Footer(){
  const hour  = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <closeHour;
  return (
    <footer className='footer'>
      <p>{isOpen ? 'We are open' : 'We are closed'}</p>
    </footer>
  )
}