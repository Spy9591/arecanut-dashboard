export default function Home() {
  return (
    <div
      style={{
        background: "#f3fff4",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1
        style={{
          color: "#15803d",
          fontSize: "40px"
        }}
      >
        🌰 Arecanut Price Predictor
      </h1>

      <h2>Today's Price</h2>
      <h1>₹60,500</h1>

      <h2>Prediction</h2>

      <div
        style={{
          color: "red",
          fontSize: "30px"
        }}
      >
        🔴 ಹೆಚ್ಚು
      </div>

      <p>
        ಮುಂದಿನ ದಿನಗಳಲ್ಲಿ ಬೆಲೆ ಏರಿಕೆ ಸಾಧ್ಯತೆ ಇದೆ.
      </p>
    </div>
  );
}
