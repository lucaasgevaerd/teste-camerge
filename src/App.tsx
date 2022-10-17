import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
