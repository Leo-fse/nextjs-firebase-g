const { Button, Avatar } = require("@material-ui/core");

function TweetBox() {
  return (
    <div className="tweetBox pb-3 border-b-8 border-twitterColor pr-5">
      <form className="flex flex-col" action="">
        <div className="tweetBox__input flex p-5">
          <Avatar src="./Avatar/akiko.jpg"></Avatar>
          <input
            className="flex-1 ml-5 text-xl border-0"
            placeholder="What's happening?"
            type="text"
            name=""
            id=""
          />
        </div>
        <input
          className="border-0 p-5"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="bg-twitterColor border-0 text-white font-black rounded-3xl w-20 h-10 mt-5 ml-auto">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
