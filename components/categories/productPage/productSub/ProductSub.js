import CharCategory from "./CharCategory";
import ProductOverview from "./productOverview";
import styles from "./ProductSub.module.sass";

export default function ProductSub(props) {



  return (
    <section className={styles.productSub}>
      <ProductOverview overview={props.product.overview}/>
      <div className={styles.characteristics}>
        <CharCategory title='Общие характеристики' data={props.product.mainChars}/>
        <CharCategory title='Специфические характеристики' data={props.product.specificChars}/>
        <CharCategory title='Размеры' data={props.product.sizes}/>
      </div>
    </section>
  );
}
