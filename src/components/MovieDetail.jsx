import React, { Component } from 'react';
import OMDBGETimdbID from '../API/OMDB-GET-imdbID';
import MovieComments from './MovieComments';

class MovieDetail extends Component {
    state = {
        loading: true
    }
   
    render() {
        if(!this.state.loading) {
            return (
                <div>
                    <div className="row my-2 justify-content-center">
                        <div className="col-8 col-sm-3 col-md-3 p-0">
                            <img 
                                src={this.state.movie.Poster} 
                                className = "img-thumbnail"
                                alt={this.state.movie.Title} 
                                style={{ width: "100%" }}>                                
                            </img>
                        </div>
                        <div className="col-12 col-sm-9 col-md-5 p-0">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Title: {this.state.movie.Title}</li>
                                <li className="list-group-item">Year: {this.state.movie.Year}</li>
                                <li className="list-group-item">Genre: {this.state.movie.Genre}</li>
                                <li className="list-group-item">IMDB Rating: {this.state.movie.imdbRating}</li>
                                <li className="list-group-item">{this.state.movie.Plot}</li>
                            </ul>
                        </div>
                        <div className="col-md-4 p-0">                            
                            <MovieComments movieID={this.state.movie.imdbID} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }
        
    }
    
    componentDidMount = async() => {
        console.log("Component did mount.")
        let movieID = this.props.match.params.movieId;
        let movie = await OMDBGETimdbID(movieID);
        this.setState({
            movieID: movieID,
            movie: movie,
            loading: false
        })
    }

    componentDidUpdate = async (prevProps, prevState) => {
        if(prevState !== this.state) {
            console.log("Previous State: ", prevState);
            console.log("New State: ", this.state);
        }
        if(prevProps !== this.props) {
            console.log("Previous Props: ", prevProps);
            console.log("New Props: ", this.props);
        }        
        let movieID = this.props.match.params.movieId;
        if(movieID !== this.state.movieID) {
            this.setState({ loading: true });
            let movie = await OMDBGETimdbID(movieID);
            this.setState({
                movieID: movieID,
                movie: movie
            })
        }
    }    
}

export default MovieDetail;