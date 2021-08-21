import { Avatar, Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Nav } from "../components/Nav";
import { Plans } from "../components/Plans";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import styles from "../styles/Profile.module.css";

const Profile: React.FC = () => {
  const user = useSelector(selectUser);

  const history = useHistory();

  const signOut = async () => {
    await auth.signOut();
    history.push("/");
  };

  return (
    <div className={styles.profile}>
      <Nav />
      <div className={styles.body}>
        <h1>Edit Profile</h1>
        <div className={styles.info}>
          <Avatar className={styles.avatar} />
          <div className={styles.details}>
            <h2>{user?.email}</h2>
            <div className={styles.plans}>
              <h3>Plans</h3>
              <Plans />
              <Button className={styles.signOut} onClick={signOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
