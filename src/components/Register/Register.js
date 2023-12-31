import React from "react";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registerName: '',
            registerEmail: '',
            registerPassword: ''
        }
    }

    onRegisterNameChange = (e) => {
        this.setState({registerName: e.target.value})
    }
    onRegisterEmailChange = (e) => {
        this.setState({registerEmail: e.target.value})
    }
    onRegisterPasswordChange = (e) => {
        this.setState({registerPassword: e.target.value})
    }


    onSubmitRegister = () => {
        fetch('http://localhost:3001/register/',{
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name: this.state.registerName,
                email: this.state.registerEmail,
                password: this.state.registerPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id) {
                this.props.loadUser(user)
                this.props.onRouteChange('home')
            }
        })
    }

    render() {
        return (
            <div className="center">
                <div className="w-full max-w-xs">
                
                <form className="shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-3xl font-bold mb-1" >Register</h1>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" 
                        type="text" 
                        placeholder="Username"
                        onChange={this.onRegisterNameChange}
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Email
                    </label>
                    <input className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="email" 
                        type="email" 
                        placeholder="username@email.com"
                        onChange={this.onRegisterEmailChange}
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        type="password" 
                        placeholder="******************" 
                        onChange={this.onRegisterPasswordChange}
                    />
                    </div>
                    <div className="flex items-center justify-center">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                        onClick={this.onSubmitRegister}
                    >
                        Register
                    </button>
                    </div>
                </form>
                </div>
            </div>
    
        )
    }
}

export default Register;