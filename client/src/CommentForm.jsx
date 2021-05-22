import "./CommentForm.css";
import React, { useState } from "react";
import axios from "axios";
import md5 from "md5";

const CommentForm = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const checkIfValidImage = (imgToCheck) => {
    console.log(imgToCheck);
    axios.get(imgToCheck).then(
      (response) => {
        if (response.headers["content-type"].includes("image")) {
          console.log("img here");
          return true;
        } else {
          console.log("no image");
          return false;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const handleSubmit = (e) => {
    insertComment(email, message);
    history.push("/");
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

    if (checkIfValidImage(comment.image) === false) {
      comment.image =
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y";
    }

    axios
      .post("http://localhost:3001/api/comment", JSON.stringify(comment), {
        headers: headers,
      })
      .then(
        (response) => {
          // console.log(response);
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
    <div id="form-main">
      <div id="form-div">
        <form className="form" id="form1" onSubmit={handleSubmit}>
          <p className="email">
            <input
              name="email"
              type="text"
              onChange={handleEmailChange}
              value={email}
              className="validate[required,custom[email]] feedback-input"
              id="email"
              placeholder="Email"
            />
          </p>

          <p className="text">
            <textarea
              name="text"
              className="validate[required,length[6,300]] feedback-input"
              id="comment"
              value={message}
              onChange={handleMessageChange}
              placeholder="Comment"
            ></textarea>
          </p>

          <div className="submit">
            <input type="submit" value="SEND" id="button-blue" />
            <div className="ease"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
