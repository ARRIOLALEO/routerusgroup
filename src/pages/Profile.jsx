import { useEffect } from 'react'
import React from 'react'
import {useHistory,Switch,Route,Link,useRouteMatch} from 'react-router-dom'
import EditProfile from './EditProfile'
import Payments from './Payments'

const Profile = ({isUserLog}) => {
    
    const {url,path} = useRouteMatch()

    const history = useHistory()

    useEffect(()=>{

        if(!isUserLog){
            history.push('/')
        }

    },[isUserLog,history])
  

  return (
      <>
    {isUserLog?(<><h1>Profile</h1>
    <ul>
        <li><Link to={`${url}/EditProfile`}>Edit Profile</Link></li>
        <li><Link to={`${url}/Payments`}>Payments</Link></li>
    </ul>
    </>):(<h1>you not have auth</h1>)}
    <Switch>
        <Route path={`${path}/EditProfile`} component={EditProfile}/>
        <Route path={`${path}/Payments`} component={Payments}/>
    </Switch>
    </>
  )
}

export default Profile