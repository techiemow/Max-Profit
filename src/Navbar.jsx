import React from 'react';

const Navbar = () => {
  return (
    <header 
      style={{
        width: "100%",
        height: "60px", // Adjust height as desired
        backgroundColor: "#4CAF50", // Set your preferred background color
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      Max - Profit
    </header>
  );
}

export default Navbar;
