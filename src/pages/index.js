import styles from "@/styles/Home.module.css"
import Navbar from "@/components/navbar"
import { useEffect, useState } from "react"
import NewsCard from "@/components/newsCard"
import Image from "next/image"
import TrendingNewsCard from "@/components/trendingNewsCard"

export default function Home() {

  const [news, setNews] = useState([])
  const [sportNews, setSportNews] = useState([])

  const fetchApi = async () => {
    const result = await fetch('https://api.newscatcherapi.com/v2/latest_headlines?lang=en',
      {
        method: "GET",
        headers: {
          'x-api-key': process.env.API_KEY
        }
      })
    const res = await result.json()
    console.log("res data are", res)
    const content = res.articles;
    console.log("array data are", content)
    if (content) {
      setNews(content)
    }
  }
  useEffect(() => { fetchApi() }, news)


  const fetchSportsNews = async () => {
    const result = await fetch('https://api.newscatcherapi.com/v2/search?q=sport&lang=en',
      {
        method: "GET",
        headers: {
          'x-api-key': process.env.API_KEY
        }
      })
    const res = await result.json()
    const content = res.articles;
    if (content) {
      setSportNews(content)
    }
  }
  useEffect(() => { fetchSportsNews() }, sportNews)

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className={styles.primarySection}>
        <div className={styles.body}>

          {news.map(item => {
            return (
              <NewsCard src={item.media}
                id = {item._id}
                alt="Image not found"
                title={item.title}
                author={item.author}
                date={item.published_date}
                description={item.summary}
              />)
          })}
        </div>


        <div className={styles.rightPane}>
          <h1>Trending news</h1>
          <div className={styles.trendingNews}>

            {sportNews.map(item => {
              return (
                <TrendingNewsCard src={item.media}
                  title={item.title}
                  author={item.author}
                  date={item.published_date}
                  description="some text" />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}