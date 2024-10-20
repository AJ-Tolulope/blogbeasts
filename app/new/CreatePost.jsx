import Header from "../../component/header/Header";
import "./CreatePost.css";

const CreateNewPost = () => {
  return (
    <>
      <Header />

      <section className="create-post">
        <div className="container">
          <h3>create new post</h3>

          <form>
            <div className="input-box">
              <input type="tile" placeholder="Title" />
            </div>
            <div className="input-box">
              <input type="summary" placeholder="Post sumary" />
            </div>
            <div className="input-box">
              <input type="file" />
            </div>
            <div className="input-box">
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="input-box">
              <span className="btn-c" type="submit">
                Create Post
              </span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateNewPost;
