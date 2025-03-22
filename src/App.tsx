import "./App.css";
import spinachi from "./assets/pizzas/spinaci.jpg";

export default function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return <h1> Puka's Pizzas </h1>;
};

const Menu = () => {
  return (
    <div>
      <h2> Our Menu</h2>
      <Pizza />
    </div>
  );
};

const Footer = () => {
  const hours = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen =
    hours >= openHour && hours <= closeHour
      ? "We're Open!"
      : "Sorry We're Closed :(";
  alert(isOpen);

  return (
    <div>
      <footer> {isOpen} </footer>
    </div>
  );
};
function Pizza() {
  return (
    <div>
      <img src={spinachi} alt="spinachi pizza" />
      <h1> Pizza Spinachi</h1>
      <p> Tomato, Mozzarella, Spinach, and Ricotta Cheese </p>
    </div>
  );
}
