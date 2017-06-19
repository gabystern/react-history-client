import React from 'react';

const TopicBox = ({ topic }) => {
  return (
    <div className="row">
       <div className="col s12 m4 center-align">
         <div className="card">
           <div className="card-image">
             <img alt="Link Broken" className="image" src={topic.title_medium.url}/>
             <span className="card-title" id="card-title">{topic.name}</span>
           </div>
         </div>
       </div>
     </div>
  )
}

export default TopicBox;
