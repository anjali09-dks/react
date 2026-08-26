import React, {useContext} from 'react'
import usercontext from '../context/usercontext'
function Profile() {

     const {user} = useContext(usercontext)
    
    if(!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
