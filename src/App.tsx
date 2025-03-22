import "./App.css";
import spinachi from "./assets/pizzas/spinaci.jpg";

export default function App() {
  return (
    <div>
      Hello <Pizza />{" "}
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src={spinachi} />
      <h1> Pizza Spinachi</h1>
      <p> Tomato, Mozzarella, Spinach, and Ricotta Cheese </p>
    </div>
  );
}
