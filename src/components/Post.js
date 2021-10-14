import "../App.css";
import Counter from "./Counter";
import avi from "./avi.png";
import Card from "react-bootstrap/Card";

const Post = ({ post }) => {
  return (
    <Card className="postContainer">
      <img className="avi" src={avi} />
      <p>{post.userName} is saying...</p>
      <p className="postContent">"{post.text}"</p>
      <p>Call them on {post.phone}</p>
      <p>{post.signature}</p>
      <Counter />
    </Card>
  );
};

export default Post;
