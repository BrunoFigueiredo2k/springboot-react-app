import React, { Component } from 'react'
import EmployeesService from '../services/EmployeesService';

export default class CreateEmployee extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee(e){
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee' + JSON.stringify(employee));

        // When employee had been created navigate to employees page
        EmployeesService.createEmployee(employee).then(res => {
            this.props.history.push('/employees');
        })
    }

    changeFirstNameHandler(event){
        this.setState({firstName: event.target.value})
    }

    changeLastNameHandler(event){
        this.setState({lastName: event.target.value})
    }

    changeEmailHandler(event){
        this.setState({emailId: event.target.value})
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row margin-top">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center margin-top">Add Employee</h2>
                            <div className="card-body">
                                <form>
                                   <div className="form-group">
                                       <label>First Name:</label>
                                       <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} 
                                       onChange={this.changeFirstNameHandler}></input>
                                   </div>
                                   <div className="form-group">
                                       <label>Last Name:</label>
                                       <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} 
                                       onChange={this.changeLastNameHandler}></input>
                                   </div>
                                   <div className="form-group">
                                       <label>Email Id:</label>
                                       <input placeholder="Email" name="email" className="form-control" value={this.state.emailId} 
                                       onChange={this.changeEmailHandler}></input>
                                   </div>

                                   <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                   <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: '10px'}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
