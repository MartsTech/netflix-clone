import BackgroundLayout from "../shared/BackgroundLayout";
import Logo from "../shared/Logo";
import StartButton from "./StartButton";
import StartInfo from "./StartInfo";
import StartInput from "./StartInput";

const Start = () => {
  return (
    <BackgroundLayout>
      <Logo />
      <StartButton />
      <StartInfo />
      <StartInput />
    </BackgroundLayout>
  );
};

export default Start;
