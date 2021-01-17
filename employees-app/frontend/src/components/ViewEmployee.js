import React, { Component } from 'react'
import EmployeesService from '../services/EmployeesService';

export default class ViewEmployee extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
        }

        this.editEmployee = this.editEmployee.bind(this);
    }

    componentDidMount(){
        EmployeesService.getEmployeeById(this.state.id).then(res => {
            let employee = res.data;
            this.setState({
                firstName: employee.firstName, 
                lastName: employee.lastName, 
                emailId: employee.emailId
            });
        })
    }

    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row margin-top">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center margin-top">Employee details</h2>
                            <div className="card-body">
                                <div className="form-group">
                                    <p>First name: {this.state.firstName}</p>
                                </div>
                                <div className="form-group">
                                    <p>Last name: {this.state.lastName}</p>
                                </div>
                                <div className="form-group">
                                    <p>Email: {this.state.emailId}</p>
                                </div>
                                <div><button className="btn btn-info" onClick={() => this.editEmployee(this.state.id)}>Edit</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
