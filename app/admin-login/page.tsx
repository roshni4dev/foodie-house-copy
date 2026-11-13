
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

      <button onClick={logout} style={{
        background: "#e85d04",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
      }}>
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
          </div>
        ))
      )}
    </div>
  );
}
