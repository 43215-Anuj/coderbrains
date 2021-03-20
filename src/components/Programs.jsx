import React, { Component } from 'react'
import '../assets/css/program.css';

export default class Programs extends Component { 
    constructor(props){
        super(props);
        this.state = {
            Items: [],
            isLoading: false,
            isItems: false,
        }
    }

    componentDidMount() {
        fetch(`https://api.spaceXdata.com/v3/launches?limit=100`)
            .then(res => res.json())
            .then(Flights => {
                this.setState({
                    isLoading: true,
                    Items: Flights,
                })
                if(this.state.Items.length === 0){
                    this.setState({ isItems: false })
                } else  {
                    this.setState({ isItems: true })
                }
            });
            this.setState({ isLoading: false })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.year !== this.props.year || prevProps.launch !== this.props.launch || prevProps.landing !== this.props.landing) {
            fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${this.props.year}&launch_success=${this.props.launch}&land_success=${this.props.landing}`)
            .then(res => res.json())
            .then(Flights => {
                this.setState({
                    isLoading: true,
                    Items: Flights,
                })
                if(this.state.Items.length === 0){
                    this.setState({ isItems: false })
                } else  {
                    this.setState({ isItems: true })
                }
            });
            this.setState({ isLoading: false })
        }
    }

    render() {
        return (
            <div id="programs">
            {!this.state.isItems && <div><p>No Data To Show</p></div>}
            {this.state.isLoading ?  "" : 'Loading...'}
            {this.state.isLoading &&
                this.state.Items.map((flight, key) => 
                    <div key={key} className="card">
                        <div className="image"><img src={flight.links.mission_patch} alt="1"/> </div> 
                        <div className="mission-name-id"><p>{flight.mission_name} #{flight.flight_number}</p></div>
                        <div className="mission-id"><p><span>Mission Id:</span></p> {flight.mission_id.map((id, keys) =>
                            <ul key={keys}>
                                <li>{id}</li>
                            </ul>)}
                        </div>
                        <div className="year"><p><span>Launch Year: </span>{flight.launch_year}</p></div>
                        <div className="islaunch"><p><span>Successful Launch: </span>{flight.launch_success ? "true":"false"} </p></div>
                        <div className="islanding"><p><span>Successful Landing: </span>{flight.rocket.first_stage.cores[0].land_success ? "true" : "false"}</p></div>
                    </div>
                    )
            }  
            </div>
        )
    }
}
