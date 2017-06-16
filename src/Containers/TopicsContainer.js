import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../TopicsContainer.css';
import TopicList from '../Components/TopicList';
import TopicTimeline from '../Components/TopicTimeline';

class TopicsContainer extends Component {
  constructor() {
    super();

    this.state = {
      topics: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/topics')
      .then(resp => resp.json())
      .then(topics => this.setState({ topics }))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>CREATING HISTORY</h1>
        </div>
        <div className="row">
          <TopicList topicList={this.state.topics}/>
        </div>
        <Switch>
          <Route exact path='/:id' render={(routerProps) => {
            const id = routerProps.match.params.id
            const topic = this.state.topics.find(t => t.id === parseInt(id) )
            return <TopicTimeline topic={topic} />
          }}/>
        </Switch>
      </div>
    );
  }
}

export default TopicsContainer;

// components
// TopicsContainer --> TopicsPage --> TopicList --> TopicTimeline --> EditTopic
                               // --> NewTopic

// on here new route, /:id route
