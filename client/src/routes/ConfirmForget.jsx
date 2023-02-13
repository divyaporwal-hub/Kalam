import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function ConfirmForget() {
  const [inputvalue, setInputvalue] = useState("");
  console.log(inputvalue);
  const sayHi = (event) => {
    let x = event.target.value;
    setInputvalue(x);
  };
  const [inputpass, setInputpass] = useState();
  const changepass = (event) => {
    let y = event.target.value;
    setInputpass(y);
  };
  const [confirmpass, setConfirmpass] = useState();
  const changeconfirmpass = (event) => {
    let y = event.target.value;
    setConfirmpass(y);
  };

  console.log("rendering...");

  return (
    <>
      <h5>Data: {inputvalue}</h5>
      <h5>data:{inputpass}</h5>
      <h5>data:{confirmpass}</h5>
      <form className="confirm">
        <input
          type="email"
          placeholder="enter your registered email"
          onChange={sayHi}
        />
        <br />
        <h5>New password</h5>
        <input type="password" onChange={changepass} />
        <br />
        <h5>Confirm Password</h5>
        <input type="password" onChange={changeconfirmpass} />
        <Link to={"/login"}>
          <button type="submit">Sumbit</button>
        </Link>
      </form>
    </>
  );
}
export default ConfirmForget;
