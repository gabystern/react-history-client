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
            fontFamily: "'Raleway', sans-serif",
            fontSize: 20,
            lineHeight: '10px',
            color: 'white',
            textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
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
                      <div className="individual-event">
                        <p className='p-event'>{e.event_text.text}</p>
                        <p className='p-event'>{e.event_start_date.year}</p>
                        <Link to={`/${this.props.topic.id}/edit`}>Edit {this.props.topic.name}s History</Link>
                        <p><input type='button' class="waves-effect waves-light btn" value ='DELETE' onClick={() => this.props.handlesDelete(this.props.topic.id)}/></p>
                      </div>
                    </Parallax.Layer>
          })}
        </Parallax>
    )
  }
}
