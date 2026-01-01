const characters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
pass1=document.getElementsById("pass1");
pass2=document.getElementsById("pass2");
function generatepassword(){
    let password1="";
    let password2="";
    for(let i=0;i<15;i++){
        let randomindex1=Math.floor(Math.random()*characters.length);
        let randomindex2=Math.floor(Math.random()*characters.length);
        password1+=characters.charAt(randomindex1);
        password2+=characters.charAt(randomindex2);
    }
    pass1.textContent=password1;
    pass2.textContent=password2;
}