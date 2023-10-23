import "./NavBar.css";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import DefaultPic from "../../../assets/images/profilePic.jpg";
import SearchBar from "../SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { auth } from "../../../auth/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { IoCartOutline, IoMenuOutline,IoCloseOutline, IoSearchOutline } from "react-icons/io5";


const NavBar = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const [openNavBar, setOpenNavbar] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  const handleMenuClick = () => {
    setOpenNavbar(!openNavBar);
  };

  const handleLogout = () => {
   
    if(window.confirm("Are you sure you want to logout?")){
      signOut(auth);
      localStorage.clear();
      navigate("/login");
    }
  }

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      listen();
    }
  })

  return (
    <nav className='SharedNavBar'>

      <div className="logo">
        <Link to="/">
          <img src='/logo.png' alt='logo' width={80} />
        </Link>
      </div>

      <div className="SharedNavSearchContainer">
        <SearchBar/>
      </div>

      <div className={`SharedNavBarLink ${openNavBar ? "open" : ""}`}>
        {authUser ? 
          (
            <div className="SharedNavBarAccountSettings">
              <Link to="/cart">
                <IoCartOutline className="cart"/>
              </Link>
              <Link to="/settings">
                <Avatar src={localStorage.getItem("profilePic")} width={35} height={35} />
              </Link>
              <Button variant="danger" onClick={handleLogout}>Logout</Button>
            </div> 
          ):
          (
            <div className="SharedNavBarAccountSettings">
              <Link to="/login">
                <Button variant="primary">Login</Button>
              </Link>
              <Link to="/sign-up">
                <Button variant="outline-primary">Sign up</Button>
              </Link>
            </div>
          )
        }

        <ul className="mobileViewLink">
          <li>
            <Link to="/" className={pathname === "/" ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
          <Link to="/settings" className={pathname === "/settings" ? 'active' : ''}>
            Settings
          </Link>
          </li>
          {authUser ? 
          (
            <>
              <li>
                <Link to="/cart" className={pathname === "/cart" ? 'active' : ''}>
                  Cart
                </Link>
              </li>
              <Button variant="danger" onClick={handleLogout}>Logout</Button>
            </> 
          ):
          (
            <>
              <li>
                <Link to="/login" className={pathname === "/login" ? 'active' : ''}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/sign-up" className={pathname === "/sign-up" ? 'active' : ''}>
                  Sign up
                </Link>
              </li>
             </>
          )
        }
        </ul>
        <IoCloseOutline className="close" onClick={handleMenuClick}/>
      </div>

      <div className="SharedNavBarButtonContainer">
        <Link to="/search">
          <IoSearchOutline/>
        </Link>
        {authUser ? 
          (
            <div className="SharedNavBarAccountSettings">
              <Link to="/cart">
                <IoCartOutline className="cart"/>
              </Link>
              <Link to="/settings">
                <Avatar src={localStorage ? localStorage.getItem("profilePic") : DefaultPic} width={25} height={25} />
              </Link>
            </div>
          ) :
          (
            <div className="SharedNavBarAccountSettings">
              <Link to="/login">
                <Button variant="primary">Login</Button>
              </Link>
              <Link to="/sign-up">
                <Button variant="outline-primary">Sign up</Button>
              </Link>
            </div>
          )
        }
        <IoMenuOutline className="menu" onClick={handleMenuClick}/>
      </div>
    </nav>
  );
};

export default NavBar;