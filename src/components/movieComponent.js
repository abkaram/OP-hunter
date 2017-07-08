import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import MovieBox from './movieBoxComponent';
import ReactDOM from 'react-dom';

class MovieTable extends Component {
    constructor(props){
        super(props);
        this.state = {data: this.props.data}
    }

    componentWillReceiveProps(nextProps){
        this.setState({data: nextProps.data});
    }

    loadVideo(index){
        console.log(this.state.data[index]);

        const element = <MovieBox data={this.state.data[index]} />;

        ReactDOM.render(element,
            document.getElementById('videoContainer')
        );
    }

    render(){
        let rows = [];
        for (var i = 0; i < this.state.data.length; i++){
            rows.push(<tr key={i}>
                <td>{this.state.data[i].title}</td>
                <td><Button key={i} onClick={this.loadVideo.bind(this, i)} bsStyle="primary" bsSize="small" block>Play</Button></td>
            </tr>);
        }
        return (
            <Table id="movieTable" bordered condensed responsive>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Load</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        );
    }
}

export default MovieTable;