import { useNavigate } from "react-router-dom";

const CARDS = [
  {
    title: "� Getting Started",
    desc: "Beginner-friendly tutorial overview",
    path: "/alphabet",
    color: "#FDE68A",
  },
  {
    title: "📘 Core Concepts",
    desc: "Learn the fundamentals step by step",
    path: "/number-learning",
    color: "#DBEAFE",
  },
  {
    title: "🎯 Practice Lab",
    desc: "Hands-on exercises and guided drills",
    path: "/colors-learning",
    color: "#F3E8FF",
  },
  {
    title: "🧪 Mini Projects",
    desc: "Build confidence with practical examples",
    path: "/asmd-game",
    color: "#DCFCE7",
  },
  {
    title: "📝 Step Guides",
    desc: "Clear instructions for each lesson",
    path: "/hand-writing",
    color: "#FFE4E6",
  },
  {
    title: "🧩 Challenge Mode",
    desc: "Test your understanding with interactive tasks",
    path: "/drawing",
    color: "#E0F2FE",
  },
  {
    title: "📊 Progress Track",
    desc: "Monitor your learning journey",
    path: "/Arrow-Game",
    color: "#C7D2FE",
  },
];

const SCORES = [
  { label: "Course Progress", score: 85, color: "#22C55E" },
  { label: "Practice Sessions", score: 70, color: "#3B82F6" },
  { label: "Completed Lessons", score: 60, color: "#A855F7" },
  { label: "Skill Growth", score: 40, color: "#F97316" },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎓 Tutorial Hub</h1>
      <p style={styles.subtitle}>Learn new skills with clear, guided lessons 🚀</p>

      {/* SCORE BOARD */}
      <div style={styles.scoreBoard}>
        <h2 style={styles.sectionTitle}>🏆 Learning Progress</h2>

        <div style={styles.scoreGrid}>
          {SCORES.map((s, i) => (
            <div key={i} style={{ ...styles.scoreCard, borderColor: s.color }}>
              <div style={styles.scoreLabel}>{s.label}</div>
              <div style={{ ...styles.scoreValue, color: s.color }}>
                {s.score}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LEARNING CARDS */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>📚 Tutorial Modules</h2>

        <div style={styles.grid}>
          {CARDS.map((card, i) => (
            <div
              key={i}
              onClick={() => navigate(card.path)}
              style={{
                ...styles.card,
                background: card.color,
              }}
            >
              <div style={styles.cardTitle}>{card.title}</div>
              <div style={styles.cardDesc}>{card.desc}</div>

              <div style={styles.arrow}>➜</div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER BANNER */}

      <div style={styles.footer}>
        🌟 Keep building your skills every day 🌟
      </div>
    </div>
  );
};

const styles: any = {
  container: {
    minHeight: "100vh",
    padding: 20,
    fontFamily: '"Comic Sans MS", cursive',
    background: "linear-gradient(135deg, #f0f9ff, #fefce8)",
  },

  title: {
    textAlign: "center",
    fontSize: "2.8rem",
    color: "#0f172a",
  },

  subtitle: {
    textAlign: "center",
    color: "#64748b",
    marginBottom: 20,
  },

  section: {
    marginTop: 30,
  },

  sectionTitle: {
    fontSize: "1.6rem",
    marginBottom: 15,
    color: "#111827",
  },

  scoreBoard: {
    background: "#fff",
    padding: 20,
    borderRadius: 25,
    boxShadow: "0 8px 0 rgba(0,0,0,0.08)",
    marginBottom: 20,
  },

  scoreGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: 15,
  },

  scoreCard: {
    background: "#f9fafb",
    border: "3px solid",
    borderRadius: 20,
    padding: 15,
    textAlign: "center",
  },

  scoreLabel: {
    fontSize: "0.9rem",
    color: "#6b7280",
  },

  scoreValue: {
    fontSize: "1.8rem",
    fontWeight: "900",
    marginTop: 5,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 15,
  },

  card: {
    height: 120,
    borderRadius: 20,
    padding: 15,
    cursor: "pointer",
    position: "relative",
    boxShadow: "0 6px 0 rgba(0,0,0,0.12)",
    transition: "all 0.2s ease",
  },

  cardTitle: {
    fontSize: "1.1rem",
    fontWeight: "900",
  },

  cardDesc: {
    fontSize: "0.85rem",
    marginTop: 5,
    color: "#374151",
  },

  arrow: {
    position: "absolute",
    right: 12,
    bottom: 10,
    fontSize: "1.5rem",
  },

  footer: {
    marginTop: 40,
    textAlign: "center",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#6366F1",
  },
};

export default Home;