import styles from "./ProductPrice.module.sass";

export default function ProductPrice(props) {
  const dsc = props.discount
  const price = props.price
  return (
    <div className={styles.productBuy}>
      <div className={styles.prices}>
        <div className={styles.oldPrice}>{dsc ? `${Math.round(price * (1 - (dsc / 100)))} ₽` : ``}</div>
        <div className={styles.newPrice}>{price} ₽</div>
      </div>
      <form className={styles.addToCart}>
        <input type="number" max={10} min={1} placeholder="1" />
        <button className={styles.buyButton}>Добавить в корзину</button>
      </form>
    </div>
  );
}
