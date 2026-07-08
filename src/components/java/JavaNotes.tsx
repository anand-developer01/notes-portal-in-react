import { useLocation, useParams } from "react-router-dom";

type NoteItem = {
  text1?: string;
  code1?: string;
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
    <div style={{ padding: "20px", maxWidth: "800px" }}>
      <h1>{currentTopic.title ?? "Topic"}</h1>

      {topicNotes.map((item, index) => (
        <div key={index} style={{ marginBottom: "30px" }}>
          {item.text1 && <p style={{ lineHeight: 1.6 }}>{item.text1}</p>}

          {item.code1 && (
            <pre
              style={{
                background: "#1e1e1e",
                color: "#d4d4d4",
                padding: "15px",
                borderRadius: "8px",
                overflowX: "auto",
              }}
            >
              <code>{item.code1}</code>
            </pre>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseComponent;