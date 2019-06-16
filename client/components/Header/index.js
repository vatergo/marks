import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';

import Toggle from '../Toggle';

export default class Header extends React.Component {
    render() {
        return (
            <div className={'header header-' + this.props.theme}>
                <div className="container">
                    <Link className="logo" to="/marks">Marks</Link>
                    <Toggle themeСhange={this.props.themeСhange} theme={this.props.theme} />
                    {this.props.userId && <Link className="link exit" to="/marks" onClick={this.props.toOut} 
                    onMouseOver={() => document.querySelector('.exit').innerHTML='Выход'}
                    onMouseOut={() => document.querySelector('.exit').innerHTML=this.props.userName}>{this.props.userName}</Link>}
                    <a target="_blank" href="https://github.com/vatergo/extChrome">Расширение</a>
                </div>
            </div>
        )
    }
}