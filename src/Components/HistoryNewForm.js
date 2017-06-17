import React, { Component } from 'react';

export default class HistoryNewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title_text: {
        headline: '',
        text: ''
      },
      title_medium: {
        url: '',
        caption: ''
      },
      events: [
        {
          name: '',
          event_text: {
            headline: '',
            text: ''
          },
          event_start_date: '',
          event_medium: {
            url: '',
            caption: ''
          }
       }
     ]

    }

    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.addProportion = this.addProportion.bind(this)
  }

  handleChange(event) {
    if (event.target.name !== 'proportions') {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  renderEvents(){
    return this.state.events.map( (e, idx) => (
      <div key={e.name} className="row">
        <div className="input-field col s8">
          <input type="text" placeholder="Event Headline" name="event_text.headline" value={this.state.events[idx].event_text.headline} onChange={(e) => this.handleEventChange(e, idx)} />
        </div>

        <div className="input-field col s8">
          <textarea type="text" placeholder="Event Description" name="event_text.text" value={this.state.events[idx].event_text.headline} onChange={this.handleEventChange} />
        </div>

        <div className="input-field col s8">
          <input type="date" placeholder="Event Year" name="event_start_date" value={this.state.events[idx].event_start_date} onChange={this.handleEventChange} />
        </div>

        <div className="input-field col s8">
          <input type="text" placeholder="Event Image Url" name="event_medium.url" value={this.state.events[idx].event_medium.url} onChange={this.handleEventChange} />
        </div>

        <div className="input-field col s8">
          <input type="text" placeholder="Image Caption" name="event_medium.caption" value={this.state.events[idx].event_medium.caption} onChange={this.handleEventChange} />
        </div>
      </div>
    ))
  }

  addEvent(e) {
    console.log("hello")
  }

  handleEventChange(e){
    // debugger

    switch (e.target.name) {
      case "event_text.headline":

        break;
      case "event_text.text":

        break;
      case "event_start_date":
        break;
      case "event_medium.url":
        break;
      case "event_medium.caption":
        break;
      default:

    }
  //  this.setState(function(prevState){
  //    return {
  //      events: prevState.phoneNumbers.map((tel) => {
  //        if (tel.id !== id) {
  //          return tel
  //        } else {
  //          return {id: id, number: number}
  //        }
  //      })
  //    }
  //  })
 }

  render() {
    return (
    <div>
      <h1>Add a New History</h1>
      <form className="hover">
        <div className="row">
          <div className="input-field col s8">
            <input placeholder="History of What?" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>
        </div>

        <h3>Quick Summary Info</h3>
        <div className="row">
          <div className="input-field col s8">
            <input placeholder="Headline" name="title_texts.headline" value={this.state.title_text.headline} onChange={this.handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8">
            <input placeholder="Quick Summary" name="title_texts.text" value={this.state.title_text.text} onChange={this.handleChange} />
          </div>
        </div>

        <h3>Add Events to this History</h3>
        { this.renderEvents() }
        <button className="waves-effect waves-light btn lime" onClick={this.addEvent.bind(this)}>Add Event</button>
        <br/><br/>
        <input className="waves-effect waves-light btn pink" type="submit" value="Submit" />
      </form>
    </div>

    )
  }
}
