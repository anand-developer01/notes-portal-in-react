import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { javaData } from "../../notes-data/java-notes";
import { reactData } from "../../notes-data/react-data";
import { DevOpsData } from "../../notes-data/DevOps-notes";
import { javascriptData } from "../../notes-data/javascript-notes";
import { pythonData } from "../../notes-data/python-notes";
import { EnglishList } from "../../notes-data/english-notes";

type Props = {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
  mobileOpen?: boolean;
  setMobileOpen?: (v: boolean) => void;
};

const HEADER_HEIGHT = 60;

const SideMenu = ({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}: Props) => {
  const { course } = useParams();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const closeMobile = () => setMobileOpen?.(false);

  const normalizeEnglishTopics = (data: unknown) => {
    if (Array.isArray(data)) return data;

    if (data && typeof data === "object") {
      const entry = data as Record<string, unknown>;
      const list = Array.isArray(entry.Structures)
        ? entry.Structures
        : Array.isArray(entry.topics)
          ? entry.topics
          : Object.values(entry).find(Array.isArray);

      return Array.isArray(list) ? list : [];
    }

    return [];
  };

  const currentData = useMemo(() => {
    if (course === "java") return javaData.javaNote;
    if (course === "react") return reactData.reactNote;
    if (course === "devops") return DevOpsData.DevOpsNotes;
    if (course === "javascript") return javascriptData.javascriptNote;
    if (course === "python") return pythonData.pythonNote;
    return [];
  }, [course]);

  const englishTopics = useMemo(() => {
    if (course !== "english") return [];
    return normalizeEnglishTopics(EnglishList);
  }, [course]);

  const renderDefaultMenu = () => (
    <div style={{ padding: "12px 10px", overflowY: "auto", flex: 1, background: "#f8fafc" }}>
      {currentData.map((topic, index) => {
        const slug = topic.title?.toLowerCase().replace(/[^\w\s]/g, "").replace(/\s+/g, "-") || "";
        const active = location.hash === `#${slug}`;

        return (
          <div key={index} style={{ marginBottom: 6 }}>
            <h3 style={{ margin: "0 0 6px 4px", fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.04em", background: "#eeeeee" }}>
              {topic.section}
            </h3>
            <Link
              to={`/notes/${course}#${slug}`}
              onClick={closeMobile}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 12px",
                borderRadius: 8,
                textDecoration: "none",
                background: active ? "#2563eb" : "transparent",
                color: active ? "#fff" : "#111827",
                fontWeight: active ? 600 : 500,
                transition: ".2s ease",
                whiteSpace: "normal",
                overflowWrap: "anywhere",
                wordBreak: "break-word",
                lineHeight: 1.4,
                fontSize: 14,
                textAlign: "left",
              }}
            >
              {collapsed ? "•" : topic.title}
            </Link>
          </div>
        );
      })}
    </div>
  );

  const renderEnglishMenu = () => (
    <div style={{ padding: "12px 10px", overflowY: "auto", flex: 1, background: "#f8fafc" }}>
      {englishTopics.map((topic, index) => {
        const title = (topic.title ?? topic.topic ?? `Topic ${index + 1}`) as string;
        const slug = title
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-");
        const active = location.hash === `#${slug}`;

        return (
          <div key={`${title}-${index}`} style={{ marginBottom: 8 }}>
            <h3 style={{ margin: "0 0 6px 4px", fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.04em", background: "#eeeeee" }}>
              {topic.section}
            </h3>
            <Link
              to={`/notes/${course}#${slug}`}
              onClick={closeMobile}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 12px",
                borderRadius: 8,
                textDecoration: "none",
                background: active ? "#2563eb" : "transparent",
                color: active ? "#fff" : "#111827",
                fontWeight: active ? 600 : 500,
                transition: ".2s ease",
                whiteSpace: "normal",
                overflowWrap: "anywhere",
                wordBreak: "break-word",
                lineHeight: 1.4,
                fontSize: 14,
                textAlign: "left",
              }}
            >
              {collapsed ? "•" : title}
            </Link>
          </div>
        );
      })}
    </div>
  );

  const renderMenu = () => {
    if (course === "english") return renderEnglishMenu();
    return renderDefaultMenu();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && mobileOpen && (
        <div onClick={closeMobile} style={{ position: "fixed", top: HEADER_HEIGHT, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,.4)", zIndex: 999 }} />
      )}

      {/* Sidebar Container */}
      <div
        style={{
          position: "fixed",
          top: HEADER_HEIGHT,
          left: 0,
          width: isMobile ? 300 : (collapsed ? 70 : 300),
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
          transform: isMobile ? (mobileOpen ? "translateX(0)" : "translateX(-320px)") : "none",
          transition: ".3s",
          background: "#ffffff",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          boxShadow: isMobile ? "10px 0 30px rgba(0,0,0,.15)" : "6px 0 18px rgba(0,0,0,.08)",
          borderRight: "1px solid #e2e8f0",
        }}
      >
        <div style={{ padding: "14px 12px", borderBottom: "1px solid #e2e8f0", display: "flex", justifyContent: collapsed ? "center" : "space-between", alignItems: "center", background: "#f8fafc" }}>
          {!collapsed && (
            <div>
              <div style={{ fontWeight: 700, fontSize: 17, color: "#0f172a" }}>📚 {course ? course.charAt(0).toUpperCase() + course.slice(1) : "Notes"}</div>
            </div>
          )}
          {!isMobile && (
            <button onClick={() => setCollapsed(!collapsed)} style={{ border: "none", background: "#111827", color: "#fff", width: 34, height: 34, borderRadius: 8, cursor: "pointer" }}>
              {collapsed ? "➜" : "◀"}
            </button>
          )}
        </div>
        {renderMenu()}
      </div>
    </>
  );
};

export default SideMenu;