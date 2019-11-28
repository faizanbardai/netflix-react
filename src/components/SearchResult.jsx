import React, { Component } from 'react';
import { Link } from "react-router-dom";
import OMDBGETSearch from '../API/OMDB-GET-Search';

class SearchResult extends Component {
    state = {
        searchQuery: this.props.match.params.searchQuery,
        loading: true
    }
    render() {
        let { searchQuery, searchArray, loading, error } = this.state;
        if (error) {
            return (
                <div>{error}</div>
            )
        } else if (loading) {
            return (
                <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        } else if (searchArray.Search) {
            return (
                <>
                    <h3 className="display-4">Search: {searchQuery}</h3>
                    {searchArray.Search.length > 0 && <div className="row">
                        {searchArray.Search.map((movie, index) => {
                            return (
                                <div key={index.toString()} className="col-6 col-sm-4 col-md-3 col-lg-2 px-1">
                                    <Link to={"/movie-detail/" + movie.imdbID}>
                                        <img
                                            src={movie.Poster === "N/A" ? "https://via.placeholder.com/300x445" : movie.Poster}
                                            style={{ width: "100%" }}
                                            className="mb-2"
                                            alt={movie.Title}
                                        />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>}
                </>
            )
        }
    }
    componentDidMount = async () => {
        let searchQuery = this.props.match.params.searchQuery;
        let searchArray = await OMDBGETSearch(searchQuery)

        searchArray.Error ? this.setState({ error: searchArray.Error }) :

            this.setState({
                searchArray: searchArray,
                loading: false,
                error: false
            })
    }
    componentDidUpdate = async (prevProps) => {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            let searchQuery = this.props.match.params.searchQuery;
            let searchArray = await OMDBGETSearch(searchQuery)

            searchArray.Error ? this.setState({ error: searchArray.Error }) :

                this.setState({
                    searchQuery: searchQuery,
                    searchArray: searchArray,
                    error: false,
                    loading: false
                })
        }
    }
}

export default SearchResult;