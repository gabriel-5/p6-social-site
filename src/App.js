import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddPost from "./components/AddPost";
import Title from "./components/Title";
import Posts from "./components/Posts";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      text: "Test Post 1",
      userName: "Alice",
    },
    {
      id: 2,
      text: "Test Post 2",
      userName: "Jake",
    },
    {
      id: 3,
      text: "Test Post 3",
      userName: "Frances",
    },
  ]);

  const addPost = (post) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newPost = { id, ...post };
    setPosts([...post, newPost]);
  };

  return (
    <div className="App">
      <Container className="AppContainer">
        <div className="ComponentContainer">
          <Row>
            <Col>
              <AddPost onAdd={addPost} />
            </Col>
            <Col>
              <Title />
            </Col>
            <Col>
              <Posts posts={posts} />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
