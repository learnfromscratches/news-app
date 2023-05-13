import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

const Expandednews = props => {
    const [news, setNews] = useState({})
    const router = useRouter()
    const fetchApi = async () => {
        const result = await fetch(`https://api.newscatcherapi.com/v2/search?_id=${router.query.id}`,
          {
            method: "GET",
            headers: {
              'x-api-key': process.env.API_KEY
            }
          })
        const res = await result.json()
        
        if (res) {
          setNews(res)
        }
      }
      useEffect(() => { fetchApi() }, news)

    return(
        <div>
            <h1>
                {news.topic}
            </h1>
        </div>
    )
}
export default Expandednews;