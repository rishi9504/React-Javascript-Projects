
// import React from 'react';
// import './index.css';
// import pizzaData from './pizzaData';
// export default function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   return (
//     <header className="header">
//       <h1>Fast React Pizza & Co.</h1>
//     </header>
//   );
// }

// function Menu() {
//   const pizzas = pizzaData;
//   const numPizzas = pizzas.length;
//   return (
//     <main className='menu'>
//       <h2>Our Menu</h2>
//       {numPizzas>0?(
//         <>
//         <p>Auth Italian Restro, 6 dishes to choose from</p>
//         <ul className='pizzas'>
//           {pizzas.map((pizza) => (
//             <li className={`pizza ${pizza.soldOut?"sold-out":""}`} key={pizza.name}>
//               <img src={pizza.photoName} alt={pizza.name} />
//               <h3>{pizza.name}</h3>
//               <p>{pizza.ingredients}</p>
//               <p>{pizza.price}</p>
//             </li>
//           ))} 
//           </ul>
//         </>
//       ):
//       (<p>We are still working on the menu, please come back again</p>)}
//     </main>
//   );
// }

// function Footer(){
//   const hour  = new Date().getHours();
//   const openHour = 12;
//   const closeHour = 23;
//   const isOpen = hour >= openHour && hour <closeHour;
//   return (
//     <footer className='footer'>
//       <p>{isOpen ? 'We are open' : 'We are closed'}</p>
//     </footer>
//   )
// }

import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from './pizzaData';
import "./index.css";

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
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

interface PizzaProps {
  pizzaObj: {
    name: string;
    ingredients: string;
    price: number;
    photoName: string;
    soldOut: boolean;
  };
}

function Pizza({ pizzaObj }: PizzaProps) {
  console.log(pizzaObj);

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }: { closeHour: number; openHour: number }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}


