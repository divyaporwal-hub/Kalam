import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import ConfirmForget from "./routes/ConfirmForget";
import ForgetPass from "./routes/ForgetPass";
import Register from "./routes/Register";
import Write from "./routes/Write";
import Logout from "./routes/Logout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:userName" element={<Profile />} />
          <Route path="/forgetPass" element={<ForgetPass />} />
          <Route path="/confirmforget" element={<ConfirmForget />} />
          <Route path="/register" element={<Register />} />
          <Route path="/write" element={<Write />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
