import data from "../data/latest.json";

function Card({ title, value, color }) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      <p
        style={{
          color: "#64748b",
          marginBottom: "10px",
          fontSize: "14px",
        }}
      >
        {title}
      </p>

      <h2
        style={{
          color: color,
          margin: 0,
          fontSize: "28px",
        }}
      >
        {value}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        background:
          "linear-gradient(135deg,#ecfdf5,#f8fafc)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            color: "#166534",
            fontSize: "42px",
            marginBottom: "5px",
          }}
        >
          🌰 ಅಡಿಕೆ ಬೆಲೆ ಮುನ್ಸೂಚನೆ
        </h1>

        <p
          style={{
            color: "#64748b",
            marginBottom: "25px",
          }}
        >
          ಭಾರತದ ಅಡಿಕೆ ಮಾರುಕಟ್ಟೆ ವಿಶ್ಲೇಷಣೆ
        </p>

        {/* TOP CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <Card
            title="ಚನ್ನಗಿರಿ ಮಾರುಕಟ್ಟೆ"
            value={data.market}
            color="#2563eb"
          />

          <Card
            title="ಇಂದಿನ ಬೆಲೆ"
            value={`₹${data.price}`}
            color="#16a34a"
          />

          <Card
            title="ಭಾರತ ಆಗಮನ"
            value={data.indiaArrival}
            color="#f59e0b"
          />

          <Card
            title="ಕರ್ನಾಟಕ ಆಗಮನ"
            value={data.karnatakaArrival}
            color="#7c3aed"
          />
        </div>

        {/* SECOND ROW */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "2fr 1fr",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          {/* CHART */}

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              boxShadow:
                "0 4px 20px rgba(0,0,0,.08)",
            }}
          >
            <h2>📈 ಬೆಲೆ ಪ್ರವೃತ್ತಿ</h2>

            <div
              style={{
                height: "260px",
                display: "flex",
                alignItems: "end",
                gap: "12px",
                marginTop: "20px",
              }}
            >
              {[80, 120, 150, 180, 160, 210, 240].map(
                (h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      background:
                        "linear-gradient(#22c55e,#15803d)",
                      height: `${h}px`,
                      borderRadius:
                        "10px 10px 0 0",
                    }}
                  />
                )
              )}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginTop: "10px",
              }}
            >
              <span>ಸೋಮ</span>
              <span>ಮಂಗಳ</span>
              <span>ಬುಧ</span>
              <span>ಗುರು</span>
              <span>ಶುಕ್ರ</span>
              <span>ಶನಿ</span>
              <span>ಭಾನು</span>
            </div>
          </div>

          {/* PIE CHART */}

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              boxShadow:
                "0 4px 20px rgba(0,0,0,.08)",
            }}
          >
            <h2>📊 ಆಗಮನ ಹಂಚಿಕೆ</h2>

            <div
              style={{
                width: "220px",
                height: "220px",
                margin: "20px auto",
                borderRadius: "50%",
                background:
                  "conic-gradient(#22c55e 0% 60%, #facc15 60% 85%, #ef4444 85% 100%)",
              }}
            ></div>

            <p>🟢 ಕರ್ನಾಟಕ - 60%</p>
            <p>🟡 ಕೇರಳ - 25%</p>
            <p>🔴 ಇತರೆ ರಾಜ್ಯಗಳು - 15%</p>
          </div>
        </div>

        {/* PREDICTION */}

        <div
          style={{
            marginTop: "25px",
            background: "white",
            borderRadius: "20px",
            padding: "25px",
            boxShadow:
              "0 4px 20px rgba(0,0,0,.08)",
          }}
        >
          <h2>🤖 AI ಮುನ್ಸೂಚನೆ</h2>

          <h1
            style={{
              color: "#dc2626",
              fontSize: "40px",
            }}
          >
            {data.prediction}
          </h1>

          <p>
            ಇಂದಿನ ಆಗಮನ ಪ್ರಮಾಣ ಮತ್ತು
            ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿಯನ್ನು ಆಧರಿಸಿ
            ಲೆಕ್ಕ ಹಾಕಲಾಗಿದೆ.
          </p>
        </div>

        {/* MARKET REPORT */}

        <div
          style={{
            marginTop: "25px",
            background: "white",
            borderRadius: "20px",
            padding: "25px",
            boxShadow:
              "0 4px 20px rgba(0,0,0,.08)",
          }}
        >
          <h2>📋 ಇಂದಿನ ಮಾರುಕಟ್ಟೆ ವರದಿ</h2>

          <p>
            ಮಾರುಕಟ್ಟೆ: {data.market}
          </p>

          <p>
            ಇಂದಿನ ಬೆಲೆ: ₹{data.price}
          </p>

          <p>
            ಭಾರತದ ಒಟ್ಟು ಆಗಮನ:
            {data.indiaArrival}
          </p>

          <p>
            ಕರ್ನಾಟಕ ಆಗಮನ:
            {data.karnatakaArrival}
          </p>

          <p>
            ಇಂದಿನ ಮುನ್ಸೂಚನೆ:
            {data.prediction}
          </p>

          <p>
            ಕೊನೆಯ ನವೀಕರಣ:
            {data.date}
          </p>
        </div>
      </div>
    </div>
  );
}
