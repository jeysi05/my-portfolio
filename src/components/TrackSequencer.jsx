export default function TrackSequencer({ projects, activeTrackId, onSelectTrack }) {
  return (
    <div style={{ padding: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ fontSize: "16px", color: "var(--text)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>
          Projects
        </div>
        {activeTrackId && (
          <button 
            onClick={() => onSelectTrack(null)}
            style={{ background: "transparent", border: `1px solid var(--border)`, color: "var(--muted)", padding: "8px 16px", borderRadius: "20px", fontSize: "12px", cursor: "pointer", fontWeight: 600, transition: "all 0.2s" }}
            onMouseOver={(e) => e.target.style.color = "var(--text)"}
            onMouseOut={(e) => e.target.style.color = "var(--muted)"}
          >
            Clear Monitor ✕
          </button>
        )}
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {projects.map((p) => {
          const isActive = activeTrackId === p.id;
          return (
            <div 
              key={p.id} 
              onClick={() => onSelectTrack(p.id)}
              style={{ 
                display: "flex", 
                flexDirection: "column",
                justifyContent: "space-between",
                background: isActive ? "var(--active-card)" : "var(--overlay)", 
                border: `1px solid ${isActive ? "var(--accent)" : "var(--border)"}`, 
                borderRadius: "12px", 
                padding: "28px", 
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => !isActive && (e.currentTarget.style.background = "var(--overlay-hover)")}
              onMouseOut={(e) => !isActive && (e.currentTarget.style.background = "var(--overlay)")}
            >
              <div>
                <div style={{ fontWeight: 800, fontSize: "20px", marginBottom: "12px", color: isActive ? "var(--accent)" : "var(--text)", letterSpacing: "-0.5px" }}>
                  {p.name}
                </div>
                <div style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, fontWeight: 400 }}>
                  {p.desc}
                </div>
              </div>

              <div style={{ marginTop: "20px", display: "inline-block", background: "var(--overlay-hover)", color: "var(--text)", padding: "6px 12px", borderRadius: "6px", fontSize: "11px", fontWeight: 700, alignSelf: "flex-start" }}>
                {p.type}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}