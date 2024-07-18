import { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
    const { user , Password} = useContext(UserContext);

 if(!user){
    return(
        <div>
            <span>Please Login</span>
        </div>
    )
 }
 else{
    return(
        <div>
            <span>Your Username: {user}</span><br />
            <span>Your Password: {Password}</span>
        </div>
    )
 }
}

export default Profile;
