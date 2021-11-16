/* eslint-disable react/button-has-type */
import React from 'react';
import Ellipse from '../assets/Ellipse.png';
import Notify from '../assets/notification.png';
import style from '../stylesheets/dashboard.module.css';

const DashPage = () => {
    return (
        <>
             <div className = {style.mainPage}>
                    <div className = {style.top}>
                        <img src = {Ellipse} alt="" />
                        Hello, Wale Adenuga
                        <img src = {Notify} alt=""  className = {style.bell}/>
                    </div>
                    <hr/>

                    <div className = { style.grid}>
                        <div className = {style.next}>
                            <h3>Quick Loan</h3>
                            <hr/>
                            <p>Need urgent cash?</p>
                            <p>You are just one click away</p>
                            <div className = {style.btn}>
                                <button>Apply for loan</button>
                            </div>
                        </div>

                        <div className = {style.next}>
                            <h3>Loan Details</h3>
                            <hr/>
                            <div className = {style.amount}>
                                <p>Amount Taken</p>
                                <p>{"\u20A6"}00,000</p>
                                <p>Interest Accrued</p>
                                <p>{"\u20A6"}0,000</p>
                                <p>Total Refund Due</p>
                                <p>{"\u20A6"}0,000</p>
                                <p>Repayment Date</p>
                                <p>DD/MM/YYYY</p>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <div className = {style.mid}>
                        <h3>Quick Actions</h3>
                        <div className = { style.btns}>
                            <button className = {style.btn1}>
                                Repay Loan
                            </button>
                            <button className = { style.btn2}>
                                Build Credit Score
                            </button>
                            <button className = {style.btn3}>
                                Referral Earnings
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <div className = { style.recent}>
                        <h3>Recent Transactions</h3>
                        <p>You have not made any transaction yet. When you take a loan or make a repayment, the details of your transaction will appear here.</p>
                    </div>
                </div>
        </>
    )
}

export default DashPage
