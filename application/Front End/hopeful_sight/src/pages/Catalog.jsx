import React from "react";
// import { useHistory } from "react-router-dom"; not sure if this will work

const Catalog = () => {
  try {
    const items = [
      {
        id: 1,
        src: "application/Front End/hopeful_sight/src/pages/glassesImages/glass1image.jpg",
        description: "Classic Aviator Sunglasses",
      },
      {
        id: 2,
        src: "application/Front End/hopeful_sight/src/pages/glassesImages/glass2image.jpeg",
        description: "Retro Round Frame Glasses",
      },
      {
        id: 3,
        src: "application/Front End/hopeful_sight/src/pages/glassesImages/glass3image.png",
        description: "Modern Square Frame Sunglasses",
      },
      {
        id: 4,
        src: "application/Front End/hopeful_sight/src/pages/glassesImages/glass4image.jpg",
        description: "Vintage Cat Eye Sunglasses",
      },
    ];
  } catch (error) {
    console.error("Image failed to load", error);
  }

  return (
    <div className="catalog">
      {items.map((item) => (
        <div key={item.id} className="item">
          <img src={item.src} alt={item.description} />
          <p>{item.description}</p>
          <button
            className="btn"
            onClick={() => history.push(`/form/${item.id}`)}
          >
            Add to Cart
          </button>{" "}
        </div>
      ))}
    </div>
  );
};

export default Catalog;
