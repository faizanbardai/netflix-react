import React from 'react';
import SingleMovie from './SingleMovie';

const inTheater = [
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
    }];

const inTheaterSection = () => {
    return (
        <>
            <h3 className="display-4">In Theater</h3>
            <div className="row">
                {inTheater.map((movie) => <SingleMovie movie={movie} key={movie.imdbID} />)}
            </div>
        </>
    );
}

export default inTheaterSection;