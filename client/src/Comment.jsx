import "./Comment.css";
const Comment = (props) => {
  const { image, email, message } = props;
  return (
    <div className="Comment">
      <img src={image} alt={email} />
      <ul>
        <li className="CommentsText">{email}</li>
        <li className="CommentsText">{message}</li>
      </ul>
    </div>
  );
};

export default Comment;
