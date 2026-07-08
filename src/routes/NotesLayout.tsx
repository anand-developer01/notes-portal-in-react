import { Outlet, useParams } from "react-router-dom";

import { javaData } from "../notes-data/java-notes";
import CommonNotes from "../components/common/CommonNotes";
import { reactData } from "../notes-data/react-data";

const NotesLayout = () => {
  const { course } = useParams();

  const renderNotes = () => {
    switch (course) {
      case "java":
        return <CommonNotes data={javaData} />;

      case "react":
        return <CommonNotes data={reactData} />;

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