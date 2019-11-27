import React, { Component } from 'react';
import { Link } from "react-router-dom";
import OMDBGETSearch from '../API/OMDB-GET-Search';

class SearchResult extends Component {
    state = {}
    render() {
        let { searchQuery } = this.state;
        let { searchArray } = this.state;
        if (searchArray) {
            return (
                <>
                    <h3 className="display-4">Search: {searchQuery}</h3>
                    <div className="row">
                        {searchArray.Search.map((movie, index) => {
                            return (
                                <div key={index.toString()} className="col-6 col-sm-4 col-md-4 col-lg-1 px-1">
                                    <Link to={"/movie-detail/" + movie.imdbID}>
                                        <img src={movie.Poster} style={{ width: "100%" }} className="mb-2" alt={movie.Title} />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </>
            )
        } else {
            return (<div>No search result found.</div>)
        }
    }
    componentDidMount = async () => {
        console.log("Component did mount.")
        let searchQuery = this.props.match.params.searchQuery;
        let searchArray = await OMDBGETSearch(searchQuery)
        this.setState({
            searchQuery: searchQuery,
            searchArray: searchArray
        })
    }
}

export default SearchResult;