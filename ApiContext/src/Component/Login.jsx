import { useContext, useState } from 'react';
import UserContext from '../Context/UserContext';
import "../App.css";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser , setPass } = useContext(UserContext);
    

    const handleClick = () => {
        setUser(username);
        setPass(password)
      
    };

    return (
        <div className='container'>
            <div className='box'>
                <h1>Login</h1>
                <label htmlFor="text">Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleClick}>Submit</button>
            </div>
        </div>
    );
}

export default Login;
