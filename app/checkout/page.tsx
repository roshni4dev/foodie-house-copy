
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Checkout() {
    const router = useRouter();
    const [cart, setCart] = useState<any[]>([]);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(savedCart);
    }, []);

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const [coupon, setCoupon] = useState("");
const [discount, setDiscount] = useState(0);
    const applyCoupon = () => {
    if (coupon === "FOOD20") {
        setDiscount(total * 0.20);
        alert("20% Discount Applied! 🎉");
    } else {
        setDiscount(0);
        alert("Invalid Coupon Code!");
    }
};

    const removeItem = (index: number) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };


    return (
        <div style={{ padding: "30px" }}>
            <h1>My Checkout 🛒</h1>

            {cart.length === 0 ? (
                <p>Your Cart is Empty!</p>
            ) : (
                cart.map((item, index) => (
                    <div key={index}>
                        <h2>{item.name}</h2>
                        <p>Price: ₹{item.price}</p>
                        <button onClick={() => removeItem(index)}>
                            Remove
                        </button>
                    </div>
                ))
            )}

            <h2>Total Price: ₹{total}</h2>
            <input
    type="text"
    placeholder="Enter Coupon Code"
    value={coupon}
    onChange={(e) => setCoupon(e.target.value)}
/>

<button onClick={applyCoupon}>
    Apply Coupon
</button>

<h3>Discount: ₹{discount}</h3>
<h2>Final Total: ₹{total - discount}</h2>

            <h3>Customer Details</h3>

            <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="tel"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
            />
            <textarea
                placeholder="Enter Delivery Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />

            <button
                onClick={() => {
                    if (cart.length === 0) {
                        alert("Your cart is empty!");
                        return;
                    }
                    if (!name || !mobile || !address) {
                        alert("Please fill all Customer Details!");
                        return;
                    } const order = {
                        name: name,
                        mobile: mobile,
                        address: address,
                        items: cart,
                      total: total - discount,
deliveryTime: "30-45 Minutes"
                    };

                    localStorage.setItem("lastOrder", JSON.stringify(order));
                    const oldOrders = JSON.parse(localStorage.getItem("orders") || "[]");
oldOrders.push(order);
localStorage.setItem("orders", JSON.stringify(oldOrders));
                    router.push("/order-success");
                    localStorage.removeItem("cart");
                    setCart([]);
                    setName("");
                    setMobile("");
                    setAddress("");
                }}
            >
                Place Order
            </button>
        </div>
    );
}
