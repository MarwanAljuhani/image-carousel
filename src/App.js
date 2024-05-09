
import "./App.css";
import ImageSlider from "./ImageSlider";

const App = () => {
  const slides = [
    "./images/forst.jpg",
    "./images/dock.jpg",
    "./images/bridge.jpg",
    "./images/grass.jpg",
  ];
  
  
  return <ImageSlider slides={slides} />;
};

export default App;
