import {MongoClient} from 'mongodb'
export const pass = '8R8HDozRYn7ociS6'
export default async function handler(req, res) {  
    const input = req.body.input.trim().toLowerCase()  
    const segmentedInput = input.split(` `).map(item=> item.trim())

    const client = await MongoClient.connect(
      `mongodb+srv://kastic:${pass}@cluster0.wtiqv.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db();
    const allMouses = await db
  .collection("mouses")
  .find({}, { projection: { _id: 0,title:1,id:1,price:1,discount:1 } })
  .toArray();

  const allMats = await db
  .collection("mats")
  .find({}, { projection: { _id: 0,title:1,id:1,price:1,discount:1  } })
  .toArray();

  const allKbs = await db
  .collection("keyboards")
  .find({}, { projection: { _id: 0,title:1,id:1,price:1,discount:1  } })
  .toArray();
  
  const allMns = await db
  .collection("monitors")
  .find({}, { projection: { _id: 0,title:1,id:1,price:1,discount:1  } })
  .toArray();
  client.close()
  const allProducts = [...allMouses,...allKbs,...allMns,...allMats]
  const result = []
  if(input.includes('мыш')) result.push({title:'Мыши',id:'mouses/1'})
  if(input.includes('клав')) result.push({title:'Клавиатуры',id:'keyboards/1'})
  if(input.includes('монитор')) result.push({title:'Мониторы',id:'monitors/1'})
  if(input.includes('ковр')) result.push({title:'Коврики',id:'mats/1'})

  
  for(let i = 0;i<allProducts.length;i++){
    const item = allProducts[i]
    const i1 = allProducts[i].title.trim().toLowerCase()
    if(input.includes('мыш') && !allMouses.find(i=>item.id === i.id)){
      continue;
    }
    if(input.includes('клав') && !allKbs.find(i=>item.id === i.id)){
      continue;
    }
    if(input.includes('монит') && !allMns.find(i=>item.id === i.id)){
      continue;
    }
    if(input.includes('ковр') && !allMats.find(i=>item.id === i.id)){
      continue;
    }
    for(let j = 0; j<segmentedInput.length ;j++){
        if(i1.includes(segmentedInput[j])){
            result.push(item)
            break;
        }
    }

  }

  result.length === 0 ? result.push({title: 'Ничего не найдено :(',id:null}) : ''

    res.status(200).json(result)
}
