export default function ServiciosLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ border: "solid red 1px" }}>[services menubar]</div>
      <div>{children}</div>
    </div>
  );
}
