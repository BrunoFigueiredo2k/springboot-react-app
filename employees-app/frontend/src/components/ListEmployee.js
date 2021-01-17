import React, { Component } from 'react'
import EmployeesService from '../services/EmployeesService'

export default class ListEmployee extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount(){
        // Fetch employees and save to employees array
        EmployeesService.getEmployees().then((res) => {
            this.setState({ employees: res.data })
        })
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    deleteEmployee(id){
        EmployeesService.deleteEmployee(id).then(res => {
            this.setState({
                employees: this.state.employees.filter(employee => employee.id !== id)
            })
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center margin-top">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(employee => {
                                    return (
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                            <td>
                                                <button className="btn btn-info" onClick={() => this.editEmployee(employee.id)}>Update</button>
                                                <button className="btn btn-danger" onClick={() => this.deleteEmployee(employee.id)} style={{marginLeft: '10px'}}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
