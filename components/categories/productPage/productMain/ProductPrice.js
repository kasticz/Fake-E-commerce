import styles from "./ProductPrice.module.sass";

export default function ProductPrice(props) {
  const dsc = props.discount
  const price = props.price 
  return (
    <div className={styles.productBuy}>
      <div className={styles.prices}>
        {dsc && <div  className={styles.oldPrice}>{price} ₽</div> }    
        <div style={{marginTop: dsc ? '0.5rem' : `0`}} className={styles.newPrice}>{dsc ? `${Math.round(price * (1 - dsc / 100))}` : price} ₽</div>   
      </div>
      <form className={styles.addToCart}>
        <input type="number" max={10} min={1} placeholder="1" />
        <button className={styles.buyButton}>Добавить в корзину</button>
      </form>
    </div>
  );
}
