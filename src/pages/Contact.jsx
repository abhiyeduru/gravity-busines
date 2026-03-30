import { useState } from "react";
import { C } from "../constants/colors";

export default function Contact() {
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "", service: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const submit = () => {
    if (form.name && form.phone) setSent(true);
  };

  return (
    <div style={{ paddingTop: "68px" }}>
      <div style={{
        background: C.dark, padding: "5rem 2.5rem 4rem", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(rgba(0,192,127,0.04) 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: "0.75rem", color: C.green, fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>Get In Touch</div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", color: C.white, fontSize: "3rem", fontWeight: "800", marginBottom: "0.75rem" }}>Let's Grow Your<br /><span style={{ color: C.green }}>Business Together</span></h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", maxWidth: "460px", margin: "0 auto" }}>Book a free strategy call or drop us a message — we'll get back within 24 hours.</p>
        </div>
      </div>
      <div style={{ height: "3px", background: `linear-gradient(90deg, ${C.dark}, ${C.green}, ${C.dark})` }} />
      <div style={{ maxWidth: "1060px", margin: "0 auto", padding: "4rem 2.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[["📞", C.green, "Call / WhatsApp", "+91 XXXXX XXXXX"],["✉️", C.blue, "Email", "hello@instbusinessgrow.com"],["🌐", C.purple, "Website", "www.instbusinessgrow.com"],["📍", C.accent, "Location", "Hyderabad, Telangana, India"],].map(([icon, color, label, val]) => (
              <div key={label} style={{
                background: C.white, borderRadius: "14px", padding: "1.4rem",
                border: `1px solid ${C.border}`, borderLeft: `4px solid ${color}`,
                display: "flex", gap: "1rem", alignItems: "flex-start",
              }}>
                <div style={{
                  width: "42px", height: "42px", borderRadius: "10px",
                  background: `${color}14`, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "1.2rem", flexShrink: 0,
                }}>{icon}</div>
                <div>
                  <div style={{ fontSize: "0.72rem", color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.2rem" }}>{label}</div>
                  <div style={{ color: C.dark, fontWeight: "600", fontSize: "0.9rem" }}>{val}</div>
                </div>
              </div>
            ))}
            <div style={{ background: C.dark, borderRadius: "16px", padding: "1.75rem", border: `1px solid rgba(0,192,127,0.2)` }}>
              <div style={{ fontFamily: "'Syne', sans-serif", color: C.green, fontWeight: "700", fontSize: "1rem", marginBottom: "0.5rem" }}>Free Strategy Call</div>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>Book a 30-minute call with our growth expert. We'll audit your current marketing and present a custom growth plan — completely free.</p>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {[["📱", "Instagram"], ["👥", "Facebook"], ["💼", "LinkedIn"]].map(([icon, label]) => (
                  <div key={label} style={{
                    flex: 1, background: "rgba(0,192,127,0.1)", border: `1px solid ${C.border}`,
                    borderRadius: "10px", padding: "0.7rem 0.5rem", textAlign: "center",
                  }}>
                    <div style={{ fontSize: "1.1rem" }}>{icon}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.65rem", marginTop: "0.25rem" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: C.white, borderRadius: "20px", padding: "2.25rem",
            border: `1px solid ${C.border}`, borderTop: `4px solid ${C.green}`,
          }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "2.5rem 1rem" }}>
                <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🚀</div>
                <div style={{ fontFamily: "'Syne', sans-serif", color: C.dark, fontSize: "1.5rem", fontWeight: "800", marginBottom: "0.5rem" }}>You're All Set!</div>
                <div style={{ color: C.textMuted, fontSize: "0.9rem", lineHeight: 1.6 }}>Thanks, {form.name}! Our growth expert will contact you within 24 hours with a custom plan for your business.</div>
                <button onClick={() => { setSent(false); setForm({ name: "", business: "", phone: "", email: "", service: "", budget: "", message: "" }); }} style={{
                  marginTop: "1.5rem", background: C.green, color: C.dark,
                  border: "none", padding: "0.75rem 1.75rem", borderRadius: "10px",
                  fontWeight: "700", fontSize: "0.9rem",
                }}>Submit Another →</button>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: "'Syne', sans-serif", color: C.dark, fontSize: "1.35rem", fontWeight: "800", marginBottom: "1.75rem" }}>Get Your Free Growth Plan</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  {[["name", "Your Name *", "text"], ["business", "Business Name", "text"]].map(([key, label, type]) => (
                    <div key={key}>
                      <label style={{ display: "block", fontSize: "0.72rem", color: C.textMuted, marginBottom: "0.3rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</label>
                      <input type={type} value={form[key]} onChange={e => handle(key, e.target.value)} style={{ width: "100%", padding: "0.7rem 0.9rem", borderRadius: "8px", border: `1px solid ${C.border}`, background: C.offWhite, fontSize: "0.9rem", color: C.text, outline: "none", fontFamily: "'Outfit', sans-serif" }} />
                    </div>
                  ))}
                </div>
                {[["phone", "Phone Number *", "tel"], ["email", "Email Address", "email"]].map(([key, label, type]) => (
                  <div key={key} style={{ marginBottom: "1rem" }}>
                    <label style={{ display: "block", fontSize: "0.72rem", color: C.textMuted, marginBottom: "0.3rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</label>
                    <input type={type} value={form[key]} onChange={e => handle(key, e.target.value)} style={{ width: "100%", padding: "0.7rem 0.9rem", borderRadius: "8px", border: `1px solid ${C.border}`, background: C.offWhite, fontSize: "0.9rem", color: C.text, outline: "none", fontFamily: "'Outfit', sans-serif" }} />
                  </div>
                ))}
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", fontSize: "0.72rem", color: C.textMuted, marginBottom: "0.3rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.06em" }}>Service Interested In</label>
                  <select value={form.service} onChange={e => handle("service", e.target.value)} style={{ width: "100%", padding: "0.7rem 0.9rem", borderRadius: "8px", border: `1px solid ${C.border}`, background: C.offWhite, fontSize: "0.9rem", color: form.service ? C.text : C.textMuted, fontFamily: "'Outfit', sans-serif" }}>
                    <option value="">Select a service…</option>
                    {["Google Ads", "Meta Ads", "SEO", "Social Media Management", "WhatsApp Marketing", "Website Development", "Brand Design", "Full Package — All Services"].map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", fontSize: "0.72rem", color: C.textMuted, marginBottom: "0.3rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.06em" }}>Monthly Budget</label>
                  <select value={form.budget} onChange={e => handle("budget", e.target.value)} style={{ width: "100%", padding: "0.7rem 0.9rem", borderRadius: "8px", border: `1px solid ${C.border}`, background: C.offWhite, fontSize: "0.9rem", color: form.budget ? C.text : C.textMuted, fontFamily: "'Outfit', sans-serif" }}>
                    <option value="">Select budget range…</option>
                    {["Under ₹10,000", "₹10,000 – ₹25,000", "₹25,000 – ₹50,000", "₹50,000 – ₹1,00,000", "Above ₹1,00,000"].map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", fontSize: "0.72rem", color: C.textMuted, marginBottom: "0.3rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.06em" }}>Tell us about your business</label>
                  <textarea value={form.message} onChange={e => handle("message", e.target.value)} rows={3} style={{ width: "100%", padding: "0.7rem 0.9rem", borderRadius: "8px", border: `1px solid ${C.border}`, background: C.offWhite, fontSize: "0.9rem", color: C.text, resize: "vertical", fontFamily: "'Outfit', sans-serif" }} placeholder="What does your business do? What are your growth goals?" />
                </div>
                <button className="green-btn" onClick={submit} style={{
                  width: "100%", background: C.green, color: C.dark, border: "none",
                  padding: "0.95rem", borderRadius: "10px", fontWeight: "700",
                  fontSize: "1rem", transition: "all 0.2s",
                }}>Get My Free Growth Plan →</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
