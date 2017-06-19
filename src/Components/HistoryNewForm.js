import React, { Component } from 'react';

export default class HistoryNewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title_text_headline: '',
      title_text_text: '',
      title_medium_url: '',
      title_medium_caption: '',
      events: [],
      // new event information
      headline: '',
      text: '',
      year: '',
      url: '',
      caption: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addEvent = this.addEvent.bind(this)
    this.handleEventChange = this.handleEventChange.bind(this)
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

  handleEventChange(e){
    switch (e.target.name) {
      case "event_text.headline":
        this.setState({ headline: e.target.value })
        break;
      case "event_text.text":
        this.setState({ text: e.target.value })
        break;
      case "event_start_date":
        this.setState({ year: e.target.value })
        break;
      case "event_medium.url":
        this.setState({ url: e.target.value })
        break;
      case "event_medium.caption":
        this.setState({ caption: e.target.value })
        break;
    }
  }

  addEvent(e) {
    e.preventDefault();
    this.setState({
      events: [...this.state.events, {
        headline: this.state.headline,
        text: this.state.text,
        year: this.state.year,
        url: this.state.url,
        caption: this.state.caption
      }],
      headline: '',
      text: '',
      year: '',
      url: '',
      caption: ''
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
    <div className="add-form">
      <h1>Add a New History</h1>
      <form className="hover" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="input-field col s8">
            <input placeholder="History of What?" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>
        </div>

        <h3>Quick Summary Info</h3>
        <div className="row">
          <div className="input-field col s8">
            <input placeholder="Headline" name="title_texts.headline" value={this.state.title_text_headline} onChange={this.handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8">
            <input placeholder="Quick Summary" name="title_texts.text" value={this.state.title_text_text} onChange={this.handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8">
            <input placeholder="Stater Image" name="title_medium.url" value={this.state.title_medium_url} onChange={this.handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8">
            <input placeholder="Image Caption" name="title_medium.caption" value={this.state.title_medium_caption} onChange={this.handleChange} />
          </div>
        </div>

        <h3>Add Events to this History</h3>
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
        <button className="waves-effect waves-light btn deep-purple darken-4" onClick={this.addEvent}>Add Event</button>
        <br/><br/>
        <input className="waves-effect waves-light btn deep-purple darken-4" type="submit" value="Submit" />
      </form>
    </div>

    )
  }
}
