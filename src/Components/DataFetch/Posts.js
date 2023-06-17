import { useEffect } from "react";

const Posts = () => {
  useEffect(() => {
    const fetData = async () => {
      try {
        const response = await fetch(
          "https:/codeial.com:8000/api/v2/posts?page=1&limit=5"
        );
        const postsData = await response.jason();
        console.log(postsData);
      } catch (error) {
        console.log("Error in loading post data", error);
      }
    };

    fetData();
  }, []);

  return <div className="Posts">Post Loading page working..</div>;
};

export default Posts;
