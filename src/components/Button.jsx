const Button = (props) => {
  return (
    <button style={{ backgroundColor: props.bg, borderRadius: props.border + "px", borderColor: props.bordercolor }}>
      Bottone gatti
    </button>
  );
};

export default Button;
