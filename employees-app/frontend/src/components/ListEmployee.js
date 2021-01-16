import React, { Component } from 'react'
import EmployeesService from '../services/EmployeesService'

export default class ListEmployee extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees: []
        }
    }

    componentDidMount(){
        // Fetch employees and save to employees array
        EmployeesService.getEmployees().then((res) => {
            this.setState({ employees: res.data })
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
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
                                            <td></td>
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
