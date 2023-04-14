import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="section">
      <h2>About</h2>
      <Link to="/" className="btn">
        Home
      </Link>
    </section>
  );
}
