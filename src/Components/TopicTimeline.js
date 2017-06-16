import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

export default class TopicTimeline extends Component {
  constructor() {
    super();

    this.state = {
      topic: ''
    }
  }

  makeEventsJson() {
    const events = this.props.topic.events

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
    const topic = this.props.topic
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
  // let timeline_json = make_the_json(); // you write this part
  // // two arguments: the id of the Timeline container (no '#')
  // // and the JSON object or an


  render() {
    return (
      <div>
        <Parallax bgImage='{this.props.topic.events[0].event_medium.url}' strength={400}>
          <br/>
          <h1> some content that is displayed above the bgImage </h1>
        </Parallax>
      </div>
    )
  }
}

//  edit route
