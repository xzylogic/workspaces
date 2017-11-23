import React from 'react'
import './header.less'

let Header=React.createClass({
    render(){
        return (
            <div className="components-header row">
                <img src="/static/images/logo.png" alt="logo" width="40" className="-col-auto"/>
                <h1 className="caption">React Music Player</h1>
            </div>
        )
    }
});

export default Header;