import React, { Component } from 'react'
import Programs from './Programs';
import Filter from './Filter';
import '../assets/css/app.css';
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            year: "",
            launch: "",
            landing: "",
        }
    }

    setYear = (value) => {
        this.setState({
            year: value
        })
    }

    setLaunch = (value) => {
        this.setState({
            launch: value
        })
    }

    setLanding = (value) => {
        this.setState({
            landing: value
        })
    }

    render() {
        return (
            <div className="main">
            <div id='app'>
                <h1>SpaceX Launch Programs</h1>
                <div className="components">
                    <Filter Year = {this.setYear}
                            Launch ={this.setLaunch} 
                            Landing={this.setLanding} />
                    <Programs year = {this.state.year} 
                                launch = {this.state.launch}
                                landing = {this.state.landing} />
                </div>
                <p className="credit center-align">Developed by Anuj Kumar</p>
            </div>
            </div>
        )
    }
}
