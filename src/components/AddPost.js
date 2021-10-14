import { useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const AddPost = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");

  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-bottom-center",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "1000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ text, userName, phone });
    setText("");
    setUserName("");
    setPhone("");
    toastr.success("POSTING MESSAGE NOW");
  };

  return (
    <div className="newPost" onSubmit={onSubmit}>
      <form className="add-post">
        <input
          className="nameField"
          required
          type="text"
          placeholder="name here"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <br />
        <textarea
          cols="18"
          rows="5"
          className="msgField"
          required
          onSubmit={onSubmit}
          type="text"
          placeholder="msg here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <input
          className="phoneField"
          required
          type="number"
          placeholder="phone #"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>

        <br />
        <input className="addPostButton" type="submit" value="Post"></input>
      </form>
    </div>
  );
};

export default AddPost;
