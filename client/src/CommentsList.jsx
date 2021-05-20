import Comment from "./Comment";
import React, { useState, useEffect } from "react";
import "./CommentsList.css";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CommentsList = () => {
  const [commentsData, setComments] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get("http://localhost:3001/api/comments");
      setComments(response.data.data);
    };

    fetchComments();
  }, []);

  let commentsList = [];

  commentsList = commentsData.map((comment) => (
    <Comment
      key={comment._id}
      image={comment.image}
      email={comment.email}
      message={comment.message}
    />
  ));

  const filterList = (e) => {
    if (e.target.value === "") {
      setIsFiltering(false);
    }
    commentsList = commentsData.filter((comment) =>
      comment.email.includes(e.target.value)
    );
    setIsFiltering(true);
    setFilteredList(
      commentsList.map((comment) => (
        <Comment
          key={comment._id}
          image={comment.image}
          email={comment.email}
          message={comment.message}
        />
      ))
    );
  };

  return (
    <>
      <Container>
        <Row className="w-35">
          <Col className="mt-3 ">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Filter with an email"
                aria-label="Username"
                onChange={filterList}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
      {isFiltering ? filteredList : commentsList}
    </>
  );
};

export default CommentsList;
