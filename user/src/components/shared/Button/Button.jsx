import "./Button.css";

const Button = (props) => {
  return (
    <button 
      type={props.type} 
      onClick={props.onClick} 
      className={`btn ${props.variant} ${props.size}`}
    >
      {props.children}
    </button>
  );
};

export default Button;