import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Navbar from "../Containers/Navbar/Navigation";
import Board from "../Containers/board/Board"
import style from "../Home/Home.module.css";
import first from "../utils/pexels-fathi-vee-1020478.jpg";
import clone from "../utils/clone.jpg";
import MImage from "../utils/MImage.jpg";
import gexupdate from "../utils/gxupdate.jpg";
import Webb from "../utils/Webb.jpg";

const Home = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [Theme, setTheme] = React.useState(0);
  const backgroundImages = [first, clone, MImage, gexupdate, Webb];
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  const changeTheme = () => {
    if (backgroundImages.length - 1 > Theme) {
      setTheme(Theme + 1);
    } else {
      setTheme(0);
    }
  };
  return (
    <div className={style.HomeContainer}>
      <div className={style.Navbar}>
        <Navbar />
      </div>
      <div className={style.container}>
        <div
          // className={` ${style.sideBarContainer} ${
          //   collapsed ? style.collapsed : null
          // }`}
        >
          {/* {collapsed ? (
          //   <button id={style.expandBtn} onClick={handleCollapse}>
          //     <NavigateNextIcon sx={{ fontSize: "1.5rem" }} />
          //   </button>
          // ) : (
            // <Sidebar
            //   collapsed={collapsed}
            //   setCollapsed={setCollapsed}
            //   handleCollapse={handleCollapse}
            //   changeTheme={changeTheme}
            // />
            null
          )} */}
        </div>

        <div
          className={` ${style.boardContainer} ${
            collapsed ? style.collapsed : null
          }`}
          style={{ backgroundImage: `url(${backgroundImages[Theme]})`,width:"100% "}}
        >
          <Board />
        </div>
      </div>
    </div>
  );
};

export default Home;
