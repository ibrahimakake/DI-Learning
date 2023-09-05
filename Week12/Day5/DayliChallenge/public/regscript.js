//----------------Register Form-----------------//
function handeleRegisterForm(){
    const registerForm = document.getElementById('RegisterForm');
    const register = document.getElementById('register')
        
    const ids = ['firstname', 'lastname', 'email', 'username', 'password']
    const inputs = ids.map((id) => document.getElementById(id))
​
    function checkfilds(){
        inputs.forEach((inp) => {
            inp?.addEventListener('input', isChanged)
        })
        function isChanged(e){
            e.preventDefault();
            if(isEnyInputEmpty()){
                register.disabled = true;
            }else{
                register.disabled = false;
            }    
        }
        function isEnyInputEmpty(){
            return inputs.some((inp) => inp.value === "")  //true or false
        }
    }
    checkfilds();
​
    function sendData(){
       
        registerForm.addEventListener('submit',handellData)
        
        function handellData(e){
            e.preventDefault()
            var registerData = [];
            const ids = ['firstname', 'lastname', 'email', 'username', 'password']
            const inputs = ids.map((id) => document.getElementById(id))
​
            
            inputs.forEach((inp) => { registerData.push(inp.value) })
            
            const bodyData = {
                first_name : registerData[0],
                last_name : registerData[1],
                email : registerData[2],
                username : registerData[3],
                password : registerData[4]
            }
            console.log(bodyData)
            function fetchData(){
                fetch('http://localhost:7500/register', {
                method: 'POST',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify(bodyData)
                })
                .then(res =>  res.json())
                .then((data) => {
                    console.log(data)
                    document.getElementById('showRegister').textContent = ` ${data.message} `;
                })
                .catch(err => console.log(err))
            }
            fetchData();
            inputs.forEach((inp) => { inp.value =""})
        } 
    }
    sendData();
}
handeleRegisterForm();
​