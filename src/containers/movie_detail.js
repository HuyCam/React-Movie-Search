import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
    }

    getVisibility() {
        if (this.props.data) {
            this.setState({visibility: 'visible'});
        }
    }
    render() {
        console.log(this.props.data);
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        !MovieDetail
                    </div>
                    <div className="col-md-6">
                        !MovieDetail
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(MovieDetail);