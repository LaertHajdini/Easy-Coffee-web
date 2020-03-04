import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { sha256 } from 'js-sha256'

import Input from './Input'
import { Background, Close, Container, ButtonWraper, Button} from '../styles/UserStyles'
import { UpdateLoginEmail, UpdateLoginPassword, UpdateRegisterEmail, UpdateRegisterPassword } from '../redux/actions/UserData'
import { AddError, DeleteError, ClearErrorList } from '../redux/actions/Error'
import Resource from '../static/Resources'

const handleSubmit = (event, register, userData, dispatch) => {
    event.preventDefault()
    const data = new FormData()
    let valid = false
    if (register) {
        dispatch(DeleteError(11))
        userData.register.password.length >= 8 && userData.register.password.length <= 20 ? valid = true : dispatch(AddError('Register', 'Password must be 8 - 20 characters long', 10))
    } else {
        dispatch(DeleteError(10))
        userData.login.password.length >= 8 && userData.login.password.length <= 20 ? valid = true : dispatch(AddError('Login', 'Please enter a valid password', 11))
    }
    if (valid) {
        if (register) {
            data.append('email', userData.register.email)
            data.append('password', sha256(userData.register.password))
        } else {
            data.append('email', userData.login.email)
            data.append('password', sha256(userData.login.password))
        }
    }
    if (register) {
        axios.post(`${Resource.Api}/register`, data).then(response => {
            switch (response.status) {
                case 200:
                    dispatch(ClearErrorList())
                    dispatch(AddError('Register', 'Confirm email and then login', 200))
                    break
                case 201:
                    dispatch(ClearErrorList())
                    dispatch(AddError('Register', 'Account already exists', 201))
                    break
                case 300:
                    dispatch(ClearErrorList())
                    dispatch(AddError('Server', 'There is a problem with the server please try again later', 300))
                    break
                default:
                    dispatch(ClearErrorList())
                    dispatch(AddError('Server', 'Server is donw please try again after a few minutes', 404))
                    break
            }
        })
    }
}

export default function User(props) {
    const [fliped, setFliped] = useState(false);
    const [selected, setSelected] = useState('login')
    const userData = useSelector(state => state.UserData)
    const dispatch = useDispatch()
    const loginEmailInput = <Input get={useSelector(state => state.UserData.login.email)} set={(email) => dispatch(UpdateLoginEmail(email))} name='Email' placeholder='Email' type='email' />
    const loginPasswordInput= <Input get={useSelector(state => state.UserData.login.password)} set={(password) => dispatch(UpdateLoginPassword(password))} name='Password' placeholder='Password' type='password' />
    const registerEmailInput = <Input get={useSelector(state => state.UserData.register.email)} set={(email) => dispatch(UpdateRegisterEmail(email))} name='Email' placeholder='Email' type='email' />
    const registerPasswordInput = <Input get={useSelector(state => state.UserData.register.password)} set={(password) => dispatch(UpdateRegisterPassword(password))} name='Password' placeholder='Password' type='password' />
    useEffect(() => {
        fliped ? setSelected('register') : setSelected('login')
    }, [fliped])
    return (
        <Background>
            <Close onClick={() => props.close()}><i className='fas fa-times'></i></Close>
            <Container fliped={fliped}>
                <ButtonWraper>
                    <Button name='login' selected={selected} onClick={() => setFliped(false)}>Login</Button>
                    <Button name='register' selected={selected} onClick={() => setFliped(true)}>Register</Button>
                </ButtonWraper>
                <form onSubmit={(event) => handleSubmit(event, fliped, userData, dispatch)}>
                    {
                        fliped ?
                            <div>
                                {registerEmailInput}
                                {registerPasswordInput}
                            </div>
                            :
                            <div>
                                {loginEmailInput}
                                {loginPasswordInput}
                            </div>
                    }
                    <ButtonWraper>
                        <Button type='submit'>Submit</Button>
                    </ButtonWraper>
                </form>
            </Container>
        </Background>
    )
}
