import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="section">
      <h2>Home Page</h2>
      <Link to="/about" className="btn">
        About
      </Link>
    </section>
  );
}
