import IsNotAuth from "modules/auth/IsNotAuth";
import Register from "modules/user/register/Register";

const RegisterPage = () => {
  return (
    <IsNotAuth>
      <Register />
    </IsNotAuth>
  );
};

export default RegisterPage;
