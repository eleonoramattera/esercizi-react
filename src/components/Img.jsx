const Img = (props) => {
  return (
    <div style={{ width: "100%", backgroundColor: props.bg }}>
      <img src={props.src} alt={props.alt} style={{ padding: props.padding }} />
    </div>
  );
};

export default Img;
