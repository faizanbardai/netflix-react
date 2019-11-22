import React, { Component } from 'react';

class MovieDetail extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="row my-2">
                    <div className="col-12 col-sm-3 col-md-4 p-0">
                        <img 
                            src={this.props.movie.Poster} 
                            className = "img-thumbnail"
                            alt={this.props.movie.Title} 
                            style={{ width: "100%" }}>                                
                        </img>
                    </div>
                    <div className="col-12 col-sm-9 col-md-4 p-0">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Title: {this.props.movie.Title}</li>
                            <li className="list-group-item">Year: {this.props.movie.Year}</li>
                            <li className="list-group-item">Genre: {this.props.movie.Genre}</li>
                            <li className="list-group-item">IMDB Rating: {this.props.movie.imdbRating}</li>
                            <li className="list-group-item">{this.props.movie.Plot}</li>
                        </ul>
                    </div>
                    <div className="col-md-4 p-0">
                        <button type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        Comments
                    </div>
                </div>
            </div>

        );
    }
}

export default MovieDetail;