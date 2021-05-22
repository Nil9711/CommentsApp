import "./Comment.css";
const Comment = (props) => {
  const { image, email, message, date } = props;
  return (
    <div className="Comment">
      <img src={image} alt={email} />
      <ul>
        <li className="CommentsEmail">{email}</li>
        <li className="CommentsText">{message}</li>
        <li className="CommentsDate">{date}</li>
      </ul>
    </div>
  );
};

export default Comment;
