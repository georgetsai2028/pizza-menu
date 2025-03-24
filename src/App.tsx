import "./App.css";

export default function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}

interface PizzaProps {
  name: string;
  ingredients: string;
  photoName: string;
  price: number;
  soldOut: boolean;
}

interface MenuProps {
  pizzaData: PizzaProps[];
}

const pizzaData: PizzaProps[] = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "src/assets/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "src/assets/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "src/assets/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "src/assets/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "src/assets/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "src/assets/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Header = () => {
  return (
    <header className="header">
      <h1> Puka's Pizzas </h1>
    </header>
  );
};

const Menu = ({ pizzaData }: MenuProps) => {
  const pizzas = pizzaData;

  return (
    <div className="menu">
      <h2> Our Menu</h2>
      <ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
            soldOut={pizza.soldOut}
          />
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const hours = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hours >= openHour && hours <= closeHour;

  return (
    <footer>
      {isOpen ? (
        <div className="order">
          <h2> We're Open until 22:00! Click here to order online </h2>
          <button className="orderButton">Order</button>
        </div>
      ) : (
        <div>
          <h2> "Sorry We're Closed :( Please come back at 12:00</h2>
        </div>
      )}
    </footer>
  );
};

function Pizza(props: PizzaProps) {
  const { name, ingredients, price, photoName, soldOut } = props;
  if (soldOut) {
    return <div> Sorry this pizza is sold out</div>;
  }

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
