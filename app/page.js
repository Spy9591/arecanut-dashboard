export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "20px",
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
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          🌰 ಅಡಿಕೆ ಬೆಲೆ ಮುನ್ಸೂಚನೆ
        </h1>

        <p
          style={{
            color: "#64748b",
            marginBottom: "30px",
          }}
        >
          ಭಾರತದ ಅಡಿಕೆ ಮಾರುಕಟ್ಟೆ ವಿಶ್ಲೇಷಣೆ
        </p>

        {/* Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <Card
            title="ಚನ್ನಗಿರಿ ಬೆಲೆ"
            value="₹60,850"
            color="#16a34a"
          />

          <Card
            title="ಕರ್ನಾಟಕ ಆಗಮನ"
            value="13,200"
            color="#2563eb"
          />

          <Card
            title="ಭಾರತ ಆಗಮನ"
            value="21,450"
            color="#d97706"
          />

          <Card
            title="ಮುನ್ಸೂಚನೆ"
            value="🔴 ಹೆಚ್ಚು"
            color="#dc2626"
          />
        </div>

        {/* Main Dashboard */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 4px 20px rgba(0,0,0,.08)",
            }}
          >
            <h2>📈 ಬೆಲೆ ಪ್ರವೃತ್ತಿ</h2>

            <div
              style={{
                height: "250px",
                display: "flex",
                alignItems: "end",
                gap: "15px",
                marginTop: "30px",
              }}
            >
              {[60, 80, 120, 140, 170, 200, 220].map(
                (v, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${v}px`,
                      background:
                        "linear-gradient(#22c55e,#166534)",
                      borderRadius: "10px 10px 0 0",
                    }}
                  />
                )
              )}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
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

          {/* Pie Chart */}

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 4px 20px rgba(0,0,0,.08)",
            }}
          >
            <h2>🥥 ಆಗಮನ ಹಂಚಿಕೆ</h2>

            <div
              style={{
                width: "250px",
                height: "250px",
                margin: "20px auto",
                borderRadius: "50%",
                background:
                  "conic-gradient(#16a34a 0% 60%, #facc15 60% 85%, #ef4444 85% 100%)",
              }}
            ></div>

            <div>
              <p>🟢 ಕರ್ನಾಟಕ - 60%</p>
              <p>🟡 ಕೇರಳ - 25%</p>
              <p>🔴 ಇತರೆ - 15%</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}

        <div
          style={{
            marginTop: "25px",
            background: "white",
            borderRadius: "20px",
            padding: "25px",
            boxShadow: "0 4px 20px rgba(0,0,0,.08)",
          }}
        >
          <h2>📋 ಇಂದಿನ ಮಾರುಕಟ್ಟೆ ವರದಿ</h2>

          <p style={{ lineHeight: "2" }}>
            ಇಂದಿನ ಕರ್ನಾಟಕ ಅಡಿಕೆ ಆಗಮನ ಪ್ರಮಾಣ ಕಡಿಮೆಯಾಗಿದೆ.
            ಚನ್ನಗಿರಿ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಉತ್ತಮ ಬೇಡಿಕೆ
            ಕಂಡುಬಂದಿದೆ. ಮುಂದಿನ 7 ದಿನಗಳಲ್ಲಿ
            ಬೆಲೆ ಹೆಚ್ಚಾಗುವ ಸಾಧ್ಯತೆ ಇದೆ.
          </p>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "18px",
        boxShadow: "0 4px 20px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          color: "#64748b",
          marginBottom: "10px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          color,
        }}
      >
        {value}
      </div>
    </div>
  );
}
