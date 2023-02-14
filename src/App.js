import "./App.css";
import Img from "./components/Img";
import Text from "./components/Text";
import Button from "./components/Button";

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Img bg="lightpink" src="https://placekitten.com/500/500" alt="gatto" padding="4rem" />
      <Text />
      <Button bg="lightpink" border={10} bordercolor="pink" />
    </div>
  );
}

export default App;
