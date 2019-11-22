import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavBar from './NavBar';
import InTheater from './InTheater';
import SearchResult from './SearchResult';


class MainComponent extends Component {

    state = {
        inTheater: ["tt7286456", "tt9248934", "tt1025100", "tt4520988", "tt9763442"],
        FayJu: [],
        searchKeyword: "titanic",
        searchArray: undefined
    }
    search = (e) => {
        this.setState({ searchKeyword: e.target.value })
    }
    componentDidMount = async () => {
        let URL = "http://www.omdbapi.com/?apikey=251ff3f5&s=".concat(this.state.searchKeyword);
        try {
            let response = await fetch(URL, {
                method: "GET"
            })
            if (response.ok) {
                this.setState(
                    {
                        searchArray: await response.json()
                    }
                )
            }
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <Container>
                <NavBar />
                {this.state.searchKeyword === "" && <InTheater inTheater={this.state.inTheater} />}
                {this.state.searchArray && <SearchResult searchQuery={this.state.searchKeyword} searchArray={this.state.searchArray.Search} />}

            </Container>
        );
    }
}

export default MainComponent;