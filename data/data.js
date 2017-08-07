import React from 'react';


const tea = (props) => {
  //create a variable "actor" with the data passed in via props.
  let tea = props.data;
  return (

    <div className="actor-stuff">
      <ul className="actor_bio_ul">
        <li className="actor_content" key={actor.id}>
          <img className="actor-image" src={actor.imgThumb} alt="actor" />
          <div className="actor-info">
            <h3>{actor.name}</h3>
            <h5>pictures: {actor.pictures}</h5>
            <h5>description: {actor.description}</h5>
            <h6>price: {actor.price}</h6>

          </div>
          <div className="actor-bio">
            <p><strong>Biography:</strong> {actor.bio}</p>
          </div>
        </li>
      </ul>
    </div>
  );

};

export default Actor;
