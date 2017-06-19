import React from 'react';
import TopicBox from './TopicBox'
import { Link } from 'react-router-dom'

const TopicList = (props) => {
  let filteredTopics = props.topicList.filter(topic => topic.name.toLowerCase().includes(props.searchTerm.toLowerCase()))
  let allTopics = filteredTopics.map((topic) => {
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
