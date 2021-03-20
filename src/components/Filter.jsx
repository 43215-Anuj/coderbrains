import React, { Component } from 'react'
import '../assets/css/filter.css';

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isYearActive: "",
            isLaunchActive: "",
            isLandingActive: ""
        }
    }
    setFilter(category,value) {
        if(category === 'year') {
            this.props.Year(value);
            this.setState({ 
                isYearActive: "Year: " + value})
        } else if(category === 'launch') {
            this.props.Launch(value);
            this.setState({ 
                isLaunchActive: "Launch: " + value})
        } else if(category === 'landing') {
            this.props.Landing(value);
            this.setState({ 
                isLandingActive: "Landing: " + value})
        }
    }

    render() {
        return (
            <div id="filter">
                <h2>Filters</h2> 
                <div className="launch-year center-align"><h3>Launch Year</h3></div>
                <div className="filters block-row">
                    <div className="filter">
                        <button name="year" value="2006" onClick={() => this.setFilter('year','2006')}
                        >2006</button>
                    </div>
                    <div className="filter">
                        <button name="year" value="2007" onClick={() => this.setFilter('year','2007')}
                        >2007</button>
                    </div>
                    <div className="filter">
                        <button name="year" value="2008" onClick={() => this.setFilter('year','2008')}
                        >2008</button>
                    </div>
                    <div className="filter">
                        <button name="year" value="2009" onClick={() => this.setFilter('year','2009')}
                        >2009</button>
                    </div>
                    <div className="filter">
                        <button name="year" value="2010" onClick={() => this.setFilter('year','2010')}
                        >2010</button>
                    </div>
                    <div className="filter">
                        <button name="year" value="2011" onClick={() => this.setFilter('year','2011')}
                        >2011</button>
                    </div>
                    <div className="filter">
                        <button name="year" value="2012" onClick={() => this.setFilter('year','2012')}
                        >2012</button>
                    </div>
                    <div className="filter">
                        <button name="year" value="2013" onClick={() => this.setFilter('year','2013')}
                        >2013</button>
                    </div>
                    <div className="filter">
                        <button name="year" value="2014" onClick={() => this.setFilter('year','2014')}
                        >2014</button>
                    </div>
                    <div className="filter">
                        <button name="year" value="2015" onClick={() => this.setFilter('year','2015')}
                        >2015</button>
                    </div>
                    <div className="filter">
                        <button name="year" value="2016" onClick={() => this.setFilter('year','2016')}
                        >2016</button>
                    </div>
                    <div className="filter">
                        <button name="year" value="2017" onClick={() => this.setFilter('year','2017')}
                        >2017</button>
                    </div>
                    <div className="filter">
                        <button name="year" value="2018" onClick={() => this.setFilter('year','2018')}
                        >2018</button>
                    </div>
                    <div className="filter">
                        <button name="year" value="2019" onClick={() => this.setFilter('year','2019')}
                        >2019</button>
                    </div>
                    <div className="filter">
                        <button name="year" value="2020" onClick={() => this.setFilter('year','2020')}
                        >2020</button>
                    </div>
                </div>
                <div className="success-launch center-align"><h3>Successful Launch</h3></div>
                <div className="filters block-row">
                    <div className="filter">
                        <button onClick={() => this.setFilter('launch','true')}>True</button>
                    </div>
                    <div className="filter">
                        <button onClick={() => this.setFilter('launch','false')}>False</button>
                    </div>  
                </div>
                <div className="success-launch center-align"><h3>Successful Landing</h3></div>
                <div className="filters block-row">
                    <div className="filter">
                        <button onClick={() => this.setFilter('landing','true')}>True</button>
                    </div>
                    <div className="filter">
                        <button onClick={() => this.setFilter('landing','false')}>False</button>
                    </div>  
                </div>
                <div className="active-filters">
                <div className="success-launch center-align"><h3>Active Filters</h3></div>
                    <p>{this.state.isYearActive} | {this.state.isLandingActive} | {this.state.isLaunchActive}</p>
                </div>
            </div>   
        )
    }
}
