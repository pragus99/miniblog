import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Blog</h1>
      <div className="links">
        {/* Link is anchor but it's function from react-router-dom and not request to server */}
        <Link to="/">Home</Link>
        <Link
          to="/create"
          //  Jika ingin menggunakan inline css dengan javascript object
          // style={{
          //   color: "White",
          //   backgroundColor: "#f1356d",
          //   borderRadius: "8px",
          // }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
