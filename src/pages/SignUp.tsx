import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useRef, useState } from "react";
import { auth } from "src/firebase";
import styles from "../styles/SignUp.module.css";

const SignIn: React.FC = () => {
  const [signMethod, setSignMethod] = useState<"Sign In" | "Sign Up">(
    "Sign In"
  );
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const changeSignMethod = () => {
    if (signMethod === "Sign In") {
      setSignMethod("Sign Up");
    } else {
      setSignMethod("Sign In");
    }
  };

  const sign = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (signMethod === "Sign In") {
      login();
    } else {
      register();
    }
  };

  const login = async () => {
    console.log(emailRef.current?.value);
    console.log(passwordRef.current?.value);
    if (emailRef.current?.value && passwordRef.current?.value) {
      await auth
        .signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .catch((err: Error) => alert(err.message));
    } else {
      alert("Enter Email and Password");
    }
  };

  const register = async () => {
    if (emailRef.current?.value && passwordRef.current?.value) {
      await auth
        .createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .catch((err: Error) => alert(err.message));
    } else {
      alert("Enter Email and Password");
    }
  };

  return (
    <div className={styles.signUp}>
      <form>
        <h1>{signMethod}</h1>
        <div className={styles.container}>
          <FormControl className={styles.input}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input inputRef={emailRef} type="email" disableUnderline />
          </FormControl>
        </div>

        <div className={styles.container}>
          <FormControl className={styles.input}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              inputRef={passwordRef}
              type={showPassword ? "text" : "password"}
              disableUnderline
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        <Button type="submit" onClick={sign}>
          {signMethod}
        </Button>
        <h4>
          <span className={styles.gray}>
            {signMethod === "Sign In" && "New to Neflix?"}{" "}
            {signMethod === "Sign Up" && "Already registered?"}{" "}
          </span>
          <span className={styles.link} onClick={changeSignMethod}>
            {signMethod}
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
