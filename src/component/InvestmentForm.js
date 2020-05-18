import React, { Component } from 'react'
import DatePicker from 'react-date-picker'
import {GetFundList} from '../api/Api'
import {CalculateInvestment} from './CalculateInvestment'

export class InvestmentForm extends Component {
    constructor(){
        super();
        this.state={
            amount:0,
            fromDate: new Date(),
            toDate: new Date(),
            amountErr: "",
            fundList:"",
            investmentAmount:"-",
        }
    }
    onChange = e => {
        this.setState({ amount: e.target.value })
    }
    onFromDateUpdate = (fromDate) => {
        this.setState({fromDate})
    }
    onToDateUpdate = (toDate) => {
        this.setState({toDate})
    }
    swap = (input, index_A, index_B) => {
        let temp = input[index_A];
        input[index_A] = input[index_B];
        input[index_B] = temp;
        return input;
    }
    
    submitForm = (e) => {
        e.preventDefault();
        if(this.state.amount === 0)
            this.setState({amountErr: "Please enter amount you would like to Invest"})
        else {
            let fromDateFormate = this.swap(this.state.fromDate.toDateString().split(" ").splice(1), 0,1);
            let toDateFormate = this.swap(this.state.toDate.toDateString().split(" ").splice(1), 0,1);
            let params = {
                frmdt: fromDateFormate.join("-"),
                todt: toDateFormate.join("-"),
            }
            const CalInvestSync = CalculateInvestment(params, this.state.amount);
                this.setState({
                    investmentAmount: CalInvestSync,
                })
            
            //Reference method for calling up the API with parameter start
                /*const GetFundListSync = GetFundList(params);
                GetFundListSync.then((result) => this.setState({
                    fundList: result,
                    amountErr: ""
                }))*/
            //API call end
        }
    }
    

    render() {
        return (
            <>
            <h1>Invenstment Calculator</h1>
            <form onSubmit={this.submitForm}>
                <div className="form-group">
                    <label>Investment Amount (in Rs)</label>
                    <input className="form-control" type="number" name="amount" value={this.state.amount} onChange={this.onChange}/>
                    <span className="errorMsg">{this.state.amountErr}</span>
                </div>
                <div className="form-group">
                    <label>Select start date:</label>
                    <DatePicker className="form-date" onChange={this.onFromDateUpdate} name="fromDate" value={this.state.fromDate} minDate={new Date('4-01-2015')} />
                </div>
                <div className="form-group">
                    <label>Select end date :</label>
                    <DatePicker className="form-date" onChange={this.onToDateUpdate} value={this.state.toDate}/>
                </div>
                <input type="submit" value="Calculate" className="btn btn-primary"/>

                <div className="final-result">
                    <label>Invenstment Returns (in Rs)</label>
                    <div>{this.state.investmentAmount}</div>
                </div>
            </form>
            </>
        )
    }
}

export default InvestmentForm
