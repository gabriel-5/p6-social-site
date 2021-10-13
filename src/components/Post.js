import "../App.css";

const Post = (post) => {
  return (
    <div className="post-container">
      <p>{post.username}</p>
      <p>{post.text}</p>
    </div>
  );
};

export default Post;
