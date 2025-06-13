import { Link } from "react-router";

const PRODUCTS = [
  { id: "p1", title: "Atomic Habits" },
  { id: "p2", title: "Mindset" },
  { id: "p3", title: "Ikigai" },
];

function ProductsPage() {
  return (
    <>
      <h1>My Product Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
