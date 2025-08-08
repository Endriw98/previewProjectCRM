
const c_users = [
    ["Nome:","Endriw Luka Santana Santos","Maria Santos","Michael dos Santos Silva"],
    ['CPF:'],
    ['Data de Nascimento:'],
    ['E-mail:'],
    ['Telefone:']
];
const users = [
    ['endriw@outlook.com','Maria Santos','michaelsilvasantos20@gmail.com'],
    ['12345678','87654321','12345678']
];





function addUsers(){
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const tel = document.getElementById('tel').value;
    const password = document.getElementById('password').value;
    
    if ((name,cpf,email,date,tel,password)!== '' ){
        c_users[0].push(name);
        c_users[1].push(cpf);
        c_users[2].push(date);
        c_users[3].push(email);
        c_users[4].push(tel);
        users[0].push(name);
        users[1].push(password);
        
        alert(users);
        clearform();
    }else{
        alert('Por favor, preencha os campos corretamente!');
    }
}
function clearform(){
    document.getElementById('new_users').reset();
}
/*
const input = document.querySelector('input');
const style = document.createElement('style');

input.addEventListener('click', () => {
  style.textContent = 'input::placeholder { color: rgba(0, 0, 0, 0); }';
  document.head.appendChild(style);
});*/
/*const input = document.querySelector('input');
        if (input) {
            const style = document.createElement('style');
            
            input.addEventListener('click', () => {
                style.textContent = 'input::placeholder { color: rgba(0, 0, 0, 0); }';
                document.head.appendChild(style);
            });
        } else {
            console.error('Elemento input não encontrado.');
        }

*/

var on=0;
    document.getElementById('report').addEventListener('click',()=>{
        
            if(on == 0){
              document.getElementById('report').style.borderColor='#0ca0c1';
              document.getElementById('report').style.color='#0ca0c1';
              on=1;
            }else{
              document.getElementById('report').style.borderColor='#ffffffff';
              document.getElementById('report').style.color='#ffffffff';
              on=0;
            }});
