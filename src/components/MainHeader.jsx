import { Link, useNavigate } from "react-router-dom";
import Brand from "../assets/favicon.ico";
import { delay } from "../utils/delay";
import { useDispatch } from "react-redux";
import { setTransparent } from "../store/slices/homeSlice";
import classes from "./mainheader.module.css";

export default function MainHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function handleClick() {
    dispatch(setTransparent(true));
    await delay(500);
    navigate("/browse");
    dispatch(setTransparent(false));
  }

  return (
    <header>
      <nav className={classes["main-navigation"]}>
        <div className={classes["logo-container"]}>
          <Link to="/">
            <img src={Brand} alt="Brand" />
          </Link>
        </div>
        <ul className={classes["navigation-items"]}>
          <li onClick={handleClick}>Browse Recipes</li>
        </ul>
      </nav>
    </header>
  );
}
