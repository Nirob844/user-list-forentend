import bannerImage from "../assets/banner.webp"; // Replace with the actual path to your banner image

const Banner = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "400px", // Adjust the height based on your design
        background: `url(${bannerImage}) center/cover`, // Set the background image
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better visibility
      }}
    >
      <h1 style={{ fontSize: "3em", marginBottom: "16px" }}>
        Welcome to Our Website
      </h1>
      <p style={{ fontSize: "1.2em", maxWidth: "600px", textAlign: "center" }}>
        Explore our amazing features and discover a world of possibilities. Join
        us on this journey!
      </p>
      <a
        href="#explore-section" // Replace with the ID or link to the section you want to navigate to
        style={{
          marginTop: "24px",
          padding: "12px 24px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          color: "#333",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "1.2em",
          transition: "background-color 0.3s",
          cursor: "pointer",
        }}
      >
        Explore Now
      </a>
    </div>
  );
};

export default Banner;
