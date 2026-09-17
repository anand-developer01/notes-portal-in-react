import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

type EnglishExample = {
  id?: number;
  eng?: string;
  tel?: string;
  type?: string;
  tense?: string;
};

type EnglishTopic = {
  id?: number;
  title?: string;
  topic?: string;
  section?: string;
  explain?: string;
  formation?: string;
  content?: EnglishExample[];
  note?: Array<{ text1?: string; code1?: string; img?: string }>;
};

const toSlug = (value: string = "") =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

const normalizeTopics = (data: unknown): EnglishTopic[] => {
  if (Array.isArray(data)) {
    return data as EnglishTopic[];
  }

  if (data && typeof data === "object") {
    const candidate = data as Record<string, unknown>;

    const value =
      Array.isArray(candidate.Structures)
        ? candidate.Structures
        : Array.isArray(candidate.topics)
          ? candidate.topics
          : Object.values(candidate).find(Array.isArray);

    if (Array.isArray(value)) {
      return value as EnglishTopic[];
    }
  }

  return [];
};

const EnglishNotes = ({ data }: { data: unknown }) => {
  const { course } = useParams();
  const location = useLocation();
  const hash = location.hash.replace("#", "").trim().toLowerCase();
  const [isMobile, setIsMobile] = useState(false);
  const [selectedId, setSelectedId] = useState<string | number | null>(null);

  const topics = useMemo(() => normalizeTopics(data), [data]);

  useEffect(() => {
    const updateMobileMode = () => setIsMobile(window.innerWidth < 768);

    updateMobileMode();
    window.addEventListener("resize", updateMobileMode);

    return () => window.removeEventListener("resize", updateMobileMode);
  }, []);

  useEffect(() => {
    hljs.highlightAll();
  }, [hash, topics]);

  useEffect(() => {
    if (!topics.length) return;

    const matchByHash = topics.find((item) => {
      const candidate = item.title ?? item.topic ?? "";
      return toSlug(candidate) === hash;
    });

    if (matchByHash) {
      setSelectedId(matchByHash.id ?? matchByHash.title ?? matchByHash.topic ?? 0);
      return;
    }

    const first = topics[0];
    setSelectedId(first.id ?? first.title ?? first.topic ?? 0);
  }, [hash, topics]);

  const currentTopic =
    topics.find((item) => {
      const key = String(item.id ?? item.title ?? item.topic ?? "");
      return key === String(selectedId ?? "") || toSlug(item.title ?? item.topic ?? "") === hash;
    }) ?? topics[0];

  const outerPadding = isMobile ? "12px" : "24px";
  const titlePadding = isMobile ? "8px 10px" : "14px 18px";

  if (!topics.length) {
    return (
      <div style={{ padding: outerPadding }}>
        <div
          style={{
            background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)",
            border: "1px solid #e2e8f0",
            borderRadius: 16,
            padding: "24px 28px",
            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
          }}
        >
          <h2 style={{ margin: "0 0 8px", color: "#1f2937" }}>
            Welcome to the {course} documentation.
          </h2>
          <p style={{ margin: 0, color: "#64748b", lineHeight: 1.6 }}>
            Please select a topic from the side menu to get started.
          </p>
        </div>
      </div>
    );
  }

  const topicTitle = currentTopic.title ?? currentTopic.topic ?? "Topic";


  return (
    <div
      style={{
        padding: outerPadding,
        background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)",
        borderRadius: 16,
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          border: "1px solid #e5e7eb",
          borderRadius: 18,
          boxShadow: "0 12px 35px rgba(15, 23, 42, 0.08)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "linear-gradient(90deg, #2563eb 0%, #3b82f6 100%)",
            color: "#fff",
            padding: titlePadding,
            borderBottom: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 22 }}>{topicTitle}</h2>
        </div>

        <div style={{ padding: isMobile ? "12px" : "16px" }}>
          {/* <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 18,
            }}
          >
            {topics.map((topic, index) => {
              const itemTitle = topic.title ?? topic.topic ?? `Topic ${index + 1}`;
              const itemKey = String(topic.id ?? itemTitle);
              const isActive = itemKey === String(currentTopic.id ?? currentTopic.title ?? currentTopic.topic ?? "");

              return (
                <button
                  key={itemKey}
                  onClick={() => setSelectedId(itemKey)}
                  style={{
                    border: "none",
                    borderRadius: 999,
                    background: isActive ? "linear-gradient(135deg, #2563eb, #60a5fa)" : "#e2e8f0",
                    color: isActive ? "#fff" : "#1e293b",
                    padding: isMobile ? "8px 12px" : "10px 14px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    transform: isActive ? "translateY(-1px)" : "none",
                    boxShadow: isActive ? "0 8px 18px rgba(37,99,235,0.25)" : "none",
                  }}
                >
                  {itemTitle}
                </button>
              );
            })}
          </div> */}

          {currentTopic.explain && (
            <div
              style={{
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                borderRadius: 12,
                padding: "12px 14px",
                color: "#1d4ed8",
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: currentTopic.explain }} />
            </div>
          )}

          {currentTopic.formation && (
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: 12,
                padding: "10px 12px",
                color: "#475569",
                marginBottom: 18,
                fontSize: 14,
              }}
            >
              <strong style={{ color: "#0f172a" }}>Formation:</strong>{" "}
              <span dangerouslySetInnerHTML={{ __html: currentTopic.formation }} />
            </div>
          )}

          <div
            style={{
              // display: "grid",
              // gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
              // gap: 14,
            }}
          >
            {currentTopic?.content && currentTopic?.content.map((item, index) => (
              <div
                key={`${item.eng ?? "example"}-${index}`}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 14,
                  padding: titlePadding,
                  boxShadow: "0 6px 16px rgba(15, 23, 42, 0.04)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  transform: "translateY(0)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      background: "#dbeafe",
                      color: "#1d4ed8",
                      borderRadius: 999,
                      padding: "4px 8px",
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    Example {index + 1}
                  </span>
                  {item.type && (
                    <span style={{ fontSize: 12, color: "#64748b" }}>{item.type}</span>
                  )}
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    borderRadius: 10,
                    padding: "8px 10px",
                    border: "1px solid #e2e8f0",
                    marginBottom: 8,
                  }}
                >
                  <div style={{ fontSize: 12, color: "#64748b", marginBottom: 4 }}>English</div>
                  <div
                    style={{ fontSize: 18, color: "#0f172a" }}
                    dangerouslySetInnerHTML={{ __html: item.eng ?? "" }}
                  />
                </div>

                <div
                  style={{
                    background: "#ecfeff",
                    borderRadius: 10,
                    padding: "8px 10px",
                    border: "1px solid #a5f3fc",
                  }}
                >
                  <div style={{ fontSize: 12, color: "#0f766e", marginBottom: 4 }}>Telugu</div>
                  <div
                    style={{ fontSize: 18, color: "#134e4a", fontWeight: 600 }}
                    dangerouslySetInnerHTML={{ __html: item.tel ?? "" }}
                  />
                </div>

                {item.tense && (
                  <div
                    style={{
                      marginTop: 10,
                      display: "inline-block",
                      background: "#fef3c7",
                      color: "#92400e",
                      borderRadius: 999,
                      padding: "4px 8px",
                      fontSize: 11,
                      fontWeight: 700,
                    }}
                  >
                    {item.tense}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnglishNotes;
