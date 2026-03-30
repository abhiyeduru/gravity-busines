import { useState } from "react";
import { C } from "../constants/colors";

export default function Services({ setPage }) {
  const services = [
    {icon: "🎯", color: C.green, category: "Advertising", title: "Google Ads & PPC", tags: ["Search Ads", "Display Ads", "Shopping Ads", "YouTube Ads"], desc: "We manage full-funnel Google Ads campaigns — from keyword strategy and ad copy to bid optimization and landing pages. Every rupee tracked, every conversion measured."},
    {icon: "📘", color: C.blue, category: "Advertising", title: "Meta & Social Ads", tags: ["Facebook Ads", "Instagram Ads", "Reels Ads", "Audience Targeting"], desc: "Hyper-targeted Meta ad campaigns designed to reach your ideal customers. We handle creative, targeting, A/B testing, and scaling for maximum ROAS."},
    {icon: "🔍", color: C.purple, category: "Organic Growth", title: "SEO & Content Marketing", tags: ["On-page SEO", "Off-page SEO", "Blog Content", "Keyword Research"], desc: "Long-term organic growth through technical SEO, authority building, and content that ranks. We make your business the first thing people see when they search."},
    {icon: "📱", color: C.accent, category: "Social Media", title: "Social Media Management", tags: ["Instagram", "Facebook", "LinkedIn", "YouTube"], desc: "Full-service social media management — content calendars, post design, copywriting, community management, and monthly analytics reports."},
    {icon: "💬", color: "#00BCD4", category: "Direct Marketing", title: "WhatsApp & SMS Marketing", tags: ["WhatsApp API", "Bulk Campaigns", "Chatbots", "Lead Nurturing"], desc: "Reach customers where they actually read messages. We set up WhatsApp Business API, automated flows, bulk campaigns, and chatbots that convert."},
    {icon: "✉️", color: C.yellow, category: "Direct Marketing", title: "Email Marketing", tags: ["Drip Campaigns", "Newsletters", "Automation", "Segmentation"], desc: "High-converting email campaigns with beautiful templates, smart segmentation, and automated sequences that nurture leads into loyal customers."},
    {icon: "🌐", color: C.green, category: "Web & Tech", title: "Website Development", tags: ["Landing Pages", "Business Websites", "E-Commerce", "Speed Optimization"], desc: "Fast, mobile-optimized websites and landing pages built to convert. From one-page lead gen sites to full e-commerce platforms."},
    {icon: "🎨", color: C.accent, category: "Branding", title: "Brand Design & Creatives", tags: ["Logo Design", "Brand Identity", "Ad Creatives", "Video Reels"], desc: "Stand-out visual identity and scroll-stopping ad creatives. Our design team produces graphics, videos, and brand assets that make you memorable."},
    {icon: "⚙️", color: C.purple, category: "Automation", title: "CRM & Lead Automation", tags: ["CRM Setup", "Lead Tracking", "Auto Follow-ups", "Pipeline Management"], desc: "Never lose a lead again. We set up CRM systems, automated follow-up sequences, and sales pipelines that keep your team closing deals consistently."},
    {icon: "📊", color: C.blue, category: "Analytics", title: "Business Analytics & Reporting", tags: ["Google Analytics", "Dashboards", "ROI Reports", "Insights"], desc: "Real-time dashboards and weekly performance reports that show exactly what's working. We turn data into decisions that grow your bottom line."},
    {icon: "🎬", color: "#E91E63", category: "Content", title: "Video Marketing & Reels", tags: ["Short Videos", "Reels", "YouTube", "Testimonials"], desc: "Engaging video content for Instagram Reels, YouTube, and ad campaigns. We handle script, shoot guidance, editing, and distribution."},
    {icon: "📣", color: C.yellow, category: "Promotions", title: "Offers, Promotions & Campaigns", tags: ["Festive Campaigns", "Flash Offers", "Contest Marketing", "Influencer Tie-ins"], desc: "Seasonal campaigns, festive offers, and viral promotions designed to drive a surge in enquiries, walk-ins, and sales at key business moments."},
  ];

  const categories = [...new Set(services.map(s => s.category))];
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? services : services.filter(s => s.category === active);

  return (
    <div style={{ paddingTop: "68px" }}>
      <div style={{
        background: C.dark, padding: "5rem 2.5rem 4rem", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(rgba(0,192,127,0.04) 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: "0.75rem", color: C.green, fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>Complete Solutions</div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", color: C.white, fontSize: "3rem", fontWeight: "800", marginBottom: "0.75rem" }}>Our Services</h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", maxWidth: "500px", margin: "0 auto" }}>12 end-to-end growth services covering every channel, every touchpoint, every stage of your customer's journey.</p>
        </div>
      </div>
      <div style={{ height: "3px", background: `linear-gradient(90deg, ${C.dark}, ${C.green}, ${C.dark})` }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2.5rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "3rem" }}>
          {["All", ...categories].map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              border: `1px solid ${active === cat ? C.green : C.border}`,
              background: active === cat ? C.greenPale : C.white,
              color: active === cat ? C.greenDark : C.textMuted,
              padding: "0.5rem 1.2rem", borderRadius: "100px",
              fontWeight: active === cat ? "700" : "400", fontSize: "0.84rem",
              transition: "all 0.18s", cursor: "pointer",
            }}>{cat}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {filtered.map(({ icon, color, category, title, tags, desc }) => (
            <div key={title} className="card-hover" style={{
              background: C.white, borderRadius: "18px", padding: "2rem",
              border: `1px solid ${C.border}`, borderTop: `4px solid ${color}`,
              display: "flex", flexDirection: "column", gap: "1rem",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{
                  width: "54px", height: "54px", borderRadius: "14px",
                  background: `${color}14`, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "1.6rem",
                }}>{icon}</div>
                <span style={{
                  fontSize: "0.68rem", fontWeight: "700", color,
                  background: `${color}12`, borderRadius: "100px",
                  padding: "0.2rem 0.7rem", letterSpacing: "0.06em", textTransform: "uppercase",
                }}>{category}</span>
              </div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: "700", color: C.dark, fontSize: "1.1rem" }}>{title}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {tags.map(t => (
                  <span key={t} style={{
                    fontSize: "0.7rem", color: C.textMid, background: C.offWhite,
                    borderRadius: "6px", padding: "0.2rem 0.55rem", border: `1px solid ${C.border}`,
                  }}>{t}</span>
                ))}
              </div>
              <p style={{ fontSize: "0.88rem", color: C.textMuted, lineHeight: 1.7, margin: 0, flex: 1 }}>{desc}</p>
              <button onClick={() => setPage("Contact")} style={{
                background: C.offWhite, color, border: `1px solid ${color}30`,
                borderRadius: "8px", padding: "0.6rem 1rem", fontWeight: "600",
                fontSize: "0.82rem", transition: "all 0.15s", alignSelf: "flex-start",
              }}>Enquire →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
