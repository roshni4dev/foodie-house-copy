"use client";

import { useEffect, useState } from "react";

export default function OrderHistory() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(savedOrders);
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Order History 📦</h1>

      {orders.length === 0 ? (
        <p>No previous orders found!</p>
      ) : (
        orders.map((order, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "10px"
            }}
          >
            <h2>Order {index + 1}</h2>
            <p>Name: {order.name}</p>
            <p>Mobile: {order.mobile}</p>
            <p>Address: {order.address}</p>
            <h3>Items:</h3>

            {order.items.map((item: any, i: number) => (
              <p key={i}>
                {item.name} - ₹{item.price}
              </p>
            ))}

            <h3>Total: ₹{order.total}</h3>
            <p>
  Status: {order.status || "Pending"}
</p>
          </div>
        ))
      )}
    </div>
  );
}
