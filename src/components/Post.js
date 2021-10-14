import "../App.css";
import Counter from "./Counter";
import avi from "./avi.png";

const Post = ({ post }) => {
  return (
    <div className="postContainer">
      <img className="avi" src={avi} />
      <p>{post.userName} is saying...</p>
      <p className="postContent">"{post.text}"</p>
      <p>Call them on {post.phone}</p>
      <p>{post.signature}</p>
      <Counter />
    </div>
  );
};

export default Post;
