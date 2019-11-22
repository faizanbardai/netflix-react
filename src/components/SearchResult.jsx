import React, { Component } from 'react';
import SingleMovie from './SingleMovie';

class SearchResult extends Component {
    render() {
        return (
            <>
                <h3 className="display-4">Search: {this.props.searchQuery}</h3>
                <div className="row">
                    {this.props.searchArray.map((movie, index) => <SingleMovie movie={movie} key={index} onClickFn={this.props.selectMovieFn}/>)}
                </div>
            </>
        );
    }
}

export default SearchResult;