import Navbar from "./Navbar";

const user = {
  author: "Jane Smith",
  date: "2023-03-10 16:45:00",
  content:
    "Nulla non turpis interdum, dapibus dolor id, hendrerit ex. Nam consequat nibh sed fermentum varius.",
  likes: 21,
  comments: 3,
};

const ProfileView = (props) => {
  console.log(user);
  return (
    <div>
      <Navbar />
      <div>this is profile secions</div>;
    </div>
  );
};

export default ProfileView;
