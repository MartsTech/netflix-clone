import IsNotAuth from "modules/auth/IsNotAuth";
import Start from "modules/user/start/Start";

const StartPage = () => {
  return (
    <IsNotAuth>
      <Start />
    </IsNotAuth>
  );
};

export default StartPage;
