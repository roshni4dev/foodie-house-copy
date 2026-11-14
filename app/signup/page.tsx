"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signup = () => {
    if (!name || !email || !password) {
      alert("Please fill all details!");
      return;
    }

    localStorage.setItem(
      "customer",
      JSON.stringify({ name, email, password })
    );

    alert("Signup Successful! ❤️");
    router.push("/login");
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Customer Signup 👤</h1>

      <input
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Create Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={signup}>
        Create Account
      </button>
    </div>
  );
}
