import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import '../TopicsContainer.css';
import TopicList from '../Components/TopicList';
import TopicTimeline from '../Components/TopicTimeline';
import HistoryNewForm from '../Components/HistoryNewForm';

class TopicsContainer extends Component {
  constructor() {
    super();

    this.state = {
      topics: []
    }

    this.addNewHistory = this.addNewHistory.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/topics')
      .then(resp => resp.json())
      .then(topics => this.setState({ topics }))
  }

  renderTopics() {
    return (
      <div>
        <div className="row">
          <h1>CREATING HISTORY</h1>
        </div>
        <div className="row">
          <TopicList topicList={this.state.topics}/>
        </div>
      </div>
    )
  }

  addNewHistory(){
    console.log("hello")
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <ul className="left hide-on-med-and-down">
              <li><Link to="/new">Add A New History</Link></li>
            </ul>
          </div>
        </nav>
        
        <div className="container">
          <Switch>
            <Route exact path='/new' render={() => <HistoryNewForm onSubmit={this.addNewHistory}/>} />
            <Route exact path='/:id' render={(routerProps) => {
              const id = routerProps.match.params.id
              const topic = this.state.topics.find(t => t.id === parseInt(id) )
              return <TopicTimeline topic={topic} />
            }}/>
            <Route render={this.renderTopics.bind(this)} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default TopicsContainer;

// components
// TopicsContainer --> TopicsPage --> TopicList --> TopicTimeline --> EditTopic
                               // --> NewTopic

// on here new route, /:id route
