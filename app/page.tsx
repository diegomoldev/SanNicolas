export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#0a0a0a",
      }}
    >
      <h1
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: "clamp(2rem, 6vw, 4.5rem)",
          fontWeight: 800,
          color: "#e6e6e6",
          letterSpacing: "-0.04em",
          margin: 0,
        }}
      >
        san nicolas
      </h1>
    </div>
  );
}
