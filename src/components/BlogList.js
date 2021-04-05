import { Link } from "react-router-dom";

// const BlogList = (props) => {
//   const blogs = props.blogs;
//   const title = props.title;
// OR
const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {/* iteration array blogs from useFetch.js*/}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
