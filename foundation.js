let email = document.getElementById("exampleInputEmail1");
let error = document.getElementById("error");
let phoneno = document.getElementById("ph");
let email1 = document.getElementById("")

 function validate()
 {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
   if(regexp.test(email.value))
    { 
        error.innerHTML = "We'll never share your email with anyone else.";
        error.style.color = "black";
        return true;
    }
    else{
        error.innerHTML = "Please enter a valid email ";
        error.style.color = "red";
        return false;
    }

 }




 function phonenumber()
{
  var phoneno1 = /^\d{10}$/;
  var phoneno2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(phoneno1.test(phoneno.value)||phoneno2.test(phoneno.value))
        {
         alert("Valid phone number");
         return true;
         window.location.href = "index.html";
        }
      else
        {
        alert("Invalid phone number");
        return false;
        document.getElementById("ph").focus();
        }
}

function checkId(){

document.getElementById("ph").focus();
}





function validate1()
 {
    var regexp1 = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
   if(regexp1.test(email1.value))
    { 
        return true;
    }
    else{
        alert();
        return false;
    }

 }



