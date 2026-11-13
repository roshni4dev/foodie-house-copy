
import Link from "next/link";

const dishes = [
  {
    name: "Cheese Pizza",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1571066811602-716837d681de?w=600",
    description: "Loaded with delicious melted cheese."
  },
  {
    name: "Italian Pizza",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    description: "A perfect taste of Italian flavors."
  },
  {
    name: "Veg Pizza",
    price: "₹179",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600",
    description: "Fresh vegetables with yummy toppings."
  }
];

export default function Home() {
  return (
    <main style={{
      margin: 0,
      background: "#fffaf3",
      color: "#29201b",
      fontFamily: "Arial, sans-serif"
    }}>

      {/* Navbar */}
      <nav style={{
        padding: "20px 7%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        background: "#ffffff"
      }}>
        <h2 style={{ color: "#e85d04", margin: 0 }}>
          🍕 Foodie House
        </h2>

        <div style={{ display: "flex", gap: "22px", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#29201b", textDecoration: "none" }}>Home</Link>
          <Link href="/menu" style={{ color: "#29201b", textDecoration: "none" }}>Menu</Link>
          <Link href="/checkout" style={{ color: "#29201b", textDecoration: "none" }}>Checkout</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: "75px 7%",
        background: "linear-gradient(120deg, #fff0dc, #ffd5a5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "35px",
        flexWrap: "wrap"
      }}>
        <div style={{ flex: "1 1 300px" }}>
          <p style={{ color: "#e85d04", fontWeight: "bold" }}>
            FRESH • HOT • DELICIOUS
          </p>

          <h1 style={{
            fontSize: "clamp(38px, 6vw, 65px)",
            lineHeight: 1.1,
            margin: "15px 0"
          }}>
            Delicious Food,<br />
            <span style={{ color: "#e85d04" }}>Happy Life!</span>
          </h1>

          <p style={{ fontSize: "18px", lineHeight: 1.7 }}>
            Enjoy tasty, fresh and cheesy pizzas made with love.
            Your favorite food is waiting for you!
          </p>

          <Link href="/menu" style={{
            display: "inline-block",
            background: "#e85d04",
            color: "white",
            padding: "15px 28px",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "bold",
            marginTop: "15px"
          }}>
            Explore Menu →
          </Link>
        </div>

        <div style={{ flex: "1 1 300px" }}>
          <img
            src="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=900"
            alt="Delicious pizza"
            style={{
              width: "100%",
              borderRadius: "25px",
              boxShadow: "0 15px 35px #a45b3340"
            }}
          />
        </div>
      </section>

      {/* Popular Dishes */}
      <section style={{ padding: "65px 7%", textAlign: "center" }}>
        <p style={{ color: "#e85d04", fontWeight: "bold" }}>
          OUR SPECIALITIES
        </p>
        <h2 style={{ fontSize: "36px" }}>Our Popular Pizza 🍕</h2>
        <p>Freshly prepared and full of flavor!</p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "25px",
          marginTop: "35px"
        }}>
          {dishes.map((dish) => (
            <div key={dish.name} style={{
              background: "white",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 5px 20px #00000012",
              textAlign: "left"
            }}>
              <img
                src={dish.image}
                alt={dish.name}
                style={{ width: "100%", height: "190px", objectFit: "cover" }}
              />
              <div style={{ padding: "20px" }}>
                <h3>{dish.name}</h3>
                <p style={{ color: "#777" }}>{dish.description}</p>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <strong style={{ color: "#e85d04", fontSize: "22px" }}>
                    {dish.price}
                  </strong>
                  <Link href="/menu" style={{
                    background: "#e85d04",
                    color: "white",
                    padding: "10px 17px",
                    borderRadius: "20px",
                    textDecoration: "none"
                  }}>
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section style={{
        padding: "65px 7%",
        background: "#fff0dc",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "34px" }}>About Foodie House ❤️</h2>
        <p style={{
          maxWidth: "650px",
          margin: "20px auto",
          fontSize: "17px",
          lineHeight: 1.8
        }}>
          Welcome to Foodie House! We believe every meal should
          be special. We bring you delicious food, fresh ingredients
          and flavors that make you smile.
        </p>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: "60px 7%", textAlign: "center" }}>
        <h2 style={{ fontSize: "34px" }}>Why Choose Us? ⭐</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}>
          {[
            ["🍕", "Fresh & Tasty Food"],
            ["🚚", "Fast Home Delivery"],
            ["❤️", "Made With Love"],
            ["⭐", "Great Quality"]
          ].map(([emoji, title]) => (
            <div key={title} style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 5px 18px #00000010"
            }}>
              <div style={{ fontSize: "38px" }}>{emoji}</div>
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={{
        padding: "55px 7%",
        textAlign: "center",
        background: "#29201b",
        color: "white"
      }}>
        <h2 style={{ fontSize: "32px" }}>Hungry? Let's Order! 🍕</h2>
        <p>Discover your favorite pizza at Foodie House.</p>
        <Link href="/menu" style={{
          display: "inline-block",
          background: "#e85d04",
          color: "white",
          padding: "14px 28px",
          borderRadius: "30px",
          textDecoration: "none",
          marginTop: "15px",
          fontWeight: "bold"
        }}>
          Order Your Pizza
        </Link>
      </section>

      {/* Footer */}
      <footer style={{
        background: "#17120f",
        color: "white",
        textAlign: "center",
        padding: "22px"
      }}>
        <h2>🍕 Foodie House</h2>
        <p>Delicious Food, Happy Life!</p>
        <p>© 2026 Foodie House. All Rights Reserved.</p>
      </footer>

    </main>
  );
}
