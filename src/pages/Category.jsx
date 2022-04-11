// npm
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// components
import ErrorMessage from "../components/ErrorMessage";
// data
import products from "../data/menu.json";

export default function Category() {
  const { categoryId } = useParams();

  const product = products.find((product) => product.categoryId === categoryId);
  const filteredProducts = products.filter(
    (product) => product.categoryId === categoryId
  );

  const productItems = filteredProducts.map((item) => (
    <Link key={item.id} to={`/product/${item.id}`}>
      <h2>{item.name}</h2>
    </Link>
  ));

  // safeguard
  if (product === undefined) return <ErrorMessage />;

  return (
    <div>
      <h2>Category</h2>
      <p>Id {categoryId} </p>
      {productItems}
    </div>
  );
}
