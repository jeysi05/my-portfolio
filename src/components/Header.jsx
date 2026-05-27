export default function Header({ theme, toggleTheme }) {
  return (
    <header style={{ padding: "24px 24px 0 24px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <div>
        <a href="/" style={{ textDecoration: "none", display: "block", marginBottom: "16px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: 800, margin: "0", letterSpacing: "-1px", color: "var(--text)" }}>
            JA<span style={{ color: "var(--accent)" }}>.</span>
          </h1>
        </a>
      </div>
      
      {/* Visual Toggle Switch */}
      <button 
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        style={{
          position: "relative",
          width: "56px",
          height: "30px",
          background: theme === "dark" ? "var(--accent)" : "var(--border)",
          borderRadius: "15px",
          border: "none",
          cursor: "pointer",
          padding: "0",
          display: "flex",
          alignItems: "center",
          transition: "background 0.3s ease"
        }}
      >
        {/* The sliding knob */}
        <div 
          style={{
            width: "24px",
            height: "24px",
            background: theme === "dark" ? "#000" : "#fff",
            borderRadius: "50%",
            transform: theme === "dark" ? "translateX(28px)" : "translateX(4px)",
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            color: theme === "dark" ? "var(--accent)" : "#000"
          }}
        >
          {theme === "dark" ? "☾" : "☀"}
        </div>
      </button>
    </header>
  );
}