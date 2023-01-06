var uname=window.document.getElementById("name");
var email=window.document.getElementById("mail");
var pass=window.document.getElementById("pass");

var addbtn=window.document.getElementById("btn");

var arr=[];



addbtn.onclick=function (e){

    e.preventDefault();
    adduser();
    printarr();
}

function adduser(){


   var usern={
    nameu:uname.value,
    email:email.value,
    password:pass.value
   }

   //console.log(usern);
   arr.push(usern);

   Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'ADDed succesful',
    showConfirmButton: false,
    timer: 1500
  })
   
   //console.log(usern.email);
  //console.log(usern.password);
}

function printarr(){
    console.log(arr);
}