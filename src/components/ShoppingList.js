import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const itemsToDisplay = items.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
