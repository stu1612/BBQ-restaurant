// npm
import { useParams, useNavigate } from "react-router-dom";

export default function Product() {
  let navigate = useNavigate();
  let { id } = useParams();
  return (
    <div>
      <h2>Product</h2>
      <p>Product : {id}</p>
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
}
