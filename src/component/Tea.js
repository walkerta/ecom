

import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';



export default class PeopleMenu extends Component {

  render() {

    return (
      <div className="pictures">
        <Link className="btn btn-large btn-primary" to="/">Back To Home</Link>
          <Link className="btn btn-large btn-danger" to="/people">Back To Celeb Menu</Link>
          <Link className="btn btn-large btn-danger" to="/people">Back To Celeb Menu</Link>


            <div className="About">
              <nav className="Page  ">
                <h1 className="Contact">Favorite Murray</h1>
              </nav>
</div>
      </div>

    );
  }
}
