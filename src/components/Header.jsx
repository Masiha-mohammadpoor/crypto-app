import { Avatar, IconButton } from "@mui/material";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <header className="w-full h-14 flex justify-between items-center pr-5 pt-1">
      <div>
        <p className="font-black">Dashboard</p>
      </div>
      <div className="flex justify-between items-center gap-x-8 ">
        <div className="flex justify-center items-center">
          <button className="w-8 h-10 rounded-l-md bg-gray-100">
            <SearchOutlinedIcon />
          </button>
          <input
            type="text"
            placeholder="search..."
            className="border-none outline-none h-10 rounded-r-md bg-gray-100"
          />
        </div>
        <div>
          <IconButton className="text-primary-500">
            <NotificationsActiveOutlinedIcon />
          </IconButton>
        </div>
        <div className="flex items-center gap-x-1">
          <Avatar src="/images/user.jfif" />
          <button>
            <span className="pl-1">masiha</span>
            <ArrowDropDownIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
