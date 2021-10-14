import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddPost from "./components/AddPost";
import Title from "./components/Title";
import Posts from "./components/Posts";
import Counter from "./components/Counter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ViewPosts from "./ViewPosts";
import Navbar from "./Navbar";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newPost = { id, ...post };
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <div className="App">
        <Container className="AppContainer">
          <div className="ComponentContainer">
            <Row>
              <Col></Col>
              <Col>
                <Title />
                <Switch>
                  <Route exact path="/">
                    <AddPost onAdd={addPost} />
                  </Route>

                  <Route exact path="/viewposts">
                    <ViewPosts />
                    <Posts posts={posts} />
                  </Route>
                </Switch>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
      </div>
    </Router>
  );
}

export default App;
