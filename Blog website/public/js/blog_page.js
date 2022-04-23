/*jshint esversion: 6 */
var checks = 0;
function onChange(){
  if (document.getElementById("check1").checked ==true){
    document.querySelector(".btn1").style.backgroundColor='#B56BFF';
    document.querySelector(".btn1").style.color='white';
  }
  else{
    document.querySelector(".btn1").style.backgroundColor='white';
    document.querySelector(".btn1").style.color='black';
  }
  if (document.getElementById("check2").checked ==true){
    document.querySelector(".btn2").style.backgroundColor='#B56BFF';
    document.querySelector(".btn2").style.color='white';
  }
  else{
    document.querySelector(".btn2").style.backgroundColor='white';
    document.querySelector(".btn2").style.color='black';
  }
  if (document.getElementById("check3").checked ==true){
    document.querySelector(".btn3").style.backgroundColor='#B56BFF';
    document.querySelector(".btn3").style.color='white';
  }
  else{
    document.querySelector(".btn3").style.backgroundColor='white';
    document.querySelector(".btn3").style.color='black';
  }if (document.getElementById("check4").checked ==true){
    document.querySelector(".btn4").style.backgroundColor='#B56BFF';
    document.querySelector(".btn4").style.color='white';
  }
  else{
    document.querySelector(".btn4").style.backgroundColor='white';
    document.querySelector(".btn4").style.color='black';
  }if (document.getElementById("check5").checked ==true){
    document.querySelector(".btn5").style.backgroundColor='#B56BFF';
    document.querySelector(".btn5").style.color='white';
  }
  else{
    document.querySelector(".btn5").style.backgroundColor='white';
    document.querySelector(".btn5").style.color='black';
  }if (document.getElementById("check6").checked ==true){
    document.querySelector(".btn6").style.backgroundColor='#B56BFF';
    document.querySelector(".btn6").style.color='white';
  }
  else{
    document.querySelector(".btn6").style.backgroundColor='white';
    document.querySelector(".btn6").style.color='black';
  }if (document.getElementById("check7").checked ==true){
    document.querySelector(".btn7").style.backgroundColor='#B56BFF';
    document.querySelector(".btn7").style.color='white';
  }
  else{
    document.querySelector(".btn7").style.backgroundColor='white';
    document.querySelector(".btn7").style.color='black';
  }if (document.getElementById("check8").checked ==true){
    document.querySelector(".btn8").style.backgroundColor='#B56BFF';
    document.querySelector(".btn8").style.color='white';
  }
  else{
    document.querySelector(".btn8").style.backgroundColor='white';
    document.querySelector(".btn8").style.color='black';
  }if (document.getElementById("check9").checked ==true){
    document.querySelector(".btn9").style.backgroundColor='#B56BFF';
    document.querySelector(".btn9").style.color='white';
  }
  else{
    document.querySelector(".btn9").style.backgroundColor='white';
    document.querySelector(".btn9").style.color='black';
  }if (document.getElementById("check10").checked ==true){
    document.querySelector(".btn10").style.backgroundColor='#B56BFF';
    document.querySelector(".btn10").style.color='white';
  }
  else{
    document.querySelector(".btn10").style.backgroundColor='white';
    document.querySelector(".btn10").style.color='black';
  }
}


function next(){
  checks = $("input:checkbox:checked").length;
  if($('input:checkbox:checked').length<3){
    alert("Pick atleast 3");
  }
}
