// npm
import { Link } from "react-router-dom";
// data
import categories from "../data/categories.json";

export default function Menu() {
  const categoryItems = categories.map((category) => (
    <Link to={`/category/${category.id}`} key={category.id}>
      <h2>{category.title}</h2>
    </Link>
  ));
  return (
    <div>
      <h1>Menu</h1>
      {categoryItems}
    </div>
  );
}
