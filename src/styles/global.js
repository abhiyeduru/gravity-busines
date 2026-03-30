import { C } from "../constants/colors";

export const css = `@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600;700&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Outfit', sans-serif; background: ${C.offWhite}; }
button { cursor: pointer; font-family: 'Outfit', sans-serif; }
a { text-decoration: none; }
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes pulse-green {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0,192,127,0.4); }
  50% { box-shadow: 0 0 0 12px rgba(0,192,127,0); }
}
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.fade-up { animation: fadeUp 0.5s ease both; }
.fade-up-1 { animation: fadeUp 0.5s 0.1s ease both; }
.fade-up-2 { animation: fadeUp 0.5s 0.2s ease both; }
.fade-up-3 { animation: fadeUp 0.5s 0.3s ease both; }
.card-hover { transition: transform 0.22s ease, box-shadow 0.22s ease; }
.card-hover:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,192,127,0.12); }
.green-btn:hover { background: ${C.greenMid} !important; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,192,127,0.4) !important; }
.dark-btn:hover { background: rgba(255,255,255,0.12) !important; }
.nav-link:hover { color: ${C.green} !important; }
.marquee-track { display: flex; animation: marquee 28s linear infinite; width: max-content; }
.marquee-wrap { overflow: hidden; }

/* Mobile Responsive */
@media (max-width: 768px) {
  body { font-size: 14px; }
  
  /* Navigation */
  nav { padding: 0 1rem !important; height: 60px !important; }
  nav > div:first-child { gap: 6px !important; }
  nav > div:first-child > div:first-child { width: 32px !important; height: 32px !important; font-size: 0.9rem !important; }
  nav > div:first-child > div:last-child > div:first-child { font-size: 0.9rem !important; }
  nav > div:first-child > div:last-child > div:last-child { font-size: 0.5rem !important; }
  nav > div:last-child { gap: 0.1rem !important; }
  nav button { padding: 0.4rem 0.8rem !important; font-size: 0.75rem !important; }
  
  /* Hero Section */
  div[style*="minHeight: 580px"] { padding: 3rem 1.5rem 3rem !important; }
  h1 { font-size: clamp(1.5rem, 3vw, 2.5rem) !important; }
  
  /* Grid Layouts */
  div[style*="gridTemplateColumns: 1fr 1fr"] { grid-template-columns: 1fr !important; gap: 2rem !important; }
  div[style*="gridTemplateColumns: repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
  div[style*="gridTemplateColumns: repeat(auto-fit, minmax(220px, 1fr))"] { grid-template-columns: 1fr !important; }
  div[style*="gridTemplateColumns: repeat(auto-fit, minmax(280px, 1fr))"] { grid-template-columns: 1fr !important; }
  div[style*="gridTemplateColumns: repeat(auto-fit, minmax(320px, 1fr))"] { grid-template-columns: 1fr !important; }
  div[style*="gridTemplateColumns: repeat(auto-fit, minmax(240px, 1fr))"] { grid-template-columns: 1fr !important; }
  div[style*="gridTemplateColumns: 2fr repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
  
  /* Padding & Margins */
  div[style*="padding: 5rem"] { padding: 2.5rem 1.5rem !important; }
  div[style*="padding: 4rem"] { padding: 2rem 1.5rem !important; }
  div[style*="padding: 3.5rem"] { padding: 2rem 1.5rem !important; }
  
  /* Typography */
  h2 { font-size: 1.8rem !important; }
  h3 { font-size: 1.3rem !important; }
  p { font-size: 0.9rem !important; }
  
  /* Buttons */
  button { padding: 0.75rem 1.5rem !important; font-size: 0.85rem !important; }
  
  /* Forms */
  input, select, textarea { font-size: 16px !important; padding: 0.8rem !important; }
  div[style*="gridTemplateColumns: 1fr 1fr"] input { grid-column: 1 / -1 !important; }
  
  /* Footer */
  footer { padding: 2rem 1.5rem 1rem !important; }
  div[style*="gridTemplateColumns: 2fr repeat(3, 1fr)"] { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
  
  /* Marquee */
  .marquee-track span { padding: 0 1rem !important; font-size: 0.75rem !important; }
  
  /* Cards */
  div[style*="borderRadius: 16px"] { padding: 1.25rem !important; }
  div[style*="borderRadius: 18px"] { padding: 1.5rem !important; }
  div[style*="borderRadius: 20px"] { padding: 1.5rem !important; }
}

@media (max-width: 480px) {
  body { font-size: 13px; }
  
  /* Navigation */
  nav { padding: 0 0.75rem !important; height: 56px !important; }
  nav > div:first-child > div:first-child { width: 28px !important; height: 28px !important; }
  nav > div:last-child { display: none !important; }
  
  /* Hero Section */
  div[style*="minHeight: 580px"] { padding: 2rem 1rem 2rem !important; }
  h1 { font-size: clamp(1.2rem, 2.5vw, 2rem) !important; line-height: 1.2 !important; }
  
  /* All Grids to Single Column */
  div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
  
  /* Padding */
  div[style*="padding: 5rem"] { padding: 1.5rem 1rem !important; }
  div[style*="padding: 4rem"] { padding: 1.5rem 1rem !important; }
  div[style*="padding: 3.5rem"] { padding: 1.5rem 1rem !important; }
  
  /* Typography */
  h2 { font-size: 1.5rem !important; }
  h3 { font-size: 1.1rem !important; }
  p { font-size: 0.85rem !important; }
  
  /* Buttons */
  button { padding: 0.7rem 1.2rem !important; font-size: 0.8rem !important; width: 100% !important; }
  
  /* Forms */
  input, select, textarea { font-size: 16px !important; padding: 0.75rem !important; }
  
  /* Footer */
  footer { padding: 1.5rem 1rem 0.75rem !important; }
  
  /* Cards */
  div[style*="borderRadius: 14px"] { padding: 1rem !important; }
  div[style*="borderRadius: 16px"] { padding: 1rem !important; }
  div[style*="borderRadius: 18px"] { padding: 1.25rem !important; }
  div[style*="borderRadius: 20px"] { padding: 1.25rem !important; }
  
  /* Hide on mobile */
  div[style*="display: flex"][style*="gap: 3rem"] { flex-direction: column !important; gap: 1.5rem !important; }
}
`;
