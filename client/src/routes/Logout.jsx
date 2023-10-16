import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ isReload, setIsReload }) => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("userInfo", null);
    setIsReload(!isReload);
    navigate("/login");
  }, []);
  return (
    <>
      <h1>logout page</h1>
    </>
  );
};
export default Logout;
