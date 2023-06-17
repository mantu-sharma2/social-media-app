import dpIcon from "./Icons/icons8-avatar-50.png";
import likeIcon from "./Icons/icons8-like-32.png";
import commentIcon from "./Icons/icons8-comment-24.png";
import "./CSS/Header.css";
import { useContext } from "react";
import myContext from "../Components/Context/RootContext";
const PostCard = () => {
  const store = useContext(myContext);
  const data = store.getState().posts;
  // console.log(store.getState());
  return (
    <div>
      {data.map((post) => (
        <div className="PostCard">
          <div className="head">
            <div className="left">
              <img src={dpIcon} height={45} width={45} alt="dp" />
            </div>
            <div className="right">
              <h3>{post.author}</h3>
              <p className="time">{post.date}</p>
            </div>
          </div>
          <div className="body">
            <p>{post.content}</p>
          </div>
          <div className="footer">
            <div className="likes">
              <img src={likeIcon} alt="like-btn" />
              <p>{post.likes}</p>
            </div>
            <div className="comment-btn">
              <img src={commentIcon} alt="comment-btn" />
              <p>{post.comments}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
