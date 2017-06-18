import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import '../TopicsContainer.css';
import TopicList from '../Components/TopicList';
import TopicTimeline from '../Components/TopicTimeline';
import HistoryNewForm from '../Components/HistoryNewForm';
import TopicEditForm from './TopicEditForm';

class TopicsContainer extends Component {
  constructor() {
    super();

    this.state = {
      topics: []
    }

    this.addNewHistory = this.addNewHistory.bind(this);
    this.updateTopic = this.updateTopic.bind(this);
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

  addNewHistory(newTopic){
    let events = newTopic.events.map(e => {
      return {
        event_medium_attributes: {
          url: e.url,
          caption: e.caption
        },
        event_text_attributes: {
          headline: e.headline,
          text: e.text
        },
        event_start_date_attributes: {
          year: e.year
        }
      }
    })

    fetch('http://localhost:3000/api/v1/topics', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        topic: {
          name: newTopic.name,
          title_text_attributes: { headline: newTopic.title_text_headline, text: newTopic.title_text_text },
          title_medium_attributes: { url: newTopic.title_medium_url, caption: newTopic.title_medium_caption },
          events_attributes: events
        }
      })
    }).then(resp => resp.json() )
      .then(topic => this.setState((previousState) => {
        return {
          topics: [...previousState.topics, topic]
        }
      }))

    this.props.history.push("/");
  }

  updateTopic(updatedTopic) {

    let events = updatedTopic.events.map(e => {
      return {
        event_medium_attributes: e.event_medium,
        event_text_attributes: e.event_text,
        event_start_date_attributes: e.event_start_date
      }
    })
    debugger
    fetch(`http://localhost:3000/api/v1/topics/${updatedTopic.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        topic: {
          id: updatedTopic.id,
          name: updatedTopic.name,
          title_text_attributes: { id: updatedTopic.title_text_id, headline: updatedTopic.title_text_headline, text: updatedTopic.title_text_text },
          title_medium_attributes: { id: updatedTopic.title_medium_id, url: updatedTopic.title_medium_url, caption: updatedTopic.title_medium_caption },
          events_attributes: events
        }
      })
    })
    .then(resp => resp.json())
    .then(() => {
      this.setState(function(prevState){
        return {
          topics: prevState.topics.map(function(t){
            if(t.id !== updatedTopic.id) {
              return t
            } else {
              return updatedTopic
            }
          })
        }
      })
    })
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <ul className="left hide-on-med-and-down">
              <li><Link to="/">Homepage</Link></li>
              <li><Link to="/new">Add A New History</Link></li>
            </ul>
          </div>
        </nav>

          <Switch>
            <Route exact path='/new' render={() => <HistoryNewForm onSubmit={this.addNewHistory}/>} />
            <Route exact path='/:id/edit' render={(routerProps) => {
              const id = routerProps.match.params.id
              const topic = this.state.topics.find( t =>  t.id === parseInt(id) )
              if (!topic) {
                return null
              }
              return <TopicEditForm topic={topic} onSubmit={this.updateTopic} />
            }} />
            <Route exact path='/:id' render={(routerProps) => {
              const id = routerProps.match.params.id
              const topic = this.state.topics.find(t => t.id === parseInt(id) )
              return <TopicTimeline topic={topic} />
            }}/>
            <Route render={this.renderTopics.bind(this)} />
          </Switch>
      </div>
    );
  }
}

export default TopicsContainer;
