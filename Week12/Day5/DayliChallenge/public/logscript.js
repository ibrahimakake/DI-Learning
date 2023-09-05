//----------------Login Form-----------------//
function handeleLoginForm(){
    //const loginForm = document.getElementById('LoginForm');
    const login = document.getElementById('login')
​
    const ids = ['username', 'password']
    const inputs = ids.map((id) => document.getElementById(id))
​
    function checkfilds(){
        inputs.forEach((inp) => {
            inp?.addEventListener('input', isChanged)
        })
        function isChanged(e){
            e.preventDefault();
            if(isEnyInputEmpty()){
                login.disabled = true;
            }else{
                login.disabled = false;
            }  
        }
        function isEnyInputEmpty(){
                return inputs.some((inp) => inp.value === "")  //true or false
        }
    }
    checkfilds();
​
    function sendData(){
        const loginData = [];
        login.addEventListener('click', (e) => {
            e.preventDefault();
            inputs.forEach((inp) => {
                loginData.push(inp.value)
            })
            const obj ={...loginData}
​
            const bodyData = {
                user : obj[0],
                pass : obj[1]
            }
            console.log(bodyData)
​
            function fetchData(){
                fetch('/login', {
                    method: 'POST',
                    headers: { 'Content-Type':'application/json'},
                    body: JSON.stringify(bodyData)
                })
                .then(res =>  res.json())
                .then((data) => {
                    console.log(data)
                    document.getElementById('showLogin').textContent = `${data.message}` ;
                })
                .catch(err => console.log(err))
            }
            fetchData();
        })
    }
    sendData();   
}
handeleLoginForm();