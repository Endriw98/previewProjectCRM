import React from "react";



function Login({inputValue, setInputValue, passwordInput, setPasswordInput,onClickRULogin, onClickRVLogin}){
    
    const handleChange = (event)=>{setInputValue(event.target.value)};
    const handleSubmit = (event)=>{event.preventDefault(); alert('Nome e senha inválidos!')};
    const handleChangePass = (event)=>{setPasswordInput(event.target.value)};
    
    return (
        
        <div id="login">
            <div id="logo-enterprise"></div>
            <div id="data-login">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type='email' onChange={handleChange} value={inputValue} id='userName' placeholder="UserName"/>
                    <input onChange={handleChangePass} value={passwordInput} type="password" placeholder="Password"/>
                    <button type="submit" id="validate-login" >Next</button>
                    

                </form>
                <button id="register-user" onClick={onClickRULogin} >Register</button>
                
                <a onClick={onClickRVLogin}>I forgot the password</a>
            </div>
            <script src='src/js/process.js'></script>
        </div>
    )
}

export default Login

