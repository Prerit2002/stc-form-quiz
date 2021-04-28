const forms = document.querySelector('.form')
const result = document.querySelector('.result')

forms.addEventListener("submit", function (e)  {
    result.innerText = ""
    e.preventDefault();
    const emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 
    const {Mobile , name ,Register , DOB , email} = this.elements
    console.log(email.value.length)
   if (Mobile.value.length !== 10 ) {
       console.log('Mobile Number not valid')
       const para = document.createElement('h5')
       para.innerText = 'Mobile Number not valid'
        result.appendChild(para)
   }
   if (!Register.value.match(/^[a-z0-9]+$/i)){
       console.log('Register not valid')
       const para = document.createElement('h5')
       para.innerText = 'Registration Number not valid'
        result.appendChild(para)

   }
   if (name.value.length > 30){
       console.log('name not valid')
       const para = document.createElement('h5')
       para.innerText = 'Name not valid'
        result.appendChild(para)
   }
   if (!email.value.match(emailformat)){
       console.log('email not valid')
       const para = document.createElement('h5')
       para.innerText = 'email not valid'
        result.appendChild(para)
   }

   if (result.innerText === ""){
    const student = {
        name:name.value,
        Mobile:Mobile.value,
        Register:Register.value,
        email:email.value,
        DOB:DOB.value,

    }
    console.log(student)

    const para = document.createElement('h4')
    para.innerText = 'Success, Your form has been submitted'
     result.appendChild(para)

   }


})


function submitform(){
    document.forms.submit()
    return false
}


