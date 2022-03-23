import React from 'react';
import '../component/Dashboard/dashboard.css';
import {history} from '../history'
function CommonHeader(props){
    // const goHome = ()=>{
    //     console.log("props",props)
    //     console.log('history',history)
    // history.push('/')
    // }
    return(
        <>
         <header className="header">
          <button className="header__search" onClick={()=>history.push('/')}><i className='fas fa-house-user' ></i></button>
          <div className="header__avatar">Your face</div>
        </header>
        </>
    )
}
export default CommonHeader