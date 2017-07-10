export class HistoryAdapter {
  static addHistory(){
    return fetch('http://localhost:3000/api/v1/topics', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        topic: {
          name: newTopic.name,
          title_text_attributes: { headline: newTopic.title_text_headline, text: newTopic.title_text_text },
          title_medium_attributes: { url: newTopic.title_medium_url, caption: newTopic.title_medium_caption },
          events_attributes: events
        }
      })
    }).then(resp => resp.json() )
  }
}

function headers(){
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
  }
}
