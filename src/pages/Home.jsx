import { useNavigate } from "react-router-dom";
import { delay } from "../utils/delay";
import { useDispatch, useSelector } from "react-redux";
import { setTransparent } from "../store/slices/homeSlice";
import classes from "./home.module.css";

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const transparent = useSelector((state) => state.transparent.value);
  async function handleClick() {
    dispatch(setTransparent(true));
    await delay(500);
    navigate("/browse");
    dispatch(setTransparent(false));
  }
  return (
    <main
      className={
        transparent
          ? `${classes["home-content"]} transparent`
          : classes["home-content"]
      }
    >
      <h1>Welcome to Infinite Recipes!</h1>
      <p>
        Browse the <b>infinite</b> amounts of recipes based on the ingredients
        that you{" "}
        <u>
          <b>own</b>
        </u>
        !
      </p>
      <button onClick={handleClick}>Get Started!</button>
    </main>
  );
}
