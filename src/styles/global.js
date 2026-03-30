import { C } from "../constants/colors";

export const css = `@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600;700&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
html { box-sizing: border-box; touch-action: manipulation; }
body { 
  font-family: 'Outfit', sans-serif; 
  background: ${C.offWhite};
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}
button { 
  cursor: pointer; 
  font-family: 'Outfit', sans-serif;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
}
a { text-decoration: none; }
input, textarea, select { -webkit-user-select: text; }

/* Keyframe Animations */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideInRight {
  from { 
    transform: translateX(100%);
    opacity: 0;
  }
  to { 
    transform: translateX(0);
    opacity: 1;
  }
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
@keyframes tapScale {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.98); }
}

/* Utility Classes */
.fade-up { animation: fadeUp 0.5s ease both; }
.fade-up-1 { animation: fadeUp 0.5s 0.1s ease both; }
.fade-up-2 { animation: fadeUp 0.5s 0.2s ease both; }
.fade-up-3 { animation: fadeUp 0.5s 0.3s ease both; }

.card-hover { 
  transition: transform 0.22s ease, box-shadow 0.22s ease; 
}
.card-hover:hover { 
  transform: translateY(-5px); 
  box-shadow: 0 16px 40px rgba(0,192,127,0.12);
}
@media (max-width: 768px) {
  .card-hover:active {
    animation: tapScale 0.2s ease;
  }
}

.green-btn:hover { 
  background: ${C.greenMid} !important; 
  transform: translateY(-1px); 
  box-shadow: 0 8px 24px rgba(0,192,127,0.4) !important; 
}
@media (max-width: 768px) {
  .green-btn:active {
    transform: scale(0.97);
  }
}

.dark-btn:hover { 
  background: rgba(255,255,255,0.12) !important; 
}
.nav-link:hover { 
  color: ${C.green} !important; 
}

.marquee-track { 
  display: flex; 
  animation: marquee 28s linear infinite; 
  width: max-content; 
}
.marquee-wrap { 
  overflow: hidden; 
}

/* DESKTOP STYLES */
@media (min-width: 769px) {
  /* Show Desktop Navigation */
  .desktop-nav {
    display: flex !important;
    margin: 0 auto !important;
  }
  
  /* Show Logo Text */
  .logo-text {
    display: block !important;
  }
  
  /* Hide Mobile Hamburger */
  .mobile-hamburger {
    display: none !important;
  }
  
  /* Show stats cards on desktop */
  .stats-grid {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
  }
}

/* Mobile-Specific Base Styles */
@media (max-width: 1024px) {
  body { 
    font-size: 14px; 
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden !important;
  }
  
  /* Fix Container Overflow */
  div[style*="maxWidth: 1200px"],
  div[style*="maxWidth: 1100px"],
  div[style*="maxWidth: 1000px"],
  div[style*="maxWidth: 900px"],
  div[style*="maxWidth: 800px"],
  div[style*="maxWidth: 700px"],
  div[style*="maxWidth: 600px"] {
    max-width: 100% !important;
    width: 100% !important;
    overflow-x: visible !important;
  }
  
  /* NAVBAR - PREMIUM MOBILE */
  nav { 
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    padding: 0.5rem 0.75rem !important; 
    height: 56px !important;
    z-index: 100 !important;
    background: rgba(10,15,30,0.98) !important;
    backdrop-filter: blur(12px) !important;
    border-bottom: 1px solid rgba(255,255,255,0.08) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
  }
  
  /* Desktop Navigation - HIDE on Mobile */
  .desktop-nav {
    display: none !important;
  }
  
  /* Logo Section - Flex Start */
  nav > div:first-child { 
    gap: 6px !important;
    flex-shrink: 0;
    flex: 0 0 auto !important;
    margin-right: 0.25rem !important;
  }
  nav > div:first-child > div:first-child { 
    width: 32px !important; 
    height: 32px !important; 
    font-size: 0.85rem !important;
    flex-shrink: 0;
  }
  
  /* Logo Text - Hide on Mobile */
  .logo-text {
    display: none !important;
  }
  
  /* Mobile Hamburger - SHOW & Position RIGHT */
  .mobile-hamburger {
    display: flex !important;
    min-width: 44px !important;
    min-height: 44px !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0 !important;
    margin: 0 !important;
    position: fixed !important;
    top: 6px !important;
    right: 8px !important;
    z-index: 130 !important;
    transform: none !important;
  }
  
  /* Page Content - Add Top Padding for Fixed Navbar */
  div[style*="paddingTop: 68px"] {
    padding-top: 56px !important;
  }
  
  /* Hide Stats Cards on Mobile - CRITICAL */
  .stats-grid {
    display: none !important;
  }
  
  /* Hero Section - PREMIUM MOBILE */
  div[style*="minHeight: 580px"] { 
    padding: 2.5rem 1.25rem !important; 
    min-height: auto !important;
    width: 100% !important;
    padding-top: 1.5rem !important;
  }
  
  div[style*="gridTemplateColumns: 1fr 1fr"][style*="alignItems: center"] {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
    width: 100% !important;
  }

  .hero-shell {
    padding: 2.5rem 1.25rem 4rem !important;
  }

  .hero-grid {
    grid-template-columns: 1fr !important;
    gap: 1.75rem !important;
    width: 100% !important;
  }

  .hero-copy {
    text-align: center !important;
    max-width: 100% !important;
    margin: 0 auto !important;
  }

  .hero-title {
    font-size: clamp(2.25rem, 7.2vw, 3.4rem) !important;
    line-height: 1.08 !important;
    max-width: 14ch !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .hero-subtext {
    max-width: 34ch !important;
    margin-left: auto !important;
    margin-right: auto !important;
    font-size: 1.05rem !important;
  }

  .hero-cta {
    justify-content: center !important;
  }

  div[style*="gridTemplateColumns: 1fr 1fr"][style*="alignItems: center"] > div:first-child {
    text-align: center !important;
  }

  div[style*="gridTemplateColumns: 1fr 1fr"][style*="alignItems: center"] > div:first-child p {
    max-width: 100% !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .fade-up-3 {
    justify-content: center !important;
  }
  
  /* Typography - Mobile Optimized */
  h1 { 
    font-size: 2.4rem !important;
    line-height: 1.15 !important;
    font-weight: 800 !important;
    letter-spacing: -0.02em !important;
    margin-bottom: 1.25rem !important;
  }
  h2 { 
    font-size: 1.8rem !important;
    line-height: 1.2 !important;
    font-weight: 800 !important;
  }
  h3 { 
    font-size: 1.2rem !important; 
    font-weight: 700 !important;
  }
  p { 
    font-size: 1rem !important;
    line-height: 1.7 !important;
    letter-spacing: 0.3px !important;
  }
  
  /* Main Grid Layouts - FIX ALL */
  div[style*="gridTemplateColumns: 1fr 1fr"] { 
    grid-template-columns: 1fr !important; 
    gap: 1.5rem !important;
    width: 100% !important;
  }
  div[style*="gridTemplateColumns: repeat(3, 1fr)"] { 
    grid-template-columns: 1fr !important; 
  }
  
  /* Video/Card Grids - CRITICAL FIX */
  div[style*="gridTemplateColumns: repeat(auto-fit, minmax(220px, 1fr)"] {
    grid-template-columns: 1fr !important;
    gap: 1rem !important;
    width: 100% !important;
  }
  div[style*="gridTemplateColumns: repeat(auto-fit, minmax(240px, 1fr)"] { 
    grid-template-columns: 1fr !important;
    gap: 1.25rem !important;
    width: 100% !important;
  }
  div[style*="gridTemplateColumns: repeat(auto-fit, minmax(280px, 1fr)"] { 
    grid-template-columns: 1fr !important;
    gap: 1.25rem !important;
    width: 100% !important;
  }
  div[style*="gridTemplateColumns: repeat(auto-fit, minmax(300px, 1fr)"] { 
    grid-template-columns: 1fr !important;
    gap: 1.25rem !important;
    width: 100% !important;
  }
  div[style*="gridTemplateColumns: repeat(auto-fit, minmax(320px, 1fr)"] { 
    grid-template-columns: 1fr !important;
    gap: 1.25rem !important;
    width: 100% !important;
  }
  div[style*="gridTemplateColumns: 2fr repeat(3, 1fr)"] { 
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }
  
  /* Padding & Spacing - Optimized for Mobile */
  div[style*="padding: 5rem"] { 
    padding: 2.5rem 1.25rem !important; 
  }
  div[style*="padding: 5.5rem"] { 
    padding: 2.5rem 1.25rem !important; 
  }
  div[style*="padding: 4rem"] { 
    padding: 2rem 1.25rem !important; 
  }
  div[style*="padding: 3.5rem"] { 
    padding: 2rem 1.25rem !important; 
  }
  div[style*="padding: 3rem"] {
    padding: 1.5rem 1.25rem !important;
  }
  
  /* Buttons - Touch-Friendly & Premium */
  button { 
    min-height: 44px !important;
    min-width: 44px !important;
    padding: 0.75rem 1.5rem !important; 
    font-size: 0.85rem !important;
    transition: all 0.2s ease !important;
    border-radius: 8px !important;
  }
  button[style*="padding: 0.9rem 2rem"] {
    padding: 1rem 1.5rem !important;
    width: auto !important;
    margin-bottom: 0.5rem !important;
  }
  button[style*="padding: 0.85rem 2.2rem"] {
    width: auto !important;
  }
  
  /* Form Inputs - Touch-Friendly */
  input, select, textarea { 
    font-size: 16px !important; 
    padding: 0.8rem !important;
    line-height: 1.5;
    border-radius: 8px !important;
    min-height: 44px !important;
  }
  
  /* Form Grid - Stack on Mobile */
  div[style*="gridTemplateColumns: 1fr 1fr"][style*="marginBottom: 1rem"] {
    grid-template-columns: 1fr !important;
    gap: 1rem !important;
  }
  
  /* Video Sections - Responsive */
  iframe {
    width: 100% !important;
    height: auto !important;
  }
  div[style*="aspectRatio"] {
    aspect-ratio: 16/9 !important;
  }
  
  /* Cards - Premium Styling */
  div[style*="borderRadius: 14px"] { 
    padding: 1.25rem !important;
  }
  div[style*="borderRadius: 16px"] { 
    padding: 1.25rem !important;
  }
  div[style*="borderRadius: 18px"] { 
    padding: 1.5rem !important;
  }
  div[style*="borderRadius: 20px"] { 
    padding: 1.5rem !important;
  }
  
  /* Marquee - Mobile Text */
  .marquee-track span { 
    padding: 0 1rem !important; 
    font-size: 0.75rem !important;
  }
  
  /* Footer */
  footer { 
    padding: 2rem 1.25rem 1rem !important; 
  }
}

@media (max-width: 480px) {
  body { 
    font-size: 13px; 
  }
  
  /* Navigation - Extra Small */
  nav { 
    padding: 0 0.75rem !important; 
    height: 56px !important; 
  }
  nav > div:first-child > div:first-child { 
    width: 28px !important; 
    height: 28px !important; 
    font-size: 0.8rem !important;
  }
  
  /* Mobile Menu - Full Height */
  div[style*="position: fixed"][style*="width: min(100%"] {
    width: 100% !important;
    max-width: 100% !important;
  }
  
  /* Typography - Aggressive Scaling */
  h1 {
    font-size: clamp(1.3rem, 3.5vw, 1.8rem) !important;
    line-height: 1.15 !important;
  }
  h2 {
    font-size: clamp(1.2rem, 3vw, 1.6rem) !important;
  }
  h3 { 
    font-size: 1rem !important;
  }
  p { 
    font-size: 0.85rem !important;
    line-height: 1.55 !important;
  }
  
  /* Hero Section - Extra Compact */
  div[style*="minHeight: 580px"] { 
    padding: 2rem 1rem !important;
    min-height: auto !important;
  }
  
  /* All Grids to Single Column */
  div[style*="gridTemplateColumns"] { 
    grid-template-columns: 1fr !important;
    gap: 1rem !important;
  }
  
  /* Padding Reduction */
  div[style*="padding: 5rem"] { 
    padding: 1.5rem 1rem !important; 
  }
  div[style*="padding: 5.5rem"] { 
    padding: 1.5rem 1rem !important; 
  }
  div[style*="padding: 4rem"] { 
    padding: 1.5rem 1rem !important; 
  }
  div[style*="padding: 3.5rem"] { 
    padding: 1.5rem 1rem !important; 
  }
  div[style*="padding: 3rem"] {
    padding: 1rem !important;
  }
  
  /* Buttons - Max Tappability */
  button { 
    min-height: 48px !important;
    padding: 0.75rem 1rem !important; 
    font-size: 0.8rem !important; 
    width: 100% !important;
    border-radius: 8px !important;
  }
  button[style*="padding: 0.9rem 2rem"],
  button[style*="padding: 0.85rem"],
  button[style*="padding: 1rem"] {
    width: 100% !important;
    padding: 0.75rem 1rem !important;
  }
  
  /* Forms - Mobile-Friendly */
  input, select, textarea { 
    font-size: 16px !important;
    padding: 0.75rem !important;
    min-height: 48px !important;
    width: 100% !important;
  }
  
  /* Form Groups */
  div[style*="flex"][style*="flex-direction: column"] {
    gap: 1rem !important;
  }
  
  /* Cards - Minimal Padding */
  div[style*="borderRadius: 14px"] { 
    padding: 1rem !important;
  }
  div[style*="borderRadius: 16px"] { 
    padding: 1rem !important;
  }
  div[style*="borderRadius: 18px"] { 
    padding: 1.25rem !important;
  }
  div[style*="borderRadius: 20px"] { 
    padding: 1.25rem !important;
  }
  
  /* Footer - Compact */
  footer { 
    padding: 1.5rem 1rem 1rem !important;
  }
  
  /* Flex Layouts - Stack */
  div[style*="display: flex"][style*="gap: 3rem"] { 
    flex-direction: column !important; 
    gap: 1.5rem !important; 
  }
  div[style*="display: flex"][style*="gap: 1rem"] {
    flex-direction: column !important;
    gap: 1rem !important;
  }
  
  /* Video Responsiveness */
  iframe {
    width: 100% !important;
    height: auto !important;
    min-height: 180px !important;
  }
  
  /* Marquee - Smaller Text */
  .marquee-track span {
    padding: 0 0.75rem !important;
    font-size: 0.65rem !important;
  }
}
`;
