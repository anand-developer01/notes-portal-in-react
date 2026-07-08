import { useLocation, useParams } from "react-router-dom";

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

const CourseComponent = ({ data }: CourseComponentProps) => {
  const { course } = useParams();
  const location = useLocation();
  const hash = location.hash.replace("#", "").toLowerCase();

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
      <div style={{ padding: "20px" }}>
        <h2>Welcome to the {course} documentation.</h2>
        <p>Please select a topic from the side menu to get started.</p>
      </div>
    );
  }

  const topicNotes = currentTopic.note ?? [];

  return (
    <div style={{ padding: "20px" }}>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li className="li-main-box" style={{ marginBottom: 24 }}>
          <div className="card-content" style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 20, boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
            <strong
              id={currentTopic.title}
              className="list-title"
              style={{
                display: "block",
                fontSize: 20,
                marginBottom: 14,
                backgroundColor: "#fbfbfb",
                textAlign: "left",
                whiteSpace: "pre-line",
                padding: "2px 17px",
                width: "100%",
                boxShadow: "1px 1px 4px 0px",
                borderRadius: 6,
              }}
            >
              {currentTopic.title ?? "Topic"}
            </strong>
            <div>
              {topicNotes.map((item, index) => {
                const isImgExist = item.img ? <img src={item.img} alt="" style={{ width: "100%", marginTop: 10 }} /> : null;

                return (
                  <div key={index} style={{ marginBottom: 16 }}>
                    <div
                      className="notes-text"
                      style={{
                        backgroundColor: "#fbfbfb",
                        textAlign: "left",
                        whiteSpace: "pre-line",
                        padding: "2px 17px",
                        width: "100%",
                        boxShadow: "1px 1px 4px 0px",
                        borderRadius: 6,
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                      dangerouslySetInnerHTML={{ __html: item.text1 ?? "" }}
                    >
                      {isImgExist}
                    </div>

                    {item.code1 ? (
                      <pre
                        className="code-prre"
                        style={{
                          background: "#1e1e1e",
                          color: "#d4d4d4",
                          padding: "12px 14px",
                          borderRadius: 8,
                          overflowX: "auto",
                          marginTop: 10,
                        }}
                      >
                        <code className="align-code hljs language-javascript py-0 px-2">{item.code1}</code>
                      </pre>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CourseComponent;