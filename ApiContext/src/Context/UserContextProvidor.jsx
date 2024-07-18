import { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
   const [user,setUser] = useState(null);
   const [Password, setPass] = useState(null)

    return (
        <UserContext.Provider value={{ user,Password,setPass, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
