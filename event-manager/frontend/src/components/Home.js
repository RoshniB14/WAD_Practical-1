import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <img src="images/event.jpeg" alt="Event Banner" className="home-image" />

      <h1 className="home-title">🎉 Welcome to EventVerse 🎉</h1>

      <p className="home-description">
        ✨ Discover and manage amazing events around you effortlessly! ✨
      </p>

      <button className="home-button" onClick={() => navigate("/register")}>
        📝 Register Here
      </button>
    </div>
  );
}
