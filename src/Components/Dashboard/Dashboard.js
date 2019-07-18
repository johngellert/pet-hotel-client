import React, { Component } from 'react'

class Dashboard extends Component {
state = {
    newPet: {
        pet_name: '',
        color: '',
        breed: '',
        owner_name: ''

    }
}

handleInputNewOwner = (event) => {
    this.setState({
        newPet: {
            
        } 
    })
    console.log(event.target.value)
}
    render() {
        return (
            <>
                <h2>Add Pet</h2>
                <input
                    type="text"
                    className="addOwnerName"
                    placeholder="Owner Name"
                    onChange={this.handleInputNewOwner}
                    value={this.state.newOwner}
                    key={'new owner input'}>
                </input>
                <button>Submit</button>

            </>
        )
    }
}

export default Dashboard;