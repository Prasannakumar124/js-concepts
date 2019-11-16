// function radio(){
// var rd1=document.getElementById('rd1');
// var rd2=document.getElementById('rd2');
// if(rd1.checked==true)
// alert(" selected radio button:"+rd1.value);
// else if(rd2.checked==true)
// alert(" selected radio button:"+rd2.value);
// else
// alert("No channel was selected")
// }
// function select(){
//     var selected=document.getElementById('boxselected')
//     alert(selected.options[selected.selectedIndex].value);
// }

function validation(){
    var uname=document.getElementById('uname');
 var  pname= document.getElementById('pwd');
 if(uname.value.trim()==""){
     uname.style.border="solid 4px red";
     document.getElementById("ulabel").style.visibility="visible";
     return false;
 }else if(pname.value.trim()==""){
    //  alert("Password cannot be Empty!");
    pname.style.border="solid 1px red";
    document.getElementById("plabel").style.visibility="visible";
    return false; 
 }
 else if(pname.value.lenght<5){
    alert("pwd atleast 5 char");
    return false;
 }
 else{
     return true;
 }
}

