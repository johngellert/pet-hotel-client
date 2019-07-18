import React, { Component } from 'react'

class Dashboard extends Component {
state = {
    newOwner: ''
}

handleInputNewOwner = (event) => {
    this.setState({
        newOwner: event.target.value
    })
    console.log(event.target.value)
}
    render() {
        return (
            <>
                <h2>Add Owner</h2>
                <input
                    type="text"
                    className="addOwnerName"
                    placeholder="Owner Name"
                    onChange={this.handleInputNewOwner}
                    value={this.state.newOwner}
                    key={'new owner input'}>
                </input>

            </>
        )
    }
}

export default Dashboard;