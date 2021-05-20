import "./CommentForm.css";
import React, { useState } from "react";
import axios from "axios";
import md5 from "md5";

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
    <div className="CommentFormContainer">
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          className="CommentForm-Email"
          type="text"
          id="email"
          name="email"
          required
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <label>Message: </label>
        <input
          className="CommentForm-Message"
          placeholder="message"
          type="text"
          id="message"
          name="message"
          value={message}
          required
          onChange={handleMessageChange}
        />

        <br />
        <button className="CommentForm-Button">Submit!</button>
      </form>
    </div>
  );
};

export default CommentForm;
