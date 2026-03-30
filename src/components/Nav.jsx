import { useState } from "react";
import { C } from "../constants/colors";

export default function Nav({ page, setPage }) {
  const links = ["Home", "Services", "How It Works", "About", "Contact"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(10,15,30,0.95)", backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${C.borderDark}`,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 2.5rem", height: "68px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }} onClick={() => setPage("Home")}>
        <div style={{
          width: "38px", height: "38px", borderRadius: "10px",
          background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.1rem", animation: "pulse-green 2.5s infinite",
        }}>⚡</div>
        <div style={{ display: "none", "@media (min-width: 769px)": { display: "block" } }}>
          <div style={{ fontFamily: "'Syne', sans-serif", color: C.white, fontWeight: "800", fontSize: "1.05rem", lineHeight: 1 }}>
            Inst<span style={{ color: C.green }}>Business</span>Grow
          </div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>Growth Agency</div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div style={{ display: "flex", gap: "0.2rem", "@media (max-width: 768px)": { display: "none" } }}>
        {links.map(l => (
          <button key={l} className="nav-link" onClick={() => setPage(l)} style={{
            border: "none", padding: "0.5rem 1rem", borderRadius: "6px",
            fontSize: "0.85rem", fontWeight: page === l ? "600" : "400",
            color: page === l ? C.green : "rgba(255,255,255,0.65)",
            background: page === l ? "rgba(0,192,127,0.12)" : "transparent",
            transition: "all 0.18s",
          }}>{l}</button>
        ))}
        <button className="green-btn" onClick={() => setPage("Contact")} style={{
          marginLeft: "0.75rem", background: C.green, color: C.dark,
          border: "none", padding: "0.5rem 1.25rem", borderRadius: "8px",
          fontWeight: "700", fontSize: "0.85rem", transition: "all 0.2s",
        }}>Get Started</button>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
        display: "none", "@media (max-width: 768px)": { display: "block" },
        background: "transparent", border: "none", color: C.white,
        fontSize: "1.5rem", cursor: "pointer", padding: "0.5rem",
      }}>☰</button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: "absolute", top: "68px", left: 0, right: 0,
          background: "rgba(10,15,30,0.98)", backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${C.borderDark}`,
          display: "flex", flexDirection: "column", padding: "1rem",
          gap: "0.5rem",
        }}>
          {links.map(l => (
            <button key={l} onClick={() => { setPage(l); setMobileMenuOpen(false); }} style={{
              border: "none", padding: "0.75rem 1rem", borderRadius: "6px",
              fontSize: "0.9rem", fontWeight: page === l ? "600" : "400",
              color: page === l ? C.green : "rgba(255,255,255,0.65)",
              background: page === l ? "rgba(0,192,127,0.12)" : "transparent",
              transition: "all 0.18s", textAlign: "left",
            }}>{l}</button>
          ))}
          <button className="green-btn" onClick={() => { setPage("Contact"); setMobileMenuOpen(false); }} style={{
            background: C.green, color: C.dark,
            border: "none", padding: "0.75rem 1rem", borderRadius: "8px",
            fontWeight: "700", fontSize: "0.9rem", transition: "all 0.2s", width: "100%",
          }}>Get Started</button>
        </div>
      )}
    </nav>
  );
}
