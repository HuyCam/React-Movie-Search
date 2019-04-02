import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieDetail extends Component {
    render() {
        let movie;
        if (!this.props.data) {
            movie = this.props.data.data;
        } else {
            return <div>Movie</div>;
        }

        if (movie.Error) {
            return <div>{movie.Error}</div>;
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        !MovieDetail
                    </div>
                    <div className="col-md-6">
                        <ul classsName="list-group" >
                            <DetailSection detail={['Actor', movie.Actors]} />
                            <DetailSection detail={['Director', movie.Director]} />
                            <DetailSection detail={['Genre', movie.Genre]} />                        
                            <DetailSection detail={['Production', movie.Production]} />
                            <DetailSection detail={['Plot', movie.Plot]} />
                      </ul>
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