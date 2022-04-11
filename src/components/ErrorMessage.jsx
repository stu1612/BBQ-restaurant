// npm
import { useNavigate } from "react-router-dom";

export default function ErrorMessage() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>We are sorry something went wrong</h1>
      <button onClick={() => navigate("/")}>Go to home</button>
    </div>
  );
}
