const key = "AIzaSyABp5j3JfZO75hJU1n8D3x6_xKudw17Dgk";
export default async function handler(req, res) {
    const registerData =  req.body;
    const responseRegister = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,
      {
        method: "POST",
        body: JSON.stringify({
            email: registerData.email,
            password: registerData.password,
            returnSecureToken: true
        }),
        headers: {
          "Content-Type": "application/json"
        },
      }
    );
    const resultRegister = await responseRegister.json()
    const responsePostCart = await fetch(
      `https://react-72706-default-rtdb.europe-west1.firebasedatabase.app/users/${resultRegister.localId}.json?auth=${resultRegister.idToken}`);    
    const resultPostCart = await responsePostCart.json()
    res.status(200).json({resultRegister,resultPostCart});

}
