"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = () => {
    const savedUser = JSON.parse(
      localStorage.getItem("customer") || "null"
    );

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      alert("Login Successful! ❤️");
      router.push("/menu");
    } else {
      alert("Wrong Email or Password!");
    }
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Customer Login 👤</h1>

      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>
        Login
      </button>
    </div>
  );
}
