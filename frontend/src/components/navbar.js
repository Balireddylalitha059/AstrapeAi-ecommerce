import { Link } from "react-router-dom";

function navbar({ user, setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  

  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      {user ? (
        <>
          <Link to="/cart" style={{ margin: "10px", color: "white" }}>Cart</Link>
          <span style={{ margin: "10px" }}>Hello, {user.name}</span>
          <button onClick={handleLogout} style={{ margin: "10px" }}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ margin: "10px", color: "white" }}>Login</Link>
          <Link to="/signup" style={{ margin: "10px", color: "white" }}>Signup</Link>
        </>
      )}
    </nav>
  );
}

export default navbar;
