import { Fragment } from "react";

export default function Something (props) {
  async function sendDataTry() {
    const response = await fetch("./api/hello");
    const answer = await response.json();
  }

  async function sendData() {      
      const response = await fetch("./api/hello")
      const data = await response.json()

      console.log(data)



  }
  return (
    <Fragment>
      <button
        onClick={sendData}
        style={{
          margin: "0 auto",
          marginTop: "15rem",
          display: "block",
          background: "red",
        }}
      >
        PRESS ME
      </button>

      <button
        onClick={sendDataTry}
        style={{
          margin: "0 auto",
          marginTop: "13rem",
          display: "block",
          background: "red",
        }}
      >
        PRESS ME TRY
      </button>
    </Fragment>
  );
}
