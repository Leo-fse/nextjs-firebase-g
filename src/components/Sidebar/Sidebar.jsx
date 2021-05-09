import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOptions from "src/components/Sidebar/SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="flex-3 border-r border-twitterColor mt-5 px-5">
      {/* Twitter icon */}
      <TwitterIcon className="text-twitterColor text-3xl ml-5 mb-5" />
      {/* SidebarOpton */}
      <SidebarOptions active Icon={HomeIcon} text="Home" />
      <SidebarOptions Icon={SearchIcon} text="Explore" />
      <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
      <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOptions Icon={ListAltIcon} text="Lists" />
      <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
      <SidebarOptions Icon={MoreHorizIcon} text="More" />
      {/* Button -> Tweet */}
      <Button
        variant="outlined"
        className="bg-twitterColor border-none text-white font-black rounded-3xl h-12 mt-5 "
        fullWidth
      >
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
