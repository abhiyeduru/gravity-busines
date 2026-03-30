import { useState } from "react";
import { C } from "../constants/colors";

export default function Nav({ page, setPage }) {
  const links = ["Home", "Services", "How It Works", "About", "Contact"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const handleNavClick = (link) => {
    setPage(link);
    setMobileMenuOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(10,15,30,0.95)", backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${C.borderDark}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 2.5rem", height: "68px",
      }}>
        {/* Logo Section - Left */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", flex: "0 0 auto" }} onClick={() => handleNavClick("Home")}>
          <div style={{
            width: "38px", height: "38px", borderRadius: "10px",
            background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.1rem", animation: "pulse-green 2.5s infinite",
          }}>⚡</div>
          <div className="logo-text" style={{ display: "none" }}>
            <div style={{ fontFamily: "'Syne', sans-serif", color: C.white, fontWeight: "800", fontSize: "1.05rem", lineHeight: 1 }}>
              Inst<span style={{ color: C.green }}>Business</span>Grow
            </div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>Growth Agency</div>
          </div>
        </div>

        {/* Desktop Menu - Center */}
        <div className="desktop-nav" style={{ display: "flex", gap: "0.2rem", margin: "0 auto" }}>
          {links.map(l => (
            <button key={l} className="nav-link" onClick={() => handleNavClick(l)} style={{
              border: "none", padding: "0.5rem 1rem", borderRadius: "6px",
              fontSize: "0.85rem", fontWeight: page === l ? "600" : "400",
              color: page === l ? C.green : "rgba(255,255,255,0.65)",
              background: page === l ? "rgba(0,192,127,0.12)" : "transparent",
              transition: "all 0.18s",
            }}>{l}</button>
          ))}
          <button className="green-btn" onClick={() => handleNavClick("Contact")} style={{
            marginLeft: "0.75rem", background: C.green, color: C.dark,
            border: "none", padding: "0.5rem 1.25rem", borderRadius: "8px",
            fontWeight: "700", fontSize: "0.85rem", transition: "all 0.2s",
          }}>Get Started</button>
        </div>

        {/* Mobile Hamburger Button - Right */}
        <button 
          onClick={handleMenuToggle}
          className="mobile-hamburger"
          style={{
            background: "transparent", 
            border: "none", 
            color: C.white,
            fontSize: "1.5rem", 
            cursor: "pointer", 
            padding: "0.5rem",
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s ease",
            flexShrink: 0,
          }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay + Menu */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={handleOverlayClick}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(4px)",
              zIndex: 99,
              top: "68px",
              animation: "fadeIn 0.3s ease",
            }}
          />
          
          {/* Slide-in Menu */}
          <div
            style={{
              position: "fixed",
              top: "68px",
              right: 0,
              width: "min(100%, 320px)",
              height: "calc(100vh - 68px)",
              background: "rgba(10,15,30,0.98)",
              backdropFilter: "blur(12px)",
              borderLeft: `1px solid ${C.borderDark}`,
              display: "flex",
              flexDirection: "column",
              padding: "1.5rem",
              gap: "0.75rem",
              zIndex: 101,
              animation: "slideInRight 0.3s ease-out",
              overflowY: "auto",
            }}
          >
            {/* Menu Items */}
            {links.map(l => (
              <button
                key={l}
                onClick={() => handleNavClick(l)}
                style={{
                  border: "none",
                  padding: "0.75rem 1.25rem",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  fontWeight: page === l ? "600" : "500",
                  color: page === l ? C.green : "rgba(255,255,255,0.75)",
                  background: page === l ? "rgba(0,192,127,0.15)" : "rgba(255,255,255,0.05)",
                  transition: "all 0.2s ease",
                  textAlign: "left",
                  cursor: "pointer",
                  minHeight: "44px",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  if (page !== l) {
                    e.target.style.background = "rgba(255,255,255,0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (page !== l) {
                    e.target.style.background = "rgba(255,255,255,0.05)";
                  }
                }}
              >
                {l}
              </button>
            ))}

            {/* Divider */}
            <div style={{ height: "1px", background: C.borderDark, margin: "0.5rem 0" }} />

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick("Contact")}
              style={{
                background: C.green,
                color: C.dark,
                border: "none",
                padding: "0.95rem 1.25rem",
                borderRadius: "10px",
                fontWeight: "700",
                fontSize: "0.95rem",
                transition: "all 0.2s ease",
                cursor: "pointer",
                minHeight: "44px",
                marginTop: "0.5rem",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = C.greenMid;
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = C.green;
                e.target.style.transform = "translateY(0)";
              }}
            >
              Get Started →
            </button>
          </div>
        </>
      )}
    </>
  );
}
