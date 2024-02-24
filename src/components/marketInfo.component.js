// src/components/Information.js
import React, { Component } from 'react';
import differentBanks from '../different-banks.jpeg'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import kotakImage from '../kotak-image.png'
import sbiImage from '../sbi.jpg'
import canaraImage from '../canara-bank.jpg'
class MarketInfo extends Component {
    render() {
        return (
            <div className="content-inner d-flex flex-column black">
                <h2>Various Indian Bankers</h2>
                <div></div>
                <div className='d-flex flex-row'>
                    <div className=''>
                        <Card style={{ width: '30rem' }} >
                            <Card.Img variant="top" src={kotakImage} style={{ height: '400px' }} />
                            <Card.Body>
                                <Card.Title>Kotak Mahindra Bank</Card.Title>
                                <Card.Text>
                                    <div><strong>Personal Loan</strong> - Starting at 10.99% per annum</div>
                                    <div><strong>Home Loan</strong>-
                                        8.70% onwards</div>
                                    <div>
                                        <strong>Car Loan</strong>- 7.70% p.a. to 25% p.a
                                    </div>
                                </Card.Text>
                                <Card.Link href="https://www.kotak.com/en/personal-banking/loans/home-loan/home-loan-for-women.html" target='_blank'>Learn More..</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='mt-5'>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={sbiImage} style={{ height: '400px' }} />
                            <Card.Body>
                                <Card.Title>State Bank Of India</Card.Title>
                                <Card.Text>
                                    <div><strong>Personal Loan</strong> - 11.15% - 12.65%</div>
                                    <div><strong>Home Loan</strong>-
                                        9.15% onwards   </div>
                                    <div>
                                        <strong>Car Loan</strong>-  8.75% to 9.45%
                                    </div>
                                </Card.Text>
                                <Card.Link href="https://sbi.co.in/web/interest-rates/interest-rates/loan-schemes-interest-rates/home-loans-interest-rates-currentl" target='_blank'>Learn More..</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '30rem' }} >
                            <Card.Img variant="top" src={canaraImage} style={{ height: '400px' }} />
                            <Card.Body>
                                <Card.Title>Canara Bank</Card.Title>
                                <Card.Text>
                                    <div><strong>Personal Loan</strong> - Starting at 12.05% per annum</div>
                                    <div><strong>Home Loan</strong>-
                                        8.40 % to 11.75 %</div>
                                    <div>
                                        <strong>Car Loan</strong>- 8.70 % to 16.25 %
                                    </div>
                                </Card.Text>
                                <Card.Link href="https://canarabank.com/housing-loan" target='_blank'>Learn More..</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default MarketInfo;
