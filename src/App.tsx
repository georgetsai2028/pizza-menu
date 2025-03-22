import "./App.css";
import spinachi from "./assets/pizzas/spinaci.jpg";

export default function App() {
  return (
    <div>
      <Header />
      <Pizza />
    </div>
  );
}

const Header = () => {
  return <h1> Puka's Pizzas </h1>;
};

const Menu = () => {};

const Footer = () => {};

function Pizza() {
  return (
    <div>
      <img src={spinachi} alt="spinachi pizza" />
      <h1> Pizza Spinachi</h1>
      <p> Tomato, Mozzarella, Spinach, and Ricotta Cheese </p>
    </div>
  );
}
