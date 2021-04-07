import React, { Component } from 'react'
import AuthOptions from '../../components/Auth/AuthOptions';
import RegisterForm from '../../components/Auth/RegisterForm';
import LoginForm from '../../components/Auth/LoginForm';
import BackgroundApp from '../../assets/jpg/background-auth.jpg';
import LogoNameWhite from '../../assets/png/logo-name-white.png';

import './Auth.scss';

export default class Auth extends Component {

    // const [selectedForm, setSelectedForm] = useState(null);
    state = {
        selectedForm: null
    }

    setSelectForm = (option) => {
        this.setState({
            selectedForm: option
        })
    }

    handlerForm = () => {
        console.log(this.state.selectedForm);
        switch (this.state.selectedForm) {
            case "login":
                return <LoginForm />;
            case "register":
                return <RegisterForm />;
            default:
                return <AuthOptions setSelectForm={this.setSelectForm} key="1" />;
        }
    }

    render() {
        return (
            <div className="auth" style={{ backgroundImage: `url(${ BackgroundApp })` }} >
                <div className="auth__dark" />
                <div className="auth__box">
                    <div className="auth__box-logo">
                        <img src={ LogoNameWhite } alt="Musicfy" />
                    </div>  
                    { this.handlerForm() }  
                </div> 
    
            </div>
        )
    }
}
