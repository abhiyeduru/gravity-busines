import { useState } from "react";
import { C } from "../constants/colors";

function QuickContactForm({ setPage }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = () => {
    if (form.name && form.phone) {
      const message = `Hi, I'm ${form.name}. I'd like to discuss growth strategies for my business. My phone: ${form.phone}`;
      const whatsappUrl = `https://wa.me/919381791038?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      setSubmitted(true);
      setTimeout(() => {
        setForm({ name: "", phone: "", email: "" });
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
    <div style={{
      background: C.darkCard, borderRadius: "20px", padding: "2.5rem",
      border: `1px solid rgba(0,192,127,0.2)`,
    }}>
      {submitted ? (
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>✓</div>
          <div style={{ color: C.green, fontWeight: "700", fontSize: "1.1rem" }}>Opening WhatsApp...</div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginTop: "0.5rem" }}>We'll connect with you shortly!</div>
        </div>
      ) : (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", marginBottom: "0.4rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>Your Name *</label>
              <input type="text" value={form.name} onChange={e => handle("name", e.target.value)} style={{ width: "100%", padding: "0.75rem 0.9rem", borderRadius: "8px", border: `1px solid ${C.border}`, background: "rgba(255,255,255,0.05)", fontSize: "0.9rem", color: C.white, outline: "none", fontFamily: "'Outfit', sans-serif" }} placeholder="John Doe" />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", marginBottom: "0.4rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>Phone *</label>
              <input type="tel" value={form.phone} onChange={e => handle("phone", e.target.value)} style={{ width: "100%", padding: "0.75rem 0.9rem", borderRadius: "8px", border: `1px solid ${C.border}`, background: "rgba(255,255,255,0.05)", fontSize: "0.9rem", color: C.white, outline: "none", fontFamily: "'Outfit', sans-serif" }} placeholder="+91 98765 43210" />
            </div>
          </div>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", marginBottom: "0.4rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email</label>
            <input type="email" value={form.email} onChange={e => handle("email", e.target.value)} style={{ width: "100%", padding: "0.75rem 0.9rem", borderRadius: "8px", border: `1px solid ${C.border}`, background: "rgba(255,255,255,0.05)", fontSize: "0.9rem", color: C.white, outline: "none", fontFamily: "'Outfit', sans-serif" }} placeholder="you@example.com" />
          </div>
          <button className="green-btn" onClick={submit} style={{
            width: "100%", background: C.green, color: C.dark, border: "none",
            padding: "0.95rem", borderRadius: "10px", fontWeight: "700",
            fontSize: "0.95rem", transition: "all 0.2s",
          }}>Connect on WhatsApp →</button>
          <div style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>We'll reach out within 24 hours</div>
        </>
      )}
    </div>
  );
}

export default function Home({ setPage }) {
  const marqueeItems = ["Google Ads", "Meta Ads", "SEO", "Social Media Marketing", "WhatsApp Campaigns", "Brand Strategy", "Lead Generation", "Content Marketing", "Website Development", "Email Marketing", "Video Ads", "Promotions"];

  return (
    <div style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <div style={{
        background: C.dark, padding: "5.5rem 2.5rem 5rem",
        position: "relative", overflow: "hidden", minHeight: "580px",
        display: "flex", alignItems: "center",
      }}>
        <div style={{ position: "absolute", top: "-100px", left: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,192,127,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none" }} />
        
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div className="fade-up" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(0,192,127,0.1)", border: `1px solid rgba(0,192,127,0.3)`,
                borderRadius: "100px", padding: "0.35rem 1rem", marginBottom: "1.75rem",
              }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: C.green, animation: "pulse-green 1.5s infinite", flexShrink: 0 }} />
                <span style={{ fontSize: "0.72rem", color: C.green, fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase" }}>End-to-End Business Growth</span>
              </div>
              <h1 className="fade-up-1" style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: "800",
                color: C.white, lineHeight: 1.1, marginBottom: "1.25rem",
              }}>We Grow Your<br /><span style={{ color: C.green }}>Business</span> with<br />Digital Power</h1>
              <p className="fade-up-2" style={{
                color: "rgba(255,255,255,0.55)", fontSize: "1rem",
                lineHeight: 1.75, marginBottom: "2.25rem", maxWidth: "440px",
              }}>From Google Ads to brand building, social media to lead generation — InstBusinessGrow delivers complete digital solutions that drive real, measurable results.</p>
              <div className="fade-up-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className="green-btn" onClick={() => setPage("Contact")} style={{
                  background: C.green, color: C.dark, border: "none",
                  padding: "0.9rem 2rem", borderRadius: "10px", fontWeight: "700",
                  fontSize: "0.95rem", transition: "all 0.2s",
                }}>Start Growing →</button>
                <button className="dark-btn" onClick={() => setPage("Services")} style={{
                  background: "rgba(255,255,255,0.07)", color: C.white,
                  border: "1px solid rgba(255,255,255,0.15)",
                  padding: "0.9rem 2rem", borderRadius: "10px", fontWeight: "500",
                  fontSize: "0.95rem", transition: "all 0.2s",
                }}>Our Services</button>
              </div>
            </div>

            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[["500+", "Businesses Grown", C.green],["10x", "Average ROI", C.accent],["15+", "Service Verticals", C.blue],["5★", "Client Satisfaction", C.yellow],].map(([val, label, color]) => (
                <div key={label} style={{
                  background: C.darkCard, borderRadius: "16px", padding: "1.75rem",
                  border: `1px solid ${C.borderDark}`, borderTop: `3px solid ${color}`,
                  animation: "float 4s ease-in-out infinite",
                  animationDelay: label.length % 3 === 0 ? "1s" : "0s",
                }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "2rem", fontWeight: "800", color, marginBottom: "0.35rem" }}>{val}</div>
                  <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div style={{ background: C.green, padding: "0.9rem 0", overflow: "hidden" }}>
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} style={{ whiteSpace: "nowrap", padding: "0 2.5rem", fontSize: "0.85rem", fontWeight: "600", color: C.dark, letterSpacing: "0.04em" }}>⚡ {item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div style={{ background: C.offWhite, padding: "5rem 2.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "0.75rem", color: C.green, fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.6rem" }}>Success Stories</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.4rem", color: C.dark, fontWeight: "800" }}>See How We've Transformed Businesses</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginBottom: "1.5rem" }}>
            {[
              "https://www.youtube.com/embed/dQw4w9WgXcQ",
              "https://www.youtube.com/embed/dQw4w9WgXcQ",
              "https://www.youtube.com/embed/dQw4w9WgXcQ",
            ].map((videoId, i) => (
              <div key={i} className="card-hover" style={{
                borderRadius: "16px", overflow: "hidden",
                border: `1px solid ${C.border}`, aspectRatio: "16/9",
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={videoId}
                  title={`Success Story ${i + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ display: "block" }}
                />
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {[
              "https://www.youtube.com/embed/dQw4w9WgXcQ",
              "https://www.youtube.com/embed/dQw4w9WgXcQ",
              "https://www.youtube.com/embed/dQw4w9WgXcQ",
            ].map((videoId, i) => (
              <div key={i + 3} className="card-hover" style={{
                borderRadius: "16px", overflow: "hidden",
                border: `1px solid ${C.border}`, aspectRatio: "16/9",
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={videoId}
                  title={`Success Story ${i + 4}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Contact Form */}
      <div style={{ background: C.dark, padding: "5rem 2.5rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div style={{ fontSize: "0.75rem", color: C.green, fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.6rem" }}>Quick Connect</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2rem", color: C.white, fontWeight: "800", marginBottom: "0.75rem" }}>Get Your Free Strategy Call</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem" }}>Share your details and we'll connect with you on WhatsApp within 24 hours</p>
          </div>
          <QuickContactForm setPage={setPage} />
        </div>
      </div>

      {/* Services Snapshot */}
      <div style={{ background: C.offWhite, padding: "5rem 2.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "0.75rem", color: C.green, fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.6rem" }}>What We Do</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.4rem", color: C.dark, fontWeight: "800" }}>Everything Your Business Needs to Grow</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {[["🎯", C.green, "Paid Ads", "Google, Meta, YouTube — high-ROI ad campaigns."],["📈", C.blue, "SEO & Organic", "Rank higher, get found, drive consistent traffic."],["📱", C.purple, "Social Media", "Build communities and convert followers to customers."],["✉️", C.accent, "WhatsApp & Email", "Direct, personalized campaigns with high open rates."],["🌐", "#00BCD4", "Website & Landing Pages", "Fast, conversion-optimized digital properties."],["🎨", C.yellow, "Brand & Creatives", "Logo, identity, ad creatives, and video content."],["📊", C.green, "Analytics & Reporting", "Real-time dashboards and ROI tracking."],["⚙️", C.accent, "CRM & Automation", "Lead tracking, follow-ups, and sales funnel automation."],].map(([icon, color, title, desc]) => (
              <div key={title} className="card-hover" style={{
                background: C.white, borderRadius: "14px", padding: "1.5rem",
                border: `1px solid ${C.border}`, textAlign: "center",
              }}>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "14px",
                  background: `${color}18`, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "1.5rem", margin: "0 auto 1rem",
                }}>{icon}</div>
                <div style={{ fontWeight: "700", color: C.dark, fontSize: "0.95rem", marginBottom: "0.4rem" }}>{title}</div>
                <div style={{ fontSize: "0.82rem", color: C.textMuted, lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <button className="green-btn" onClick={() => setPage("Services")} style={{
              background: C.green, color: C.dark, border: "none",
              padding: "0.85rem 2.2rem", borderRadius: "10px", fontWeight: "700",
              fontSize: "0.95rem", transition: "all 0.2s",
            }}>Explore All Services →</button>
          </div>
        </div>
      </div>

      {/* Why Us */}
      <div style={{ background: C.dark, padding: "5rem 2.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "0.75rem", color: C.green, fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.6rem" }}>Why InstBusinessGrow</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.4rem", color: C.white, fontWeight: "800" }}>The Unfair Advantage<br /><span style={{ color: C.green }}>for Your Business</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[["🔁", C.green, "End-to-End Execution", "We don't just plan — we execute, monitor, and optimize everything from day one to final conversion."],["📊", C.blue, "Data-Driven Decisions", "Every campaign is backed by real analytics. No guesswork — just results that are tracked and improved continuously."],["🚀", C.accent, "Fast Time-to-Market", "Your campaigns go live within 48 hours. We move fast and keep your pipeline always full."],["🤝", C.purple, "Dedicated Account Team", "You get a dedicated manager who knows your business, your goals, and your target customers."],["💰", C.yellow, "Performance-Focused", "We optimize for revenue, not just clicks. Every rupee you spend is tracked back to real business outcomes."],["🔒", C.green, "Transparent Reporting", "Weekly reports, real-time dashboards, and full visibility into what's working and what we're improving."],].map(([icon, color, title, desc]) => (
              <div key={title} className="card-hover" style={{
                background: C.darkCard, borderRadius: "16px", padding: "1.75rem",
                border: `1px solid ${C.borderDark}`,
              }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.85rem" }}>{icon}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: "700", color, fontSize: "1rem", marginBottom: "0.5rem" }}>{title}</div>
                <div style={{ fontSize: "0.86rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA band */}
      <div style={{
        background: `linear-gradient(135deg, ${C.greenDark} 0%, ${C.green} 60%, #00E5A0 100%)`,
        padding: "4rem 2.5rem", textAlign: "center",
      }}>
        <h3 style={{ fontFamily: "'Syne', sans-serif", color: C.dark, fontSize: "2rem", fontWeight: "800", marginBottom: "0.75rem" }}>Ready to 10x Your Business Growth?</h3>
        <p style={{ color: "rgba(10,15,30,0.65)", marginBottom: "2rem", fontSize: "1rem" }}>Let's build your growth engine together — talk to our team today.</p>
        <button className="green-btn" onClick={() => setPage("Contact")} style={{
          background: C.dark, color: C.white, border: "none",
          padding: "1rem 2.5rem", borderRadius: "10px", fontWeight: "700",
          fontSize: "1rem", transition: "all 0.2s",
        }}>Book a Free Strategy Call →</button>
      </div>
    </div>
  );
}
