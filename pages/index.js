import Discounts from "../components/discounts/Discounts";
import {MongoClient} from 'mongodb'
import Categories from "../components/categories/Categories";
import { pass } from "./api/hello";




export default function Home(props) {
  return (
      <main className="main">
        <div className="container">
          <Discounts products={props.products} />
          <Categories />
        </div>
      </main>
  );
}


export async function getStaticProps(context){
  const client = await MongoClient.connect(`mongodb+srv://kastic:${pass}@cluster0.wtiqv.mongodb.net/?retryWrites=true&w=majority`)
  const db = client.db()

  const mouses = db.collection('mouses')

  const bestDiscounts = await db.collection('mouses').find({discount:{$gte:15}}, {projection: {price:1,discount:1,images:1,title:1,_id:0,id:1}}).toArray()
  client.close()
  return {
    props:{
      products: bestDiscounts
    }
  }
}