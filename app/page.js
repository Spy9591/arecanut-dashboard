import data from "../data/latest.json";

const commodities = [
  { name: "ಕೊಪ್ಪರಿ", price: 20142, arrival: 38 },
  { name: "ಎಳ್ಳು", price: 12866, arrival: 815 },
  { name: "ಉದ್ದು", price: 8188, arrival: 1613 },
  { name: "ಸೋಯಾಬೀನ್", price: 6682, arrival: 12413 },
  { name: "ತೊಗರಿ", price: 7525, arrival: 1770 },
  { name: "ಈರುಳ್ಳಿ", price: 1688, arrival: 18758 }
];

function Card({ title, value, color }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(10px)",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
      }}
    >
      <div
        style={{
          fontSize: "14px",
          color: "#64748b",
          marginBottom: "10px"
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          color: color
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#ecfdf5,#f8fafc)",
        padding: "20px",
        fontFamily: "Arial,sans-serif"
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "auto"
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            color: "#166534",
            marginBottom: "10px"
          }}
        >
          🌾 ಕೃಷಿ ಮಾರುಕಟ್ಟೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್
        </h1>

        <p
          style={{
            color: "#64748b",
            marginBottom: "25px"
          }}
        >
          ಭಾರತದ ಕೃಷಿ ಬೆಲೆ ಮತ್ತು ಆಗಮನ ವಿಶ್ಲೇಷಣೆ
        </p>

        {/* KPI Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px"
          }}
        >
          <Card
            title="ಮಾರುಕಟ್ಟೆ"
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

        {/* Chart Row */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "2fr 1fr",
            gap: "20px",
            marginTop: "25px"
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              boxShadow:
                "0 8px 25px rgba(0,0,0,0.08)"
            }}
          >
            <h2>📈 ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿ</h2>

            <div
              style={{
                height: "260px",
                display: "flex",
                gap: "12px",
                alignItems: "end",
                marginTop: "25px"
              }}
            >
              {[90, 140, 110, 180, 170, 220, 250].map(
                (v, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${v}px`,
                      borderRadius:
                        "12px 12px 0 0",
                      background:
                        "linear-gradient(#22c55e,#166534)"
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
                marginTop: "10px"
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

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              boxShadow:
                "0 8px 25px rgba(0,0,0,0.08)"
            }}
          >
            <h2>📊 ಆಗಮನ ಹಂಚಿಕೆ</h2>

            <div
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                margin: "20px auto",
                background:
                  "conic-gradient(#22c55e 0% 45%, #facc15 45% 75%, #3b82f6 75% 90%, #ef4444 90% 100%)"
              }}
            />

            <p>🟢 ಧಾನ್ಯಗಳು</p>
            <p>🟡 ಎಣ್ಣೆ ಬೀಜಗಳು</p>
            <p>🔵 ಕಾಳುಗಳು</p>
            <p>🔴 ತರಕಾರಿಗಳು</p>
          </div>
        </div>

        {/* Commodities */}

        <div
          style={{
            marginTop: "25px",
            background: "white",
            borderRadius: "20px",
            padding: "25px",
            boxShadow:
              "0 8px 25px rgba(0,0,0,0.08)"
          }}
        >
          <h2>🏆 ಪ್ರಮುಖ ವಸ್ತುಗಳು</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "15px",
              marginTop: "20px"
            }}
          >
            {commodities.map((item) => (
              <div
                key={item.name}
                style={{
                  background: "#f8fafc",
                  borderLeft:
                    "5px solid #16a34a",
                  borderRadius: "15px",
                  padding: "15px"
                }}
              >
                <h3>{item.name}</h3>

                <h2
                  style={{
                    color: "#166534"
                  }}
                >
                  ₹{item.price.toLocaleString()}
                </h2>

                <p>
                  ಆಗಮನ:
                  {item.arrival.toLocaleString()} ಟನ್
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Section */}

        <div
          style={{
            marginTop: "25px",
            background: "white",
            borderRadius: "20px",
            padding: "25px",
            boxShadow:
              "0 8px 25px rgba(0,0,0,0.08)"
          }}
        >
          <h2>🤖 AI ಬೆಲೆ ಮುನ್ಸೂಚನೆ</h2>

          <h1
            style={{
              color: "#dc2626",
              marginTop: "15px"
            }}
          >
            {data.prediction}
          </h1>

          <p>🟢 ಕೊಪ್ಪರಿ ಬೆಲೆ ಏರಿಕೆ ಸಾಧ್ಯತೆ</p>
          <p>🟢 ಎಳ್ಳು ಬೆಲೆ ಏರಿಕೆ ಸಾಧ್ಯತೆ</p>
          <p>🟡 ಸೋಯಾಬೀನ್ ಸ್ಥಿರ</p>
          <p>🔴 ಈರುಳ್ಳಿ ಇಳಿಕೆ ಸಾಧ್ಯತೆ</p>
        </div>

        {/* Market Table */}

        <div
          style={{
            marginTop: "25px",
            background: "white",
            borderRadius: "20px",
            padding: "25px",
            overflowX: "auto",
            boxShadow:
              "0 8px 25px rgba(0,0,0,0.08)"
          }}
        >
          <h2>📋 ಮಾರುಕಟ್ಟೆ ವಿವರ</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse"
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#f1f5f9"
                }}
              >
                <th style={{ padding: "12px" }}>
                  ವಸ್ತು
                </th>
                <th style={{ padding: "12px" }}>
                  ಬೆಲೆ
                </th>
                <th style={{ padding: "12px" }}>
                  ಆಗಮನ
                </th>
              </tr>
            </thead>

            <tbody>
              {commodities.map((item) => (
                <tr key={item.name}>
                  <td style={{ padding: "12px" }}>
                    {item.name}
                  </td>

                  <td style={{ padding: "12px" }}>
                    ₹{item.price.toLocaleString()}
                  </td>

                  <td style={{ padding: "12px" }}>
                    {item.arrival.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            marginTop: "25px",
            textAlign: "center",
            color: "#64748b"
          }}
        >
          ಕೊನೆಯ ನವೀಕರಣ : {data.date}
        </div>
      </div>
    </div>
  );
}
