
"use client";

import { useState } from "react";

export default function Feedback() {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");

  const submitFeedback = () => {
    if (!review.trim()) {
      setMessage("Please write your review!");
      return;
    }

    const feedback = {
      rating,
      review,
      date: new Date().toLocaleDateString()
    };

    const oldFeedback = JSON.parse(
      localStorage.getItem("feedback") || "[]"
    );

    oldFeedback.push(feedback);

    localStorage.setItem(
      "feedback",
      JSON.stringify(oldFeedback)
    );

    setMessage("Thank you for your feedback! ❤️");
    setReview("");
    setRating(5);
  };

  return (
    <div style={{
      padding: "30px",
      background: "#fffaf3",
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "#e85d04" }}>
        Customer Feedback ⭐
      </h1>

      <h2>Rate Your Experience</h2>

      <div style={{ fontSize: "35px" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            style={{
              cursor: "pointer",
              color: star <= rating ? "orange" : "gray"
            }}
          >
            ★
          </span>
        ))}
      </div>

      <h3>Your Review</h3>

      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your feedback..."
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "120px",
          padding: "12px",
          borderRadius: "10px"
        }}
      />

      <br /><br />

      <button
        onClick={submitFeedback}
        style={{
          background: "#e85d04",
          color: "white",
          padding: "12px 25px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Submit Feedback
      </button>

      <h3>{message}</h3>
    </div>
  );
}
