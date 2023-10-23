import "./SignUpPage.css";
import UserSignUpForm from "../../../components/user/UserSignUpForm/UserSignUpForm";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <section className='PageContainer SignUpPage'>
      <section className="SignUpContainerForm">
        <h2>Create Account</h2>
        <UserSignUpForm />
        <p className="LoginLink">Already have an account? <Link to="/login">Login here!</Link></p>
      </section>
    </section>
  );
};

export default SignUpPage;