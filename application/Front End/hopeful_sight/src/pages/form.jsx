import React from "react";

const Form = ({ match }) => {
  const itemId = match.params.id;

  return (
    <div>
      <h2>Form for Item {itemId}</h2>
      {/* Form to submit quantity */}
      <form>
        <input type="text" placeholder="Quantity" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
