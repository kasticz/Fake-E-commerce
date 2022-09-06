import { Fragment, useState, useEffect } from "react";
import getImages from "../../../../store/getImages";
import img from "../../../../assets/images/mouses/SteelSeriesRival3.webp";
import kb2 from "../../../../assets/images/kbs/ASUSROGClaymoreII2.webp";
import kb from "../../../../assets/images/kbs/ASUSROGClaymoreII.webp";
import { useSelector, useDispatch } from "react-redux";
import { UIActions } from "../../../../store/UISlice";
import Modal from "../../../UI/Modal";
import styles from "./ProductImages.module.sass";
import { useRouter } from "next/router";

export default function ProductImages(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const modalStatus = useSelector((state) => state.UI.modalActive);
  const [mainImgSrc, setMainImgSrc] = useState();
  const [images, setImages] = useState();
  useEffect(() => {
    async function getImgs() {
      const imgs = await getImages(props.images);
      setImages(imgs);
      setMainImgSrc(imgs[0]);
    }
    getImgs();
  }, [props.images]);
  function smth(e) {
    setMainImgSrc(e.target.src);
  }

  return (
    <Fragment>
      <div className={styles.productImages}>
        <div
          onClick={() => {
            dispatch(UIActions.toggleModal('bigImage'));
          }}
          className={styles.mainImgWrapper}
        >
          <img
            className={styles.mainImg}
            src={mainImgSrc ? mainImgSrc : img.src}
            alt=""
          />
        </div>

        <div className={styles.smallImages}>
          <img
            onClick={smth}
            className={styles.smallImg}
            src={images ? images[0] : img.src}
            alt=""
          />
          <img
            onClick={smth}
            className={styles.smallImg}
            src={images ? images[1] : img.src}
            alt=""
          />
          <img
            onClick={smth}
            className={styles.smallImg}
            src={images ? images[2] : img.src}
            alt=""
          />
        </div>
      </div>
      {modalStatus === 'bigImage' ? (
        <Modal>
          <img className={styles.ModalImg} src={mainImgSrc} alt="" />
        </Modal>
      ) : (
        ""
      )}
    </Fragment>
  );
}
