import { Avatar } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "../styles/Nav.module.css";

export const Nav: React.FC = () => {
  const [show, handleShow] = useState<boolean>(false);

  const history = useHistory();

  const transitionNav = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  return (
    <nav
      className={clsx(styles.nav, {
        [styles.black]: show,
      })}
    >
      <div className={styles.content}>
        <img
          onClick={() => history.push("/")}
          className={styles.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/240px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
        <div className={styles.avatar} onClick={() => history.push("/profile")}>
          <Avatar />
        </div>
      </div>
    </nav>
  );
};
