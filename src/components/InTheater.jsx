import React, { Component } from 'react';
import SingleMovie from './SingleMovie';

class inTheater extends Component {
    render() {
        return (
            <>
                <h3 className="display-4">In Theater</h3>
                <div class="row">
                    {this.props.inTheater.map((movie, index) => <SingleMovie movie={movie} key={index} onClickFn={this.props.selectMovieFn}/>)}
                </div>
            </>
        );
    }
}

export default inTheater;