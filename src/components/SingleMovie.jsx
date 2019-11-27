import React, { Component } from 'react';
import { Link } from "react-router-dom";
import OMDBGETimdbID from '../API/OMDB-GET-imdbID';
class SingleMovie extends Component {
    state = {};
    componentDidMount = async () => {
        let movieID = this.props.movie.imdbID;
        let movie = await OMDBGETimdbID(movieID);
        this.setState({
            movie: movie
        })
    }
    render() {
        if (this.state.movie) {
            let movie = this.state.movie;
            return (
                <div className="col-4 col-sm-3 col-md-2 px-1">
                    <Link to={"/movie-detail/" + this.state.movie.imdbID}>
                        <img src={movie.Poster} style={{ width: "100%" }} className="mb-2" alt={movie.Title} />
                    </Link>
                </div>
            )
        } else {
            return (
                <div>No Movie Available.</div>
            )
        }
    }
};
export default SingleMovie;