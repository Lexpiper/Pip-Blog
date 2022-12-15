import React, {useState , useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPost } from '../Services'

const Postwidget = ({categories, slug}) => {
  const [relatedPost, setRelatedPost] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPost(categories,slug)
      .then((result) => setRelatedPost(result))
    } else {
      getRecentPosts().then((result) => setRelatedPost(result))
    }
  }, [slug])
  console.log(relatedPost)
  
  return (
    <div>Postwidget</div>
  )
}

export default Postwidget