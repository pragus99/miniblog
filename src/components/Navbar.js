const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          //  Jika ingin menggunakan inline css dengan javascript object
          // style={{
          //   color: "White",
          //   backgroundColor: "#f1356d",
          //   borderRadius: "8px",
          // }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
