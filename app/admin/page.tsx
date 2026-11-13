
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Admin() {
  const [orders, setOrders] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLogin");

    if (isLoggedIn !== "true") {
      router.push("/admin-login");
      return;
    }

    const savedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );
    setOrders(savedOrders);
  }, [router]);

  const updateStatus = (index: number, status: string) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = status;

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );

    setOrders(updatedOrders);
  };

  const totalSales = orders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  const logout = () => {
    localStorage.removeItem("adminLogin");
    router.push("/admin-login");
  };

  return (
    <div style={{
      padding: "30px",
      background: "#fffaf3",
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "#e85d04" }}>
        Admin Dashboard 👩‍💻
      </h1>

      <button onClick={logout}>
        Logout
      </button>

      <h2>Total Orders: {orders.length}</h2>
      <h2>Total Sales: ₹{totalSales}</h2>
      <h2>Customer Orders 📦</h2>

      {orders.length === 0 ? (
        <p>No orders found!</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} style={{
            background: "white",
            padding: "20px",
            marginBottom: "15px",
            borderRadius: "12px"
          }}>
            <h3>Order {index + 1}</h3>
            <p>Name: {order.name}</p>
            <p>Mobile: {order.mobile}</p>
            <p>Address: {order.address}</p>

            {order.items.map((item: any, i: number) => (
              <p key={i}>
                {item.name} - ₹{item.price}
              </p>
            ))}

            <h3>Total: ₹{order.total}</h3>

            <p>
              Status: {order.status || "Pending"}
            </p>

          <button
  onClick={() => updateStatus(index, "Accepted")}
  style={{
    background: "green",
    color: "white",
    padding: "10px",
    marginRight: "10px"
  }}
>
  Accept
</button>

<button
  onClick={() => updateStatus(index, "Rejected")}
  style={{
    background: "red",
    color: "white",
    padding: "10px",
    marginRight: "10px"
  }}
>
  Reject
</button>

<button
  onClick={() => updateStatus(index, "Preparing")}
  style={{
    background: "orange",
    color: "white",
    padding: "10px",
    marginRight: "10px"
  }}
>
  Preparing 🍕
</button>

<button
  onClick={() => updateStatus(index, "Out for Delivery")}
  style={{
    background: "blue",
    color: "white",
    padding: "10px",
    marginRight: "10px"
  }}
>
  Out for Delivery 🛵
</button>

<button
  onClick={() => updateStatus(index, "Delivered")}
  style={{
    background: "purple",
    color: "white",
    padding: "10px"
  }}
>
  Delivered 🎉
</button>
