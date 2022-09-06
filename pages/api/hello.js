// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {MongoClient} from 'mongodb'
export const pass = '8R8HDozRYn7ociS6'
export default async function handler(req, res) {  

  const resp = await fetch('https://react-72706-default-rtdb.europe-west1.firebasedatabase.app/Meals.json',{
    method: 'POST'
    ,body:JSON.stringify({
      something: 1
    }),
    headers:{
      'Content-type': 'application/json'
    }
  })

  const data = await resp.json()


  res.status(200).json(data)
}
