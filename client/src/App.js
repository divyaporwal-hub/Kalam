import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
// import Navbar from "./routes/Navbar";
// import Logout from "./routes/Logout";
// import Profile from "./routes/Profile";
// import Register from "./routes/Register";
// import Write from "./routes/Write";

function App() {
  return (
    // <Navbar/>
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/write" element={<Write />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
