"use client";

import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainHeader from "../components/MainHeader";
import { useLocation } from "react-router-dom";
import styles from "./app.module.css";

export default function RootPage() {
  const location = useLocation();

  return (
    <div className={styles["app-container"]}>
      <MainHeader />
      <AnimatePresence mode="wait">
        <div key={location.pathname} className={styles["page-container"]}>
          <Outlet />
        </div>
      </AnimatePresence>
    </div>
  );
}
