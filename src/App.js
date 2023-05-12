import { useReducer, useState } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import { useCounter } from './components/hooks/counter'
import Timer from "./components/timer/Timer";
import { Button } from './components/UI/Button'
function App() {
  const meals = [
    {
      title: "Sushi",
      description: "Finest fish and veggies",
      price: 23,
      id: 1
    },
    {
      title: "Schnitzel",
      description: "A german specialty!",
      price: 16,
      id: 2
    },
    {
      title: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 13,
      id: 3
    },
    {
      title: "Green Bowl",
      description: "Healthy...and green...",
      price: 20,
      id: 4
    },
  ]
  return (
    <div className="App">
      <Counter></Counter>
      <Timer></Timer>
    </div>
  );
}

export default App;