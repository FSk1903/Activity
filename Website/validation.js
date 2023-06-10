function func(){
    var check = document.Myform.em.value;
    var pwd = document.Myform.pw.value;

    if(check.indexOf('@') == 0){
        document.getElementById("Message1").innerHTML="Invalid @ position";
        document.getElementById("Message1").style.color="red";
        document.getElementById("Message1").style.fontSize="small";
        document.getElementById("Message2").innerHTML="";
        return false;
    }

    if(check.includes("@")==false){
        document.getElementById("Message1").innerHTML="'@' missing";
        document.getElementById("Message1").style.color="red";
        document.getElementById("Message1").style.fontSize="small";
        document.getElementById("Message2").innerHTML="";
        return false;
    }

    if(check != "abc@gmail.com"){
        document.getElementById("Message1").innerHTML="invalid username";
        document.getElementById("Message1").style.color="red";
        document.getElementById("Message1").style.fontSize="small";
        document.getElementById("Message2").innerHTML="";
        return false;
    }
    else
    {
        document.getElementById("Message1").innerHTML="";
    }

    if(pwd.length == 0){
        document.getElementById("Message2").innerHTML="password field blank";
        document.getElementById("Message2").style.color="red";
        document.getElementById("Message2").style.fontSize="small";
        return false;
    }

    if(pwd.length < 8){
        document.getElementById("Message2").innerHTML="Password must be of atleast 8 characters";
        document.getElementById("Message2").style.color="red";
        document.getElementById("Message2").style.fontSize="small";
        return false;
    }

    else{
        document.getElementById("Message2").innerHTML="Login Successful";
        document.getElementById("Message1").innerHTML="";
        document.getElementById("Message2").style.color="blue";
        document.getElementById("Message2").style.fontSize="small";
        return false;
    }
}