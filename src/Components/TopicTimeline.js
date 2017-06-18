import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Parallax, Background } from 'react-parallax';

export default class TopicTimeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: ''
    }
  }

  makeEventsJson() {
    let events = this.props.topic.events

    let event_array = events.map(e => {
      return {
        media: {
          url: e.event_media.url,
          caption: e.event_media.caption
        },
        start_date: {
          year: e.event_start_date.year
        },
        text: {
          headline: e.event_text.headline,
          text: e.event_text.text
        }
      }
    })

    return event_array;
  }

  makeJson() {
    let topic = this.props.topic
    return {
      title: {
        media: {
          url: topic.text_medium.url,
          caption: topic.title_medium.caption
        },
        text: {
          headline: topic.title_text.headline,
          text: topic.title_text.text
        }
      },
      events: this.makeEventsJson()
    }
  }

  render() {
    return (
      <div>
        <Parallax strength={300}>
          <Background>
            <img src={this.props.topic.events[0].event_medium.url}/>
            <img src={this.props.topic.events[1].event_medium.url}/>
          </Background>
          <h1>something else</h1>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
          <p>{this.props.topic.events[0].event_text.text}</p>
        </Parallax>
      </div>
    )
  }
}

//  edit route
