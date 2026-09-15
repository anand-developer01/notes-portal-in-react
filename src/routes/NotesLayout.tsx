import { Outlet, useParams } from "react-router-dom";

import { javaData } from "../notes-data/java-notes";
import CommonNotes from "../components/common/CommonNotes";
import { reactData } from "../notes-data/react-data";
import { DevOpsData } from "../notes-data/DevOps-notes";
import { javascriptData } from "../notes-data/javascript-notes";
import { pythonData } from "../notes-data/python-notes";

const NotesLayout = () => {
  const { course } = useParams();

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