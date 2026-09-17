import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

type NoteItem = {
  text1?: string;
  code1?: string;
  img?: string;
  definition?: string;
};

type NoteTopic = {
  id?: number;
  title?: string;
  section?: string;
  note?: NoteItem[];
};

const CommonNotes = ({ data }: { data: NoteTopic[] }) => {
  const { course } = useParams();
  const location = useLocation();
  const hash = location.hash.replace("#", "").toLowerCase();
  const [isMobile, setIsMobile] = useState(false);
  const [definition, setDefinition] = useState<string | null>(null);

  useEffect(() => {
    const updateMobileMode = () => setIsMobile(window.innerWidth < 768);

    updateMobileMode();
    window.addEventListener("resize", updateMobileMode);

    return () => window.removeEventListener("resize", updateMobileMode);
  }, []);

  useEffect(() => {
    hljs.highlightAll();
  }, [hash, data]);

  useEffect(() => {
    if (!definition) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDefinition(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [definition]);

  const outerPadding = isMobile ? "12px" : "24px";
  const titlePadding = isMobile ? "8px 10px" : "14px 18px";

  // const topics = Array.isArray(data?.javaNote)
  //   ? data.javaNote
  //   : Array.isArray(data?.reactNote)
  //     ? data.reactNote
  //     : [];

  const currentTopic = data.find((item) => {
    const slug = (item.title ?? "")
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-");
    return slug === hash;
  });

  console.log("currentTopic", currentTopic);

  if (!currentTopic) {
    return (
      <div style={{ padding: outerPadding }}>
        <div style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)", border: "1px solid #e2e8f0", borderRadius: 16, padding: "24px 28px", boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)" }}>
          <h2 style={{ margin: "0 0 8px", color: "#1f2937" }}>Welcome to the {course} documentation.</h2>
          <p style={{ margin: 0, color: "#64748b", lineHeight: 1.6 }}>Please select a topic from the side menu to get started.</p>
        </div>
      </div>
    );
  }

  const topicNotes = currentTopic.note ?? [];

  return (
    <div style={{ padding: outerPadding, background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)", borderRadius: 16, boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)" }}>
      <div style={{ padding: outerPadding, background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)", border: "1px solid #e5e7eb", borderRadius: 18, boxShadow: "0 12px 35px rgba(15, 23, 42, 0.08)" }}>
        <div
          style={{
            background: "linear-gradient(90deg, #2563eb 0%, #3b82f6 100%)",
            color: "#fff",
            padding: titlePadding,
            borderRadius: 12,
            marginBottom: 18,
            boxShadow: "0 8px 20px rgba(37, 99, 235, 0.2)",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 22 }}>{currentTopic.title ?? "Topic"}</h2>
        </div>

        <div>
          {/* <div style={{ display: "grid", gap: 16 }}> */}
          {topicNotes.map((item, index: any) => {
            const isImgExist = item.img ? (
              <img
                src={item.img}
                alt=""
                style={{ width: "100%", marginTop: 12, borderRadius: 10, border: "1px solid #e5e7eb" }}
              />
            ) : null;

            return (
              <div
                key={index}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 14,
                  padding: titlePadding,
                  boxShadow: "0 6px 16px rgba(15, 23, 42, 0.04)",
                }}
              >
                {item.definition ? (
                  <button
                    type="button"
                    onClick={() => setDefinition(item.definition ?? null)}
                    style={{
                      display: "block",
                      marginTop: 14,
                      border: 0,
                      borderRadius: 8,
                      padding: "9px 14px",
                      background: "#0f766e",
                      color: "#ffffff",
                      cursor: "pointer",
                      fontWeight: 600,
                    }}
                  >
                    Definition
                  </button>
                ) : null}

                <div
                  className="notes-text"
                  style={{
                    color: "#334155",
                    textAlign: "left",
                    whiteSpace: "pre-line",
                    lineHeight: 1.8,
                    margin: 0,
                    fontSize: 15,
                  }}
                  dangerouslySetInnerHTML={{ __html: item.text1 ?? "" }}
                />

                {isImgExist}


                {item.code1 ? (
                  <pre
                    className="code-prre"
                    style={{
                      textAlign: 'left'
                    }}
                  >
                    <code className="align-code hljs language-javascript py-0 px-2" dangerouslySetInnerHTML={{ __html: item.code1 ?? "" }}></code>

                    {/* <code className="align-code hljs language-javascript py-0 px-2">{item.code1}</code> */}
                  </pre>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      {definition ? (
        <div
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setDefinition(null);
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            display: "grid",
            placeItems: "center",
            padding: 16,
            background: "rgba(15, 23, 42, 0.62)",
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="definition-title"
            style={{
              width: "min(100%, 620px)",
              maxHeight: "min(80vh, 680px)",
              overflowY: "auto",
              borderRadius: 14,
              padding: isMobile ? 18 : 26,
              background: "#ffffff",
              boxShadow: "0 24px 70px rgba(15, 23, 42, 0.3)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <h2 id="definition-title" style={{ margin: 0, color: "#0f172a", fontSize: isMobile ? 20 : 24 }}>
                Definition
              </h2>
              <button
                type="button"
                aria-label="Close definition"
                onClick={() => setDefinition(null)}
                style={{
                  border: 0,
                  borderRadius: 8,
                  padding: "7px 11px",
                  background: "#e2e8f0",
                  color: "#0f172a",
                  cursor: "pointer",
                  fontSize: 18,
                  lineHeight: 1,
                }}
              >
                x
              </button>
            </div>
            <div
              className="notes-text"
              style={{ color: "#334155", lineHeight: 1.8, marginTop: 18, whiteSpace: "pre-line" }}
              dangerouslySetInnerHTML={{ __html: definition }}
            />
          </section>
        </div>
      ) : null}
    </div>
  );
};

export default CommonNotes;
