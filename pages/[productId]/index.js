import styles from "./index.module.sass";
import ProductMain from "../../components/categories/productPage/productMain/ProductMain";
import ProductSub from "../../components/categories/productPage/productSub/ProductSub";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
export default function productIds(props) {
  const router = useRouter();
  const products = useSelector((state) => state.mousesSorting);
  const [currProduct,setCurrProduct] = useState(false)


  useEffect(() => {
    if(router.isReady){
      setCurrProduct(products.find((item) => item.id == router.query.productId))      
    }    
  }, [router.isReady]);  
  if(currProduct){
    return (
      <div className={styles.productContainer}>
        <main>
          <ProductMain product={currProduct} />
          <ProductSub product={currProduct} />
        </main>
      </div>
    );
  }

}
