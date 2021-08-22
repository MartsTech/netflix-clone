import Logo from "components/logo/Logo";
import BackgroundLayout from "../shared/BackgroundLayout";
import StartButton from "./StartButton";
import StartInfo from "./StartInfo";
import StartInput from "./StartInput";

const Start = () => {
  return (
    <BackgroundLayout>
      <Logo path="/" />
      <StartButton />
      <StartInfo />
      <StartInput />
    </BackgroundLayout>
  );
};

export default Start;
