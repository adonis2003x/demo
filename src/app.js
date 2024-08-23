var btn_login = document.getElementById("btn_login");

btn_login.addEventListener('click',function(){
    event.preventDefault();
    let uid = document.getElementById("uid");
    let pwd = document.getElementById("pwd");

    if(uid.value == "admin" && pwd.value == '123456'){
        window.location.href = "./register.html"
    }
    else{
        let alert_mes
        if(uid.value=='')
            alert_mes  = "Không được bỏ trống tài khoản";
        else if(pwd.value=='')
            alert_mes = "Không được bỏ trống mật khẩu";
        else
            alert_mes = "Tài khoản hoặc mật khẩu không đúng";
        
            alert(alert_mes);
    }
})