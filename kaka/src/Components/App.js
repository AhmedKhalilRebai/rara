import React, { useState } from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import product from './Product';
import Image from './Image'

const App = () => {
  const [showMessage, setShowMessage] = useState(false);

  const firstName = "Aziz Guerfella";

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="App">
      <div>
        <img variant="top" src={product.imageUrl} alt="Product Image" />
        <section>
          <Name />
          <Price />
          <Description />
        </section>
      </div>
      <button onClick={toggleMessage}>Toggle Message</button>
      {showMessage && (
        <div>
          <p>Hello, {firstName ? firstName : "there!"}</p>
          {firstName && <img src={product.imageUrl} alt={firstName} />} {/* Display image if firstName is provided */}
          {!firstName && <p>Hello, there!</p>} {/* Display message if firstName is not provided */}
        </div>
      )}
    </div>
  );
}

export default App;
