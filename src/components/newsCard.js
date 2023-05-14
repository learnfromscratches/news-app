import styles from "./newsCard.module.css"
import Image from "next/image";
const NewsCard = props => {
  console.log(`${props.id}`)
  return (
    <div className={styles.newsCard}>
      <img className={styles.image} src={props.src} alt={props.alt} />
      <div className={styles.newsGroup}>
          <h1>{props.title}</h1>
        <div className={styles.postDetails}>
          <span>{props.author}</span>
          <span>{props.date}</span>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
export default NewsCard;