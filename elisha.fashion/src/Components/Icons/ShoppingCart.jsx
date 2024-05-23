import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ShoppingCartIcon = ({ count }) => {
  return (
    <div style={{ position: "relative" }}>
      <FaShoppingCart style={{ fontSize: "4vh" }} />
      <div
        style={{
          position: "absolute",
          top: "-8px",
          right: "-8px",
          backgroundColor: "#ff4d4f",
          color: "#fff",
          borderRadius: "50%",
          width: "20px",
          height: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        {count}
      </div>
    </div>
  );
};

export default ShoppingCartIcon;
