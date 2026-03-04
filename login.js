document.getElementById("form-container").addEventListener("submit",function data(e){
    e.preventDefault();
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let storeData=JSON.parse(localStorage.getItem("userData"))
    console.log(storeData);
    console.log(email);
    console.log(password);
    
    if(storeData.email===email && storeData.password===password){
      alert("login successfully !!!!!!!")
      window.location.href="../ECOMMERECE2/home.html"
    }else{
        alert("Enter a valid credential!!!!")
    }
    
      
})
