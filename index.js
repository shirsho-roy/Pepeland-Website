function mydark()
{
  document.body.classList.toggle("lightmode");
  document.footer.classList.toggle("flightmode")
}
function icon()
{  var img1 = "icons8-do-not-disturb-ios-24.png",
img2 = "icons8-sun-50.png";
var imgElement = document.getElementById('iconchng');

imgElement.src = (imgElement.src === img1)? img2 : img1;
}