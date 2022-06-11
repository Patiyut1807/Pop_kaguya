import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Kaguya from "./page/Kaguya";
import Hayasaka from "./page/Hayasaka"

const App = () => {
  return (
      <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Kaguya/>} />
      <Route path = "hayasaka" element={<Hayasaka/>} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
