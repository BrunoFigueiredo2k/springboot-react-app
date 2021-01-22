import React, { Component } from 'react'

export default class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            login: true
        }
    }

    componentDidMount(){
        if (window.location.href.includes('signup')){
            this.setState({
                title: 'Sign up',
                login: false
            })
        } else if (window.location.href.includes('login')){
            this.setState({
                title: 'Login',
                login: true
            })
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row margin-top">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center margin-top">{this.state.title}</h2>
                            <div className="card-body">
                                <form>
                                   <div className="form-group">
                                       <label>Email:</label>
                                       <input placeholder="First Name" name="firstName" type="email" className="form-control" value={this.state.firstName} 
                                       onChange={this.changeEmailHandler} required></input>
                                   </div>
                                   <div className="form-group">
                                       <label>Password:</label>
                                       <input placeholder="Last Name" name="lastName" type="password" className="form-control" value={this.state.lastName} 
                                       onChange={this.changePasswordHandler} required></input>
                                   </div>

                                   <button className="btn btn-primary" style={{width: '100%'}} onClick={this.saveOrUpdateEmployee}>Log in</button><br/><br/>
                                </form>

                                <div className="text-center">
                                   {this.state.login ?
                                    <div>
                                        <p>No account yet?</p>
                                        <button className="btn btn-link" onClick={() => this.props.history.push('/signup')}>Sign up</button> 
                                    </div>
                                   : <div>
                                        <p>Already have an account?</p>
                                        <button className="btn btn-link" onClick={() => this.props.history.push('/login')}>Log in</button> 
                                    </div>
                                    }
                                        
                                   </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        )
    }
}
