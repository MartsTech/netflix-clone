import HasSubscription from "modules/auth/HasSubscription";
import IsAuth from "modules/auth/IsAuth";
import Home from "modules/home/Home";

const HomePage = () => {
  return (
    <IsAuth>
      <HasSubscription>
        <Home />
      </HasSubscription>
    </IsAuth>
  );
};

export default HomePage;
