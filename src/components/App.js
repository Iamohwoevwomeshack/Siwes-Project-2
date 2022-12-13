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
        <Route path="/Siwes-Project-2/home" element={<Home />} />
        <Route path="/Siwes-Project-2/study-features" element={<Benefit />} />
        <Route path="/Siwes-Project-2/study-programs" element={<Courses />} />
        <Route path="/Siwes-Project-2/about" element={<Siwes />} />
        <Route path="/Siwes-Project-2/sign-in" element={<SignIn />} />
        <Route path="/Siwes-Project-2/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
