document.getElementById("form-container").addEventListener("submit",function data(e){
    e.preventDefault();
    let fullname=document.getElementById("fullname").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let mobilenumber=document.getElementById("mobilenumber").value; 
    let errorMail=document.getElementById("errorMail")
    let errorpwd=document.getElementById("errorpwd")


    let emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailpattern.test(email)){
        errorMail.textContent="Invaild Email...."
        return;
    }
    let passwordpattern=/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}$/;
     if(!passwordpattern.test(password)){
        errorpwd.textContent="password invalid...."
        return;
    }
   
    let userData={
     fullname:fullname,
     email:email,
     password:password,
     mobilenumber:mobilenumber
    }
    console.log(userData);
    localStorage.setItem("userData",JSON.stringify(userData))
    alert("registration successfully !!!!!!!")
    window.location.href="../login2/login.html"
      
})
