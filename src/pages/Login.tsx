import { Button } from "@material-ui/core";
import React, { lazy, useRef, useState } from "react";
import styles from "../styles/Login.module.css";

const SignIn = lazy(() => import("./SignUp"));

const Login: React.FC = () => {
  const [signIn, setSignIn] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);

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
          <SignIn email={emailRef.current?.value} />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>

            <div className={styles.input}>
              <form>
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="Email Address"
                ></input>
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
