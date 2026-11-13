
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [cart, setCart] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (name: string, price: number) => {
    const oldCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const newCart = [...oldCart, { name, price }];

    localStorage.setItem("cart", JSON.stringify(newCart));

    setCart(newCart.length);
    setTotal(newCart.reduce((sum: number, item: { price: number }) => sum + item.price, 0));

    alert(name + " added to cart!");
  };

  const foods = [
    {
      name: "Cheese Pizza",
      price: 199,
      image: "https://images.unsplash.com/photo-1571066811602-716837d681de?w=400"
    },
    {
      name: "Italian Pizza",
      price: 249,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400"
    },
    {
      name: "Farmhouse Pizza",
      price: 299,
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400"
    },
    {
      name: "Momos",
      price: 199,
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400"
    },
    {
      name: "Veg Burger",
      price: 99,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400"
    },
    {
      name: "White Sauce Pasta",
      price: 149,
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400"
    }
  ];

  return (
    <div style={{
      padding: "30px",
      background: "#fffaf3",
      minHeight: "100vh",
      textAlign: "center"
    }}>
      <h1 style={{ color: "#e85d04" }}>Our Food Menu 🍕</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "25px",
        marginTop: "30px"
      }}>
        {foods.map((food) => (
          <div key={food.name} style={{
            background: "white",
            padding: "15px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px #00000015"
          }}>
            <img
              src={food.image}
              alt={food.name}
              style={{
                width: "100%",
                height: "170px",
                objectFit: "cover",
                borderRadius: "12px"
              }}
            />

            <h2>{food.name}</h2>
            <h3 style={{ color: "#e85d04" }}>₹{food.price}</h3>

            <button
              onClick={() => addToCart(food.name, food.price)}
              style={{
                background: "#e85d04",
                color: "white",
                padding: "12px 20px",
                border: "none",
                borderRadius: "25px",
                cursor: "pointer"
              }}
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>

      <h2>🛒 My Cart: {cart}</h2>
      <h2>Total Price: ₹{total}</h2>

    <Link href="/checkout">
  <button style={{
    background: "#29201b",
    color: "white",
    padding: "14px 25px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer"
  }}>
    Go to Checkout
  </button>
</Link>

<Link href="/order-history">
  <button style={{
    background: "#e85d04",
    color: "white",
    padding: "14px 25px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    marginLeft: "10px"
  }}>
    Order History 📦
  </button>
</Link>
        <button style={{
          background: "#29201b",
          color: "white",
          padding: "14px 25px",
          border: "none",
          borderRadius: "25px",
          cursor: "pointer"
        }}>
          Go to Checkout
        </button>
      </Link>
    </div>
  );
}
