import React, { Component } from 'react';

class FormDataComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            no_of_dependents: '',
            education: '',
            self_employed: '',
            income_annum: '',
            loan_amount: '',
            loan_term: '',
            cibil_score: '',
            residential_assets_value: '',
            commercial_assets_value: '',
            luxury_assets_value: '',
            bank_asset_value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        // Here you would usually send the data to a server or handle it as required
    }

    render() {
        return (
            <div className="auth-wrapper">

                <form className="auth-inner" onSubmit={this.handleSubmit}>
                    <h2>Please Kindly Fill out this form</h2>
                    {Object.keys(this.state).map((key) => (
                        <div key={key}>
                            <label>
                                {key.replace(/_/g, ' ')}:
                                <input
                                    type="text"
                                    name={key}
                                    value={this.state[key]}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                    ))}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default FormDataComponent;
