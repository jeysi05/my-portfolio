export default function Monitor({ activeTrack }) {
  const isLiveSite = activeTrack && activeTrack.live_url && activeTrack.live_url.startsWith('http');

  return (
    <div className="hero-monitor" style={{ position: "relative", display: "flex", flexDirection: "column", width: "100%", height: "100%", background: "linear-gradient(135deg, var(--surface) 0%, var(--monitor-bg) 100%)" }}>
      
      <div style={{ width: "100%", height: "100%", flex: 1, position: "relative", zIndex: 1 }}>
        {activeTrack ? (
          isLiveSite ? (
            <iframe 
              src={activeTrack.live_url} 
              title={activeTrack.name}
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          ) : (
            <div style={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "var(--muted)", fontWeight: 700 }}>
              Live environment currently unavailable.
            </div>
          )
        ) : (
          <div style={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "16px", color: "var(--muted)", opacity: 0.5 }}>
             <div style={{ fontSize: "24px", fontWeight: 800 }}>JA.</div>
             <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px" }}>Select a project to view</div>
          </div>
        )}
      </div>
      
      {activeTrack && (
        <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10, pointerEvents: "none" }}>
          
          <div style={{ background: "var(--surface)", backdropFilter: "blur(12px)", color: "var(--text)", padding: "10px 16px", borderRadius: "6px", fontSize: "13px", fontWeight: 600, border: "1px solid var(--border)" }}>
            {activeTrack.name}
          </div>

          {isLiveSite && (
            <a 
              href={activeTrack.live_url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ pointerEvents: "auto", background: "var(--surface)", backdropFilter: "blur(12px)", color: "var(--text)", textDecoration: "none", padding: "10px 16px", borderRadius: "6px", fontSize: "13px", fontWeight: 700, border: "1px solid var(--border)", transition: "background 0.2s" }}
              onMouseOver={(e) => e.target.style.background = "var(--active-card)"}
              onMouseOut={(e) => e.target.style.background = "var(--surface)"}
            >
              Visit Live Site ↗
            </a>
          )}
        </div>
      )}
    </div>
  );
}