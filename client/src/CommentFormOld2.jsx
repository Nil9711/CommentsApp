// import "./CommentForm.css";
// import React, { useState } from "react";
// import axios from "axios";
// import md5 from "md5";

// const CommentForm = ({ history, location }) => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const checkIfValidImage = (imgToCheck) => {
//     console.log(imgToCheck);
//     axios.get(imgToCheck).then(
//       (response) => {
//         if (response.headers["content-type"].includes("image")) {
//           console.log("img here");
//           return true;
//         } else {
//           console.log("no image");
//           return false;
//         }
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   };
//   const handleSubmit = (e) => {
//     insertComment(email, message);
//     history.push("/");
//   };

//   const insertComment = (email, message) => {
//     const imgUrl = "https://www.gravatar.com/avatar/";
//     const comment = {
//       image: `${imgUrl}${md5(email.trim().toLowerCase())}`,
//       email: email,
//       message: message,
//     };
//     const headers = {
//       "Content-Type": "application/json",
//     };

//     if (checkIfValidImage(comment.image) === false) {
//       comment.image =
//         "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y";
//     }

//     axios
//       .post("http://localhost:3001/api/comment", JSON.stringify(comment), {
//         headers: headers,
//       })
//       .then(
//         (response) => {
//           // console.log(response);
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//   };
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   return (
//     <div className="CommentForm">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label className="CommentFormLabel">Email address</Form.Label>
//           <div className="CommentFormInputField">
//             <Form.Control
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               required
//               onChange={handleEmailChange}
//               className="CommentFormInputEmail"
//             />
//           </div>
//         </Form.Group>

//         <Form.Group controlId="formBasicMessage">
//           <Form.Label className="CommentFormLabel">Message</Form.Label>
//           <div className="CommentFormInputField">
//             <Form.Control
//               type="text"
//               placeholder="Message"
//               required
//               value={message}
//               onChange={handleMessageChange}
//               className="CommentFormInputMessage"
//             />
//           </div>
//         </Form.Group>
//         <Button variant="primary" type="submit" className="CommentForm-Button">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default CommentForm;
