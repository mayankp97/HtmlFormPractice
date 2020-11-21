const salary=document.querySelector('#salary');
const output=document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function(){
output.textContent=salary.value;
})

//UC1 : Validate Name
const text=document.querySelector('#text');
const textError=document.querySelector('.text-error');
text.addEventListener('input', function(){
let namRegex= new RegExp(/^[A-Z][a-z]{2,}$/);
if(namRegex.test(text.value))
    textError.textContent="";
else
    textError.textContent="Name is incorrect";
});
 
//UC2 : Validate Email
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',() => textError.textContent = 
                        new RegExp('^[A-Za-z0-9]+([._+-][A-Za-z0-9]+)*[@][A-Za-z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$').test(email) ?
                        '' : 'Email is Incorrect')
                        

