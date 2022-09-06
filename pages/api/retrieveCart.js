const key = "AIzaSyABp5j3JfZO75hJU1n8D3x6_xKudw17Dgk";
export default async function handler(req, res) {
  const userData = req.body;

  const response = await fetch(
    `https://react-72706-default-rtdb.europe-west1.firebasedatabase.app/users/${userData.uid}.json?auth=${userData.idToken}`
  );

  const data = await response.json();
  res.status(200).json(data);
}
