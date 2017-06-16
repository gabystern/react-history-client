import React from 'react';
import TopicTimeline from './TopicTimeline'
import { Link } from 'react-router-dom'

const TopicBox = ({ topic }) => {
  return (
    <div className="row">
       <div className="col s12 m7">
         <div className="card">
           <div className="card-image">
             <img src={topic.title_medium.url} />
             <span className="card-title">{topic.name}</span>
           </div>
           <div className="card-content">
             <p>{topic.title_text.text}</p>
           </div>
           <div className="card-action">
           <Link to={`/${topic.id}`}>Go to {topic.name}s Timeline </Link>
           </div>
         </div>
       </div>
     </div>
  )
}

export default TopicBox
