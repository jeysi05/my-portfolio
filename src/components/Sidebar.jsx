export default function Sidebar({ profilePic }) {
  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "24px", height: "100%", overflowY: "auto" }}>
        
      <div style={{ width: "160px", height: "160px", borderRadius: "12px", overflow: "hidden", border: `1px solid var(--border)`, boxShadow: "0 8px 20px -8px rgba(251, 191, 36, 0.15)", flexShrink: 0 }}>
        {profilePic ? (
           <img src={profilePic} alt="John Carlo Alcantara" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
           <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "var(--muted)", background: "var(--overlay)" }}>[ NO PIC ]</div>
        )}
      </div>

      <div>
        <div style={{ fontSize: "18px", color: "var(--accent)", marginBottom: "12px", fontWeight: 800, letterSpacing: "-0.5px" }}>
          John Carlo Alcantara
        </div>
        <div style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--muted)", fontWeight: 400 }}>
          <p style={{ margin: "0" }}>
            I build websites and booking systems for restaurants, resorts, and hospitality businesses. Currently a Computer Engineering student at DLSU.
          </p>
        </div>
      </div>
      
      <div style={{ marginTop: "auto", paddingTop: "24px", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "12px" }}>
        <a href="mailto:your.email@example.com" style={{ display: "block", textAlign: "center", padding: "14px", background: "var(--accent)", color: "#000", textDecoration: "none", borderRadius: "6px", fontWeight: 800, fontSize: "14px", transition: "transform 0.2s" }} onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"} onMouseOut={(e) => e.target.style.transform = "translateY(0)"}>
          Get in Touch
        </a>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <a href="https://github.com/jeysi05" target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", padding: "12px", background: "var(--overlay)", color: "var(--text)", textDecoration: "none", borderRadius: "6px", fontWeight: 600, fontSize: "12px", border: "1px solid var(--border)", transition: "background 0.2s" }} onMouseOver={(e) => e.target.style.background = "var(--overlay-hover)"} onMouseOut={(e) => e.target.style.background = "var(--overlay)"}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", padding: "12px", background: "var(--overlay)", color: "var(--text)", textDecoration: "none", borderRadius: "6px", fontWeight: 600, fontSize: "12px", border: "1px solid var(--border)", transition: "background 0.2s" }} onMouseOver={(e) => e.target.style.background = "var(--overlay-hover)"} onMouseOut={(e) => e.target.style.background = "var(--overlay)"}>
            LinkedIn
          </a>
        </div>
        
        <a href="/John_Carlo_Alcantara_CV.pdf" target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", padding: "12px", color: "var(--muted)", textDecoration: "none", fontSize: "12px", fontWeight: 600, transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color = "var(--text)"} onMouseOut={(e) => e.target.style.color = "var(--muted)"}>
          Download Resume ↓
        </a>
      </div>
    </aside>
  );
}