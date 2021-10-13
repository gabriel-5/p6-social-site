import { useState } from "react";

const AddPost = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [userName, setUserName] = useState("");

  const onSubmit = () => {
    onAdd({ text, userName });
    setText("");
    setUserName("");

    onAdd({ text, userName });
    setText("");
    setUserName("");
  };

  return (
    <div className="newPost" onSubmit={onSubmit}>
      <form className="add-post">
        <input
          className="nameField"
          type="text"
          placeholder="name here"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <br />
        <input
          className="msgField"
          onSubmit={onSubmit}
          type="text"
          placeholder="msg here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <br />
        <input className="addPostButton" type="submit" value="Post"></input>
      </form>
    </div>
  );
};

export default AddPost;
