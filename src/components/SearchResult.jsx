import React, { Component } from 'react';
import { Link } from "react-router-dom";
import OMDBGETSearch from '../API/OMDB-GET-Search';

class SearchResult extends Component {
    state = {
        searchQuery: this.props.match.params.searchQuery,
        loading: true
    }
    render() {
        let { searchQuery } = this.state;
        let { searchArray } = this.state;
        if (this.state.loading) {
            return (
                <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        } else {
            return (
                <>
                    <h3 className="display-4">Search: {searchQuery}</h3>
                    <div className="row">
                        {searchArray.Search.map((movie, index) => {
                            return (
                                <div key={index.toString()} className="col-6 col-sm-4 col-md-3 col-lg-2 px-1">
                                    <Link to={"/movie-detail/" + movie.imdbID}>
                                        <img 
                                            src={movie.Poster === "N/A"? "https://via.placeholder.com/300x445": movie.Poster} 
                                            style={{ width: "100%" }} 
                                            className="mb-2" 
                                            alt={movie.Title} 
                                        />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </>
            )
        }
    }
    componentDidMount = async () => {
        let searchQuery = this.props.match.params.searchQuery;
        let searchArray = await OMDBGETSearch(searchQuery)
        this.setState({
            searchArray: searchArray,
            loading: false
        })
    }
    componentDidUpdate = async (prevProps) => {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            let searchQuery = this.props.match.params.searchQuery;
            let searchArray = await OMDBGETSearch(searchQuery)
            this.setState({
                searchQuery: searchQuery,
                searchArray: searchArray
            })
        }
    }
}

export default SearchResult;