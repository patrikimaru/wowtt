import { auth, signInWithGoogle } from "../../../auth/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { Formik, Form, Field } from 'formik';
import Button from "../../shared/Button/Button";
import { useNavigate } from "react-router-dom";
import { LoginInitialValue, LoginSchema } from "./LoginValidation";


const UserLoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    const { email, password } = values;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("You have successfully logged in!");
      navigate("/");
    } catch (error) {
      alert("An error occurred during login. Please check your credentials.");
    }
  };


  return (
    <>
    <Formik initialValues={LoginInitialValue} validationSchema={LoginSchema} onSubmit={handleLogin}>
      {({ errors, touched }) => (
        <Form className="UserForm">
            <div className="UserInputDiv">
              <label>Email</label>
              <div className="UserInput">
                <IoMailOutline />
                <Field
                  type="email"
                  name="email"
                  placeholder="johndoe123@gmail.com" 
                />
              </div>
              {errors.email && touched.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="UserInputDiv">
              <label>Password</label>
              <div className="UserInput">
                <IoLockClosedOutline />
                <Field
                  type="password" 
                  name="password"
                  placeholder="Password must be at least 8 characters"
                />
              </div>
              {errors.password && touched.password && <div className="error">{errors.password}</div>}
            </div>
            <Button type="submit" variant="primary user-form-btn" size="full lg">
              Sign in
            </Button>
          </Form>
      )}
    </Formik>
     <Button onClick={signInWithGoogle} variant="user-form-btn" size="full lg">
      <FcGoogle/>
       Sign in with Google
     </Button>
     </>
  );
};

export default UserLoginForm;
