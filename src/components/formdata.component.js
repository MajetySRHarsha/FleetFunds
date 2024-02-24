import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import allBank from '../allbanks.jpg'


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

        const payload = {
            ...this.state,
            education: this.state.education === "Graduate" ? "0" : "1",
            self_employed: this.state.self_employed === "Yes" ? "1" : "0",
        };
        fetch('http://localhost:5000/risk-status', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                console.log(data.trim());
                if (data.trim() == "Approved") {
                    toast.success("Your loan will get approved")
                }
                else {
                    toast("Chances of loan approval is too low")
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        console.log(this.state);
        // Here you would usually send the data to a server or handle it as required
    }

    render() {
        const educationOptions = ['Graduate', 'Not Graduate'];
        const noOfDependentsOptions = ['0', '1', '2', '3', '4', '5'];
        const selfEmployedOptions = ['Yes', 'No'];

        const inputStyle = {
            marginTop: '5px',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            background: '#f9f9f9',
            fontSize: '14px',
            width: '100%', // Set a fixed width for all inputs
        };

        return (
            <div className="auth-wrapper" style={{ background: './bankloan-forms.png', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Arial, sans-serif' }}>
                <ToastContainer />
                <form onSubmit={this.handleSubmit} style={{ maxWidth: '600px', width: '100%', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', background: 'white' }}>
                    <h2 style={{ marginBottom: '20px', textAlign: 'center', fontSize: '36px' }}>Please Kindly Fill out this form</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                        <label style={{ marginBottom: '8px', color: '#555', fontSize: '14px', width: '100%' }}>
                            Education:
                            <select
                                name="education"
                                value={this.state.education}
                                onChange={this.handleChange}
                                style={inputStyle}
                            >
                                <option value="" disabled>Select Education</option>
                                {educationOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </label>
                    </div>

                    {Object.keys(this.state).map((key) => (
                        key !== 'education' && (
                            <div key={key} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
                                <label style={{ marginBottom: '8px', color: '#555', fontSize: '14px', width: '100%' }}>
                                    {key.replace(/_/g, ' ')}:
                                    {key === 'no_of_dependents' ? (
                                        <select
                                            name={key}
                                            value={this.state[key]}
                                            onChange={this.handleChange}
                                            style={inputStyle}
                                        >
                                            <option value="" disabled>Select Number of Dependents</option>
                                            {noOfDependentsOptions.map((option) => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    ) : key === 'self_employed' ? (
                                        <select
                                            name={key}
                                            value={this.state[key]}
                                            onChange={this.handleChange}
                                            style={inputStyle}
                                        >
                                            <option value="" disabled>Select Self Employed</option>
                                            {selfEmployedOptions.map((option) => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            type="text"
                                            name={key}
                                            value={this.state[key]}
                                            onChange={this.handleChange}
                                            style={inputStyle}
                                        />
                                    )}
                                </label>
                            </div>
                        )
                    ))}

                    <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '4px', background: '#2ecc71', color: 'white', cursor: 'pointer', border: 'none', fontSize: '16px' }}>Submit</button>
                </form>
            </div>
        );
    }
}

export default FormDataComponent;