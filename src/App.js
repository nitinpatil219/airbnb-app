import React from "react";
import Navbar from "./Components/Navbar.js";
import Hero from "./Components/Hero.js";
import Card from "./Components/Card.js";
import data from "./data.js";

function App() {
  const cardElements = data.map((items) => {
    return <Card key={items.id} {...items} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cardElements}</section>
    </div>
  );
}
export default App;
