;import { useState, useCallback, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Password , setPassword] = useState(' ')
  const [length, setLength] = useState(10)
  const [NumAllowed , setNum] = useState(false)
  const [SymbolsAllOwed , setSym] = useState(false)


  const getPassword = useCallback(() => {
    let pass = '';
    let string = 'ABCDEFGHIJKLMNOPQRTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const num = '1234567890';
    const symbols = '~`!@#$%^&*|';
  
    if (NumAllowed) string += num;
    if (SymbolsAllOwed) string += symbols;
  
    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * string.length);
      pass += string[randomIndex];
    }
  
    setPassword(pass);
  }, [length, NumAllowed, SymbolsAllOwed, setPassword]);

useEffect(()=>{getPassword()},[length,NumAllowed,SymbolsAllOwed])

  return (
    <>
      <div className='container'> 
        <h1>Password Generator</h1>
        <div className='box'>

          <div className='input'>
      <input type="text" value={Password} />
      <button onClick={getPassword}>Copy</button>
          </div>

          <div className='condition'>
                <div className='range'> <input type="range" name="" id="" min={6} max={16} value={length} onChange={(e)=>{setLength(e.target.value)}}/><span>Length is :{length}</span></div>
                <div className='checkBox'>
                <span>Number</span><input type="checkbox" name="Number" id="" onChange={()=>{setNum((prev)=>!prev)}}/>
                <span>Symbols</span><input type="checkbox" name="Symbols" id="" onChange={()=>{setSym((prev)=>!prev)}}/>
                </div>
          </div>
 
                
        </div>

      </div>
    </>
  )
}

export default App
