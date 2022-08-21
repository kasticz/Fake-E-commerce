import { Fragment,useState, useEffect } from "react";
import styles from './ProductImages.module.sass'

export default function ProductImages(props) {
    const [mainImgSrc, setMainImgSrc] = useState();
    function smth(e) {
      setMainImgSrc(e.target.src);
    }
    
  return (
    <Fragment>
      <div className={styles.productImages}>
      <img className={styles.mainImg} src={mainImgSrc || props.images[0]} alt="" />
      <div className={styles.smallImages}>
        <img onClick={smth} className={styles.smallImg} src={props.images[0]} alt="" />
        <img onClick={smth} className={styles.smallImg} src={props.images[1]} alt="" />
        <img onClick={smth} className={styles.smallImg} src={props.images[2]} alt="" />
      </div>
      </div>
    </Fragment>
  );
}
