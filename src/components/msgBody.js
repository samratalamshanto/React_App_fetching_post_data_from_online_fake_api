import React, { useState } from "react";

import msgStyle from "./MsgBody.syle.css";
export default function MsgBody(props) {
  const { Id, title, body } = props;
  const [toggle, setToggle] = useState(false);
  const [print, setPrint] = useState(true);

  const setButton = () => {
    setToggle(!toggle);
  };
  return (
    <div className="main_div">
      <br />
      <div className="small_div">
        <h3>User Id: {Id}</h3>
        <h2>Title: {title}</h2>
        {toggle && (
          <div className="msg_div">
            <br />
            <h2>Details:</h2>
            <p>{body}</p>
            <br />
          </div>
        )}
        <button onClick={setButton}>
          {toggle ? "Hide Post" : "Show Post"}
        </button>
      </div>
    </div>
  );
}
