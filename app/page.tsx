
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <nav className="navbar">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/menu">Menu</Link></li>
                    <li><Link href="/checkout">Checkout</Link></li>
                </ul>
            </nav>
            <h1 className={styles.title}>
                <img
                    src="https://chiruss.in/wp-content/uploads/2024/11/Nqhdq2gO.jpeg"
                    alt="Delicious Pizza"
                    width="400"
                    height="300"
                />
                🍕 Welcome to Foodie House 🍕
            </h1>

            <h2 className={styles.subtitle}>
                Delicious Food, Happy Life!
            </h2>

            <section style={{ marginTop: "40px", padding: "20px" }}>
                <h2>Our Popular Pizza 🍕</h2>

                <div style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    flexWrap: "wrap"
                }}>

                    <div style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "12px" }}>
                        <img
                            src="https://images.unsplash.com/photo-1571066811602-716837d681de?w=400"
                            width="220"
                            height="150"
                            alt="Cheese Pizza"
                            style={{ objectFit: "cover" }}
                        />
                        <h3>Cheese Pizza</h3>
                        <p>Price: ₹199</p>
                    </div>

                    <div style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "12px" }}>
                        <img
                            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400"
                            width="220"
                            height="150"
                            alt="Italian Pizza"
                            style={{ objectFit: "cover" }}
                        />
                        <h3>Italian Pizza</h3>
                        <p>Price: ₹249</p>
                    </div>

                    <div style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "12px" }}>
                        <img
                            src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400"
                            width="220"
                            height="150"
                            alt="Veg Pizza"
                            style={{ objectFit: "cover" }}
                        />
                        <h3>Veg Pizza</h3>
                        <p>Price: ₹179</p>
                    </div>

                </div>
            </section>

            <p className={styles.description}>
                Enjoy Fresh and Tasty Pizza at Foodie House.
            </p>

            <Link href="/menu">
                <button className={styles.button}>
                    Explore Our Menu
                </button>
            </Link>

            <Link href="/checkout">
                <button className={styles.button}>
                    Order Now
                </button>
            </Link>
            <section style={{ padding: "30px", textAlign: "center" }}>
                <section style={{
                    padding: "30px",
                    textAlign: "center",
                    backgroundColor: "#fff0e0",
                    marginTop: "30px"
                }}>
                    <h2>About Us ❤️</h2>
                    <p>
                        Welcome to Foodie House!
                        We serve fresh, delicious and tasty pizzas
                        made with love.
                    </p>
                    <p>
                        Our mission is to make every meal special.
                    </p>
                </section>
                <h2>Why Choose Foodie House? ❤️</h2>
                <p>🍕 Fresh and Tasty Food</p>
                <p>🚚 Fast Home Delivery</p>
                <p>⭐ Best Quality and Best Price</p>
            </section>
            <section style={{
                padding: "30px",
                textAlign: "center",
                backgroundColor: "#fff5eb"
            }}>
                <h2>Contact Us 📞</h2>
                <p>📱 Phone: 9876543210</p>
                <p>📧 Email: foodiehouse@gmail.com</p>
                <p>📍 Address: Gurugram, India</p>
                <form action="https://formsubmit.co/myfoodie@gmail.com" method="POST">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="New Foodie House Message" />
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        required
                    />
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Enter Mobile Number"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Write Your Message"
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>
            <footer style={{
                backgroundColor: "#222",
                color: "white",
                padding: "20px",
                textAlign: "center",
                marginTop: "40px"
            }}>
                <h3>🍕 Foodie House</h3>
                <p>Delicious Food, Happy Life!</p>
                <p>© 2026 Foodie House. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
