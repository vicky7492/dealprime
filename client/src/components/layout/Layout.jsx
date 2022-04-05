import './layout.css'

import { Provider as AlertProvider, positions, transitions } from 'react-alert'
import { BrowserRouter, Route } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AlertTemplate from 'react-alert-template-basic'
import Login from '../../pages/login'
import Register from '../../pages/register'
import Routes from '../Routes'
import Sidebar from '../sidebar/Sidebar'
import ThemeAction from '../../redux/actions/ThemeAction'
import TopNav from '../topnav/TopNav';

const options = {
    // you can also just use 'bottom center'
    position: positions.MIDDLE,
    timeout: 3000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }


const Layout = () => {

    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    const [state, setstate] = useState(false);
    const [Registered, setRegister] = useState(false);

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            setstate(true);
        }

    },[])
    return (
        <AlertProvider template={AlertTemplate}  {...options}>
        <BrowserRouter>

            <Route render={(props) => (
                <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    {
            state? 
            !Registered?
            <Login state={state} setstate={setstate} setRegister={setRegister} />
            :<Register setRegister={setRegister} />
            :
            <div>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <TopNav/>
                        <div className="layout__content-main">
                            <Routes />
                        </div>
                    </div>

            </div>

                    }
                </div>
            )}/>
        
        </BrowserRouter>
        </AlertProvider>
    )
}

export default Layout;
