import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Parallax, Background } from 'react-parallax';
import Parallax from 'react-springy-parallax'


// <div>
//   <Link className="btn btn-primary" to={`/${this.props.topic.id}/edit`}>Edit This History</Link>
//     <Parallax ref='parallax' pages={3}>
//
//       <Parallax.Layer offset={0} id="first">
//         <img src={this.props.topic.events[0].event_medium.url}/>
//           <h1>something else</h1>
//           <p>{this.props.topic.events[0].event_text.text}</p>
//           <p>{this.props.topic.events[0].event_text.text}</p>
//           <p>{this.props.topic.events[0].event_text.text}</p>
//           <p>{this.props.topic.events[0].event_text.text}</p>
//           <p>{this.props.topic.events[0].event_text.text}</p>
//           <p>{this.props.topic.events[0].event_text.text}</p>
//           <p>{this.props.topic.events[0].event_text.text}</p>
//           <p>{this.props.topic.events[0].event_text.text}</p>
//           <p>{this.props.topic.events[0].event_text.text}</p>
//           <p>{this.props.topic.events[0].event_text.text}</p>
//           <p>{this.props.topic.events[0].event_text.text}</p>
//           <p>{this.props.topic.events[0].event_text.text}</p>
//
//       </Parallax.Layer>
//       <Parallax.Layer offset={1}>
//         <img src={this.props.topic.events[1].event_medium.url}/>
//         <p>{this.props.topic.events[0].event_text.text}</p>
//         <p>{this.props.topic.events[0].event_text.text}</p>
//         <p>{this.props.topic.events[0].event_text.text}</p>
//         <p>{this.props.topic.events[0].event_text.text}</p>
//         <p>{this.props.topic.events[0].event_text.text}</p>
//         <p>{this.props.topic.events[0].event_text.text}</p>
//         <p>{this.props.topic.events[0].event_text.text}</p>
//         <p>{this.props.topic.events[0].event_text.text}</p>
//         <p>{this.props.topic.events[0].event_text.text}</p>
//         <p>{this.props.topic.events[0].event_text.text}</p>
//         <p>{this.props.topic.events[0].event_text.text}</p>
//         <p>{this.props.topic.events[0].event_text.text}</p>
//         <p>{this.props.topic.events[0].event_text.text}</p>
//         <p>{this.props.topic.events[0].event_text.text}</p>
//
//       </Parallax.Layer>
//     </Parallax>
// </div>
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

  render() {
    const styles = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 30,
            lineHeight: '10px',
            color: 'white',
            textShadow: 'black 0.1em 0.1em 0.2em'
            // display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
    return (
        <Parallax ref="parallax" pages={3}>

          <Parallax.Layer offset={0} speed={1} style={{ backgroundImage: `url(${this.props.topic.events[0].event_medium.url})`, backgroundSize: 'contain', backgroundPosition: 'center'}} />
          <Parallax.Layer offset={1} speed={1} style={{ backgroundImage: `url(${this.props.topic.events[1].event_medium.url})`, backgroundSize: 'contain', backgroundPosition: 'center' }} />

          <Parallax.Layer
            offset={0}
            speed={0}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(1)}>
            <p>{this.props.topic.events[0].event_text.text}</p>
          </Parallax.Layer>

          <Parallax.Layer
            offset={1}
            speed={-0.1}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(2)}>
            <p>{this.props.topic.events[1].event_text.text}</p>
          </Parallax.Layer>

        </Parallax>
    )
  }
}

//  edit route
