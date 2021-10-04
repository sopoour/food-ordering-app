import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import MealsIntro from "./Components/Meals/MealsIntro";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

function App() {
  
  

  return (
    <React.Fragment>
      <NavBar />
      <MealsIntro />
      <AvailableMeals items={DUMMY_MEALS}/>
    </React.Fragment>
  );
}

export default App;
