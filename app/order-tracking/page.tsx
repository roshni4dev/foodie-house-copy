
"use client";

import { useEffect, useState } from "react";

export default function OrderTracking() {
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const savedOrder = JSON.parse(
      localStorage.getItem("lastOrder") || "null"
    );
    setOrder(savedOrder);
  }, []);

  if (!order) {
    return (
      <div style={{ padding: "30px" }}>
        <h1>No Order Found!</h1>
        <p>Please place an order first.</p>
      </div>
    );
  }

  const status = order.status || "Pending";

  return (
    <div style={{
      padding: "30px",
      background: "#fffaf3",
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "#e85d04" }}>
        Order Tracking 🛵
      </h1>

      <h2>Hello, {order.name}!</h2>

      <h3>Order Status: {status}</h3>

      <p>Delivery Time: {order.deliveryTime || "30-45 Minutes"}</p>

      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px"
      }}>
        <p>🛒 Order Placed</p>
        <p>{status === "Accepted" ? "✅ Order Accepted" : "⏳ Waiting for Acceptance"}</p>
        <p>🍕 Preparing Your Food</p>
        <p>🛵 Out for Delivery</p>
        <p>🎉 Delivered</p>
      </div>
    </div>
  );
}
