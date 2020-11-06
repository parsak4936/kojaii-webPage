import React from "react";

export class ff extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state);

        fetch('kojaii.herokuapp.com/api/join-us', {
            method: 'POST',

            body: JSON.stringify(this.state)
        }).then(function(response) {
            console.log(response)
            return response.json();
        });

        event.preventDefault();
    }



}

