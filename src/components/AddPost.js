const AddPost = () => {
  return (
    <div>
      <form className="add-post">
        <input
          className="nameField"
          type="text"
          placeholder="name here"
          value="name here"
        ></input>
        <br />
        <input
          className="msgField"
          type="text"
          placeholder="msg here"
          value="msg here"
        ></input>
        <br />
        <input className="addPostButton" type="submit" value="Post"></input>
      </form>
    </div>
  );
};

export default AddPost;
