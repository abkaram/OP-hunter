import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import MovieTable from './movieComponent';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        axios.get(`https://www.reddit.com/r/AnimeThemes/search/.json?q=${this.state.value}&restrict_sr=on&sort=relevance&t=all`)
            .then(resp => {
                var results = [];
                var filtered = resp.data.data.children;
                this.setState({ value:'' });
                for(var i = 0; i < filtered.length; i++){
                    var current = filtered[i].data;
                    if(current.selftext === "" && current.url.indexOf(".webm") > -1){
                        results.push({title: current.title, url: current.url });
                    }
                }

                const element = <MovieTable data={results} />;

                ReactDOM.render(element,
                    document.getElementById('tableContainer')
                );
                
            });
            
        event.preventDefault();
    }

    render(){
        return (
            <form>
                <FormGroup controlId="title">
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter the name of an anime or the song."
                        onChange={this.handleChange}
                    />
                    <Button id="searchMovie" onClick={this.handleSubmit} type="submit" bsStyle="primary" bsSize="large" block>Search</Button>
                </FormGroup>
            </form>
        );
    }
}

export default Form;