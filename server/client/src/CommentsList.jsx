/* eslint-disable no-unused-vars */
import Comment from "./Comment";
import React, { useState, useEffect } from "react";
import "./CommentsList.css";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommentForm from "./CommentForm";

const CommentsList = () => {
  const [commentsData, setComments] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  };

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios
        .get("/api/comments", headers)
        .then((response) => {
          setComments(response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetchComments();
  }, []);

  let commentsList = [];

  commentsList = commentsData.map((comment) => (
    <Comment
      key={comment._id}
      image={comment.image}
      email={comment.email}
      date={comment.date}
      message={comment.message}
    />
  ));

  commentsList.reverse();

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
          date={comment.date}
          message={comment.message}
        />
      ))
    );
  };

  return (
    <>
      <div className="CommentsListAlign">
        <Container>
          <Row className="px-5 mx-5">
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
        <div className="CommentsListContainer">
          {isFiltering ? filteredList : commentsList}
        </div>

        <CommentForm />
      </div>
    </>
  );
};

export default CommentsList;
