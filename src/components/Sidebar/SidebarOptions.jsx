import cc from "classcat";

const hoverStyle =
  "hover:bg-hoverBg hover:text-twitterColor transition-colors delay-100 ease-out";
const activeStyle = "text-twitterColor";

function SidebarOptions({ active, text, Icon }) {
  return (
    <div
      className={cc([
        "flex items-center rounded-3xl cursor-pointer",
        hoverStyle,
        { [activeStyle]: active },
      ])}
    >
      <div className="p-5">
        <Icon />
      </div>
      <h2 className="font-extrabold bg text-xl mr-5">{text}</h2>
    </div>
  );
}

export default SidebarOptions;
