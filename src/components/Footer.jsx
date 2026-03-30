import { C } from "../constants/colors";

export default function Footer({ setPage }) {
  const services = ["Google Ads", "Meta Ads", "SEO", "Social Media", "Content Marketing", "WhatsApp Marketing", "Website Development", "Brand Strategy"];

  return (
    <footer style={{ background: C.dark, borderTop: `1px solid ${C.borderDark}`, padding: "3.5rem 2.5rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr repeat(3, 1fr)", gap: "3rem", marginBottom: "2.5rem" }}>
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", color: C.white, fontWeight: "800", fontSize: "1.3rem", marginBottom: "0.75rem" }}>
              Inst<span style={{ color: C.green }}>Business</span>Grow
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.86rem", lineHeight: 1.7, maxWidth: "260px" }}>
              End-to-end business growth solutions — from digital ads to brand building. We grow your business, you focus on running it.
            </p>
            <div style={{ display: "flex", gap: "0.6rem", marginTop: "1.25rem" }}>
              {["📷", "👥", "💼", "▶"].map((icon, i) => (
                <div key={i} style={{
                  width: "36px", height: "36px", borderRadius: "8px",
                  background: "rgba(0,192,127,0.12)", border: `1px solid ${C.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem",
                }}>{icon}</div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ color: C.green, fontWeight: "600", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Pages</div>
            {["Home", "Services", "How It Works", "About", "Contact"].map(p => (
              <div key={p} onClick={() => setPage(p)} style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.86rem", marginBottom: "0.5rem", cursor: "pointer", transition: "color 0.15s" }}>{p}</div>
            ))}
          </div>
          <div>
            <div style={{ color: C.green, fontWeight: "600", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Services</div>
            {services.slice(0, 5).map(s => (
              <div key={s} onClick={() => setPage("Services")} style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.86rem", marginBottom: "0.5rem", cursor: "pointer" }}>{s}</div>
            ))}
          </div>
          <div>
            <div style={{ color: C.green, fontWeight: "600", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Contact</div>
            {[["📞", "+91 XXXXX XXXXX"],["✉️", "hello@instbusinessgrow.com"],["🌐", "www.instbusinessgrow.com"],["📍", "Hyderabad, India"],].map(([icon, val]) => (
              <div key={val} style={{ display: "flex", gap: "0.5rem", color: "rgba(255,255,255,0.5)", fontSize: "0.84rem", marginBottom: "0.55rem" }}>
                <span>{icon}</span><span>{val}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${C.borderDark}`, paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.78rem" }}>© 2024 InstBusinessGrow. All rights reserved.</div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {["Google Ads Partner", "Meta Business Partner", "ISO Certified"].map(badge => (
              <span key={badge} style={{fontSize: "0.68rem", color: C.green, background: "rgba(0,192,127,0.1)",border: `1px solid ${C.border}`, borderRadius: "100px", padding: "0.2rem 0.6rem",}}>{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
