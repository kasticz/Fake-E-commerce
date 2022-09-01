import styles from "./ProductPrice.module.sass";

export default function ProductPrice(props) {
  const dsc = props.discount
  const price = String(props.price) 
  const newPrice = dsc ? `${Math.round(props.price * ((100 - dsc) / 100))}` : String(props.price)
  return (
    <div className={styles.productBuy}>
      <div className={styles.prices}>
        {dsc && <div  className={styles.oldPrice}>{`${price.slice(0,-3)} ${price.slice(-3)}`} ₽</div> }    
        <div style={{marginTop: dsc ? '0.5rem' : `0`}} className={styles.newPrice}>{newPrice.length > 3 ? `${newPrice.slice(0,-3)} ${newPrice.slice(-3)}` : newPrice} ₽</div>   
      </div>
      <form className={styles.addToCart}>
        <input type="number" max={10} min={1} placeholder="1" />
        <button className={styles.buyButton}>Добавить в корзину</button>
      </form>
    </div>
  );
}
