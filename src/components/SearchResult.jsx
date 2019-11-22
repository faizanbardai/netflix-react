import React, { Component } from 'react';
import SingleMovie from './SingleMovie';
import { Row } from 'reactstrap';

class SearchResult extends Component {
    render() {
        return (
            <>
                <h3 className="display-4">Search: {this.props.searchQuery}</h3>
                <Row>
                    {this.props.searchArray.map((movie, index) => <SingleMovie movie={movie} key={index} onClickFn={this.props.selectMovieFn}/>)}
                </Row>
            </>
        );
    }
}

export default SearchResult;