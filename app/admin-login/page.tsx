"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = () => {
    if (password === "admin123") {
      localStorage.setItem("adminLogin", "true");
      router.push("/admin");
    } else {
      alert("Wrong Password!");
    }
  };

  return (
    <div style={{
      padding: "40px",
      textAlign: "center",
      background: "#fffaf3",
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "#e85d04" }}>
        Admin Login 🔐
      </h1>

      <input
        type="password"
        placeholder="Enter Admin Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "12px" }}
      />

      <br /><br />

      <button
        onClick={login}
        style={{
          background: "#e85d04",
          color: "white",
          padding: "12px 25px",
          border: "none",
          borderRadius: "10px"
        }}
      >
        Login
      </button>
    </div>
  );
}
