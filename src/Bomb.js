import React, { Component } from "react"


export default class Bomb extends Component {

    state = {
        secondsLeft: this.props.initialCount
    }

    render() {

        if(this.state.secondsLeft !== 0) {
            return (
                <h2>{this.state.secondsLeft} seconds left before I go boom!</h2>
            )
        }
        else {
            return (
                <h2>Boom!</h2>
            )
        }
    }
}
