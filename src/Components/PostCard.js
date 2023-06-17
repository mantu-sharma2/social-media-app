import dpIcon from "./Icons/icons8-avatar-50.png";
import likeIcon from "./Icons/icons8-like-32.png";
import commentIcon from "./Icons/icons8-comment-24.png";
import "./CSS/Header.css";
import { useContext } from "react";
import myContext from "../Components/Context/RootContext";
const PostCard = () => {
  const store = useContext(myContext);
  console.log(store.getState());
  return (
    <div className="PostCard">
      <div className="head">
        <div className="left">
          <img src={dpIcon} height={45} width={45} alt="dp" />
        </div>
        <div className="right">
          <h3>John wick</h3>
          <p>5 min ago</p>
        </div>
      </div>
      <div className="body">
        <p>
          this is a sample text Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Nemo doloremque dolor blanditiis error reiciendis
          eaque non tenetur eligendi vel ipsa? Provident, nostrum iure quidem
          quam voluptates nesciunt rerum ipsum iusto?
        </p>
      </div>
      <div className="footer">
        <div className="likes">
          <img src={likeIcon} alt="like-btn" />
        </div>
        <div className="comment-btn">
          <img src={commentIcon} alt="comment-btn" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
