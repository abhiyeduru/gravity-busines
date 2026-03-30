import { C } from "../constants/colors";

export default function HowItWorks({ setPage }) {
  const steps = [
    { num: "01", icon: "🤝", color: C.green, title: "Discovery Call", sub: "Understanding Your Business", desc: "We start with a free 30-minute strategy call to understand your business goals, target audience, current challenges, and growth opportunities." },
    { num: "02", icon: "📋", color: C.blue, title: "Custom Growth Plan", sub: "Strategy & Roadmap", desc: "Our team builds a tailored digital growth plan — choosing the right channels, setting realistic KPIs, and mapping out a full-funnel strategy for your business." },
    { num: "03", icon: "🎨", color: C.purple, title: "Creative & Setup", sub: "Ads, Content & Tech", desc: "We create all the assets — ad creatives, landing pages, email sequences, social content — and set up tracking, CRM, and automation systems." },
    { num: "04", icon: "🚀", color: C.accent, title: "Launch Campaigns", sub: "Go Live in 48 Hours", desc: "Your campaigns go live across Google, Meta, social media, WhatsApp, and other channels. We monitor everything in real-time from day one." },
    { num: "05", icon: "📊", color: C.yellow, title: "Optimize & Scale", sub: "Data-Driven Improvement", desc: "We continuously A/B test, refine targeting, adjust bids, and scale winning campaigns — squeezing more performance from every rupee spent." },
    { num: "06", icon: "📈", color: C.green, title: "Report & Grow", sub: "Transparent Results", desc: "Weekly reports and monthly reviews keep you fully informed. You see exactly what's working, what ROI you're getting, and the roadmap for next month." },
  ];

  return (
    <div style={{ paddingTop: "68px" }}>
      <div style={{
        background: C.dark, padding: "5rem 2.5rem 4rem", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(rgba(0,192,127,0.04) 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: "0.75rem", color: C.green, fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>Our Process</div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", color: C.white, fontSize: "3rem", fontWeight: "800", marginBottom: "0.75rem" }}>How We Grow<br /><span style={{ color: C.green }}>Your Business</span></h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", maxWidth: "500px", margin: "0 auto" }}>A proven 6-step process from first call to ongoing growth — fully transparent, fully managed.</p>
        </div>
      </div>
      <div style={{ height: "3px", background: `linear-gradient(90deg, ${C.dark}, ${C.green}, ${C.dark})` }} />
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "4.5rem 2.5rem" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{ display: "flex", gap: "0", alignItems: "stretch" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "68px", flexShrink: 0 }}>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "50%",
                  background: step.color, color: C.dark,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Syne', sans-serif", fontWeight: "800", fontSize: "0.85rem",
                  border: `3px solid ${C.white}`,
                  boxShadow: `0 0 0 3px ${step.color}40`,
                  zIndex: 1, flexShrink: 0,
                }}>{step.num}</div>
                {i < steps.length - 1 && (
                  <div style={{ width: "2px", flex: 1, minHeight: "40px", background: `linear-gradient(${step.color}, ${steps[i + 1].color})` }} />
                )}
              </div>
              <div className="card-hover" style={{
                flex: 1, background: C.white, borderRadius: "16px",
                padding: "1.75rem 2rem", marginLeft: "1.5rem",
                marginBottom: i < steps.length - 1 ? "1.5rem" : 0,
                border: `1px solid ${C.border}`, borderLeft: `4px solid ${step.color}`,
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                  <div style={{
                    width: "50px", height: "50px", borderRadius: "12px",
                    background: `${step.color}14`, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontSize: "1.6rem", flexShrink: 0,
                  }}>{step.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.35rem", flexWrap: "wrap" }}>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: "700", color: C.dark, fontSize: "1.05rem" }}>{step.title}</div>
                      <span style={{
                        fontSize: "0.68rem", fontWeight: "700", color: step.color,
                        background: `${step.color}12`, borderRadius: "100px",
                        padding: "0.15rem 0.6rem", letterSpacing: "0.05em",
                      }}>{step.sub}</span>
                    </div>
                    <p style={{ fontSize: "0.88rem", color: C.textMuted, lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: "3.5rem", background: C.dark, borderRadius: "20px",
          padding: "2.5rem", textAlign: "center",
          border: `1px solid rgba(0,192,127,0.2)`,
        }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🚀</div>
          <div style={{ fontFamily: "'Syne', sans-serif", color: C.white, fontSize: "1.5rem", fontWeight: "800", marginBottom: "0.6rem" }}>Let's Start Your Growth Journey</div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", marginBottom: "1.75rem", maxWidth: "400px", margin: "0 auto 1.75rem" }}>Book a free strategy call and get a custom growth plan for your business in 24 hours.</div>
          <button className="green-btn" onClick={() => setPage("Contact")} style={{
            background: C.green, color: C.dark, border: "none",
            padding: "0.9rem 2.2rem", borderRadius: "10px", fontWeight: "700",
            fontSize: "0.95rem", transition: "all 0.2s",
          }}>Book Free Strategy Call →</button>
        </div>
      </div>
    </div>
  );
}
