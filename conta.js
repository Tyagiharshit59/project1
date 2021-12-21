
// validation of contac page

let fnameNode=document.getElementById("fname");
let lnameNode=document.getElementById("lname");
let emailNode=document.getElementById("email");
let mobileNode=document.getElementById("mobile");

let border1="2px solid red";
let border2="2px solid green";

let tdNode1=document.getElementById("error1");
let tdNode2=document.getElementById("error2");
let tdNode3=document.getElementById("error3");
let tdNode4=document.getElementById("error4");

//fname
function validate1(){
  tdNode1.textContent="";
  let fname=fnameNode.value;
  let regExp=new RegExp("^[A-Za-z]*$");
  if (fname=='') {
      tdNode1.textContent="This Field is required *";
      fnameNode.style.border=border1;
      tdNode1.style.color="red";
      return false;
  }
  else if (regExp.test(fname)==false) {
      tdNode1.textContent="Name should Have onley allpabets";
      fnameNode.style.border=border1;
      tdNode1.style.color="red";
      return false;
  }
  else{
      fnameNode.style.border=border2;
      return true;
  }
}
//lname
function validate2(){
  tdNode2.textContent="";
  let lname=lnameNode.value;
  let regExp=new RegExp("^[A-Za-z]*$");
  if (lname=="") {
      tdNode2.textContent="This field is required*";
      lnameNode.style.border=border1;
      tdNode2.style.color="red";
      return false;
  }
  else if (regExp.test(lname)==false) {
      tdNode2.textContent="Name should Have onley allpabets";
      lnameNode.style.border=border1;
      tdNode2.style.color="red";
      return false;
  }
  else{
      lnameNode.style.border=border2;
      return true;
  }
}
// email
function validate3(){
  tdNode3.textContent="";
  let email =emailNode.value;
  let ss=email.substring(email.indexOf('@')+1);
  console.log(ss);    
  if (email=="") {
      tdNode3.textContent="Pleas enter your email*";
      emailNode.style.border=border1;
      tdNode3.style.color="red";
      return false;
  }
  else if (!email.includes('@') || ss=='') {
      tdNode3.textContent="Pleas enter valid email id"
      emailNode.style.border=border1;
      tdNode3.style.color="red";
      return false;
  }
  else{
      emailNode.style.border=border2;
      return true;
  }
}
//mobile
function validate4(){
  tdNode4.textContent="";
  let mobile =mobileNode.value;
  let regExp=new RegExp("^[0-9]*$"); 
  if (mobile=="") {
      tdNode4.textContent="Pleas enter your mobile*";
      mobileNode.style.border=border1;
      tdNode4.style.color="red";
      return false;
  }
  else if (regExp.test(mobile)==false) {
      tdNode4.textContent="Pleas enter your correct mobile number";
      mobileNode.style.border=border1;
      tdNode4.style.color="red";
      return false;
  }
  else{
      mobileNode.style.border=border2;
      return true;
  }
}

function validateForm(){
  let st1=validate1(); 
  let st2=validate2();
  let st3=validate3();
  let st4=validate4();
  return st1 && st2 && st3 && st4;
}
