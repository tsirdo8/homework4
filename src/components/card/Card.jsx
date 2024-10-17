import { useState } from "react";

const Card = ({ title, image, description }) => {
  const [isTitleVisible, setIsTitleVisible] = useState(true);

  // Toggle title visibility
  const toggleTitle = () => {
    setIsTitleVisible(!isTitleVisible);
  };

  return (
    <div style={styles.cardContainer}>
      {isTitleVisible && <h2 style={styles.title}>{title}</h2>}
      <img src={image} alt={title} style={styles.image} />
      <p style={styles.description}>{description}</p>
      <button style={styles.button} onClick={toggleTitle}>
        {isTitleVisible ? "Hide Title" : "Show Title"}
      </button>
    </div>
  );
};

const styles = {
  cardContainer: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "16px auto",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "1.5rem",
    margin: "0 0 16px 0",
    color: "#333",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "16px",
  },
  description: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "16px",
  },
  button: {
    padding: "8px 16px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Card;
