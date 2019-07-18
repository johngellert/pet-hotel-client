import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class OwnerPage extends Component() {

    state = {
        owner_name: '',

    }

    handleNameChange = (event) => {
        this.setState({
            owner_name: event.target.value,
        });
    }

    handleSubmitClick = () => {
        // this.props.dispatch({type: 'POST_PET_OWNER', payload: this.state.owner_name});
        console.log('click');
    }

    render() {

        return (
            <div>
                <TextField required defaultValue={this.state.owner_name} onChange={this.handleNameChange}></TextField>
                <Button onClick={this.handleSubmitClick}>Submit</Button>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </div>

        );
    }
}

export default OwnerPage;
