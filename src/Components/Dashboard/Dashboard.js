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

    handleInputNewPet = (petdetail) => (event) => {
        this.setState({
            newPet: {
                ...this.state.newPet,
                [petdetail]: event.target.value,
            }
        })
        console.log(event.target.value)
    }

    addNewPet = event => {
        event.preventDefault();
        console.log('submit clicked')
    }
    render() {
        return (
            <>
                <h2>Add Pet</h2>
                <form onSubmit={this.addNewPet}>
                    <input
                        type="text"
                        className="addPetName"
                        placeholder="Pet Name"
                        onChange={this.handleInputNewPet('pet_name')}
                        value={this.state.newPet.pet_name}
                        key={'new pet name input'}>
                    </input>
                    <input
                        type="text"
                        className="addColor"
                        placeholder="Pet Color"
                        onChange={this.handleInputNewPet('color')}
                        value={this.state.newPet.color}
                        key={'new pet color input'}>
                    </input>
                    <input
                        type="text"
                        className="addBreed"
                        placeholder="Pet Breed"
                        onChange={this.handleInputNewPet('breed')}
                        value={this.state.newPet.breed}
                        key={'new pet breed input'}>
                    </input>
                    <select
                        value={this.state.owner_name}>
                        <option value="data base owner detail here">data base owner name</option>
                        <option value="data base owner detail here">data base owner name</option>
                        <option value="data base owner detail here">data base owner name</option>
                        <option value="data base owner detail here">data base owner name</option>
                    </select>
                    <button
                        type='submit'
                        value="add new pet button"
                            >Submit</button>
                </form>
                <center>
                    <table>
                        <tbody>
                            <tr>
                                <td>Owner</td>
                                <td>Pet</td>
                                <td>Breed</td>
                                <td>Color</td>
                                <td>Checked In</td>
                                <td>Actions</td>
                            </tr>
                        </tbody>
                    </table>
                </center>
            </>
        )
    }
}

export default Dashboard;