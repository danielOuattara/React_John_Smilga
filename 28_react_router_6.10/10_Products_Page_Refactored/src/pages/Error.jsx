import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="section">
      <h2>404</h2>
      <p>Page Not Found</p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </section>
  );
}
