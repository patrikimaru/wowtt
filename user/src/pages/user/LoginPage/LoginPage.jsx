import "./LoginPage.css";
import UserLoginForm from "../../../components/user/UserLoginForm/UserLoginForm";
import { Link } from "react-router-dom";


const LoginPage = () => {
  return (
    <section className='PageContainer LoginPage'>
      <section className="LoginContainerForm">
        <h3>World of Wonders Travel & Tours</h3>
        <UserLoginForm/>
        <p className="LoginLink">Don't have an account? <Link to="/sign-up">Sign up here!</Link></p>
      </section>
    </section>
  );
};

export default LoginPage;