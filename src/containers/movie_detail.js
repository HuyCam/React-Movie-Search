import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailSection from '../components/movie-detail-section';

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
        let movie;
        if (this.props.data) {
            movie = this.props.data.data;
        } else if (!movie) {
            return <div>!Movie Detail</div>;
        }

        if (movie.Error) {
            return <div>{movie.Error}</div>;
        }
        console.log(movie);
        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 banner">
                        <img src={movie ? movie.Poster : ""}/>
                    </div>
                    <div className="col-md-6 detail">
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
        data: state.movieData
    }
}

export default connect(mapStateToProps)(MovieDetail);