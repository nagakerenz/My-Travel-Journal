import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
import "./style.css";
function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
