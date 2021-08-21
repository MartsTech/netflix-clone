import FormButton from "components/form/FormButton";
import TextInput from "components/form/TextInput";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useStore } from "stores/store";
import * as Yup from "yup";
import SignLayout from "../shared/signLayout/SignLayout";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Email is not in the correct format"),
  password: Yup.string().required("Password is required"),
});

const Register = () => {
  const { signUpEmail } = useStore().userStore;
  const router = useRouter();

  const email =
    typeof router.query.email === "string" ? router.query.email : "";

  return (
    <SignLayout title="Sign Up">
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          email,
          password: "",
          error: null,
        }}
        enableReinitialize
        onSubmit={(values) => {
          signUpEmail(values.email, values.password);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} autoComplete="off">
            <TextInput type="email" name="email" placeholder="Email" />
            <TextInput type="password" name="password" placeholder="Password" />
            <FormButton>Sign Up</FormButton>
          </Form>
        )}
      </Formik>
    </SignLayout>
  );
};

export default Register;
