import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavBar from './NavBar';
import InTheater from './InTheater';

class MainComponent extends Component {

    state = {
        inTheater: ["tt7286456","tt9248934","tt1025100","tt4520988","tt9763442"],
        FayJu: [],
        searchKeyword: ""
    }
    search = (e) => {
        this.setState({ searchKeyword: e.target.value })
    }

    render() {
        return (
            <Container>
                <NavBar />
                {this.state.searchKeyword === "" && <InTheater inTheater={this.state.inTheater}/>}
            </Container>
        );
    }
}

export default MainComponent;