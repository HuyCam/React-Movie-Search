import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
            <form className="input-group">
              <input className="form-control" placeholder="Enter title name or movie id base on IDBM"/>
              <span className="input-group-btn">
              <button className="btn btn-secondary">Submit</button>
              </span>
            </form>
        );
    }
}

