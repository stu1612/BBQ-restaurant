//npm
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="menu">Menu</Link> |{" "}
      <Link to="contact">Contact</Link>
    </nav>
  );
}
