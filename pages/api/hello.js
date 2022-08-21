// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {MongoClient} from 'mongodb'
export default async function handler(req, res) {
  const pass = '8R8HDozRYn7ociS6'

  if(req.method === 'POST'){
    const data = req.body

    const client = await MongoClient.connect(`mongodb+srv://kastic:${pass}@cluster0.wtiqv.mongodb.net/?retryWrites=true&w=majority`)
    const db = client.db()

    const mouses = db.collection('mouses')

    await mouses.insertOne(data)
    client.close()

  }else{

    const client = await MongoClient.connect(`mongodb+srv://kastic:${pass}@cluster0.wtiqv.mongodb.net/?retryWrites=true&w=majority`)
    const db =  client.db()

    const mouses =  db.collection('mouses')

    const found = await  mouses.find({},{discount : 1}).toArray()

    client.close()
    res.status(200).json(found)

  }






  
}
