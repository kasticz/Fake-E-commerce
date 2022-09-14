import { current } from "@reduxjs/toolkit";
import { useState } from "react";
import { Fragment } from "react";

export default function Something(props) {
  const [position, setPosition] = useState("");
  console.log(position);

  async function sendData() {
    const response = fetch(
      "https://lichess.org/api/bot/game/stream/dKiPQz6i29Ly",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer lip_iv6D0kHd9JYpjZFICZXJ",
        },
      }
    );

    const readStream = (processLine) => (response) => {
      const stream = response.body.getReader();
      const matcher = /\r?\n/;
      const decoder = new TextDecoder();
      let buf = "";

      const loop = () =>
        stream.read().then(({ done, value }) => {
          if (done) {
            if (buf.length > 0) processLine(JSON.parse(buf));
          } else {
            const chunk = decoder.decode(value, {
              stream: true,
            });
            buf += chunk;

            const parts = buf.split(matcher);
            buf = parts.pop();
            for (const i of parts.filter((p) => p)) processLine(JSON.parse(i));
            return loop();
          }
        });

      return loop();
    };

    const onMessage = (obj) => setPosition(obj);
    const onComplete = () => console.log("The stream has completed");

    response.then(readStream(onMessage)).then(onComplete);
  }

  async function sendDataTry() {
    const response = await fetch(
      "https://lichess.org/api/bot/game/vAiECGySpuEX/move/g1f3",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer lip_iv6D0kHd9JYpjZFICZXJ",
          // Content-type: 'application/json'
        },
      }
    );
    const data = await response.json();

    console.log(data);
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
