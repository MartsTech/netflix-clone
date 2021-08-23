import FormButton from "components/form/FormButton";
import TextInput from "components/form/TextInput";
import { Form, Formik } from "formik";
import { useStore } from "stores/store";
import * as Yup from "yup";
import SignLayout from "../shared/SignLayout";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Email is not in the correct format"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const { signInEmail } = useStore().userStore;

  return (
    <SignLayout title="Sign In">
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          signInEmail(values.email, values.password);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} autoComplete="off">
            <TextInput type="email" name="email" placeholder="Email" />
            <TextInput type="password" name="password" placeholder="Password" />
            <FormButton>Sign In</FormButton>
          </Form>
        )}
      </Formik>
    </SignLayout>
  );
};

export default Login;
