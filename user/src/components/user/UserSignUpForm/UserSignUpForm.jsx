import "./UserSignUpForm.css";
import axios from "axios";
import Button from "../../shared/Button/Button";
import { auth } from "../../../auth/firebase";
import { Formik, Form, Field } from 'formik';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { 
  SignUpInitialValue, 
  SignupSchema 
} from "./SignUpValidation";
import { 
  createUserWithEmailAndPassword, 
  sendEmailVerification,
} from "firebase/auth";
import { 
  IoCallOutline, 
  IoMailOutline, 
  IoLockClosedOutline 
} from "react-icons/io5";


const UserSignUpForm = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (values) => {
    const { 
      firstName, 
      lastName, 
      phoneNumber, 
      email, 
      password,
     } = values;

    try {
      await axios.post("http://localhost:5000/user/register", {
        firstName, 
        lastName, 
        phoneNumber, 
        email, 
        password, 
      })
      .then(async (response) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        navigate("/");
        await sendEmailVerification(userCredential.user);
        alert("You have successfully created an account! Please check your email for verification.");
        setUser(response.data);
      })
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
    
  };


  return (
    <Formik
      initialValues={SignUpInitialValue} 
      onSubmit={handleSignUp} 
      validationSchema={SignupSchema}>
      {({errors, touched}) => (
        <Form className="UserForm">
          <div className="UserInputNameForm">
            <div className="UserInputDiv">
              <label>First Name</label>
              <div className="UserInput">
                <Field 
                  type="text"
                  name="firstName"
                  placeholder="John" 
                />
              </div>
              {errors.firstName && touched.firstName ? (
              <div className="error">{errors.firstName}</div>
              ) : null}
            </div>
            <div className="UserInputDiv">
              <label>Last Name</label>
              <div className="UserInput">
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Doe" 
                />
              </div>
              {errors.lastName && touched.lastName ? (
              <div className="error">{errors.lastName}</div>
              ) : null}
            </div>
          </div>
          <div className="UserInputDiv">
            <label>Phone Number</label>
            <div className="UserInput">
              <IoCallOutline />
              <Field
                type="tel"
                name="phoneNumber"
                placeholder="09123456789" 
                pattern="[0-9]{11}"
              />
            </div>
            {errors.phoneNumber && touched.phoneNumber ? (
              <div className="error">{errors.phoneNumber}</div>
              ) : null}
          </div>
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
            {errors.email && touched.email ? (
              <div className="error">{errors.email}</div>
              ) : null}
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
            {errors.password && touched.password ? (
              <div className="error">{errors.password}</div>
              ) : null}
          </div>
          <div className="UserInputDiv">
            <label>Confirm Password</label>
            <div className="UserInput">
              <IoLockClosedOutline />
              <Field 
                type="password" 
                name="confirmPassword"
                placeholder="Passwords must match"
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword ? (
              <div >{errors.confirmPassword}</div>
              ) : null}
          </div>

          <Button type="submit" variant="primary user-form-btn" size="full lg">Sign up</Button>
        </Form>
      )}
    </Formik>
  );
};

export default UserSignUpForm;


