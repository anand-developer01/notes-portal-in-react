import { Outlet, useLocation, useParams } from "react-router-dom";

import { javaData } from "../notes-data/java-notes";
import CommonNotes from "../components/common/CommonNotes";
import { reactData } from "../notes-data/react-data";
import { DevOpsData } from "../notes-data/DevOps-notes";
import { javascriptData } from "../notes-data/javascript-notes";
import { pythonData } from "../notes-data/python-notes";
import { EnglishList } from "../notes-data/english-notes";
import EnglishNotes from "../components/common/EnglishNotes";

const NotesLayout = () => {
  const { course } = useParams();

  // *************  ENGLISH NOTES STARTS ***********************
  const location = useLocation();
  const toSlug = (value = "") =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

  const normalizeEnglishTopics = (data: unknown) => {
    if (Array.isArray(data)) return data;

    if (data && typeof data === "object") {
      const candidate = data as Record<string, unknown>;
      const list = Array.isArray(candidate.Structures)
        ? candidate.Structures
        : Array.isArray(candidate.topics)
          ? candidate.topics
          : Object.values(candidate).find(Array.isArray);

      return Array.isArray(list) ? list : [];
    }

    return [];
  };

  const englishSlug = location.hash.replace("#", "").trim().toLowerCase();
  const englishTopics = normalizeEnglishTopics(EnglishList);
  const filteredEnglishTopics = englishSlug
    ? englishTopics.filter((topic) => {
        const title = String(topic.title ?? topic.topic ?? "");
        return toSlug(title) === englishSlug;
      })
    : englishTopics;

    // *************  ENGLISH NOTES END ***********************

  const renderNotes = () => {
    switch (course) {
      case "java":
        return <CommonNotes data={javaData.javaNote} />;

      case "react":
        return <CommonNotes data={reactData.reactNote} />;

      case "devops":
        return <CommonNotes data={DevOpsData.DevOpsNotes} />;

      case "javascript":
        return <CommonNotes data={javascriptData.javascriptNote} />;

      case "python":
        return <CommonNotes data={pythonData.pythonNote} />;

      case "english":
        return <EnglishNotes data={filteredEnglishTopics.length ? filteredEnglishTopics : EnglishList} />;

      default:
        return <div>Course not found</div>;
    }
  };

  return (
    <div className="notes-layout">
      {renderNotes()}

      {/* If you want nested routes later */}
      <Outlet />
    </div>
  );
};

export default NotesLayout;