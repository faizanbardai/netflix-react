import React, { Component } from 'react';
class SingleMovie extends Component {
    state = {};
    showDetail = () => {
        this.props.onClickFn(this.state.movie);
    }
    componentDidMount = async () => {

        let URL = "http://www.omdbapi.com/?apikey=251ff3f5&i=".concat(this.props.movie.imdbID);
        try {
            let response = await fetch(URL, {
                method: "GET"
            })
            if (response.ok) {
                this.setState(
                    {
                        movie: await response.json()
                    }
                )
            }
        } catch (error) {
            console.log(error);
        }

    }

    render() {
        if (this.state.movie) {
            let movie = this.state.movie;
            return (
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 px-1" onClick={this.showDetail}>
                    <img src={movie.Poster} style={{ width: "100%" }} className="mb-2" alt={movie.Title} />
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}





export default SingleMovie;