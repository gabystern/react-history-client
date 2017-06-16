import React from 'react';
import TopicBox from './TopicBox'

const TopicList = ({ topicList }) => {
  let allTopics = topicList.map((topic) => {
    console.log(topic)
    return <TopicBox topic={topic} key={topic.id}/>
  })

  return (
    <div>
    {allTopics}
    </div>
  )
}

export default TopicList
