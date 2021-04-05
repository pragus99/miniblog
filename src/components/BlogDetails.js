import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  // access id blog of URL parameters and use it for function
  const { id } = useParams();
  // load blog with current id
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  // function for redirect
  const history = useHistory();

  const handleClick = () => {
    // delete blog with current id
    fetch("http://localhost:8000/blogs/" + data.id, {
      method: "DELETE",
    }).then(() => {
      // redirect to homepage after delete blog
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div> {error} </div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
