import React from 'react'
import SingleMovie from './SingleMovie';

const inTheaterSection = (props) => {
    
    return (
        <>
            <h3 className="display-4">In Theater</h3>
            <div className="row">
                {props.inTheater.map((movie) => <SingleMovie movie={movie} key={movie.imdbID} />)}
            </div>
        </>
    );
}

export default inTheaterSection;