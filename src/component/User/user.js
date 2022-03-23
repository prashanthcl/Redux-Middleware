import React, { useEffect } from 'react'
import {getUserDetails} from '../Redux/Actions/index'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
function Users(props){

    useEffect(()=>{
       props.getUserDetails()
    },[])

    const {users} = props
    return(
        <>
        <Link to="/">
        <nav>Home</nav>
        </Link>
      
        <h1>User Details...</h1>

        <ul>
            {
           users!==undefined && users.map((user)=>{
                    return <li key={user.id}>{user.name}</li>
                })
            }
        </ul>
        </>
    )
}
const mapStateToProps = state=>{
    return{
        users:state.users.data
    }
}
export default connect (mapStateToProps,{getUserDetails})(Users)