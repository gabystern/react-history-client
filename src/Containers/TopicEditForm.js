import React, { Component } from 'react';

class TopicEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.topic.id,
      name: props.topic.name,
      title_medium_id: props.topic.title_medium.id,
      title_text_id: props.topic.title_text.id,
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
    this.handleChange = this.handleChange.bind(this)
    this.handleEventChange = this.handleEventChange.bind(this)
  }

  renderEvents() {
    return this.state.events.map((e, idx) => (
        <div key={idx} className="row">
        <h4>Event {idx + 1}</h4>
          <div className="input-field col s8">
            <input type="text" id={idx} placeholder="Event Headline" value={this.state.events[idx].event_text.headline} name="event_text.headline" onChange={this.handleEventChange} />
          </div>

          <div className="input-field col s8">
            <textarea type="text" id={idx} placeholder="Event Description" name="event_text.text" value={this.state.events[idx].event_text.text} onChange={this.handleEventChange} />
          </div>

          <div className="input-field col s8">
            <input type="number" id={idx} placeholder="Event Year" name="event_start_date" value={this.state.events[idx].event_start_date.year} onChange={this.handleEventChange} />
          </div>

          <div className="input-field col s8">
            <input type="text" id={idx} placeholder="Event Image Url" name="event_medium.url" value={this.state.events[idx].event_medium.url} onChange={this.handleEventChange} />
          </div>

          <div className="input-field col s8">
            <input type="text" id={idx} placeholder="Image Caption" name="event_medium.caption" value={this.state.events[idx].event_medium.caption} onChange={this.handleEventChange} />
          </div>
        </div>
    ))
  }

  handleChange(e) {
    switch (e.target.name) {
      case "name":
        this.setState({ name: e.target.value})
        break;
      case "title_texts.headline":
        this.setState({ title_text_headline: e.target.value })
        break;
      case "title_texts.text":
        this.setState({ title_text_text: e.target.value })
        break;
      case "title_medium.url":
        this.setState({ title_medium_url: e.target.value })
        break;
      case "title_medium.caption":
        this.setState({ title_medium_caption: e.target.value })
        break;
    }
  }

  handleEventChange(e) {
    e.preventDefault()
    let events = this.state.events

    switch (e.target.name) {
      case "event_text.headline":
        events[parseInt(e.target.id)].event_text.headline = e.target.value
        this.setState({ events: events })
        break;
      case "event_text.text":
        events[parseInt(e.target.id)].event_text.text = e.target.value
        this.setState({ events: events })
        break;
      case "event_start_date":
        events[parseInt(e.target.id)].event_start_date.year = e.target.value
        this.setState({ events: events })
        break;
      case "event_medium.url":
        events[parseInt(e.target.id)].event_medium.url = e.target.value
        this.setState({ events: events })
        break;
      case "event_medium.caption":
        events[parseInt(e.target.id)].event_medium.caption = e.target.value
        this.setState({ events: events })
        break;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <div className="edit-history">
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
          <h3>Edit Events</h3>
          {this.renderEvents()}

          <input className="waves-effect waves-light btn pink" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default TopicEditForm;
