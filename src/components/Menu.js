import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { Background, Panel, UserButton } from '../styles/MenuStyles'
import { Link } from 'react-scroll'
import User from './User'
import '../styles/static/Menu.css'

export default function Menu() {
    const [open, setOpen] = useState(true)
    const [active, setActive] = useState(true)
    const userStatus = useSelector(state => state.Login)
    const UserButtonStatus = userStatus ? <UserButton onClick={() => setActive(true)}><i className='fas fa-user'></i></UserButton> : <UserButton onClick={() => setActive(true)}><i className='far fa-user'></i></UserButton>
    if (!open) {
        window.onscroll = function() {
            setOpen(true)
        }
    } else {
        setTimeout(function() {
            setOpen(false)
        }, 2000)
    }
    return (
        <>
        <Background open={open}>
              <Panel>
                    <Link activeClass='active' to='home' spy={true} smooth={true} offset={0} duration= {500}>
                        Home
                    </Link>
                    <Link activeClass='active' to='order' spy={true} smooth={true} offset={0} duration= {500}>
                        Order
                    </Link>
                    <Link activeClass='active' to='plans' spy={true} smooth={true} offset={0} duration= {500}>
                        Plans
                    </Link>
                    <Link activeClass='active' to='info' spy={true} smooth={true} offset={0} duration= {500}>
                        Info
                    </Link>
                    {UserButtonStatus}              
              </Panel>
        </Background>
        {active ? <User close={() => setActive(false)} /> : null}
        </>
    )
}
