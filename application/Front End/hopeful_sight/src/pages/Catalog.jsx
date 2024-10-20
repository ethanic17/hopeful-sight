import React from "react";


function Catalog({ title, items, buttonId }) {
    return (
      <div className="catalog">
        <h2>{title}</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button id={buttonId}> Search {title}</button>
      </div>
    );
  }
  
  export default Catalog;