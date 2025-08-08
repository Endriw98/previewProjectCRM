import './css/App.css';
import './css/RegisterUser.css';
import './css/Login.css';
import RecoverPassword from './pags/RecoverPassword';
import Start from './info/Start';
import Login from './pags/Login';
import RegisterUser from './pags/RegisterUser';
import './css/ActionsStyle.css';
import React, { useState, useEffect } from 'react';

function App(){
  
  const [stage, setStage] = useState('login');
  const [inputValue, setInputValue] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [info, setInfo] = useState(
    <Login 
    inputValue={inputValue} 
    setInputValue={setInputValue} 
    passwordInput={passwordInput} 
    setPasswordInput={setPasswordInput} 
  />
  );
  

  useEffect(() => {
    let loggedIn = false;
    
    for (var j = 0; j<users[0].length;j++){
      if (inputValue === users[0][j] && passwordInput === users[1][j]) {
          setInfo(<Start name= {c_users[0][j+1]} />);
          alert('Bem vindo, '+ c_users[0][j+1] +' !');
          loggedIn = true;
          break;
      }  
    }
    if (!loggedIn) {
      setInfo(
        <Login 
          inputValue={inputValue} 
          setInputValue={setInputValue} 
          passwordInput={passwordInput} 
          setPasswordInput={setPasswordInput} 
          onClickRULogin={onClickRULogin}
          onClickRVLogin={onClickRVLogin}
        />
      );
    }
  }, [inputValue, passwordInput, users]);

  const onClickSubmitRU = ()=>{
    //Criar a lógica de Cadastro
    alert('Usuário Cadastrado.');
    setStage('login');
  };
  const onClickReturnRU = () =>{
    setStage('login')
  }
  const onClickRULogin = () =>{
    setStage('register');
  }
  const onClickRVLogin = ()=>{
    setStage('recovery');
  }
  const onClickSubmitRV = ()=>{
    setStage('login');
  }

  const renderContent = ()=>{
    switch (stage) {
      case 'login':
        return info;
        
      case 'register':
        return (
            <RegisterUser 
              onClickSubmitRU={onClickSubmitRU}
              onClickReturnRU={onClickReturnRU}
            />
        );
      case 'recovery':
        return (
          <div>
            <RecoverPassword onClickSubmitRV={onClickSubmitRV}/>
          </div>
        );
      
       
    }
  }
  return(
    <div id='app'>
      {renderContent()}
    </div>
  )

}

export default App;
