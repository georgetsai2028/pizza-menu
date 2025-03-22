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
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, Mozzarella, Spinach, and Ricotta Cheese"
        photoName="src/assets/pizzas/spinaci.jpg"
        price="12.99"
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and Mozarella"
        photoName="src/assets/pizzas/margherita.jpg"
        price="10"
      />
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
    <div className="pizza">
      <img src={photoName} alt={name} />
      <h3> {name} </h3>
      <p> {ingredients} </p>
      <p>Price: {price} </p>
    </div>
  );
}
