window.onload = function() {
  console.log("yo");
  var p = document.getElementById("Email");

    p.onclick = showEmail;

    function showEmail(e){
      window.location.href = "mailto:arth.rob.contact@gmail.com";
    }
}
