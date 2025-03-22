import "./App.css";

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
  price: number;
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
        price={12}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and Mozarella"
        photoName="src/assets/pizzas/margherita.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="src/assets/pizzas/funghi.jpg"
        price={12}
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        photoName="src/assets/pizzas/salamino.jpg"
        price={15}
      />
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="src/assets/pizzas/prosciutto.jpg"
        price={18}
      />
      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="src/assets/pizzas/focaccia.jpg"
        price={6}
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
    <div className="pizzas">
      <img src={photoName} alt={name} />
      <div className="pizza">
        <h3> {name} </h3>
        <p> {ingredients} </p>
        <p>Price: {price} </p>
      </div>
    </div>
  );
}
