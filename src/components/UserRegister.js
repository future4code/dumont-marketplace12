import React from 'react';
import '../styles/register.css';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/InputBase';
import logo from '../assets/logo.svg';


const ButtonRegister = styled(Button)({

    background: '#20B2AA',
    borderRadius: '17px',
    color: 'white',
    padding: '11px',
    marginTop: '20px',
});

const FormInput = styled(Input)({

    fontFamily: 'Arial',
    border: '1px solid black',
    borderRadius: '20px',
    fontSize: '13px',
    paddingTop: '10px',
    paddingLeft: '20px',
    paddingRight: '90px',
    paddingBottom: '10px',
})

export default class UserRegister extends React.Component {
    state = {
        nameValue: "",
        emailValue: ""
    }
    OnChangeNameValue = (event) => {
        this.setState({ nameValue: event.target.value })
    }
    OnChangeEmailValue = (event) => {
        this.setState({ emailValue: event.target.value })
    }
    OnClickRegister = (event) => {
        if (this.state.nameValue && this.state.emailValue)
            alert("Usuário cadastrado com sucesso!")
        else {
            alert("Putz, algo de errado não está certo. Corrija o nome ou/o email inserido.")
        }
    }

    render() {
        return <div className='ContainerRegister'>
            <img className='Logo' onClick={this.props.onClickLogo} src={logo} />
            <h2 className='Title'>Cadastre-se</h2>
            <FormInput
                placeholder="Nome"
                onChange={this.OnChangeNameValue} />
            <FormInput
                placeholder="Email"
                onChange={this.OnChangeEmailValue} />
            <ButtonRegister className="Button"
                onClick={this.OnClickRegister}>Cadastrar</ButtonRegister>
        </div>
    }
}
