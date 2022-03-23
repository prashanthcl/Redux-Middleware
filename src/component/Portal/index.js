import React from 'react';
import ReactDom from 'react-dom';

function PortalComponent(){
    const ele = <div><h2>Welcome to CreatePortal Component</h2></div>
    return ReactDom.createPortal(ele,document.getElementById('portalroot'))
}

export default PortalComponent;