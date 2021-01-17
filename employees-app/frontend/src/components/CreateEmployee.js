import React, { Component } from 'react'
import EmployeesService from '../services/EmployeesService'
import ToastAlert from './ToastAlert'

export default class CreateEmployee extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',

            formTitle: '',
            displayAlertToast: false
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    componentDidMount(){
        // If id is negative then call createEmployee else call updateEmployee API call
        if (this.state.id === '_add'){
            this.setState({formTitle: 'Add Employee'});
            return
        } else{
            this.setState({formTitle: 'Update Employee'});
            EmployeesService.getEmployeeById(this.state.id).then(res => {
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName, 
                    lastName: employee.lastName, 
                    emailId: employee.emailId
                });
            })
        }
    }

    isInputEmpty(employee){
        if (employee.emailId === "" || employee.firstName === "" || employee.lastName === ""){
            return true;
        } else {
            return false;
        }
    }

    saveOrUpdateEmployee(e){
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};

        // If passed id in param equals _add then we should be calling create employee functionality
        // If the id is a number then we want to update the employee based on the passed existing id
        if (!this.isInputEmpty(employee)){
            this.setState({displayAlertToast: false})
            if (this.state.id === '_add'){
                // When employee had been created navigate to employees page
                EmployeesService.createEmployee(employee).then(res => {
                    this.props.history.push('/employees');
                })
            } else{
                EmployeesService.updateEmployee(employee, this.state.id).then(res => {
                    this.props.history.push('/employees');
                })
            }
        } else {
            this.setState({displayAlertToast: true})
        }
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
                {this.state.displayAlertToast ? <ToastAlert key={Math.random(1, 10000)} counter={0}/> : console.log("not displaying toast")}
                    <div className="row margin-top">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center margin-top">{this.state.formTitle}</h2>
                            <div className="card-body">
                                <form>
                                   <div className="form-group">
                                       <label>First Name:</label>
                                       <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} 
                                       onChange={this.changeFirstNameHandler} required></input>
                                   </div>
                                   <div className="form-group">
                                       <label>Last Name:</label>
                                       <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} 
                                       onChange={this.changeLastNameHandler} required></input>
                                   </div>
                                   <div className="form-group">
                                       <label>Email Id:</label>
                                       <input placeholder="Email" name="email" className="form-control" value={this.state.emailId} 
                                       onChange={this.changeEmailHandler} required></input>
                                   </div>

                                   <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
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
