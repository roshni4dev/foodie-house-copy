"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [customer, setCustomer] = useState<any>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
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
      setProfileImage(savedUser.profileImage || "");
    }
  }, [router]);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  }
};
const updateProfile = () => {
  if (!name.trim()) {
    alert("Please enter your name!");
    return;
  }
const updatedCustomer = { ...customer, name, email, profileImage };
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
  padding: "50px 20px",
  textAlign: "center",
  background: "linear-gradient(135deg, #fff7ed, #ffedd5)",
  minHeight: "100vh",
  fontFamily: "Arial, sans-serif"
}}>
      <h1>My Profile 👤</h1>

      <div style={{
        background: "white",
     border: "1px solid #fed7aa",
        padding: "30px",
        borderRadius: "22px",
        maxWidth: "400px",
        margin: "30px auto",
        boxShadow: "0 10px 30px rgba(234, 88, 12, 0.15)"
      }}>
        <h2>Welcome! ❤️</h2>
        {profileImage && (
  <img
    src={profileImage}
    alt="Profile"
    style={{
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "4px solid #ea580c"
    }}
  />
)}

<br /><br />

<input
  type="file"
  accept="image/*"
  onChange={handleImageChange}
/>

<br /><br />
        <p><strong>Name:</strong> {customer.name}</p>
        <input
  placeholder="Enter New Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
<br /><br /><button
  onClick={updateProfile}
  style={{
    background: "#ea580c",
    color: "white",
    padding: "12px 28px",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold"
  }}
>
  Update Profile
</button>
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
background: "#dc2626",
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
