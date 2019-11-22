import React, { Component } from 'react';

class NavBar extends Component {
  stopRefresh(e) {
    e.preventDefault();
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="index.html">FayJu Flix</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html/tv-shows">Movies</a>
            </li>
          </ul>
          <form className="form-inline" onSubmit={this.stopRefresh.bind(this)}>
            <input className="form-control mr-sm-2" onKeyUp={this.props.searchFn} type="search" placeholder="Search movies" aria-label="Search"></input>
          </form>
        </div>
      </nav >
    );
  }
}

export default NavBar;