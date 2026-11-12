
"use client";

import { useState } from "react";
import Link from "next/link";
export default function Menu() {
    const [cart, setCart] = useState(0);
    const [total, setTotal] = useState(0);
    const addToCart = (name: string, price: number) => {
        const oldCart = JSON.parse(localStorage.getItem("cart") || "[]");

        oldCart.push({ name, price });

        localStorage.setItem("cart", JSON.stringify(oldCart));

        alert(name + " added to cart!");
    };
    return (
        <div className="menu-container">

            <h1>Our Food Menu 🍕</h1>
            <div className="food-list">

                <div className="food-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgffgoEFpnQ-if-MgkHtYH2Jk27O4UTMzlwSc3e7X_jA&s=10" alt="Cheese Pizza" width="200" />
                    <h2>Cheese Pizza</h2>
                    <p>Price: ₹199</p>
                    <button onClick={() => addToCart("Cheese Pizza", 199)}>
                        Add to Cart
                    </button>
                </div>

                <div className="food-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWYnECYLaMBqyuTXV8fOpDvlFevNj5QPbLHU7ZvGKqw&s=10" alt="Italian Pizza" width="200" />
                    <h2>Italian Pizza</h2>
                    <p>Price: ₹249</p>
                    <button onClick={() => addToCart("Italian Pizza", 249)}>
                        Add to Cart
                    </button>
                </div>

                <div className="food-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0a6Kqz2lcBGGjRLOTwN7vaw6rnDXzjE0_7FlY0USrklKly35l1b3X_s&s=10" alt="Farmhouse Pizza" width="200" />
                    <h2>Farmhouse Pizza</h2>
                    <p>Price: ₹299</p>
                    <button onClick={() => addToCart("Farmhouse Pizza", 299)}>
                        Add to Cart
                    </button>
                </div>

            </div>
            <h2>🛒 My Cart: {cart}</h2>
            <h2>Total Price: ₹{total}</h2>
            <Link href="/checkout">
                <button>Go to Checkout</button>
            </Link>
            <div className="food-list">

                <div className="food-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8Qhcdc5TpPSOCcKGuCsUtx96IZUBqCM_QRdMgJusLUHplYIsJML1J48&s=10" alt="momos" />
                    <h2>momos</h2>
                    <p>Price: ₹199</p>
                    <button onClick={() => {
                        setCart(cart + 1);
                        setTotal(total + 199);
                    }}>
                        Add to Cart
                    </button>
                </div>

                <div className="food-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRvV8Oc1WsrWNB2EMsZ_dhEyHFeEHolXWcXNo4YUjas92tko3Wi-Nt6Q&s=10" alt="Burger" />
                    <h2>Veg Burger</h2>
                    <p>Price: ₹99</p>
                    <button onClick={() => {
                        setCart(cart + 1);
                        setTotal(total + 99);
                    }}>
                        Add to Cart
                    </button>
                </div>

                <div className="food-item">
                    <img src="https://www.sharmispassions.com/wp-content/uploads/2020/03/WhiteSaucePasta6.jpg" alt="Pasta" />
                    <h2>White Sauce Pasta</h2>
                    <p>Price: ₹149</p>
                    <button onClick={() => {
                        setCart(cart + 1);
                        setTotal(total + 149);
                    }}>
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
    );
}
