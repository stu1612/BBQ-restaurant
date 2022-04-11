// npm
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// data
import products from "../data/menu.json";

export default function Category() {
  const { categoryId } = useParams();

  const productItems = products
    .filter((product) => product.categoryId === categoryId)
    .map((item) => (
      <Link key={item.id} to={`/product/${item.id}`}>
        <h2>{item.name}</h2>
      </Link>
    ));
  return (
    <div>
      <h2>Category</h2>
      <p>Id {categoryId} </p>
      {productItems}
    </div>
  );
}
