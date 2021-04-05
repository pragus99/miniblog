import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  //
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  // it's set to false to prevent loading adding blog.. before submit form
  const [isPending, setIsPending] = useState(false);
  // redirect
  const history = useHistory();

  const handleSubmit = (e) => {
    //prevent refresh page
    e.preventDefault();
    //loading adding blog...
    setIsPending(true);

    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      //when adding blog completed
      setIsPending(false);
      //to homepage
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input
          type="text"
          required
          value={title}
          // Update title state every time when you input something and match what you type
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body</label>
        <textarea
          cols="30"
          rows="10"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Prayogo">Prayogo</option>
          <option value="Bagus">Bagus</option>
          <option value="Suntoro">Suntoro</option>
        </select>
        {!isPending && <button>Create Blog</button>}
        {/* if isPending true, loading adding blog */}
        {isPending && <button disabled>adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
