import '../css/ForgotPass.css';
function RecoverPassword({onClickSubmitRV}){
    return(
        <div id="recover-pass">
            <div class='pass' id='logo'></div>
            <div class='pass' id='recover'>
                <h1>Recover Password</h1>
                <form>
                    <input id='fpass-email' placeholder='Informe o E-mail'/>
                    <input placeholder='Insira o código enviado'/>
                    <input placeholder='Digite a nova senha'/>
                    <button type="submit" onClickSubmitRV={onClickSubmitRV}>Next</button>
                </form>
            </div>
        </div>
    )
}
export default RecoverPassword;