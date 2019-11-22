import React, { Component } from 'react';
import SingleMovie from './SingleMovie';
import { Row } from 'reactstrap';

class inTheater extends Component {
    render() {
        return (
            <>
                <h3 className="display-4">In Theater</h3>
                <Row>
                    {this.props.inTheater.map(movieID => <SingleMovie movie={movieID} />)}
                </Row>
            </>
        );
    }
}

export default inTheater;