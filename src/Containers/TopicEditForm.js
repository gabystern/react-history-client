import React, { Component } from 'react'

class TopicEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.topic.name,
      title_text_headline: props.topic.title_text.headline,
      title_text_text: props.topic.title_text.text,
      title_medium_url: props.topic.title_medium.url,
      title_medium_caption: props.topic.title_medium.caption,
      events: props.topic.events,
      // new event information
      headline: '',
      text: '',
      year: '',
      url: '',
      caption: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderEvents = this.renderEvents.bind(this)
  }

  renderEvents() {
    this.props.topic.events.map((e, idx) => {
      return (
        <div className="row">
          <div className="input-field col s8">
            <input type="text" placeholder="Event Headline" name="event_text.headline" onChange={this.handleEventChange} />
          </div>

          <div className="input-field col s8">
            <textarea type="text" placeholder="Event Description" name="event_text.text" onChange={this.handleEventChange} />
          </div>

          <div className="input-field col s8">
            <input type="number" placeholder="Event Year" name="event_start_date" onChange={this.handleEventChange} />
          </div>

          <div className="input-field col s8">
            <input type="text" placeholder="Event Image Url" name="event_medium.url" onChange={this.handleEventChange} />
          </div>

          <div className="input-field col s8">
            <input type="text" placeholder="Image Caption" name="event_medium.caption" onChange={this.handleEventChange} />
          </div>
        </div>
      )
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <div>
        <h1>Edit This History</h1>
        <form className="hover" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s8">
              <input placeholder={`${this.props.topic.name}`} name="name" value={this.state.name} onChange={this.handleChange} />
            </div>
          </div>

          <h3>Quick Summary Info</h3>
          <div className="row">
            <div className="input-field col s8">
              <input name="title_texts.headline" value={this.state.title_text_headline} onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input name="title_texts.text" value={this.state.title_text_text} onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input name="title_medium.url" value={this.state.title_medium_url} onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input name="title_medium.caption" value={this.state.title_medium_caption} onChange={this.handleChange} />
            </div>
          </div>

          {this.renderEvents()}

          <input className="waves-effect waves-light btn pink" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default TopicEditForm;
