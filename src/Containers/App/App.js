import React, {useState, useEffect} from 'react';

import './App.css';
import 'tachyons';

import PasswordField from '../PasswordField/PasswordField';
import Options from '../../Components/Options/Options';
import Title from '../../Components/Title/Title';
import SecurityLevel from '../../Components/SecurityLevel/SecurityLevel';

import generator from '../../Functions/PasswordGenerator';

const App = () => {

  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(10);  
  const [passwordParams, setPasswordParams]= useState({Lowercase: true, Uppercase: true, Numbers: true, Symbols: true});  

  const passwordGenerator = generator();

  useEffect(() => {
    setPassword(passwordGenerator(passwordLength, passwordParams))
  }, [])

  const onPasswordChange = () => {
    setPassword(passwordGenerator(passwordLength, passwordParams))
  }

  const onCopyChange = () => {
    const text = document.getElementById('password').innerText;
    const elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);   
  }

  const onLengthChange = (e) => {
    const input = e.target.value;
    if(input > 50) {
      alert('max length is 50')
    } else if(input < 1) {
      setPassword(passwordGenerator(1, passwordParams))
    } else {
      setPassword(passwordGenerator(input, passwordParams))
      setPasswordLength(input)
    }
  } 

  const onCheckChange = (e) => {
    const name = e.target.name;
    passwordParams[name] = !passwordParams[name]
    console.log(passwordParams)
    setPassword(passwordGenerator(passwordLength, passwordParams))
  }
 
  return !password 
  ?
    <h1>Loading...</h1>
  :
    (
      <>
        <Title />
        <PasswordField
         password = {password}
         onCopy = {onCopyChange}
         onNewPassword = {onPasswordChange}
        >
          <SecurityLevel 
           password = {password}
          />    
        </PasswordField>
        <Options 
          lengthChange = {onLengthChange}
          onCheck = {onCheckChange}
        />
      </>
    );
}

export default App;