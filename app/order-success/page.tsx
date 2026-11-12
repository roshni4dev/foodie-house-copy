"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
export default function OrderSuccess() {
    const [order, setOrder] = useState<any>(null);

    useEffect(() => {
        const savedOrder = localStorage.getItem("lastOrder");

        if (savedOrder) {
            setOrder(JSON.parse(savedOrder));
        }
    }, []);

    if (!order) {
        return <h2>No Order Found!</h2>;
    }

    return (
        <div style={{
            padding: "40px",
            textAlign: "center",
            backgroundColor: "#fff5eb",
            minHeight: "100vh",
            borderRadius: "15px"
        }}>
            <h1 style={{ color: "green", fontSize: "40px" }}>
                🎉 Order Successful!
            </h1>
            <h2 style={{ color: "#e63946" }}>
                Thank You, {order.name} ❤️
            </h2>

            <p>Your order has been placed successfully.</p>

            <h3>Mobile: {order.mobile}</h3>
            <h3>Address: {order.address}</h3>

            <h2>Total: ₹{order.total}</h2>
            <Link href="/">
                <button>Back to Home 🏠</button>
            </Link>

            <h3>Your Food Items:</h3>

            {order.items.map((item: any, index: number) => (
                <p key={index}>{item.name} - ₹{item.price}</p>
            ))}
        </div>
    );
}
