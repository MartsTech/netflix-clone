import { Button } from "@material-ui/core";
import React, { lazy, useState } from "react";
import styles from "../styles/Login.module.css";

const SignIn = lazy(() => import("./SignUp"));

const Login: React.FC = () => {
  const [signIn, setSignIn] = useState<boolean>(false);

  return (
    <div className={styles.login}>
      <div className={styles.background}>
        <img
          className={styles.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/240px-Netflix_2015_logo.svg.png"
          alt="background"
          onClick={() => setSignIn(false)}
        />
        <Button onClick={() => setSignIn(true)}>Sign in</Button>
        <div className={styles.gradient}></div>
      </div>

      <div className={styles.body}>
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>

            <div className={styles.input}>
              <form>
                <input type="email" placeholder="Email Address"></input>
                <Button onClick={() => setSignIn(true)}>GET STARTED</Button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
