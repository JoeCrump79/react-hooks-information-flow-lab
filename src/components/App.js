import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";

const initialItems = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Cookies", category: "Dessert" },
  { id: 3, name: "Soda", category: "Beverages" },
  { id: 4, name: "Cheese", category: "Dairy" },
  { id: 5, name: "Cake", category: "Dessert" },
];

function App() {
  const [items] = useState(initialItems);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleModeClick() {
    setIsDarkMode((prev) => !prev);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <Header 
        onDarkModeClick={handleModeClick} 
        isDarkMode={isDarkMode}
      />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
