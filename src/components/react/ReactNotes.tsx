import React from 'react';

type NoteItem = {
  text1?: string;
  code1?: string;
  img?: string;
};

type NoteSection = {
  id: number;
  title?: string;
  note?: NoteItem[];
  section?: string;
};

type ReactNotesProps = {
  data: {
    reactNote: NoteSection[];
  };
};

const ReactNotes: React.FC<ReactNotesProps> = ({ data }) => {
  return (
    <div className="react-notes">
      {data.reactNote.map((section) => (
        <section key={section.id} className="react-note-section">
          <h2>{section.title ?? section.section ?? "React Topic"}</h2>
          {(section.note ?? []).map((item, index) => {
            const content = item.text1?.trim() ?? "";

            return (
              <div key={index} className="react-note-item">
                {content ? <p dangerouslySetInnerHTML={{ __html: content }} /> : null}
                {item.code1 ? (
                  <pre>
                    <code>{item.code1}</code>
                  </pre>
                ) : null}
              </div>
            );
          })}
        </section>
      ))}
    </div>
  );
};

export default ReactNotes;
