import React, { Component} from 'react';
import { Button } from 'semantic-ui-react';
import './AuthOption.scss';

export default class AuthOptions extends Component {

    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
    }

    
    render() {
        const { setSelectForm } = this.props;
        return (
            <div className="auth-options"  >
                <h2>Millones de canciones, gratis en Musicfy </h2>
                <Button ref={this.wrapper} onClick={() => setSelectForm("register")}> Registrate gratis </Button>
                <Button className="login" ref={this.wrapper} onClick={() => setSelectForm("login")}> Iniciar sesion </Button>
                {/* <button className="iu button register" onClick={() => setSelectForm("register")}> Registrate gratis </button>
                <button className="iu button login" onClick={() => setSelectForm("login")}> Iniciar sesion </button> */}
            </div>
        )
    }
}

