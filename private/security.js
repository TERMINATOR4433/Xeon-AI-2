function checkPswd() {
    var confirmPassword = "444455";
    var password = document.getElementById("pswd").value;
    if (password == confirmPassword) {
      window.close();
        window.open("loading.html","newWindow","menubar=true,location=true,resizable=false,scrollbars=false,width=600,height=400,top=150,left=360");
    }
    else{
        alert("Passwords do not match.");
    }
}