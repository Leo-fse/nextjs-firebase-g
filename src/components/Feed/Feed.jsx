import classes from "src/components/Feed/Feed.module.css";
import Post from "src/components/Post/Post";
import TweetBox from "src/components/TweetBox/TweetBox";

function Feed() {
  return (
    <div
      className={`flex-4 border-r border-twitterColor overflow-y-scroll  min-w-fit-content ${classes.feed}`}
    >
      <div className="sticky top-0 bg-white z-50 border border-twitterColor py-4 px-5 ">
        <h2 className="text-xl font-extrabold">HOME</h2>
      </div>

      <TweetBox />
      {/* Post */}
      <Post />
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default Feed;
