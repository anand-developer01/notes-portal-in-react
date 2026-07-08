import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

type NoteItem = {
  text1?: string;
  code1?: string;
  img?: string;
};

type NoteTopic = {
  title?: string;
  section?: string;
  note?: NoteItem[];
};

type CourseComponentProps = {
  data?: {
    javaNote?: NoteTopic[];
    reactNote?: NoteTopic[];
  };
};

const CommonNotes = ({ data }: CourseComponentProps) => {
  const { course } = useParams();
  const location = useLocation();
  const hash = location.hash.replace("#", "").toLowerCase();

  useEffect(() => {
    hljs.highlightAll();
  }, [hash, data]);

  const topics = Array.isArray(data?.javaNote)
    ? data.javaNote
    : Array.isArray(data?.reactNote)
      ? data.reactNote
      : [];

  const currentTopic = topics.find((item) => {
    const slug = (item.title ?? "")
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-");
    return slug === hash;
  });

  if (!currentTopic) {
    return (
      <div style={{ padding: "24px" }}>
        <div style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)", border: "1px solid #e2e8f0", borderRadius: 16, padding: "24px 28px", boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)" }}>
          <h2 style={{ margin: "0 0 8px", color: "#1f2937" }}>Welcome to the {course} documentation.</h2>
          <p style={{ margin: 0, color: "#64748b", lineHeight: 1.6 }}>Please select a topic from the side menu to get started.</p>
        </div>
      </div>
    );
  }

  const topicNotes = currentTopic.note ?? [];

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)", border: "1px solid #e5e7eb", borderRadius: 18, padding: 24, boxShadow: "0 12px 35px rgba(15, 23, 42, 0.08)" }}>
        <div
          style={{
            background: "linear-gradient(90deg, #2563eb 0%, #3b82f6 100%)",
            color: "#fff",
            padding: "14px 18px",
            borderRadius: 12,
            marginBottom: 18,
            boxShadow: "0 8px 20px rgba(37, 99, 235, 0.2)",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 22 }}>{currentTopic.title ?? "Topic"}</h2>
        </div>

        <div>
            {/* <div style={{ display: "grid", gap: 16 }}> */}
          {topicNotes.map((item, index) => {
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
                  padding: "16px 18px",
                  boxShadow: "0 6px 16px rgba(15, 23, 42, 0.04)",
                }}
              >
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
    </div>
  );
};

export default CommonNotes;
