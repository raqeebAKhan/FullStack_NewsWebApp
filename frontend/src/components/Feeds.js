import Feed from './Feed';
import {useEffect, useState} from 'react'
import { getNews } from '../newsapi/api'

const Feeds = () => {

  const [news, setNews] = useState([]);
  
    useEffect(() => {
        dailyNews();
    }, [])

    const dailyNews = async () => {
        let res = await getNews()
        setNews(res.data)
        console.log(res.data)
    }
    
  return (
    <div className='feed-container'>
      {
                      news.map(data => (
                        <Feed
                        key={data._id} 
                         data={data}  
                        />
                      
                      
                      
                    ))
                }
    </div>
  )
}

export default Feeds;
