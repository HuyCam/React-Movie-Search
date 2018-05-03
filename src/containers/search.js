import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: ''};
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        let term = e.target.value;
        this.setState({term});
    }

    handleSubmit(e) {
        e.preventDefault();
        // run the search action
        this.props.search(this.state.term);
        // set search value to empty
        this.setState({term: ''});
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.handleSubmit}>
              <input value={this.state.term} onChange={this.handleInput} className="form-control" placeholder="Enter title name or movie id base on IDBM"/>
              <span className="input-group-btn">
              <button className="btn btn-secondary">Submit</button>
              </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({search}, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);