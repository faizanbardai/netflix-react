import React, { Component } from 'react';

class MovieDetail extends Component {
    state = {}
    render() {
        console.log(this.props)
        return (
            <div className="row my-2">
                <div className="col-4">
                    <img src={this.props.movie.Poster} alt={this.props.movie.Title} style={{ width: "100%" }}></img>
                </div>
                <div className="col-4">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Title: {this.props.movie.Title}</li>
                        <li className="list-group-item">Year: {this.props.movie.Year}</li>
                        <li className="list-group-item">Genre: {this.props.movie.Genre}</li>
                        <li className="list-group-item">IMDB Rating: {this.props.movie.imdbRating}</li>
                        <li className="list-group-item">{this.props.movie.Plot}</li>
                    </ul>
                </div>
                <div className="col-4">
                    <i className="fa fa-times top-corner"></i>
                    Comments
                </div>
            </div>

        );
    }
}

export default MovieDetail;