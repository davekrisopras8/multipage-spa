import { Link, useNavigate } from "react-router";

function HomePage() {
  const navigate = useNavigate()

  function navigateHandler() {
    navigate('/products')
  }

  return (
    <>
      <h1>My HomePage</h1>
      <p>
        Go to <Link to="/products"> product page</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
