import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./styles.css";

// PATH

import Home from "./Home";
import Benefit from "./Benefit";
import Courses from "./Courses";
import Siwes from "./Siwes";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study-features" element={<Benefit />} />
        <Route path="/study-programs" element={<Courses />} />
        <Route path="/about" element={<Siwes />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
