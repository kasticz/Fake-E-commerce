const key = "AIzaSyABp5j3JfZO75hJU1n8D3x6_xKudw17Dgk";
export default async function handler(req, res) {
    const token =  req.body;
    const responseRefresh = await fetch(
      `https://securetoken.googleapis.com/v1/token?key=${[key]}`,
      {
        method: "POST",
        body: JSON.stringify({
            grant_type: 'refresh_token',
            refresh_token: token.token,
        }),
        headers: {
          "Content-Type": "application/json"
        },
      }
    );
    const resultRefresh = await responseRefresh.json()
    const responseUserData = await fetch(
      `https://react-72706-default-rtdb.europe-west1.firebasedatabase.app/users/${resultRefresh.user_id}.json?auth=${resultRefresh.id_token}`);    
    const resultUserData = await responseUserData.json()
    res.status(200).json({resultUserData,resultRefresh});

}
