const key = "AIzaSyABp5j3JfZO75hJU1n8D3x6_xKudw17Dgk";
export default async function handler(req, res) {

    const updatedCart = req.body

    const responsePostCart = await fetch(
      `https://react-72706-default-rtdb.europe-west1.firebasedatabase.app/users/${updatedCart.localId}.json?auth=${updatedCart.idToken}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          cart: updatedCart.cart,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
    const resultPostCart = await responsePostCart.json()
    res.status(200).json(resultPostCart);

}
