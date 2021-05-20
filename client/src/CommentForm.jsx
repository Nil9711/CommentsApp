import "./CommentForm.css";
import React, { useState } from "react";
import axios from "axios";
import md5 from "md5";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CommentForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    insertComment(email, message);
  };

  const insertComment = (email, message) => {
    const imgUrl = "https://www.gravatar.com/avatar/";
    const comment = {
      image: `${imgUrl}${md5(email.trim().toLowerCase())}`,
      email: email,
      message: message,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post("http://localhost:3001/api/comment", JSON.stringify(comment), {
        headers: headers,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="CommentForm">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            required
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            placeholder="Message"
            value={message}
            required
            onChange={handleMessageChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="CommentForm-Button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CommentForm;
