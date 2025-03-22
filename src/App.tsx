import "./App.css";
import spinachi from "./assets/pizzas/spinaci.jpg";

export default function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

interface PizzaProps {
  name: string;
  ingredients: string;
  photoName: string;
  price: string;
}

const Header = () => {
  return (
    <header className="header">
      <h1> Puka's Pizzas </h1>
    </header>
  );
};

const Menu = () => {
  return (
    <div className="menu">
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

  return (
    <div>
      <footer> {isOpen} </footer>
    </div>
  );
};

function Pizza(props: PizzaProps) {
  const { name, ingredients, price, photoName } = props;
  return (
    <div>
      <img src={photoName} alt={name} />
      <h3> {name} </h3>
      <p> {ingredients} </p>
      <p> {price} </p>
    </div>
  );
}
