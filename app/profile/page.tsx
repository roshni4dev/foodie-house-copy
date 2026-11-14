"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [customer, setCustomer] = useState<any>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const savedUser = JSON.parse(
      localStorage.getItem("customer") || "null"
    );

    if (!savedUser) {
      router.push("/login");
    } else {
      setCustomer(savedUser);
      setName(savedUser.name || "");
      setEmail(savedUser.email || "");
    }
  }, [router]);
const updateProfile = () => {
  if (!name.trim()) {
    alert("Please enter your name!");
    return;
  }

const updatedCustomer = { ...customer, name, email };
  localStorage.setItem("customer", JSON.stringify(updatedCustomer));
  setCustomer(updatedCustomer);
  alert("Profile Updated! ❤️");
};
  const logout = () => {
    localStorage.removeItem("customer");
    router.push("/login");
  };

  if (!customer) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div style={{
      padding: "40px 20px",
      textAlign: "center",
      background: "#fffaf3",
      minHeight: "100vh"
    }}>
      <h1>My Profile 👤</h1>

      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "15px",
        maxWidth: "400px",
        margin: "30px auto",
        boxShadow: "0 5px 20px #00000015"
      }}>
        <h2>Welcome! ❤️</h2>
        <p><strong>Name:</strong> {customer.name}</p>
        <input
  placeholder="Enter New Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
<br /><br />
        <button onClick={updateProfile}>Update Profile</button>
<br /><br />
        <p><strong>Email:</strong> {customer.email}</p>
        <input
  placeholder="Enter New Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
<br /><br />

        <button
          onClick={logout}
          style={{
            background: "#e85d04",
            color: "white",
            padding: "12px 25px",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
