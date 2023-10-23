import "./Input.css";

const Input = (props) => {
  return (
    <input 
      type={props.type} 
      name={props.name}
      value={props.value}
      onChange={props.onChange} 
      pattern={props.pattern}
      defaultValue={props.defaultValue} 
      placeholder={props.placeholder} 
      className={`input ${props.variant} ${props.size}`}
      required
    />
  );
};

export default Input;