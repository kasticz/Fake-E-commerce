// export default async function handler(req, res) {
  // const response =  fetch("https://lichess.org/api/bot/game/stream/sERFxM3huJZk", {
  //   method: "GET",
  //   headers: {
  //     Authorization: "Bearer lip_iv6D0kHd9JYpjZFICZXJ",
  //   }
  // });
//   const onMessage = obj => console.log(obj);
//   const onComplete = () => console.log('The stream has completed');

//   const readStream = processLine => response => {
//     const matcher = /\r?\n/;
//     const decoder = new TextDecoder();
//     let buf = '';
//     return new Promise((resolve, fail) => {
//       response.body.on('data', v => {
//         const chunk = decoder.decode(v, { stream: true });
//         buf += chunk;
  
//         const parts = buf.split(matcher);
//         buf = parts.pop();
//         for (const i of parts.filter(p => p)) processLine(JSON.parse(i));
//       });
//       response.body.on('end', () => {
//         if (buf.length > 0) processLine(JSON.parse(buf));
//         resolve();
//       });
//       response.body.on('error', fail);
//     });
//   };
  
//   response
//     .then(readStream(onMessage))
//     .then(onComplete);
    
    


     


//     // res.status(200).json(1)
// }
