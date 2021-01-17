import React, { Component } from 'react'

export default class AlertMessage extends Component {
    constructor(props){
        super(props)

        this.state = {
            display: true,
            counter: this.props.counter,
            interval: null
        }

        this.hideToast = this.hideToast.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    // Sets the counter for the alert box
    incrementCounter(){
        const interval = setInterval(() => {
            let currentCounter = this.state.counter + 1;
            if (currentCounter < 5){
                this.setState({ counter: currentCounter });
            } else if (currentCounter === 4){
                this.setState({ counter: 0 });
            }
        }, 1000);

        this.setState({ interval: interval })
    }

    componentDidMount(){
        if (this.state.counter < 4  || this.state.counter !== 4){
            this.incrementCounter()
        }
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    hideToast(){
        this.setState({display: false});
    }

    render() {
        return (
            <div>
                {this.state.display && this.state.counter < 4?
                <div className="toast-container-alert row">
                    <div className="content">
                        <span style={{color: 'white'}}>&#x26A0;</span>
                        <span style={{marginLeft: '10px'}}>One of the input fields are empty! Make sure that all of them are filled in accordingly.</span>
                        <span style={{color: 'white', marginLeft: '20px'}} onClick={this.hideToast} className="cancel-alert">&#9587;</span>
                    </div>
                </div>
                : null}
            </div>
        )
    }
}
