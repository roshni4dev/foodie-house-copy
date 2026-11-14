"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const resetPassword = () => {
    const customer = JSON.parse(
      localStorage.getItem("customer") || "null"
    );

    if (!customer || customer.email !== email) {
      alert("Email not found!");
      return;
    }

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    customer.password = newPassword;

    localStorage.setItem("customer", JSON.stringify(customer));

    alert("Password changed successfully! ❤️");
    router.push("/login");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#fff7ed",
      padding: "50px 20px",
      textAlign: "center"
    }}>
      <div style={{
        background: "white",
        maxWidth: "400px",
        margin: "auto",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 5px 20px #00000015"
      }}>
        <h1>Forgot Password 🔐</h1>

        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <br /><br />

        <button
          onClick={resetPassword}
          style={{
            background: "#dc2626",
            color: "white",
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}
