import arrowRight from "../../assets/images/UI/arrowLeft.svg";
import arrowLeft from "../../assets/images/UI/arrowRight.svg";
import { useEffect, useMemo, useState } from "react";
import styles from "./Discounts.module.sass";
import SliderItem from "./SliderItem";
import { useSelector } from "react-redux";
import { debounce} from "../../store/wideAppFunctions";
import slide from '../../assets/images/UI/slide.svg'

export default function Discounts(props) {
  const [idleSlide,setIdleSlide] = useState()
  const debouncedSlide = debounce(stopIdleSlide,100)
  const clientWidth = useSelector(state=> state.UI.dimensions.clientWidth)
  const [position, setPosition] = useState(0);
  const [startSlideCoords,setStartSlideCoords] = useState(null)
  // const [currentSlideCoords,setCurrentSlideCoords] = useState(null)
  const [endSlideCoords,setEndSlideCoords] = useState(null)
  // const [positionLastTouched,setPositionLastTouched] = useState()
  
  const slideLength = clientWidth > 1300 ? 1212 : clientWidth > 1000 ? 810 : clientWidth >= 768 ? 730 : clientWidth

  const items = useMemo(() => {
    return props.products.map((item) => {
      return <SliderItem item={item} key={Math.random()} />;
    });
  }, []);

  

  function stopIdleSlide() {
    clearTimeout(idleSlide);
  }
  function initiateIdleSlide() {
    setIdleSlide(setTimeout(() => {
      slideLeft(slideLength);
    }, 3000))
  }

  useEffect(() => {
    setIdleSlide(setTimeout(() => {
      slideLeft(window.innerWidth);
    }, 3000))
    return () => {
      clearTimeout(idleSlide);
    };
  }, [position]);
  

  function slideLeft(width) {  
    clearTimeout(idleSlide)
    const currSlide = slideLength || width
    setPosition((prevState) =>
      prevState <= (items.length - 1) * -currSlide ? prevState : prevState - currSlide
    );
  }
  function slideRight() {
    clearTimeout(idleSlide)
    setPosition((prevState) =>
      prevState === 0 ? prevState : prevState + slideLength
    );
  }
  function startSlideHandler(e){
    setEndSlideCoords(null)
    stopIdleSlide()

    const x = e.touches[0].clientX
    const y = e.touches[0].clientY
    setStartSlideCoords({x,y})
  }
  function mobileSlideHandler(e){
    const x = e.touches[0].clientX
    const y = e.touches[0].clientY

    // const diff = startSlideCoords.x - x

    if(x + 100 < startSlideCoords.x && !endSlideCoords){
      setStartSlideCoords(e.touches[0].clientX,e.touches[0].clientY)
      slideLeft()
      return
    } 
    if(x - 100 > startSlideCoords.x && !endSlideCoords){
      setStartSlideCoords(e.touches[0].clientX,e.touches[0].clientY)
      slideRight()
      return
    } 

    // if(!positionLastTouched ||( Date.now() - positionLastTouched > 30)){
    //   setStartSlideCoords({x,y})
    //   setPositionLastTouched(Date.now())
    //   setPosition((prev)=>prev - diff)
    // }


    // mobileSlide(e.touches[0].clientX,e.touches[0].clientY)
  }
  // function endSlideHandler(e){
  //   const x = e.changedTouches[0].clientX
  //   const y = e.changedTouches[0].clientY

  //   setEndSlideCoords({x,y})
  // }
  return (
    <div
      onMouseMove={clientWidth >=768 ? debouncedSlide : ()=>{}}
      onMouseLeave={initiateIdleSlide}
      onTouchStart={startSlideHandler}      
      onTouchMove={mobileSlideHandler}
      // onTouchEnd={endSlideHandler}
      className={styles.discountsWrapper}
    >
      <p className={styles.hotDiscounts}>Горячие предложения</p>
      <div
        style={{
          transform: `translateX(${position}px)`,
        }}
        className={styles.discountsSlider}
      >
        {items}
      </div>
      <button onClick={slideLeft} className={styles.slideLeft}>
        <img src={arrowLeft.src} alt="" />
      </button>
      <button onClick={slideRight} className={styles.slideRight}>
        <img src={arrowRight.src} alt="" />
      </button>
      <img className={styles.slideIcon} src={slide.src} alt="" />
    </div>
  );
}
