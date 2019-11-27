import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './NavBar';
import InTheater from './InTheater';
import SearchResult from './SearchResult';
import MovieDetail from './MovieDetail'


class MainComponent extends Component {

    render() {
        return (
            <section>
                <Router>
                    <NavBar />
                    <div className="container-fluid">
                        <div className="container">
                            <Route path="/movie-detail/:movieId" component={MovieDetail} />
                            <Route path="/movies-in-theater" component={InTheater} />
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
}

export default MainComponent;