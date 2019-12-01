import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './NavBar';
import InTheater from './InTheater';
import SearchResult from './SearchResult';
import MovieDetail from './MovieDetail';




export const MainComponent = () => {
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
    return (
        <section>
            <Router>
                <NavBar />
                <div className="container-fluid">
                    <div className="container">
                        <Route path="/movie-detail/:movieId" component={MovieDetail} />
                        <Route path="/movies-in-theater" render={(props) => (
                            <InTheater inTheater={inTheater} />
                        )} />
                        <Route path="/search/:searchQuery" component={SearchResult} />
                    </div>
                </div>
                <footer className="navbar fixed-bottom navbar-dark bg-dark">
                    <div className="text-white ml-auto">FayJu &copy;2019</div>
                </footer>
            </Router>
        </section>
    );
}

export default MainComponent;