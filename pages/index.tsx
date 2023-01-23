import Image from "next/image";
import snowFall from "../images/snowfall.jpg"
import styles from "../styles/Home.module.css";
const index = () => {
  let list:any[]=[]
  const createSnow=()=>{
    let maxSize:number=10;
    let minSize:number=5;
    for(let i=0;i<50;i++){
      const snow=<span className={styles.snow}
      key={i}
      style={{width:`${Math.random()*(maxSize-minSize)+minSize+"px"}`,
      height:`${Math.random()*(maxSize-minSize)+minSize+"px"}`,
      left:`${Math.random()*97+"%"}`,
      animationDelay:`${Math.random()*10+"s"}`,
      }}>
      </span>
      list.push(snow)
    }
    return list;
  }
  createSnow();
  return (
    <div className={styles.container}>
      <div className={styles.imgWrap}>
        <Image src={snowFall} alt="" />
      </div>
      <div className={styles.title}>SNOW SEASON</div>
      {list}
    </div>
  );
}

export default index;