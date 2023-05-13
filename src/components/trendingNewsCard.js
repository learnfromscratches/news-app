import styles from "./trendingNewsCard.module.css"
const TrendingNewsCard = props =>{
    return(
        <div className={styles.trendingNewsCard}>
              <div className={styles.newsThumb}>
                <img className={styles.image} src={props.src} />
              </div>
              <div className={styles.newsDetails}>
                <h1>{props.title}</h1>
                <div className={styles.postDetail}>
                  <span>{props.author}</span>
                  <span>{props.date}</span>
                </div>
              </div>
            </div>
    )
}
export default TrendingNewsCard;