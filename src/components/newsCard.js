import Link from "next/link";
import styles from "./newsCard.module.css"
import Image from "next/image";
const NewsCard = props => {
  return (
    <div className={styles.newsCard}>
      <img className={styles.image} src={props.src} alt={props.alt} />
      <div className={styles.newsGroup}>
        <Link href={`./{${props.id}}`}>
          <h1>{props.title}</h1>
        </Link>
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