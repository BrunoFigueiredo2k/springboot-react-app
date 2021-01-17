import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{padding: '20px'}}>
                        <div>
                            <a href="/" style={{fontSize: '20px', fontWeight: '700', color: 'white'}}>Employee Management App</a>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
