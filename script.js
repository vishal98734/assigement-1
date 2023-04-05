
let submit = document.getElementById("btnsubmit");

function validate(){
    let Password = document.getElementById("txtpassword").value;
let confirmPassword = document.getElementById("txtconfirmpassword").value;
    if ( Password != confirmPassword) {
        alert ("Password do not match");
        return false;
    }
    else{
        alert("Password matched")
    }
}
//btnsubmit.addEventlistener("click")
btnsubmit.addEventlistener("click");