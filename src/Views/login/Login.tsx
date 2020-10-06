import React from 'react';
import { Link } from 'react-router-dom';
import loginBg from './login-bg.jpg';

import { AppRoute } from 'Routing/AppRoute.enum';
import {FormControl, Input, InputLabel, TextField} from "@material-ui/core";

export const Login = () => {
  return (
    <>
        <div className="loginView">
            <div className="container">
                <div className="loginView__intro">
                    <div className="loginView__intro__background">
                        <img src={loginBg} alt="logo"/>
                    </div>
                </div>
                <div className="loginView__content">

                    <div className="loginView__logo">
                        <h1 className="heading heading--logo">
                            <Link className="heading__link" to={AppRoute.home}>join.tsh.io</Link>
                        </h1>
                    </div>
                    <div className="login">
                        <h1 className="heading">Login</h1>

                        <div className="login__form">
                            <div className="login__form__input">
                                <TextField
                                    id="standard-full-width"
                                    label="Username"
                                    placeholder="Enter username"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: { margin: -10, fontSize: 14 },
                                    }}
                                />
                            </div>
                            <div className="login__form__input">
                                <TextField
                                    id="standard-full-width"
                                    label="Password"
                                    placeholder="Enter password"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: { margin: -10, fontSize: 14 },
                                    }}
                                />
                            </div>
                            <a className="button button--solid button--blue button--xxl" href="#">Log in</a>
                        </div>

                        <a className="link link--m">Forgot password?</a>
                    </div>

                </div>
            </div>
        </div>
    </>
  );
};
