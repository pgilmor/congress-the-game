import React, { Component } from "react";

class League extends Component {
  render() {
    return (
      <div className="container">
        <form method="post" action="/api/create_league" className="col s12">
          <div className="row">
            <div className="input-field col s8">
              <input id="league_name" name="league_name" type="text" />
              <label htmlFor="league_name">League Name</label>
            </div>
            <div className="input-field col s4">
              <input type="password" id="password" name="password" />
              <label htmlFor="password">League Password</label>
            </div>
          </div>
          <button type="submit" className="waves-effect waves-light btn indigo">
            Create League
          </button>
        </form>
      </div>
    );
  }
}

export default League;
