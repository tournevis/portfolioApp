var count = 0;
var miaou = ["Designer Interactif", "Maker" , "Boloss" ,  " Pote " , "Creative Dev" , " Enfant ",];
console.log(miaou[0]);

function changeMe(){
    var moi = document.getElementById('mySelf');
    count++;
    var temp = miaou[count%miaou.length];
    moi.innerHTML = temp;
    console.log(temp);
}
window.onload = function() {
  console.log("yo");
  var start = document.getElementById('mySelf');
  start.classList.add("animationStart");
  setInterval(changeMe, 3000);
}
