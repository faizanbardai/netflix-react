import React, { Component } from 'react';
import NavBar from './NavBar';
import InTheater from './InTheater';
import SearchResult from './SearchResult';
import MovieDetail from './MovieDetail'


class MainComponent extends Component {

    state = {
        inTheater: [
            {
                "imdbID": "tt7286456",
            },
            {
                "imdbID": "tt9248934"
            },
            {
                "imdbID": "tt1025100"
            },
            {
                "imdbID": "tt4520988"
            },
            {
                "imdbID": "tt9763442"
            }
        ],
        inTheaterShow: true,
        searchKeyword: "",
        searchArray: undefined,
        selectedMovie: undefined
    }

    movieDetail = (movie) => {
        this.setState(
            {
                selectedMovie: movie
            }
        )
    }

    search = async (e) => {
        this.setState({ searchKeyword: e.target.value })
        if (e.keyCode === 13) {
            this.setState({ inTheaterShow: false })
            this.setState({ selectedMovie: undefined })
            let URL = "http://www.omdbapi.com/?apikey=251ff3f5&s=".concat(this.state.searchKeyword);
            try {
                let response = await fetch(URL, {
                    method: "GET"
                })
                if (response.ok) {
                    this.setState(
                        {
                            searchArray: await response.json()
                        }
                    )
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    
    componentDidMount = () => {
    }

    render() {
        return (
            <>
                <NavBar searchFn={this.search} searchKeyword={this.state.searchKeyword} />
                <div className="container-fluid">
                    {/* To Do */}
                    {/* Create component to fetch data */}
                    {/* Detail will receive ID and fetch all the details. */}
                    {/* Single movie will receive the ID and Image URL */}
                    <div className="container">
                        {this.state.selectedMovie && <MovieDetail movie={this.state.selectedMovie} />}
                        {this.state.inTheaterShow && <InTheater selectMovieFn={this.movieDetail} inTheater={this.state.inTheater} />}
                        {this.state.searchArray && <SearchResult selectMovieFn={this.movieDetail} searchQuery={this.state.searchKeyword} searchArray={this.state.searchArray.Search} />}
                    </div>
                </div>
            </>
        );
    }
}

export default MainComponent;