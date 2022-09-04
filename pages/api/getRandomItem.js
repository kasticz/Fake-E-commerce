import {MongoClient} from 'mongodb'
export const pass = '8R8HDozRYn7ociS6'
export default async function handler(req, res) {    
    const randomID = Math.ceil(Math.random() * 80)
    const randomItemType = randomID < 21 ? 'mouses' : randomID < 41 ? 'keyboards' : randomID < 61 ? 'monitors' : 'mats'
    const client = await MongoClient.connect(
      `mongodb+srv://kastic:${pass}@cluster0.wtiqv.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db();
  
    const item = await db.collection(randomItemType).findOne({id: randomID},{projection:{_id:0}})
    client.close()
    res.status(200).json(item)
}
