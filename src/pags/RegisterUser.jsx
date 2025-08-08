import React, { useState, useEffect } from 'react';
import ExcelExport from '../info/ExcelExport';

function RegisterUser({ onClickSubmitRU, onClickReturnRU }) {
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputCpf, setInputCpf] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [inputTel, setInputTel] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    
    const [userData, setUserData] = useState({ name: "", email: "", senha: "" });
    const [storedData, setStoredData] = useState(null);

    const saveData = () => {
        localStorage.setItem("userData", JSON.stringify(userData));
    };

    const loadData = () => {
        const data = localStorage.getItem("userData");
        if (data) {
            setStoredData(JSON.parse(data));
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleInputchangeName = (event) => {
        const value = event.target.value;
        setInputName(value);
        setUserData({ ...userData, name: value });
    };

    const handleInputchangeEmail = (event) => {
        const value = event.target.value;
        setInputEmail(value);
        setUserData({ ...userData, email: value });
    };

    const handleInputchangeCpf = (event) => {
        const value = event.target.value;
        setInputCpf(value);
    };

    const handleInputchangeDate = (event) => {
        const value = event.target.value;
        setInputDate(value);
    };

    const handleInputchangeTel = (event) => {
        const value = event.target.value;
        setInputTel(value);
    };

    const handleInputchangePassword = (event) => {
        const value = event.target.value;
        setInputPassword(value);
        setUserData({ ...userData, senha: value });
    };

    return (
        <div id="r-user">
            <div className="r-info">
                <div id="iconEnterprise"></div>
                <h1>Registrar Usuário</h1>
                <form id="new-users">
                    <div id="r-infoPartA" className='r-subInfo'>
                        <input type="text" value={inputName} onChange={handleInputchangeName} id="name" placeholder="Nome Completo" />
                        <h3>Selecione o setor</h3>
                        <label id='lb1'>Marketing <input type="radio" id="setor" name="setor" value="Marketing" /></label>
                        <label>Financeiro <input type="radio" id="setor" name="setor" value="Financeiro" /></label>
                        <label>Administrativo <input type="radio" id="setor" name="setor" value="Administrativo" /></label>
                        <input value={inputEmail} onChange={handleInputchangeEmail} id="email" type="email" placeholder="E-mail" />
                        <input value={inputCpf} onChange={handleInputchangeCpf} id="cpf" type="text" placeholder="CPF" />
                    </div>
                    <div id="r-infoPartB" style={{ marginLeft: '10px', marginTop: '-16px' }} className='r-subInfo'>
                        <h2>Data de Nascimento</h2>
                        <input value={inputDate} onChange={handleInputchangeDate} id="date" type="date" placeholder="Data de Nascimento" style={{ color: '#05153baa' }} />
                        <input value={inputTel} onChange={handleInputchangeTel} id="tel" type="text" placeholder="Telefone" />
                        <input
                            value={inputPassword} 
                            onChange={handleInputchangePassword} 
                            id="password" 
                            type="password" 
                            placeholder="Crie uma Senha" 
                        />
                        <input 
                            type="password" 
                            placeholder="Confirme a Senha" 
                        />
                        <button>
                            <ExcelExport 
                                name={inputName} 
                                email={inputEmail} 
                                cpf={inputCpf} 
                                date={inputDate} 
                                tel={inputTel} 
                            />
                        </button>
                        <button id='rt' onClick={onClickReturnRU}>Return</button>
                        <button onClick={saveData}>Save</button>
                    </div>
                </form>
            </div>
            {storedData && (
                <div>
                    <h2>Dados Armazenados</h2>
                    <p>Nome: {storedData.name}</p>
                    <p>Email: {storedData.email}</p>
                    <p>Senha: {storedData.senha}</p>
                </div>
            )}
        </div>
    );
}

export default RegisterUser;
