import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // call useFetch components and after call that BlogList components for iteration array of blog if nothing wrong
  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
