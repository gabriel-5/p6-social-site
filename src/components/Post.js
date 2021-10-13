import "../App.css";

const Post = ({ post }) => {
  return (
    <div className="postContainer">
      <p>{post.userName}</p>
      <p>{post.text}</p>
    </div>
  );
};

export default Post;
