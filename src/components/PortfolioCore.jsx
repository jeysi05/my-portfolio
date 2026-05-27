import { useState, useEffect } from "react";
import { PROJECTS, GLOBALS } from "../data/projects.js";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Monitor from "./Monitor.jsx";
import TrackSequencer from "./TrackSequencer.jsx";

export default function PortfolioCore() {
  const [activeTrackId, setActiveTrackId] = useState(null);
  const [theme, setTheme] = useState("dark"); // Added Theme State

  // Bind theme to the DOM
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const activeTrack = PROJECTS?.find((p) => p.id === activeTrackId) || null;

  return (
    <div className="app-container">
      <main className="hero-grid">
        
        <div className="hero-sidebar" style={{ display: "flex", flexDirection: "column" }}>
           <Header theme={theme} toggleTheme={toggleTheme} />
           <Sidebar profilePic={GLOBALS.profilePic} />
        </div>

        <div className="workspace-pane">
          <Monitor activeTrack={activeTrack} />
          <div className="timeline-pane">
            <TrackSequencer 
              projects={PROJECTS} 
              activeTrackId={activeTrackId} 
              onSelectTrack={setActiveTrackId} 
            />
          </div>
        </div>

      </main>
    </div>
  );
}