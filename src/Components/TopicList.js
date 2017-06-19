import React from 'react';
import TopicBox from './TopicBox'
import { Link } from 'react-router-dom'

const TopicList = ({ topicList }) => {
  let allTopics = topicList.map((topic) => {
    return (
      <div className="col s4">
        <Link to={`/${topic.id}`}>
        <TopicBox topic={topic} key={topic.id}/>
        </Link>
      </div>
    )
  })

  return (
    <div className="topics-background">
    {allTopics}
    </div>
  )
}

export default TopicList
