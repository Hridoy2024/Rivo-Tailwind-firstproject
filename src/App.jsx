import { useState } from "react";
import Navber from "./Components/Navber";
import Banner from "./Components/Banner";
import Bestsell from "./Components/Bestsell";
import Products from "./Components/Products";
import Exclusive from "./Components/Exclusive";
import Designer from "./Components/Designer";
import Feedback from "./Components/Feedback";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return <>
  <Navber/>
  <Banner/>
  <Bestsell/>
  <Products/>
  <Exclusive/>
  <Designer/>
  <Feedback/>
  <Footer/>
  </>;
}

export default App;
