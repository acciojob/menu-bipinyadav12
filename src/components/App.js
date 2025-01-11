import React, { useState } from "react";

function App() {
  const DATA = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "/images/item-1.jpeg",
      desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "/images/item-2.jpeg",
      desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "/images/item-3.jpeg",
      desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "/images/item-4.jpeg",
      desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "/images/item-5.jpeg",
      desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "/images/item-6.jpeg",
      desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "/images/item-7.jpeg",
      desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "/images/item-8.jpeg",
      desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "/images/item-9.jpeg",
      desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
  ];

  const [filter, setFilter] = useState("all");

  // Filtered list based on the selected category
  const filteredList = filter === "all" ? DATA : DATA.filter((item) => item.category === filter);

  return (
    <div className="app" id="main">
      <header>
        <h1>Our Menu</h1>
      </header>
      <div className="filters">
        {["all", "breakfast", "lunch", "shakes"].map((category, index) => (
          <button
            key={category}
            id={`filter-btn-${index}`}
            data-test-id={`filter-btn-${category}`}
            className={`filter-btn ${filter === category ? "active" : ""}`}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="menu">
        {filteredList.map((item) => (
          <div key={item.id} className="menu-item" data-test-id={`menu-item-${item.category}`}>
            <div className="menu-img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="menu-info">
              <h4 className="menu-title">{item.title}</h4>
              <p className="menu-price">${item.price}</p>
              <p className="menu-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
