import { C } from "../constants/colors";

export default function About({ setPage }) {
  return (
    <div style={{ paddingTop: "68px" }}>
      <div style={{
        background: C.dark, padding: "5rem 2.5rem 4rem", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(rgba(0,192,127,0.04) 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: "0.75rem", color: C.green, fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>Who We Are</div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", color: C.white, fontSize: "3rem", fontWeight: "800", marginBottom: "0.75rem" }}>About <span style={{ color: C.green }}>InstBusinessGrow</span></h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", maxWidth: "560px", margin: "0 auto" }}>We're a full-stack digital growth agency built for businesses that want real results — not just impressions and clicks.</p>
        </div>
      </div>
      <div style={{ height: "3px", background: `linear-gradient(90deg, ${C.dark}, ${C.green}, ${C.dark})` }} />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4.5rem 2.5rem" }}>
        <div style={{
          background: C.dark, borderRadius: "20px", padding: "3rem",
          border: `1px solid rgba(0,192,127,0.2)`, marginBottom: "3rem",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center",
        }}>
          <div>
            <div style={{ fontSize: "0.75rem", color: C.green, fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>Our Mission</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", color: C.white, fontSize: "1.9rem", fontWeight: "800", marginBottom: "1rem", lineHeight: 1.25 }}>Making Growth Accessible to Every Business</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.92rem", lineHeight: 1.75 }}>We started InstBusinessGrow with one mission — to give small and medium businesses access to the same powerful digital marketing tools and strategies that large corporations use, but at a fraction of the cost and with full end-to-end execution.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[["500+", "Happy Clients", C.green], ["₹10Cr+", "Ad Spend Managed", C.blue], ["48hrs", "Campaign Launch", C.accent], ["10x", "Average ROI", C.yellow]].map(([val, label, color]) => (
              <div key={label} style={{
                background: "rgba(255,255,255,0.04)", borderRadius: "14px", padding: "1.5rem",
                border: `1px solid rgba(255,255,255,0.07)`, textAlign: "center",
              }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.8rem", fontWeight: "800", color, marginBottom: "0.3rem" }}>{val}</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div style={{ fontSize: "0.75rem", color: C.green, fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.6rem" }}>Our Values</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2rem", color: C.dark, fontWeight: "800" }}>What Drives Us Every Day</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {[["🎯", C.green, "Results First", "We measure ourselves by your growth, not our deliverables. Revenue and ROI are our north stars."],["🔍", C.blue, "Full Transparency", "No hidden work, no black-box reporting. You see exactly what we do and what results it drives."],["⚡", C.accent, "Speed & Agility", "Markets move fast. We launch quickly, iterate faster, and keep you ahead of the competition."],["🤝", C.purple, "True Partnership", "We act as a growth partner, not a vendor. Your success is our success — we're invested in it."],].map(([icon, color, title, desc]) => (
              <div key={title} className="card-hover" style={{
                background: C.white, borderRadius: "16px", padding: "1.75rem",
                border: `1px solid ${C.border}`, borderTop: `4px solid ${color}`,
              }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>{icon}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: "700", color, fontSize: "1rem", marginBottom: "0.5rem" }}>{title}</div>
                <div style={{ fontSize: "0.86rem", color: C.textMuted, lineHeight: 1.65 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: C.offWhite, borderRadius: "20px", padding: "2.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.6rem", color: C.dark, fontWeight: "800" }}>Industries We Serve</h3>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            {["E-Commerce", "Education", "Real Estate", "Healthcare", "Restaurants & F&B", "Fashion & Lifestyle", "Finance & BFSI", "Hospitality & Travel", "Manufacturing", "IT & SaaS", "Retail", "Professional Services"].map(ind => (
              <span key={ind} style={{
                background: C.white, border: `1px solid ${C.border}`,
                borderRadius: "100px", padding: "0.5rem 1.25rem",
                fontSize: "0.84rem", color: C.textMid, fontWeight: "500",
              }}>{ind}</span>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <button className="green-btn" onClick={() => setPage("Contact")} style={{
            background: C.green, color: C.dark, border: "none",
            padding: "1rem 2.5rem", borderRadius: "10px", fontWeight: "700",
            fontSize: "1rem", transition: "all 0.2s",
          }}>Work With Us →</button>
        </div>
      </div>
    </div>
  );
}
