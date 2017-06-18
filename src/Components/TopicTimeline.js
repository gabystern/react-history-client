import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Parallax from 'react-springy-parallax'

export default class TopicTimeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: ''
    }
  }

  render() {
    const styles = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 20,
            lineHeight: '10px',
            color: 'white',
            textShadow: 'black 0.1em 0.1em 0.2em',
            display: 'flex',
            alignItems: 'baseline'
        }
    return (
        <Parallax ref="parallax" pages={this.props.topic.events.length}>
          {this.props.topic.events.map((e, idx) => {
            return <Parallax.Layer offset={idx} speed={1} style={{ backgroundImage: `url(${e.event_medium.url})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
          })}

          {this.props.topic.events.map((e, idx) => {
            return <Parallax.Layer
                      offset={idx}
                      speed={0}
                      style={styles}
                      onClick={() => this.refs.parallax.scrollTo(idx + 1)}>
                      <div>
                        <p>{e.event_text.text}</p>
                        <Link to={`/${this.props.topic.id}/edit`}>Edit {this.props.topic.name}s History</Link>
                      </div>
                    </Parallax.Layer>
          })}
        </Parallax>
    )
  }
}
