import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import IndexHeader from "./now-ui-kit/components/Headers/IndexHeader.js"

import './App.css';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: "james' website",
            headerLinks: [
                {title: 'Home', path: '/'},
                {title: 'Projects', path: '/'}
            ],
            home: {
                title: 'About me'
            },
            projects:{
                title: 'Projects'
            }
        }
    }



    render() {
        
        return(
            <div>
                <IndexHeader/>
                <h1>Hello World</h1>
            </div>
            );
    }
}

export default App;