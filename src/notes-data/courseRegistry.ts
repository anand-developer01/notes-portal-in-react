type NoteTopic = {
  id?: number;
  title?: string;
  section?: string;
  note?: Array<{
    text1?: string;
    code1?: string;
  }>;
};

type CourseModule = {
  key: string;
  label: string;
  topics: NoteTopic[];
};

function normalizeLabel(fileName: string) {
  return fileName
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\.Js$/i, "")
    .replace(/ Js$/i, "");
}

const modules = import.meta.glob("./*.js", { eager: true }) as Record<
  string,
  Record<string, unknown>
>;

export const courseMenus: CourseModule[] = Object.entries(modules)
  .flatMap(([path, module]) => {
    const fileName = path.replace(/^\.\//, "").replace(/\.js$/, "");

    const notesArray = Object.values(module).find(
      (candidate): candidate is NoteTopic[] =>
        Array.isArray(candidate) &&
        candidate.length > 0 &&
        candidate.every(
          (item) =>
            item &&
            typeof item === "object" &&
            ("title" in item || "section" in item || "note" in item)
        )
    );

    if (!notesArray) {
      return [];
    }

    return [
      {
        key: fileName,
        label: normalizeLabel(fileName),
        topics: notesArray,
      },
    ];
  })
  .sort((a, b) => a.label.localeCompare(b.label));
