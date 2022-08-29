// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {MongoClient} from 'mongodb'
export const pass = '8R8HDozRYn7ociS6'
export default async function handler(req, res) {  

  if(req.method === 'POST'){
    const data = req.body

    const client = await MongoClient.connect(`mongodb+srv://kastic:${pass}@cluster0.wtiqv.mongodb.net/?retryWrites=true&w=majority`)
    const db = client.db()

    const coll = db.collection('monitors')

    await coll.insertOne(data)
    client.close()
    res.status(200).json('done')

  }else{

    const client = await MongoClient.connect(`mongodb+srv://kastic:${pass}@cluster0.wtiqv.mongodb.net/?retryWrites=true&w=majority`)
    const db =  client.db()

    const found = await  mouses.find({},{discount : 1}).toArray()
    const smth = await db.collection('mouses').find({price:{$gt:19}}, {projection: {price:1,discount:1,images:1,title:1}}).toArray()

    client.close()
    res.status(200).json(smth)

  }
}
